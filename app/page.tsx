"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
      <Navbar /> <br/>
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-5xl w-full px-6 flex flex-col md:flex-row items-center relative">
          {/* Image Section */}
          <motion.div
            className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden md:absolute md:left-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/placeholder.jpg" // Update with your actual image
              alt="Profile Picture"
              width={256} 
              height={256} 
              className="object-cover rounded-full"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="text-center md:text-left md:ml-[40%] mt-6 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold text-[#e85a4f] font-serif">
              Writer. Word nerd. <br /> Always searching for meaning in words.
            </h1>
            <p className="mt-6 text-lg text-gray-700 font-sans leading-relaxed">
              If there’s one thing I know, it’s that the right words can make people think, feel, or even hit "share."<br/>
              Whether it’s a compelling article, a sharp review, or a story that tugs at the heart, I craft content that sticks.
            </p>
            <p className="mt-4 text-lg text-gray-700 font-sans leading-relaxed">
              Let’s turn ideas into something worth reading (and re-reading).
            </p>

            {/* Buttons Section */}  
            <div className="mt-8 flex justify-center md:justify-start space-x-6">
              <motion.a
                href="/resume"
                className="px-6 py-3 bg-pink-400 text-white font-bold text-lg rounded-full hover:bg-pink-500 transition"
                whileHover={{ scale: 1.1 }}
              >
                Resume
              </motion.a>
              <motion.a
                href="/work"
                className="px-6 py-3 bg-red-400 text-white font-bold text-lg rounded-full hover:bg-red-500 transition"
                whileHover={{ scale: 1.1 }}
              >
                Work
              </motion.a>
              <motion.a
                href="/contact"
                className="px-6 py-3 bg-[#e85a4f] text-white font-bold text-lg rounded-full hover:bg-[#c04a3f] transition"
                whileHover={{ scale: 1.1 }}
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        </div> 
      </div>

      {/* Footer */}
      <footer className="bg-[#e85a4f] text-white py-12 w-full mt-16">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row md:justify-between items-center text-sm space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p>📞 <span className="font-semibold">08117269952</span></p>
            <p>✉️ <span className="font-semibold">omojolaayotomiwa13@gmail.com</span></p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/ayotomiwa-omojola-89732932a/" className="text-lg font-semibold text-white hover:text-gray-300 transition">
              LinkedIn
            </a>
            <a href="https://medium.com/@omojolaayotomiwa13" className="text-lg font-semibold text-white hover:text-gray-300 transition">
              Medium
            </a>
          </div>

          <p className="text-gray-300 text-center md:text-right">© 2025 by Omojola Ayotomiwa</p>
        </div>
      </footer>
    </div>
  );
}
