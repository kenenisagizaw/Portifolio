import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const messages = [
  {
    text: "Hello, I'm Kenenisa Gizaw",
    highlight: ["Kenenisa Gizaw"],
    color: "from-slate-700 via-indigo-600 to-violet-600",
  },
  {
    text: "Fullstack Developer",
    highlight: ["Fullstack Developer"],
    color: "from-blue-600 via-indigo-600 to-purple-600",
  },
  {
    text: "I build modern, scalable, and accessible web applications!",
    highlight: ["modern", "scalable", "accessible"],
    color: "from-emerald-600 via-teal-600 to-cyan-600",
  },
];

const TypingHighlight = ({
  text,
  highlightWords,
  color,
  onComplete,
}: {
  text: string;
  highlightWords: string[];
  color: string;
  onComplete: () => void;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        onComplete();
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [index, text, onComplete]);

  // Calculate highlighted indices
  const highlightedIndices = new Set<number>();
  highlightWords.forEach((word) => {
    let startPos = 0;
    while (startPos < text.length) {
      const foundPos = text.indexOf(word, startPos);
      if (foundPos === -1) break;
      for (let i = 0; i < word.length; i++) {
        highlightedIndices.add(foundPos + i);
      }
      startPos = foundPos + 1;
    }
  });

  const words = text.split(" ");
  let charCounter = 0;

  return (
    <div className="relative">
      {/* Subtle background glow */}
      <motion.div
        className={`absolute -inset-4 bg-gradient-to-r ${color} opacity-[0.03] blur-xl rounded-lg`}
        animate={{ scale: [1, 1.02, 1], opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Container with min-height to prevent layout shifts */}
      <div className="min-h-[6rem] md:min-h-[8rem] flex flex-col justify-start pt-2 md:pt-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-wide leading-tight md:leading-tight">
          {words.map((word, wIdx) => {
            const wordElement = (
              <span key={wIdx} className="inline-block whitespace-nowrap">
                {word.split("").map((char, cIdx) => {
                  const currentGlobalIndex = charCounter + cIdx;
                  const isHighlighted =
                    highlightedIndices.has(currentGlobalIndex);
                  const isVisible = currentGlobalIndex < index;

                  return (
                    <motion.span
                      key={cIdx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isVisible ? 1 : 0 }}
                      transition={{ duration: 0 }}
                      className={`inline-block ${
                        isHighlighted
                          ? `bg-gradient-to-r ${color} bg-clip-text text-transparent`
                          : ""
                      }`}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            );

            charCounter += word.length;

            const spaceElement =
              wIdx < words.length - 1 ? (
                <span key={`space-${wIdx}`} className="inline-block">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: charCounter < index ? 1 : 0 }}
                    transition={{ duration: 0 }}
                  >
                    &nbsp;
                  </motion.span>
                </span>
              ) : null;

            if (wIdx < words.length - 1) {
              charCounter += 1;
            }

            return (
              <React.Fragment key={wIdx}>
                {wordElement}
                {spaceElement}
              </React.Fragment>
            );
          })}
        </h1>
      </div>

      {/* Progress indicator dots */}
      <div className="flex justify-center md:justify-start gap-1.5 mt-4">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${
              i < highlightWords.length
                ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
            animate={{
              scale: i < highlightWords.length ? [1, 1.2, 1] : 1,
              opacity: i < highlightWords.length ? [0.7, 1, 0.7] : 0.4,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function HeroText() {
  const [messageIndex, setMessageIndex] = useState(0);

  const handleComplete = () => {
    setMessageIndex((prev) => (prev + 1) % messages.length);
  };

  return (
    <div className="relative w-full text-center md:text-left">
      <div className="min-h-[11rem] md:min-h-[12rem] flex flex-col justify-center">
        {/* Floating background elements */}
        <motion.div
          className="absolute top-4 right-4 md:top-10 md:-right-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-indigo-300/10 to-purple-300/10 blur-2xl pointer-events-none"
          animate={{ x: [0, 8, 0], y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-4 left-4 md:-bottom-10 md:-left-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-pink-300/10 to-rose-300/10 blur-2xl pointer-events-none"
          animate={{ x: [0, -5, 0], y: [0, 8, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <TypingHighlight
          key={messageIndex}
          text={messages[messageIndex].text}
          highlightWords={messages[messageIndex].highlight}
          color={messages[messageIndex].color}
          onComplete={handleComplete}
        />
      </div>

      {/* Message indicator */}
      <div className="flex justify-center md:justify-start gap-2 mt-2">
        {messages.map((_, i) => (
          <motion.div
            key={i}
            className={`w-6 h-0.5 rounded-full ${i === messageIndex ? "bg-gradient-to-r from-blue-600 to-indigo-600" : "bg-gray-200 dark:bg-gray-700"}`}
            initial={{ width: i === messageIndex ? "24px" : "8px" }}
            animate={{ width: i === messageIndex ? "24px" : "8px" }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}