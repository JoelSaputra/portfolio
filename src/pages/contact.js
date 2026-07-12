import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import playSound from "@/lib/playSound";

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ContactRow({ label, value, href }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center justify-between border-b border-white/10 py-5"
    >
      <span className="text-lg text-white/70">{label}</span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-white underline decoration-white/40 underline-offset-4 hover:text-white/80"
        >
          {value}
        </a>
      ) : (
        <button
          onClick={handleCopy}
          className="text-lg text-white underline decoration-white/40 underline-offset-4 hover:text-white/80"
        >
          {copied ? "Copied!" : value}
        </button>
      )}
    </motion.div>
  );
}

export default function Contact() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#17171c] text-white">
      <div className="pointer-events-none absolute -top-40 left-0 h-[500px] w-[700px] rounded-full bg-white/10 blur-3xl" />

      <button
        onClick={() => { playSound("/sounds/enter.mp3"); router.push("/"); }}
        className="absolute left-8 top-8 flex items-center gap-2 text-white/60 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-5 w-5 hover:cursor-pointer" />
        <span className="hover:cursor-pointer">Back</span>
      </button>

      <motion.div
        className="relative mx-auto max-w-4xl px-16 py-20"
        initial="hidden"
        animate="show"
        variants={listVariants}
      >
        <motion.h1 variants={itemVariants} className="mb-10 text-4xl font-light">
          Contact
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mb-2 rounded-md border border-white/30 px-6 py-5"
        >
          <p className="text-sm text-white/50">Full Name</p>
          <p className="text-xl">Joel Clenn Saputra</p>
        </motion.div>

        <ContactRow label="Phone" value="+1 (514) 295-4976" />
        <ContactRow label="Email" value="joel.clenn03@gmail.com" />
        <ContactRow
          label="LinkedIn"
          value="linkedin.com/in/joel-saputra"
          href="https://www.linkedin.com/in/joel-saputra/"
        />
        <ContactRow
          label="GitHub"
          value="github.com/JoelSaputra"
          href="https://github.com/JoelSaputra"
        />
        <ContactRow
          label="Instagram"
          value="@joel_clenn"
          href="https://www.instagram.com/joel_clenn/"
        />
      </motion.div>
    </div>
  );
}
