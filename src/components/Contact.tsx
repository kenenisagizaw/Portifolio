import React, { FormEvent, useRef, useState } from "react";

type FormspreeResponse = {
  errors?: Array<{ message?: string }>;
};

const inputStyles =
  "w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 dark:border-slate-700 dark:bg-[#0b1120] dark:text-white dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-200";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [submissionError, setSubmissionError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setIsSubmitting(true);
    setSubmissionMessage("");
    setSubmissionError("");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const result: FormspreeResponse = await response.json().catch(() => ({}));

      if (!response.ok) {
        const formspreeError = result.errors
          ?.map((error) => error.message)
          .filter(Boolean)
          .join(" ");
        throw new Error(formspreeError || "Unable to send your message.");
      }

      form.reset();
      setSubmissionMessage("Thanks for your message. I will get back to you soon.");
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : "Unable to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 dark:from-[#1e293b] dark:to-[#0f172a] border border-slate-200 dark:border-slate-700/60 rounded-2xl shadow-xl p-6 md:p-8 h-full w-full text-slate-900 dark:text-white">
      <form
        ref={formRef}
        action="https://formspree.io/f/mvkkzngz"
        method="POST"
        className="flex flex-col gap-5"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_subject" value="New message from your portfolio" />

        <div>
          <label htmlFor="name" className="block mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your Name" className={inputStyles} />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="you@email.com" className={inputStyles} />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Message
          </label>
          <textarea id="message" name="message" rows={4} required placeholder="Your message" className={inputStyles} />
        </div>

        <div aria-live="polite" aria-atomic="true">
          {submissionMessage && (
            <p className="text-sm text-emerald-400 bg-emerald-400/10 p-3 rounded-lg border border-emerald-400/20">
              {submissionMessage}
            </p>
          )}
          {submissionError && (
            <p role="alert" className="text-sm text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
              {submissionError}
            </p>
          )}
        </div>

        {/* Button aligned to the right */}
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-indigo-600/30 transition duration-200"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;