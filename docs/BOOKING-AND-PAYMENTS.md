# Sage House Therapy: booking and payment setup

The website follows the same request → confirm → pay-by-link approach proposed for Colin Canines. It does not advertise a live calendar or automatically accept appointments.

## What is ready

- `/book`: accessible enquiry builder. Visitors choose an enquiry type, enter name and reply email, optionally add availability, review the message, then open their own email app or copy it. Nothing is sent by the website. No personal details are stored in a website database or local storage.
- `/payments`: payment information and email fallback. A SumUp checkout button appears only when a valid owner-configured link is supplied.
- `/privacy`: an accurate description of this website's enquiry and payment data flow; this is not a clinical-record privacy policy.
- Primary calls to action lead to the enquiry builder. Existing clients have a separate payment route.
- Public maintenance mode remains enabled in `proxy.ts`. Do not remove it until the owner asks to reopen.

## Claire needs to supply

1. Confirm that `claire@sagehousetherapy.uk` receives email. Send a real end-to-end enquiry only with permission, using agreed test details.
2. Initial-conversation arrangements, session length, fees, available formats and cancellation/refund terms. No prices or appointment slots have been invented.
3. Create her own SumUp business account and complete SumUp's verification and bank setup directly. Do not collect her bank details, identity documents or passwords in chat or repository files.
4. Create a payment link for an agreed service/fee. Use a reusable link only if the same checkout can be safely offered to all relevant confirmed clients. Otherwise send individual payment links directly after confirmation and leave the website's general checkout disabled.

## Connect the checkout

Set `SAGE_PAYMENT_LINK` in the existing Vercel project `sagehousetherapy` (production and any intended preview environment), then redeploy. Use only Claire's verified link, never Colin's account or an unrelated merchant. Supported exact hostnames: `pay.sumup.com`, `checkout.sumup.com`, `sumup.me`. HTTPS and a non-empty path are required. If SumUp supplies a different official hostname, verify it before updating `lib/payments.ts`.

The variable is not a secret: it becomes the public checkout link on `/payments`. Never use a private dashboard URL, access token or API key here. Do not accept a checkout URL or amount from visitor query parameters. A missing/invalid setting keeps the email fallback visible. There is no success callback that can mark a session paid merely because someone follows a URL.

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
