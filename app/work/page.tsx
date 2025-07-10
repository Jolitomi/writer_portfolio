"use client";

import Navbar from "../components/Navbar";
import Image from 'next/image';

const workSamples = {
  
    "Personal/Creative Writing": [
      {
        title: "The Girl Who Thought She Had Time",
        description: "A reflective short story on life, loss, and the fleeting nature of time.",
        link: "https://medium.com/@omojolaayotomiwa13/the-girl-who-thought-she-had-time-143bf72ee393",
        image: "/notimeleft.jpg",
      },
      {
        title: "A Dance with Addiction",
        description: "A poetic journey through the allure, grip, and struggle of addiction.",
        link: "https://medium.com/@omojolaayotomiwa13/a-dance-with-addiction-0de0283e2938",
        image: "/addiction.png",
      }
    ],
  
  "Productivity & Self-Improvement": [
    {
      title: "7 Proven Ways to Boost Your Productivity Without Burning Out",
      description: "Actionable tips to stay productive while protecting your mental health.",
      link: "https://medium.com/@omojolaayotomiwa13/7-proven-ways-to-boost-your-productivity-without-burning-out-29b500b457ae", // Replace with actual link
      image: "/istockphoto-836559338-1024x1024.jpg",
    },
    {
      title: "The Science Behind Why We Procrastinate and How to Stop",
      description: "Exploring the psychology of procrastination and how to overcome it.",
      link: "https://medium.com/@omojolaayotomiwa13/the-science-behind-why-we-procrastinate-and-how-to-stop-066a4e159cd0",
      image: "/procastinating.jpg"    
    }
  ],
  "Finance & Money Management": [
    {
      title: "How to Save Money Without Feeling Restricted",
      description: "Smart money-saving hacks that let you enjoy life while growing your savings.",
      link: "https://medium.com/@omojolaayotomiwa13/how-to-save-money-without-feeling-restricted-nigerian-edition-4bd79175c03f", // Replace with actual link
      image: "/save_money.jpg",
    },
    {
      title: "Why Every Nigerian Should Have Multiple Income Streams",
      description: "A guide to financial stability in an unpredictable economy.",
      link: "https://medium.com/@omojolaayotomiwa13/why-every-nigerian-should-have-multiple-income-streams-b9454d0db36f", // Replace with actual link
      image: "/business_financial.jpg",
    }
  ],
  "Tech & Writing Tools Reviews": [
    {
      title: "Grammarly Review: Is It Really Worth It?",
      description: "An honest take on Grammarly’s features, strengths, and whether it’s worth your money.",
      link: "https://medium.com/@omojolaayotomiwa13/grammarly-review-is-it-really-worth-it-44aca8ca0e1a", // Replace with actual link
      image: "/grammarly.png",
    },
    {
      title: "Notion Review: The Ultimate Productivity Tool or Just Another Hype?",
      description: "An honest breakdown of Notion’s pros, cons, and best use cases.",
      link: "https://medium.com/@omojolaayotomiwa13/notion-review-the-ultimate-productivity-tool-or-just-another-hype-9c71176be77c", // Replace with actual link
      image: "/notion.jpg",
    }
  ],
  "Business & Case Studies": [
    {
      title: "Case Study: How Data Analysis Helped an E-commerce Brand",
      description: "A deep dive into data-driven strategies that boosted online sales by 40%.",
      link: "https://medium.com/@omojolaayotomiwa13/case-study-how-data-analysis-helped-an-e-commerce-brand-increase-sales-by-40-941942cc5880", // Replace with actual link
      image: "/casestudy.png", 
    }
  ],
  "Cultural & Societal Commentary": [
    {
      title: "The Hustle Culture in Nigeria: Is It Really Worth It?",
      description: "The glorification of overworking in Nigeria—is it leading to success or just burnout?",
      link: "https://medium.com/@omojolaayotomiwa13/the-hustle-culture-in-nigeria-is-it-really-worth-it-21e595a17e17",
      image: "/hustleculture.jpg"}
  ]
};

export default function Work() {
  return (
    <div className="min-h-screen bg-[#fdf6f0] font-serif text-[#2d2d2d]">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-5xl font-bold text-center mb-8 text-[#e85a4f]">My Work</h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          A collection of my published pieces, featuring insights into storytelling, journalism, and creativity.
        </p>
        
        {Object.entries(workSamples).map(([category, works], index) => (
          <div key={index} className="mb-12">
            <h3 className="text-3xl font-bold text-[#e85a4f] mb-6">{category}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {works.map((work, idx) => (
                <a
                  key={idx}
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
                >
                  <Image 
                    src={work.image} 
                    alt={work.title} 
                    width={600} 
                    height={450} 
                    className="w-full h-56 object-cover" 
                    priority
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-[#e85a4f] font-serif">{work.title}</h3>
                    <p className="text-gray-700 font-sans">{work.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-[#e85a4f] text-white py-10 w-full mt-auto">
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
