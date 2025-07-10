"use client";
import Navbar from "../components/Navbar";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f5f3ee] to-[#e5e3dc] text-[#1d1d1b] font-serif">
      <Navbar />

      <div className="max-w-7xl mx-auto px-12 mt-16">
        {/* Resume Header */}
        <h1 className="text-6xl font-bold text-center text-black mb-12">Resume</h1>

        {/* Work Experience Section */}
        <div className="mt-10 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-16">
          <h2 className="text-4xl font-extrabold w-full md:w-1/4 leading-relaxed text-[#5b9a99]">Work Experience</h2>
          <div className="w-full md:w-3/4">
            <hr className="border-gray-500 mb-6" />
            <div className="space-y-8">
              <div>
                <p className="text-lg text-gray-700 font-medium">2025 - Current</p>
                <h3 className="font-bold text-2xl mt-2">Freelance Content Writer</h3>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  • Wrote SEO-optimized articles on productivity, finance, and career growth. <br/>
                  • Created in-depth product reviews, opinion pieces, and case studies. <br/>
                  • Crafted engaging storytelling content and LinkedIn posts.
                </p>
              </div>
              <div>
                <p className="text-lg text-gray-700 font-medium">Jan 2025 - Present</p>
                <h3 className="font-bold text-2xl mt-2">Data Analyst Intern, AICTE Oasis Infobyte Internship</h3>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  • Analyzed retail sales data (10,000+ records) to identify key patterns.<br/>
                  • Created interactive visualizations to simplify complex data insights.<br/>
                  • Conducted customer and product analyses to optimize business strategies.
                  <br/>• Cleaned and prepared datasets, ensuring a 95% accuracy rate in reports and insights to support 
                  usability evaluations. 
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 font-medium">Apr 2022 - Sep 2022</p>
                <h3 className="font-bold text-2xl mt-2">IT Intern, Living Trust Mortgage Bank, Osun, Nigeria</h3>
                <p className="text-gray-700 mt-2 leading-relaxed">
                • Evaluated the bank&rsquo;s new mobile app, providing creative reviews on usability and design  
                <br/>• Identified and reported potential user experience issues.
                <br/>• Assisted in IT-related tasks, strengthening problem-solving and technical skills 
                </p>
              </div>
            </div>
          </div>
        </div>

         {/* Education Section */}
         <div className="mt-16 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-16">
          <h2 className="text-4xl font-extrabold w-full md:w-1/4 leading-relaxed text-[#5b9a99]">Education</h2>
          <div className="w-full md:w-3/4">
            <hr className="border-gray-500 mb-6" />
            <h3 className="font-bold text-2xl mt-2">Federal University Oye Ekiti, Ekiti, Nigeria</h3>
            <p className="text-lg text-gray-700 font-medium">2020-2024</p>
            <h5 className="font-semi-bold text-2xl mt-2">B.Sc. in Computer Science | Second Class Upper Honors</h5>
          </div>
        </div>

        {/* Skills & Expertise Section */}
        <div className="mt-16 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-16">
          <h2 className="text-4xl font-extrabold w-full md:w-1/4 leading-relaxed text-[#5b9a99]">Skills & Expertise</h2>
          <div className="w-full md:w-3/4">
            <hr className="border-gray-500 mb-6" />
            <ul className="text-gray-700 space-y-4 list-disc pl-6">
              <li>Strong storytelling and content structuring skills.</li>
              <li>Expert in SEO, content strategy, and audience engagement.</li>
              <li>Proficient in Python and Java for data-driven insights.</li>
              <li>Ability to simplify complex tech and UX topics.</li>
            </ul>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="flex justify-end mt-16">
          <a 
            href="/ayotomiwaresume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#5b9a99] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#49827d] transition"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#e85a4f] text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center text-sm space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p>📞 <span className="font-semibold">08117269952</span></p>
            <p>✉️ <span className="font-semibold">omojolaayotomiwa13@gmail.com</span></p>
          </div>
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
