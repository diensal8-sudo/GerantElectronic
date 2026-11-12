import React, { useState } from 'react';
import { isSupabaseConfigured, supabase } from '../lib/supabase';
import { X } from './Icons';

export default function AuthModal({ isOpen, onClose }) {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleModeChange = (nextMode) => {
    setMode(nextMode);
    setMessage('');
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setError('');

    if (!supabase) {
      setError('Accesso non configurato. Segui la guida per collegare Supabase.');
      return;
    }

    setIsSubmitting(true);
    try {
      if (mode === 'register') {
        const { data, error: authError } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: { full_name: fullName.trim() }
          }
        });

        if (authError) throw authError;

        if (data.session) {
          onClose();
        } else {
          setMessage('Registrazione completata. Controlla la tua email per confermare l’account.');
        }
      } else {
        const { error: authError } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password
        });

        if (authError) throw authError;
        onClose();
      }
    } catch (authError) {
      console.error('Errore autenticazione Supabase:', authError);
      setError(
        authError instanceof Error
          ? authError.message
          : 'Non è stato possibile completare l’accesso. Riprova.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
        className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl sm:p-8"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">Area personale</p>
            <h2 id="auth-title" className="mt-1 text-2xl font-extrabold text-white">
              {mode === 'login' ? 'Accedi' : 'Crea un account'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Chiudi"
            className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {!isSupabaseConfigured && (
          <p className="mb-5 rounded-xl border border-amber-500/30 bg-amber-950/30 p-3 text-sm leading-relaxed text-amber-100">
            Il servizio account non è ancora configurato. Aggiungi URL e chiave pubblica Supabase nelle variabili d’ambiente per attivare registrazione e accesso.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label htmlFor="auth-name" className="mb-1 block text-xs font-semibold text-slate-300">
                Nome
              </label>
              <input
                id="auth-name"
                type="text"
                autoComplete="name"
                maxLength={100}
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-3 text-sm text-white outline-none focus:border-cyan-500"
              />
            </div>
          )}

          <div>
            <label htmlFor="auth-email" className="mb-1 block text-xs font-semibold text-slate-300">
              Email
            </label>
            <input
              id="auth-email"
              type="email"
              autoComplete="email"
              maxLength={254}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-3 text-sm text-white outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="auth-password" className="mb-1 block text-xs font-semibold text-slate-300">
              Password {mode === 'register' && '(almeno 8 caratteri)'}
            </label>
            <input
              id="auth-password"
              type="password"
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              minLength={8}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-3 text-sm text-white outline-none focus:border-cyan-500"
            />
          </div>

          {error && (
            <p role="alert" className="rounded-xl border border-rose-500/30 bg-rose-950/30 p-3 text-sm text-rose-200">
              {error}
            </p>
          )}
          {message && (
            <p role="status" className="rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-3 text-sm text-emerald-200">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={!isSupabaseConfigured || isSubmitting}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-extrabold text-slate-950 transition hover:from-cyan-400 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? 'Attendi…' : mode === 'login' ? 'Accedi' : 'Registrati'}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-400">
          {mode === 'login' ? 'Non hai un account?' : 'Hai già un account?'}{' '}
          <button
            type="button"
            onClick={() => handleModeChange(mode === 'login' ? 'register' : 'login')}
            className="font-bold text-cyan-400 hover:text-cyan-300"
          >
            {mode === 'login' ? 'Registrati' : 'Accedi'}
          </button>
        </p>
      </section>
    </div>
  );
}
