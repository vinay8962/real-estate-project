import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactSellers from "../components/ContactSellers";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import Image from "../assets/section/section-contact.jpg";
import { IoCall } from "react-icons/io5";

const faqData = {
  overview: [
    {
      question: "Why Should I Use Your Services?",
      answer:
        "Once your account is set up and you've familiarized yourself with the platform, you are ready to start using our services. Whether it's accessing specific features, making transactions, or utilizing our tools, you'll find everything you need at your fingertips.",
    },
    {
      question: "How Secure Are Your Services?",
      answer:
        "Our platform employs industry-standard security measures, including encryption and multi-factor authentication, to ensure your data and transactions remain secure at all times.",
    },
    {
      question: "Is There Customer Support Available?",
      answer:
        "Yes! Our dedicated customer support team is available 24/7 to assist you with any inquiries or issues you may encounter.",
    },
    {
      question: "How Can I Update My Account Information?",
      answer:
        "You can update your account information by navigating to the account settings page and making the necessary changes. If you require assistance, our support team is here to help.",
    },
  ],
  costPayment: [
    {
      question: "How Do You Calculate Fees?",
      answer:
        "Our pricing structure is transparent, and fees are calculated based on usage, subscription plans, and any additional services you opt for.",
    },
    {
      question: "How Do I Pay My Invoices?",
      answer:
        "You can pay your invoices through multiple payment methods, including credit/debit cards, PayPal, and bank transfers.",
    },
    {
      question: "Are There Opportunities For Discounts Or Promotions?",
      answer:
        "Yes! We offer seasonal promotions, referral discounts, and loyalty programs for long-term customers.",
    },
    {
      question: "Are There Any Hidden Fees Not Displayed In The Pricing Table?",
      answer:
        "No, we maintain full transparency in our pricing. Any additional charges are clearly mentioned in the invoice breakdown.",
    },
    {
      question: "What Is The Refund Procedure?",
      answer:
        "Refunds are processed within 7-10 business days upon request, based on the terms and conditions of your subscription plan.",
    },
    {
      question: "Is There Financial Or Accounting Support?",
      answer:
        "Yes, we provide financial and accounting guidance for managing payments, invoicing, and tracking expenses.",
    },
  ],
  safetySecurity: [
    {
      question: "What Languages Does Your Service Support?",
      answer:
        "Our platform supports multiple languages, including English, Spanish, French, German, and more.",
    },
    {
      question: "How Do I Integrate Your Service Into My System?",
      answer:
        "We offer API documentation and developer support to ensure seamless integration into your existing system.",
    },
    {
      question: "What Are The Safety Features Of Your System?",
      answer:
        "Our system includes end-to-end encryption, multi-factor authentication, and regular security updates.",
    },
    {
      question: "How Can I Request New Features?",
      answer:
        "You can request new features by submitting a proposal through our customer support portal.",
    },
    {
      question: "Is My Data Protected?",
      answer:
        "Yes, we comply with GDPR and other data protection regulations to safeguard your information.",
    },
    {
      question: "How Do I Report A Technical Issue?",
      answer:
        "You can report technical issues via our support ticket system or by contacting our 24/7 support team.",
    },
  ],
};

const Accordion = ({ data, sectionIndex }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {data.map((faq, index) => (
        <div key={index} className="w-full mx-auto my-4 border-b p-4">
          <button
            className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800 p-3 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            <motion.span animate={{ rotate: openIndex === index ? 180 : 0 }}>
              <IoIosArrowDown className="text-xl text-primary" />
            </motion.span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="p-3 text-gray-600">{faq.answer}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const Faqs = () => {
  return (
    <div className="w-full my-20 px-4 md:px-10">
      {/* Breadcrumb Section */}
      <div className="w-full flex py-4 px-4 md:px-12 text-sm text-gray-700">
        <p className="flex gap-3">
          <Link to="/" className="text-primary font-bold hover:underline">
            Home
          </Link>
          &gt;
          <span className="font-bold text-paragraph">FAQs</span>
        </p>
      </div>

      <div className="mx-auto p-1 md:p-6">
        <div>
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4">
          {/* Right Side */}
          <div className="md:col-span-2 w-full h-auto md:px-6 py-0">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <Accordion data={faqData.overview} sectionIndex="overview" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Costs and Payments
              </h2>
              <Accordion
                data={faqData.costPayment}
                sectionIndex="costPayment"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Safety and Security
              </h2>
              <Accordion
                data={faqData.safetySecurity}
                sectionIndex="safetySecurity"
              />
            </div>
          </div>
          {/* Left Side */}
          <div className="md:col-span-1 space-y-8">
            <div className="sticky top-10 space-y-8">
              <ContactSellers />
            </div>
          </div>
        </div>

        <div className="w-full  relative hidden md:flex px-2 py-2 md:px-10 md:py-20  overflow-hidden">
          <img
            src={Image}
            alt="Appraisal Background"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute top-0 left-0 px-12 my-20 mx-10 rounded-3xl bg-gradient-to-b from-transparent to-[#002e25] right-0 bottom-0 flex justify-between items-end text-center text-white bg-opacity-50 p-8">
            <div className="text-start">
              {" "}
              <h1 className="text-4xl font-bold mb-2">
                Need help? Talk to our expert.
              </h1>
              <p className="text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex gap-4 ">
              <button className=" px-6 py-2 hover:bg-primary border rounded-lg text-white">
                Contact us
              </button>
              <button className="border border-white bg-primary hover:bg-[#2c2e33] px-6 py-2 rounded-lg flex items-center gap-2">
                <IoCall /> (693) 232-232
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
