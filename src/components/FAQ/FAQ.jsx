import React, { useEffect, useState } from "react";
import vector from "/faq/Vector.png";
import Ellipse from "/faq/Ellipse.png";
import Ellipse1 from "/faq/Ellipse1.png";
import Ellipse2 from "/faq/Ellipse2.png";
import Aos from "aos";
// import "./FAQ.css";

const FAQ = () => {
  const questions = [
    {
      question: "How do I register for the hackathon?",
      answer:
        "To register for the hackathon, visit our registration page on the event website and follow the instructions provided. You'll need to provide your name, contact information, and any team members' details if you're participating as a team.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "No, participation in our hackathon is free of charge. We want to encourage as many participants as possible to join and showcase their skills.",
    },
    {
      question:
        "What are the key themes or focus areas for the hackathon projects?",
      answer:
        "The hackathon projects can cover a wide range of themes, including but not limited to software development, AI, IoT, and cybersecurity.",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "You should bring your own laptop, charger, any specific hardware or software you require, and a positive attitude. It's also a good idea to bring any personal items you'll need for the duration of the event.",
    },
    {
      question: "Are there any softwares we should be familiar with?",
      answer:
        "Ensure that you and your teammates are comfortable with basic git commands like push, pull, commit, etc. To avoid merge conflicts, practise git with your team members beforehand.",
    },
    {
      question:
        "How can I contact the organizers for additional questions or assistance?",
      answer:
        "You can reach out to the organizers by emailing [email address] or calling [phone number]. We are here to assist with any questions or concerns.",
    },
    {
      question:
        "Can participants seek technical support or resources during the hackathon?",
      answer:
        "Yes, a dedicated help desk will provide technical support and access to resources throughout the event.",
    },
    {
      question:
        "Is there a code of conduct that participants are expected to adhere to?",
      answer:
        "Yes, a code of conduct will be provided to ensure a respectful and collaborative environment for all participants.",
    },
  ];

  const [expandedQuestions, setExpandedQuestions] = useState(
    new Array(questions.length).fill(false)
  );
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  const toggleQuestion = (index) => {
    setExpandedQuestions((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="relative py-[6rem]">
      <div id="faq" className="faq_main text-white  ">
        <h1
          data-aos="fade-right"
          className="font-bakbak w-full top-[1rem] text-center font-semibold text-[3rem] md:text-[3rem] text-white z-20"
        >
          FAQS
        </h1>
        <img src={Ellipse} alt="b" className=" absolute left-0 bottom-0" />
        <img src={Ellipse1} alt="b" className=" absolute right-0 bottom-0" />

        <div
          data-aos="fade-left"
          className="w-full flex justify-center items-center mt-[6rem]"
        >
          <div className="grid md:grid-cols-2 gap-x-[3rem] gap-y-[1.5rem] px-[2rem]">
            {questions.map((item, index) => (
              <div
                key={index}
                className="faq_set border-2 border-[#21E786]  sm:w-[30rem] md:w-[25rem] lg:w-[38rem] py-4 px-6 rounded-xl cursor-pointer "
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex w-full justify-between items-center">
                  <div
                    className={`question ${
                      expandedQuestions[index]
                        ? "text-[#21E786] text-lg font-medium transition-all ease-in-out cursor-pointer"
                        : ""
                    }`}
                  >
                    {item.question}
                  </div>
                  <div className="add">
                    {expandedQuestions[index] ? (
                      <img
                        src={vector}
                        alt="Vector"
                        className="w-[1.5rem] rotate-180 transition-all ease-in-out duration-1000"
                      />
                    ) : (
                      <img
                        src={vector}
                        alt="Vector"
                        className="w-[1.5rem] transition-all ease-in-out duration-1000"
                      />
                    )}
                  </div>
                </div>
                {expandedQuestions[index] && (
                  <div className="answer mt-5">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
          <img
            src={Ellipse2}
            alt="b"
            className=" absolute right-0 top-[5rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
