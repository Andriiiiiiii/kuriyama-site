import React, { useState } from 'react';
import { FONT_SIZES } from '@/config/typography';
import backImage from '@/assets/visit/12-back-image.webp';
import leftImage from '@/assets/visit to the apiary/left picture 8.webp';

interface FAQProps {
  questionText?: string;
}

const FAQ: React.FC<FAQProps> = ({ questionText = 'Вопрос о посещении Куриямы' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    { question: questionText, answer: 'Описание, подробнее раскрывающее заголовок' },
    { question: questionText, answer: 'Описание, подробнее раскрывающее заголовок' },
    { question: questionText, answer: 'Описание, подробнее раскрывающее заголовок' },
    { question: questionText, answer: 'Описание, подробнее раскрывающее заголовок' },
    { question: questionText, answer: 'Описание, подробнее раскрывающее заголовок' },
  ];

  return (
    <section className="relative w-full h-layout bg-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backImage}
          alt=""
          className="absolute object-contain"
          style={{
            left: '40.7639%',
            top: '0%',
            width: '18.5417%',
            height: '100%',
          }}
        />

        <h1
          className="absolute font-ua-brand text-primary font-bold uppercase leading-[1.1]"
          style={{
            left: '8.3472%',
            top: '20.8535%',
            width: '33.6894%',
            height: '29.5360%',
            fontSize: FONT_SIZES.heading,
          }}
        >
          частые
          <br />
          вопросы
        </h1>

        <img
          src={leftImage}
          alt=""
          className="absolute bottom-0 left-0 object-contain"
          style={{
            left: '-2%',
            bottom: '-5%',
            width: '25%',
            maxHeight: '45%',
            zIndex: 10,
          }}
        />

        <div
          className="absolute"
          style={{
            left: '50.6944%',
            top: '18.6715%',
            width: '40.9722%',
          }}
        >
          {questions.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggleItem(index)}
                className="w-full font-glametrix text-secondary font-bold text-left hover:opacity-80 transition-opacity flex items-center justify-between"
                style={{
                  fontSize: FONT_SIZES.subheading,
                  marginTop: index === 0 ? '0' : '1.5vh',
                }}
              >
                <span className="flex-1">{item.question}</span>
                <span
                  className="ml-4 flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: '20px',
                    height: '20px',
                  }}
                >
                  {openIndex === index ? (
                    <div className="bg-primary" style={{ width: '100%', height: '1px' }} />
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="1" className="text-primary" />
                      <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1" className="text-primary" />
                    </svg>
                  )}
                </span>
              </button>

              {openIndex === index && (
                <div className="overflow-hidden">
                  <p
                    className="font-glametrix text-foreground"
                    style={{
                      fontSize: FONT_SIZES.body,
                      marginTop: '1.5vh',
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}

              <div
                className="bg-primary origin-left"
                style={{
                  width: '100%',
                  height: '1px',
                  marginTop: '1.5vh',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
