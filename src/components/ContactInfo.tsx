import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => (
  <div className="flex flex-col justify-center gap-8 bg-gradient-to-b from-white to-slate-50 dark:from-[#1e293b] dark:to-[#0f172a] border border-slate-200 dark:border-slate-700/60 rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md h-full text-slate-900 dark:text-white">
    {[
      { icon: Phone, label: "Phone", value: "+251 922126985" },
      { icon: Mail, label: "Email", value: "kenenisagizaw.28@gmail.com" },
      { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia" },
    ].map(({ icon: Icon, label, value }) => (
      <div key={label} className="flex items-center gap-5">
        <span
          aria-label={label}
          className="flex items-center justify-center w-14 h-14 text-2xl bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 rounded-full shrink-0 shadow-sm"
        >
          <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.8} />
        </span>

        <div className="flex flex-col">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
            {label}
          </span>
          <span className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-200 break-all">
            {value}
          </span>
        </div>
      </div>
    ))}
  </div>
);

export default ContactInfo;