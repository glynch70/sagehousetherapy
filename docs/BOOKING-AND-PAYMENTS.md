# Sage House Therapy: booking and payment setup

The website follows the same request → confirm → pay-by-link approach proposed for Colin Canines. It does not advertise a live calendar or automatically accept appointments.

## What is ready

- `/book`: visitors enter practical details, review, and send directly through `POST /api/enquiry`. The server uses `RESEND_API_KEY` to send from `website@enquiries.sagehousetherapy.uk` to `claire@sagehousetherapy.uk`, with the visitor as Reply-To. Email-app and clipboard alternatives remain available. No enquiries are saved in a website database or local storage; Resend processes message contents and delivery records.
- `/payments`: payment information and email fallback. A SumUp checkout button appears only when a valid owner-configured link is supplied.
- `/privacy`: an accurate description of this website's enquiry and payment data flow; this is not a clinical-record privacy policy.
- Primary calls to action lead to the enquiry builder. Existing clients have a separate payment route.
- Maintenance mode was removed with owner authorisation on 9 November 2026.

## Direct enquiry delivery — 9 November 2026

- Claire's sending domain is verified; the owner has saved the sending-only API key as a Production secret in Vercel. Never put this key in source or a NEXT_PUBLIC variable.
- Validate fields and allowed options server-side; reject cross-origin submissions, oversized bodies, the honeypot field and implausible timing.
- Best-effort burst limiting is per warm server instance (five attempts per 15 minutes), not a durable or distributed quota. If abuse appears, add managed rate limiting or a verified challenge.
- Submission IDs and Resend idempotency prevent duplicate sends on retry. The UI preserves entries on failure and shows success only after Resend accepts a message.
- No automatic appointment confirmation or payment is created. No auto-reply is sent to visitor-supplied email addresses.
- Use only agreed non-clinical test details for delivery testing. Check Claire's inbox/spam folder and the Resend delivery event; API acceptance alone is not proof of inbox arrival.

## Claire needs to supply

1. Confirm that `claire@sagehousetherapy.uk` receives email. Send a real end-to-end enquiry only with permission, using agreed test details.
2. Confirm the duration in minutes of a “therapeutic hour”, the precise Friday schedule and the fee/eligibility for any 30-minute therapeutic appointments.
3. Create her own SumUp business account and complete SumUp's verification and bank setup directly. Do not collect her bank details, identity documents or passwords in chat or repository files.
4. Create a payment link for an agreed service/fee. Use a reusable link only if the same checkout can be safely offered to all relevant confirmed clients. Otherwise send individual payment links directly after confirmation and leave the website's general checkout disabled.

## Connect the checkout

Set `SAGE_PAYMENT_LINK_HOUR` for the £65 therapeutic-hour checkout and `SAGE_PAYMENT_LINK_90_MINUTES` for the £85 90-minute checkout in the existing Vercel project `sagehousetherapy` (production and any intended preview environment), then redeploy. Each link is validated independently. Do not set one price’s checkout link for the other service. The former generic `SAGE_PAYMENT_LINK` setting is no longer used. Use only Claire's verified link, never Colin's account or an unrelated merchant. Supported exact hostnames: `pay.sumup.com`, `checkout.sumup.com`, `sumup.me`. HTTPS and a non-empty path are required. If SumUp supplies a different official hostname, verify it before updating `lib/payments.ts`.

These variables are not secrets: they become the public checkout links on `/payments`. Never use a private dashboard URL, access token or API key here. Do not accept a checkout URL or amount from visitor query parameters. A missing/invalid setting keeps the email fallback visible. There is no success callback that can mark a session paid merely because someone follows a URL.

## Owner workflow

1. Receive an email enquiry.
2. Confirm a suitable time, session length, fee and cancellation terms directly with the client.
3. Send the correct payment link and a non-clinical reference if needed. Keep clinical details out of payment descriptions.
4. Check payment in SumUp before recording it as paid. The website does not reconcile payments or send confirmations/reminders.
5. Handle rescheduling, cancellations and refunds directly in line with the agreed terms.

## Before reopening

Review the final contact address, fees, cancellation wording and website privacy information with Claire. Confirm the merchant identity, amount, reference handling, receipts and payment notifications in an agreed test. There are no automated email reminders, diary holds or payment webhooks in this first version.

If Claire later wants instant self-booking, use a scheduling service with her real calendar and approved availability. That is a separate integration from this manual-confirmation flow.

Official SumUp instructions: https://help.sumup.com/en-GB/articles/2rTTr92lUebQ3nY9jAAy5m-send-payment-links

## Confirmed by Claire, 5 November 2026

- Free 15-minute consultation.
- £65 per therapeutic hour; £85 for a 90-minute therapeutic session. Do not assume the therapeutic hour is 60 minutes until confirmed.
- Virtual or in person at The Wellness Barn.
- Tuesday–Thursday from 8:30am, finishing by 7pm. Garry clarified that the last 6:30pm start is for a 30-minute appointment. Do not offer that start for longer sessions. No separate 30-minute price has been supplied.
- Friday morning appointments: exact starts remain unclear in Claire's message, so no exact Friday slots are published.
- Paid therapy sessions must be paid before the session to hold the appointment. The consultation remains free.
- Refund when the client cancels with at least 48 hours’ notice; refund if Claire cancels. No shorter-notice/no-show policy has been invented.
- The availability route is an enquiry, not a live calendar.

