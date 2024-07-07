import React, { useState, useRef, useEffect } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Where are your tutors from?",
    answer:
      "Our tutors are from all over the world. We have a rigorous selection process to ensure that only the best tutors are selected to teach on our platform.",
  },
  {
    question: "How do I pay for a course?",
    answer:
      "You can pay for a course using any major credit or debit card. We use Stripe to process payments securely.",
  },
  {
    question: "Can I get a refund if I'm not satisfied with a course?",
    answer:
      "Yes, we offer a 30-day money-back guarantee on all courses. If you're not satisfied with a course for any reason, just let us know and we'll refund your payment.",
  },
  {
    question: "Do you offer discounts for multiple courses?",
    answer:
      "Yes, we offer discounts for purchasing multiple courses at once. Just add the courses you want to your cart and the discount will be applied automatically.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact customer support by livechat or email. Our support team is available 24/7 to help you with any questions or issues you may have.",
  },

];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (activeIndex !== null && contentRefs.current[activeIndex]) {
      contentRefs.current[activeIndex]!.style.maxHeight =
        contentRefs.current[activeIndex]!.scrollHeight + "px";
    }

    contentRefs.current.forEach((ref, idx) => {
      if (idx !== activeIndex && ref) {
        ref.style.maxHeight = "0px";
      }
    });
  }, [activeIndex]);

  return (
    <div className="py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 ${
                activeIndex === index
                  ? "bg-gray-100 dark:bg-white/10"
                  : ""
              }`}
            >
              <button
                className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                onClick={() => handleToggle(index)}
              >
                {item.question}
                <svg
                  className={`flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400 ${
                    activeIndex === index ? "hidden" : "block"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className={`flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400 ${
                    activeIndex === index ? "block" : "hidden"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
               
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className={`w-full overflow-hidden transition-[max-height] duration-300 ${
                  activeIndex === index ? "" : "max-h-0"
                }`}
                
                style={{
                  maxHeight:
                    activeIndex === index
                      ? contentRefs.current[index]?.scrollHeight + "px"
                      : "0px",
                }}
              >
                <p className="text-gray-800 dark:text-neutral-200">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
