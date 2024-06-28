// import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Cosmetics can be also described by the physical composition of the product?',
      answer: 'Cosmetics can be liquid or cream emulsions; powders, both pressed and loose; dispersions; and anhydrous creams or sticks.',
    },
    {
      question: 'Hair coloring, or hair dyeing, is the practice of changing the hair color?',
      answer: 'The main reasons for this are cosmetic: to cover gray or white hair, to change to a color regarded as more fashionable or desirable, or to restore the original hair color after it has been discolored by hairdressing processes or sun bleaching.',
    },
    {
      question: 'Online marketing to gain customers and compete with the franchise chains?',
      answer: 'The US Labor Department estimates employment in the United States will increase 20% between 2008–2014, with greatest employment growth from skin care specialists.',
    },
    {
      question: 'Hair care is the largest segment with 86,000 locations?',
      answer: 'Skin care is expected to have revenue of almost $11 billion by 2018. This growth is being driven in part by a generally increasing awareness of the importance of skin care among American woman, but also specifically due to an increase in the market for men. The market is distributed widely across America, with a concentration in the Northeast and Midwest.',
    },
    {
      question: 'Beauty salons have proven to be a recession-proof industry?',
      answer: 'Although sales had declined from 2008 highs due to the Great Recession, they remain robust with long term positive forecast. Even though during recessions, consumers tend to be more price conscious, spending continues to increase. With rising per capita incomes across the United States since 2015, beauty salons are booming with the industry generating $56.2 billion in the United States',
    },
    {
      question: 'Some beauty salons style hair instead of going to a separate hair salon?',
      answer: 'Other treatments of the face are known as facials. Specialized beauty salons known as nail salons offer treatments such as manicures and pedicures for the nails. A manicure is a treatment for the hands, incorporating the fingernails and cuticles and often involving the application of nail polish, while a pedicure involves treatment of the feet, incorporating the toenails and the softening or removal of calluses.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-xl mx-auto p-3">
      <div className=" border-gray-300 text-center  p-6 rounded-lg">
        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <div className="space-y-4 ">
          {faqs.map((faq, index) => (
            <div key={index} className={`border border-gray-300 rounded-lg shadow-sm ${index !== 0 ? 'mt-4' : ''}`}>
              <h2
                className={`text-sm font-semibold rounded-lg cursor-pointer flex justify-between items-center p-4 ${activeIndex === index ? 'bg-gray-200' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {activeIndex === index ? (
                  <KeyboardArrowUpIcon className="text-pink-500" />
                ) : (
                  <KeyboardArrowDownIcon className="text-pink-500" />
                )}
              </h2>
              {activeIndex === index && (
                <p className="mt-2  text-gray-700 text-sm px-4 pb-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
