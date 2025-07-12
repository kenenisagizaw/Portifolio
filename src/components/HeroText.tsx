import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const messages = [
  {
    text: "Hello, I'm Kenenisa Gizaw",
    highlight: ["Kenenisa Gizaw"],
  },
  {
    text: "Fullstack Developer",
    highlight: ["Fullstack Developer"],
  },
  {
    text: "I build modern, scalable, and accessible web applications!",
    highlight: ["modern", "scalable", "accessible"],
  },
];

const TypingHighlight = ({
  text,
  highlightWords,
  onComplete,
}: {
  text: string;
  highlightWords: string[];
  onComplete: () => void;
}) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 40); // typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        onComplete();
      }, 2000); // wait 2s before next message
      return () => clearTimeout(timeout);
    }
  }, [index, text, onComplete]);

  // Split text into parts, highlighting highlightWords
  const parts = [];
  let remainingText = displayed;

  while (remainingText.length > 0) {
    let found = false;
    for (const word of highlightWords) {
      if (remainingText.startsWith(word)) {
        parts.push({ text: word, highlight: true });
        remainingText = remainingText.slice(word.length);
        found = true;
        break;
      }
    }
    if (!found) {
      parts.push({ text: remainingText.charAt(0), highlight: false });
      remainingText = remainingText.slice(1);
    }
  }

  return (
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-wide mb-2">
      {parts.map((part, i) =>
        part.highlight ? (
          <motion.span
            key={i}
            initial={{ color: "#6366f1", scale: 1 }}
            animate={{
              color: ["#6366f1", "#a5b4fc", "#6366f1"],
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
            className="inline-block"
          >
            {part.text}
          </motion.span>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </h1>
  );
};

export default function HeroText() {
  const [messageIndex, setMessageIndex] = useState(0);

  const handleComplete = () => {
    setMessageIndex((prev) => (prev + 1) % messages.length);
  };

  return (
    <div className="relative min-h-[140px] w-full text-center md:text-left">
      <TypingHighlight
        key={messageIndex}
        text={messages[messageIndex].text}
        highlightWords={messages[messageIndex].highlight}
        onComplete={handleComplete}
      />
    </div>
  );
}
