"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      className="flex justify-between items-center text-[#e85a4f] py-6 px-8 font-serif bg-white shadow-md"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/">
        <h1 className="text-3xl font-bold font-serif cursor-pointer hover:text-[#c04a3f] transition">
          Omojola Ayotomiwa
        </h1>
      </Link>
      <div className="flex space-x-8 text-lg">
        <Link href="/resume" className="hover:underline hover:text-[#c04a3f] transition">Resume</Link>
        <Link href="/work" className="hover:underline hover:text-[#c04a3f] transition">Work</Link>
        <Link href="/contact" className="hover:underline hover:text-[#c04a3f] transition">Contact</Link>
      </div>
    </motion.nav>
  );
}
