import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import {
  Github,
  Linkedin,
  Mail,
  Facebook,
} from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-300 dark:border-gray-800 py-10 shadow-inner">
    <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
      {/* Social Icons */}
      <div className="flex gap-4">
        <a
          href="https://github.com/kenenisagizaw"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all shadow hover:shadow-lg"
        >
          <Github className="w-5 h-5 text-gray-700 dark:text-gray-100" />
        </a>
        <a
          href="https://linkedin.com/in/kenenisagizaw"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all shadow hover:shadow-lg"
        >
          <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-100" />
        </a>
        <a
          href="mailto:kenenisagizaw@gmail.com"
          aria-label="Email"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all shadow hover:shadow-lg"
        >
          <Mail className="w-5 h-5 text-gray-700 dark:text-gray-100" />
        </a>
        <a
          href="https://t.me/kenenisagizaw"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all shadow hover:shadow-lg"
        >
          <FaTelegramPlane className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </a>
        <a
          href="https://facebook.com/kenenisagizaw"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all shadow hover:shadow-lg"
        >
          <Facebook className="w-5 h-5 text-gray-700 dark:text-gray-100" />
        </a>
        <a
          href="https://twitter.com/kenenisagizaw"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter (X)"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all shadow hover:shadow-lg"
        >
          <img
            src="/icons/twitter-x.svg"
            alt="Twitter X"
            className="w-6 h-6 dark:invert"
          />
        </a>
      </div>

      {/* Ownership */}
      <p className="text-sm text-center text-gray-700 dark:text-gray-400">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-800 dark:text-white">
          Kenenisa Gizaw
        </span>{" "}
        • All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
