"use client";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f3ef] to-[#e3dac9] text-[#1d1d1b] font-serif">
      {/* Navbar */}  <Navbar  /> 

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div>
          <h1 className="text-6xl font-extrabold text-[#e85a4f]">Contact</h1>
          <p className="mt-4 text-xl text-[#333] leading-relaxed">
            Need a sharp writer or a fresh perspective? Let’s talk! Or just send a virtual high-five.
          </p>
          <div className="mt-8 space-y-6">
            {/* Phone Section */}
            <div>
              <p className="font-semibold text-[#5b9a99] text-lg">Phone</p>
              <p className="text-xl">+234 811 726 9952</p>
            </div>

            {/* Email Section */}
            <div>
              <p className="font-semibold text-[#5b9a99] text-lg">Email</p>
              <p className="text-xl">
                <a href="mailto:omojolaayotomiwa13@gmail.com" className="hover:underline text-[#e85a4f]">
                  omojolaayotomiwa13@gmail.com
                </a>
              </p>
            </div>

            {/* LinkedIn Profile Badge */}
            <div className="mt-6">
              <p className="font-semibold text-[#5b9a99] text-lg">LinkedIn</p>
              <div className="mt-2">
                <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
                <div className="badge-base LI-profile-badge bg-transparent" 
                     data-locale="en_US" data-size="medium" 
                     data-theme="dark" data-type="HORIZONTAL" 
                     data-vanity="ayotomiwa-omojola-89732932a" 
                     data-version="v1">
                  <a className="badge-base__link LI-simple-link text-[#e85a4f] hover:underline" 
                     href="https://ng.linkedin.com/in/ayotomiwa-omojola-89732932a?trk=profile-badge"> Ayotomiwa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form 
          action="https://formsubmit.co/el/zewilu" 
          method="POST" 
          className="space-y-6 bg-white p-10 rounded-xl shadow-2xl"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e85a4f]"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e85a4f]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e85a4f]"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e85a4f]"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message *"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e85a4f] h-40"
            required
          />

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#e85a4f] text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#c04a3f] transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
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
