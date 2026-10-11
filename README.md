# Maheshwari Polyclinic: redesign sample

Homepage redesign for Dr. Munesh Maheshwari's clinic (Concept A: forest green, warm ivory, restrained gold).
Built for Stively as a free sample. Not the production website.

## Run

```bash
npm install
npm run dev -- -p 3010   # http://localhost:3010
```

## Where things are

- `src/content/clinic.ts`: all copy, contact details, hours, services, reviews. Lines marked `CONFIRM` need the doctor's approval.
- `src/components/`: one file per homepage section (`hero`, `sections-a` for highlights/services/about/credentials/technology, `stories`, `reviews`, `booking`, `contact-footer`).
- `src/app/globals.css`: colour and type tokens.
- `public/images/dr-munesh.png`: placeholder portrait taken from the design artifact. Replace with the clinic's approved high-resolution photograph.

## Still needed before this can go live

- Approved photographs: doctor portrait, conference photo, authorised patient photos (story cards show placeholders).
- Confirm: emergency/24-hour claim, "award-winning", digital-record security claim, consultation fee.
- The booking form has no backend; it validates and offers a prefilled WhatsApp message.
