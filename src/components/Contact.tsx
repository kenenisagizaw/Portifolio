import React, { FormEvent, useRef, useState } from "react";

type FormspreeResponse = {
  errors?: Array<{ message?: string }>;
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [submissionError, setSubmissionError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;

    if (!form) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionMessage("");
    setSubmissionError("");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });
      const result: FormspreeResponse = await response
        .json()
        .catch(() => ({}));

      if (!response.ok) {
        const formspreeError = result.errors
          ?.map((error) => error.message)
          .filter(Boolean)
          .join(" ");

        throw new Error(
          formspreeError || "Unable to send your message. Please try again.",
        );
      }

      form.reset();
      setSubmissionMessage(
        "Thanks for your message. I will get back to you soon.",
      );
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 h-full w-full">
      <form
        ref={formRef}
        action="https://formspree.io/f/mvkkzngz"
        method="POST"
        className="flex flex-col gap-6"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          name="_subject"
          value="New message from your portfolio"
        />
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Your message"
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div aria-live="polite" aria-atomic="true">
          {submissionMessage && (
            <p className="text-center text-sm text-green-600 dark:text-green-400">
              {submissionMessage}
            </p>
          )}
          {submissionError && (
            <p role="alert" className="text-center text-sm text-red-600 dark:text-red-400">
              {submissionError}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-200 w-fit self-center"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
