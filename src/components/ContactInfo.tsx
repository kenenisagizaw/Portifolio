import React from "react";

const ContactInfo = () => (
  <div className="flex flex-col gap-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md border border-gray-200 dark:border-gray-700">
    {[
      {
        icon: "📞",
        label: "Phone",
        value: "+251 922126985",
      },
      {
        icon: "✉️",
        label: "Email",
        value: "kenenisagizaw.28@gmail.com",
      },
      {
        icon: "📍",
        label: "Location",
        value: "Addis Ababa, Ethiopia",
      },
    ].map(({ icon, label, value }) => (
      <div key={label} className="flex items-center gap-4">
        <span
          role="img"
          aria-label={label}
          className="text-2xl bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full p-3 shadow"
        >
          {icon}
        </span>
        <span className="text-base sm:text-lg font-medium text-gray-800 dark:text-gray-100">
          {value}
        </span>
      </div>
    ))}
  </div>
);

export default ContactInfo;
