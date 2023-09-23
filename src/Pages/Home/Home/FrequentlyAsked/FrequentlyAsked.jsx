import React from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import faq from "../../../../assets/anim/faq.json";
import Lottie from "lottie-react";
const FrequentlyAsked = () => {
  return (
    <section className="">
      <div className="grid md:grid-cols-2">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 -mb-10 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <SectionTitle heading={"Frequently Asked Questions"}></SectionTitle>
          <div className="flex flex-col divide-y sm:px-8  divide-gray-300">
            <details open="">
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Q: How can I get started with learning a new foreign language?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  <small>
                    A: To get started, simply select the language you want to
                    learn from our available options and explore our
                    beginner-level courses. You can enroll in a course, access
                    learning materials, and begin your language learning
                    journey.
                  </small>
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Q: What teaching methods or approaches do you use in your
                language courses?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  <small>
                    We employ a communicative and immersive approach to language
                    learning. Our courses focus on real-life situations,
                    interactive exercises, and practical conversations to help
                    you develop your speaking, listening, reading, and writing
                    skills in a natural and enjoyable way.
                  </small>
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Q: Are the language courses suitable for all proficiency levels?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  <small>
                    {" "}
                    A: Absolutely! Our language courses cater to learners of all
                    proficiency levels, from absolute beginners to advanced
                    learners. We offer courses specifically designed for each
                    level, ensuring that you can find the right course to meet
                    your needs and goals.
                  </small>
                </p>
              </div>
            </details>
          </div>
        </div>
        <div>
          <Lottie animationData={faq} />
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAsked;
