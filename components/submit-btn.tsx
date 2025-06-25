import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { motion } from "framer-motion";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      className="group flex items-center justify-center gap-3 h-14 px-8 bg-gray-700 text-white rounded-full outline-none transition-all duration-300 shadow-lg shadow-gray-900/25 hover:shadow-xl hover:shadow-gray-900/40 disabled:scale-100 disabled:opacity-65 font-semibold text-lg hover:bg-gray-600"
      disabled={pending}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {pending ? (
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-400/30 border-t-white"></div>
      ) : (
        <>
          Send Message
          <FaPaperPlane className="text-lg opacity-80 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
        </>
      )}
    </motion.button>
  );
}