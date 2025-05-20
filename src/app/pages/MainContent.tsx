import React from "react";
import { motion } from "framer-motion";

export default function MainContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h1 className="text-2xl font-bold mb-4"> Main Content </h1>
      <p> This content fades in smoothly when mounted.</p>
    </motion.div>
  );
}
