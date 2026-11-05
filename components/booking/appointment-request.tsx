"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check, Copy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactEmail } from "@/lib/site";

const inputClass =
  "mt-2 min-h-12 w-full rounded-xl border border-dark-sage/35 bg-surface px-4 py-3 text-text outline-none transition focus:border-dark-sage focus:ring-2 focus:ring-dark-sage/25";
const appointmentTypes = [
  "First conversation",
  "Existing client appointment",
  "Practical question",
];

type RequestDetails = {
  name: string;
  email: string;
  type: string;
  availability: string;
};

export function AppointmentRequest() {
  const [details, setDetails] = useState<RequestDetails>({
    name: "",
    email: "",
    type: appointmentTypes[0],
    availability: "",
  });
  const [review, setReview] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const reviewHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (review) reviewHeading.current?.focus();
  }, [review]);

  const message = [
    "Hello Claire,",
    "",
    `I would like to ask about: ${details.type}.`,
    "",
    `Name: ${details.name.trim()}`,
    `Reply email: ${details.email.trim()}`,
    `Preferred days or times: ${details.availability.trim() || "Flexible — please let me know what is available."}`,
    "",
    "Please let me know the available times, session length, fee and cancellation terms before we confirm anything.",
    "",
    "Thank you,",
    details.name.trim(),
  ].join("\n");
  const emailHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Appointment enquiry — Sage House Therapy")}&body=${encodeURIComponent(message)}`;

  function handleReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCopied(false);
    setCopyError(false);
    setReview(true);
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }

  return (
    <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[0_20px_70px_rgba(67,67,67,0.06)] sm:p-10 lg:col-start-2 lg:row-start-1">
      <ol
        aria-label="Enquiry progress"
        className="mb-8 flex gap-6 border-b border-border pb-6 text-sm"
      >
        <li
          aria-current={!review ? "step" : undefined}
          className={!review ? "font-semibold text-text" : "text-text/65"}
        >
          01 · Your enquiry
        </li>
        <li
          aria-current={review ? "step" : undefined}
          className={review ? "font-semibold text-text" : "text-text/65"}
        >
          02 · Review & email
        </li>
      </ol>
      {review ? (
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-dark-sage">
            Ready to review
          </p>
          <h2
            ref={reviewHeading}
            tabIndex={-1}
            className="mt-3 text-4xl outline-none"
          >
            Your message to Claire.
          </h2>
          <p className="mt-4 leading-7 text-text/75">
            Nothing has been sent yet. Open your email app, check your message
            and press send there.
          </p>
          <div className="mt-6 rounded-2xl border border-border bg-background/50 p-5">
            <p className="mb-4 text-sm font-medium break-all">
              To: {contactEmail}
            </p>
            <p className="whitespace-pre-wrap break-words text-sm leading-7">
              {message}
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={emailHref}>
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              Open email to Claire
            </Button>
            <Button variant="secondary" onClick={copyMessage}>
              {copied ? (
                <Check className="mr-2 h-4 w-4" aria-hidden="true" />
              ) : (
                <Copy className="mr-2 h-4 w-4" aria-hidden="true" />
              )}
              {copied ? "Message copied" : "Copy message"}
            </Button>
          </div>
          <p role="status" className="mt-3 text-sm leading-6 text-text/75">
            {copied
              ? "Copied. Paste it into an email to Claire and send when you are ready."
              : copyError
                ? "Copy is unavailable. You can select the message above and copy it manually."
                : "If your email app does not open, copy the message into your usual email service."}
          </p>
          <Button
            variant="secondary"
            className="mt-7"
            onClick={() => setReview(false)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            Edit enquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleReview} className="space-y-6">
          <div>
            <h2 className="text-4xl">Start with a simple enquiry.</h2>
            <p className="mt-3 leading-7 text-text/75">
              Share a few practical details. You do not need to explain your
              experiences or choose a therapy approach here.
            </p>
          </div>
          <fieldset>
            <legend className="mb-3 font-medium">How can Claire help?</legend>
            <div className="grid gap-3">
              {appointmentTypes.map((type) => (
                <label
                  key={type}
                  className="flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border border-border px-4 py-3 has-checked:border-dark-sage has-checked:bg-sage/25"
                >
                  <input
                    type="radio"
                    name="appointment-type"
                    value={type}
                    checked={details.type === type}
                    onChange={() => setDetails({ ...details, type })}
                    className="h-4 w-4 accent-dark-sage"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label className="block font-medium" htmlFor="enquiry-name">
            Your name
            <input
              id="enquiry-name"
              name="name"
              autoComplete="given-name"
              required
              maxLength={80}
              pattern=".*\S.*"
              value={details.name}
              onChange={(event) =>
                setDetails({ ...details, name: event.target.value })
              }
              className={inputClass}
            />
          </label>
          <label className="block font-medium" htmlFor="enquiry-email">
            Email address
            <input
              id="enquiry-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              value={details.email}
              onChange={(event) =>
                setDetails({ ...details, email: event.target.value })
              }
              className={inputClass}
            />
            <span className="mt-2 block text-sm font-normal text-text/70">
              The address you would like Claire to reply to.
            </span>
          </label>
          <label className="block font-medium" htmlFor="enquiry-availability">
            Preferred days or times{" "}
            <span className="font-normal text-text/65">(optional)</span>
            <input
              id="enquiry-availability"
              name="availability"
              maxLength={180}
              placeholder="For example, Tuesday afternoons"
              value={details.availability}
              onChange={(event) =>
                setDetails({ ...details, availability: event.target.value })
              }
              className={inputClass}
            />
            <span className="mt-2 block text-sm font-normal text-text/70">
              A preference only. Claire will confirm what is available.
            </span>
          </label>
          <div className="rounded-xl bg-sage/20 p-4 text-sm leading-6 text-text/80">
            Please keep this enquiry to practical arrangements. Leave out
            medical history, payment details and anything you would prefer to
            discuss privately with Claire.
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Review my enquiry
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
          <p className="text-sm leading-6 text-text/65">
            Your entries stay in this page until you choose to open your email
            app or copy them. This form does not save your details or reserve an
            appointment.
          </p>
        </form>
      )}
    </div>
  );
}
