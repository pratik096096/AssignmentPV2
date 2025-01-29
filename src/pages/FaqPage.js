import React, { useState } from "react";

const faqData = [
  {
    question: "What is Invest-o-Meter?",
    answer:
      "Invest-o-Meter is a platform designed to connect early-stage startups and small businesses with potential investors. It helps entrepreneurs secure funding and thrive.",
  },
  {
    question: "How do I sign up as a startup?",
    answer:
      "To sign up as a startup, visit our registration page and fill out the form with your business details. You'll be matched with investors whose interests align with your goals.",
  },
  {
    question: "How do I get matched with investors?",
    answer:
      "Our platform uses advanced algorithms to match startups with investors based on business goals, industry, and values. We also offer personalized matchmaking services.",
  },
  {
    question: "Do I need to pay to use Invest-o-Meter?",
    answer:
      "No, using Invest-o-Meter is free for startups. We only charge a small fee once an investment is secured through the platform.",
  },
  {
    question: "How can investors get involved?",
    answer:
      "Investors can sign up on the platform, browse startup profiles, and choose businesses they wish to invest in. We also offer additional resources to guide investors through the process.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-blue-900 uppercase mb-8">
        Frequently Asked Questions
        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
      </h1>
      
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left px-6 py-4 text-lg font-medium text-gray-700 bg-gray-100 rounded-t-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 text-gray-600 rounded-b-lg">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
