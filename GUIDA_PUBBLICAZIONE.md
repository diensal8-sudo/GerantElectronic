# Geran Electronic: avvio e pubblicazione

## Avvio sul computer

Installa Node.js, apri il terminale nella cartella del progetto e lancia:

```bash
npm install
npm run dev
```

Apri l'indirizzo locale mostrato nel terminale.

## Creazione della versione online

```bash
npm run build
```

Il sito pronto per l'hosting viene creato nella cartella `dist`.

### GitHub Pages

Il workflow in `.github/workflows/deploy.yml` compila e pubblica il sito automaticamente a ogni push:

1. Carica il progetto su GitHub includendo il workflow.
2. Nel repository apri **Settings > Pages** e seleziona **GitHub Actions** come sorgente di pubblicazione.
3. Attendi il completamento del workflow **Deploy to GitHub Pages** nella scheda **Actions**; l'indirizzo del sito comparirà nel job di deploy.

La build usa percorsi relativi, così funziona anche quando il repository viene pubblicato in un sottopercorso GitHub Pages.

### Configurazione del Dominio Personalizzato: `gerantelectronic.com`

Il file `CNAME` con `gerantelectronic.com` è già incluso nella cartella `public/` (e viene copiato automaticamente in `dist/` alla build).

Nel pannello di gestione DNS del tuo registrar (es. GoDaddy, Namecheap, Aruba, Google Domains/Squarespace, Cloudflare):

#### Opzione A: Pubblicazione su GitHub Pages
- **Record A** per `@` (dominio radice `gerantelectronic.com`):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- **Record CNAME** per `www`:
  - `tuo-username.github.io`
- In GitHub, vai su **Settings > Pages > Custom domain**, inserisci `gerantelectronic.com` e spunta **Enforce HTTPS**.

#### Opzione B: Pubblicazione su Netlify
- In Netlify, vai su **Site settings > Domain management > Add custom domain** e aggiungi `gerantelectronic.com`.
- Nel DNS del provider:
  - **Record A** per `@`: `75.2.60.5`
  - **Record CNAME** per `www`: `il-tuo-sito.netlify.app`

#### Opzione C: Pubblicazione su Vercel
- In Vercel, vai su **Project Settings > Domains** e aggiungi `gerantelectronic.com`.
- Nel DNS del provider:
  - **Record A** per `@`: `76.76.21.21`
  - **Record CNAME** per `www`: `cname.vercel-dns.com`

## Registrazione e accesso utenti

L'app include registrazione e accesso con email e password tramite Supabase Auth. Per attivarli:

1. Crea un progetto Supabase e abilita il provider **Email** in Authentication.
2. Copia `.env.example` in `.env.local` e inserisci l'URL del progetto e la chiave pubblica anon/publishable. Non inserire mai una chiave `service_role` nel browser.
3. In Supabase Authentication, configura gli URL locali e il dominio pubblicato tra gli URL consentiti. Imposta il dominio pubblicato come URL principale per i link di conferma email.
4. Per lo sviluppo riavvia `npm run dev` dopo aver aggiunto le variabili. Per Netlify o Vercel aggiungi le stesse due variabili nelle impostazioni ambiente della piattaforma e avvia una nuova build.
5. Prova registrazione, conferma via email, accesso e uscita.

Senza le variabili Supabase, il modulo mostra che gli account non sono configurati e non simula accessi. Supabase gestisce password e sessioni. Al momento account, catalogo, carrello e ordini non sono sincronizzati tra dispositivi.

### Netlify

Collega il progetto a Netlify tramite Git. Usa queste impostazioni:

- Comando di build: `npm run build`
- Cartella di pubblicazione: `dist`

La configurazione è già presente in `netlify.toml`.

### Vercel

Importa il progetto in Vercel e imposta `npm run build` come comando di build e `dist` come cartella di output. La configurazione delle rotte è nel file `vercel.json`.

## Catalogo

Il catalogo di esempio include droni, hard disk e storage, componenti PC, chip e microcontrollori, accessori per telefoni, power bank, audio e componenti per prototipazione elettronica. Modifica i prodotti iniziali in `src/data/products.js`.

Il pulsante **Aggiungi prodotto** accetta link pubblici alle immagini e a un video MP4, oltre a descrizione, prezzo e specifiche. Le nuove schede vengono salvate nel `localStorage` del browser: **non** vengono caricate sul server e non sono visibili agli altri visitatori. Per pubblicare prodotti e media condivisi tra utenti serve collegare un database e un servizio di archiviazione online.

Prima di mettere il sito online, sostituisci i prodotti e i media dimostrativi con foto, video, descrizioni, prezzi e disponibilità reali.

## Limiti da completare prima di vendere

- Il carrello è solo un riepilogo indicativo. Invio ordini, pagamento, spedizioni e gestione scorte non sono attivi.
- Non inserire dati personali o di pagamento: non c'è un servizio che riceva gli ordini.
- Aggiungi i contatti aziendali e le informazioni legali corrette prima della pubblicazione.
