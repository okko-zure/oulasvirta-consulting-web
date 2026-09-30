# Contact form delivery

The Finnish, English and Spanish contact forms use FormSubmit's documented native HTML POST flow. The fixed action is `https://formsubmit.co/katja@oulasvirta.com`. The provider receives the name, email, company, selected topic and message. The `email` field is used for Reply-To. There is no old WordPress dependency and no SMTP password in the source.

## Why the previous relay was removed

On 28 September 2026, the production logs showed three successive `/api/contact` requests rejected by FormSubmit with HTTP 429. The old Worker used the AJAX endpoint with reCAPTCHA disabled. FormSubmit's official documentation recommends keeping reCAPTCHA enabled to avoid anti-spam limitations. The native flow lets the provider display its verification step. It does not retry, forge client IPs or bypass the provider's limits.

The form no longer sends through the Worker or the AJAX endpoint, and `_captcha=false` is absent. reCAPTCHA remains enabled by default. A supported `_honey` field adds honeypot protection. The Content Security Policy explicitly permits form submissions to `https://formsubmit.co`. Cached copies of the obsolete `/api/contact` endpoint receive 410 and must be reloaded.

## User flow

1. The visitor completes the form on the Site and clicks Send.
2. The browser submits directly to FormSubmit; the visitor completes any verification the provider displays.
3. FormSubmit returns to the same language page after accepting the submission. The page acknowledges the enquiry, without claiming independently verified inbox delivery.

In the embedded Site review, the verification opens in a separate tab so it is not blocked by iframe restrictions. In a standalone browser page, it opens in the same tab. Without JavaScript, the form still works and opens a new tab. The optional email-app link is only an alternative; it is never used by the main Send button.

## Owner activation and verification

FormSubmit requires mailbox-owner activation. After the first accepted form submission, check `katja@oulasvirta.com` for an activation email and activate the form, including checking junk mail. This action cannot be completed through source-code changes. After activation, submit one clearly labelled test and confirm its receipt and Reply-To address in that inbox.

All languages use the same root `_url` for form identity, and `_next` returns to the language the visitor used. A future change of domain may require reactivation. The provider documents 30-day submission retention; FormSubmit is identified in the form privacy text.

Local checks verify the generated HTML forms, fixed recipient, payload fields, language-specific return URLs, CSP, native browser submission behaviour and the retired relay. They do not send email or establish mailbox delivery. No success claim should be made until the owner confirms receipt.

Official documentation:
- https://formsubmit.co/documentation
- https://formsubmit.co/help
