"use client";
import { SetStateAction, useState } from "react";

function About() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeTab, setActiveTab] = useState("tab1");

  const changeTab = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };
  return (
    <>
      <h1>
        Fuelling businesses across various <br />
        sectors and global locations
      </h1>
      <div className="flex justify-around  bg-slate-400">
        <div className="flex flex-col gap-3">
          <button
            onClick={() => changeTab("tab1")}
            className={`bg-[#0ebab1] text-white rounded-md flex  w-96 p-6   flex-row gap-5 items-center font-poppins `}
          >
            <svg
              className="text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <mask
                id="mask0_527_522"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect width="16" height="16" fill="#D9D9D9"></rect>
              </mask>
              <g mask="url(#mask0_527_522)">
                <path
                  d="M10 12.6666L9.05004 11.7333L12.1167 8.6666H1.33337V7.33327H12.1167L9.06671 4.2666L10 3.33327L14.6667 7.99994L10 12.6666Z"
                  fill="white"
                ></path>
              </g>
            </svg>
            <h1 className="w-[1px] h-6 bg-white"></h1>
            <a>EdTech</a>
          </button>
          <button
            onClick={() => changeTab("tab2")}
            className={`bg-[#0ebab1] text-white rounded-md flex  w-96 p-6   flex-row gap-5 items-center font-poppins `}
          >
            <svg
              className="text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <mask
                id="mask0_527_522"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect width="16" height="16" fill="#D9D9D9"></rect>
              </mask>
              <g mask="url(#mask0_527_522)">
                <path
                  d="M10 12.6666L9.05004 11.7333L12.1167 8.6666H1.33337V7.33327H12.1167L9.06671 4.2666L10 3.33327L14.6667 7.99994L10 12.6666Z"
                  fill="white"
                ></path>
              </g>
            </svg>
            <h1 className="w-[1px] h-6 bg-white"></h1>
            <a>Healthcare</a>
          </button>
          <button
            onClick={() => changeTab("tab3")}
            className={`bg-[#0ebab1] text-white rounded-md flex  w-96 p-6   flex-row gap-5 items-center font-poppins `}
          >
            <svg
              className="text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <mask
                id="mask0_527_522"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect width="16" height="16" fill="#D9D9D9"></rect>
              </mask>
              <g mask="url(#mask0_527_522)">
                <path
                  d="M10 12.6666L9.05004 11.7333L12.1167 8.6666H1.33337V7.33327H12.1167L9.06671 4.2666L10 3.33327L14.6667 7.99994L10 12.6666Z"
                  fill="white"
                ></path>
              </g>
            </svg>
            <h1 className="w-[1px] h-6 bg-white"></h1>
            <a>Fintech</a>
          </button>
          <button
            onClick={() => changeTab("tab4")}
            className={`bg-[#0ebab1] text-white rounded-md flex  w-96 p-6   flex-row gap-5 items-center font-poppins `}
          >
            <svg
              className="text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <mask
                id="mask0_527_522"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect width="16" height="16" fill="#D9D9D9"></rect>
              </mask>
              <g mask="url(#mask0_527_522)">
                <path
                  d="M10 12.6666L9.05004 11.7333L12.1167 8.6666H1.33337V7.33327H12.1167L9.06671 4.2666L10 3.33327L14.6667 7.99994L10 12.6666Z"
                  fill="white"
                ></path>
              </g>
            </svg>
            <h1 className="w-[1px] h-6 bg-white"></h1>
            <a>E-Commerce</a>
          </button>
          <button
            onClick={() => changeTab("tab5")}
            className={`bg-[#0ebab1] text-white rounded-md flex  w-96 p-6   flex-row gap-5 items-center font-poppins `}
          >
            <svg
              className="text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <mask
                id="mask0_527_522"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect width="16" height="16" fill="#D9D9D9"></rect>
              </mask>
              <g mask="url(#mask0_527_522)">
                <path
                  d="M10 12.6666L9.05004 11.7333L12.1167 8.6666H1.33337V7.33327H12.1167L9.06671 4.2666L10 3.33327L14.6667 7.99994L10 12.6666Z"
                  fill="white"
                ></path>
              </g>
            </svg>
            <h1 className="w-[1px] h-6 bg-white"></h1>
            <a>Gaming</a>
          </button>
        </div>
        <div>

        {activeTab === "tab1" && <div className="flex flex-row   bg-white ">
            <img className="w-[500px] h-[400px]" src="homeee (9).jpg" alt="Error" />
            <div className="bg-white p-4 flex flex-col justify-between">

            <p className="pt-6">Pave The Way for Smart Education <br /> with EdTech</p>
            <p>
            To streamline the hefty management of <br /> educational data and teacher-student interaction, <br /> we use technologies like VR/AR, AI, and Blockchain <br /> to develop seamless systems, virtual classrooms,<br /> and tools for restriction-free eLearning and better <br /> results.
            </p>
            <button
            className="bg-[#0ebab1] text-white rounded-md flex  w-96 p-6  justify-center  flex-row gap-5 items-center font-poppins"
          >
            <svg
              className="text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <mask
                id="mask0_527_522"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect width="16" height="16" fill="#D9D9D9"></rect>
              </mask>
              <g mask="url(#mask0_527_522)">
                <path
                  d="M10 12.6666L9.05004 11.7333L12.1167 8.6666H1.33337V7.33327H12.1167L9.06671 4.2666L10 3.33327L14.6667 7.99994L10 12.6666Z"
                  fill="white"
                ></path>
              </g>
            </svg>
            <a>
Learn more about our EdTech services </a>
          </button>
            </div>
            </div>}  
             {activeTab === "tab2" && <div className="flex flex-row   bg-white ">
            <img className="w-[500px] h-[400px]" src="homeee (9).jpg" alt="Error" />
            <div className="bg-white p-4 flex flex-col justify-between">

            <p className="pt-6">Healthcare Redefined Through <br /> Tech-Driven Solutions</p>
            <p>
            Achieve a big-picture view of patient care and <br /> medicinal management with the help of <br /> technology in healthcare. Through software <br /> applications and next-gen IT solutions, we bring <br /> clarity to decision-making and open doors to real- <br />time telemedicine ease.
            </p>
            <button
            className="bg-[#0ebab1] text-white rounded-md flex  w-96 p-6  justify-center  flex-row gap-5 items-center font-poppins"
          >
            <svg
              className="text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <mask
                id="mask0_527_522"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect width="16" height="16" fill="#D9D9D9"></rect>
              </mask>
              <g mask="url(#mask0_527_522)">
                <path
                  d="M10 12.6666L9.05004 11.7333L12.1167 8.6666H1.33337V7.33327H12.1167L9.06671 4.2666L10 3.33327L14.6667 7.99994L10 12.6666Z"
                  fill="white"
                ></path>
              </g>
            </svg>
            <a>
Dive into future-ready health and wellness </a>
          </button>
            </div>
            </div>} 
              {activeTab === "tab3" && <div className="flex flex-row   bg-white ">
            <img className="w-[500px] h-[400px]" src="homeee (9).jpg" alt="Error" />
            <div className="bg-white p-4 flex flex-col justify-between">

            <p className="pt-6">Revolutionized, Secure, and Swift <br /> Financial Systems</p>
            <p>
            Adopting technology for payments, P2P lending, <br /> and investment is one thing, making it secure, swift, <br /> and easy to navigate is another. We bridge the gap <br /> between advancement and smart transactions by <br />utilizing cybersecurity, business analysis, and software development            </p>
            <button
            className="bg-[#0ebab1] text-white rounded-md flex  w-96 p-6  justify-center  flex-row gap-5 items-center font-poppins"
          >
            <svg
              className="text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <mask
                id="mask0_527_522"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect width="16" height="16" fill="#D9D9D9"></rect>
              </mask>
              <g mask="url(#mask0_527_522)">
                <path
                  d="M10 12.6666L9.05004 11.7333L12.1167 8.6666H1.33337V7.33327H12.1167L9.06671 4.2666L10 3.33327L14.6667 7.99994L10 12.6666Z"
                  fill="white"
                ></path>
              </g>
            </svg>
            <a>
Embrace the future of the financial world </a>
          </button>
            </div>
            </div>}  
             {activeTab === "tab4" && <div className="flex flex-row   bg-white ">
            <img className="w-[500px] h-[400px]" src="homeee (9).jpg" alt="Error" />
            <div className="bg-white p-4 flex flex-col justify-between">

            <p className="pt-6">Optimized & Interactive <br />eCommerce Experiences</p>
            <p>
            From swift web pages to user-friendly mobile apps <br /> that generate more sales, eCommerce is <br /> experiencing rapid change in today’s world. Our <br />    developers shape immersive shopping experiences <br /> along with maintaining user data and interfaces for <br /> your business needs.            </p>
            <button
            className="bg-[#0ebab1] text-white rounded-md flex  w-96 p-6  justify-center  flex-row gap-5 items-center font-poppins"
          >
            <svg
              className="text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <mask
                id="mask0_527_522"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect width="16" height="16" fill="#D9D9D9"></rect>
              </mask>
              <g mask="url(#mask0_527_522)">
                <path
                  d="M10 12.6666L9.05004 11.7333L12.1167 8.6666H1.33337V7.33327H12.1167L9.06671 4.2666L10 3.33327L14.6667 7.99994L10 12.6666Z"
                  fill="white"
                ></path>
              </g>
            </svg>
            <a>
Change the way you manage your online business </a>
          </button>
            </div>
            </div>} 
              {activeTab === "tab5" && <div className="flex flex-row   bg-white ">
            <img className="w-[500px] h-[400px]" src="homeee (9).jpg" alt="Error" />
            <div className="bg-white p-4 flex flex-col justify-between">

            <p className="pt-6">Power The Ultimate Gaming <br /> Experience!</p>
            <p>
            Materializing gaming experiences that are rich in <br /> art, development, entertainment, and <br /> advancement is easier with our front-end and <br />back-end developers. Our extensive services <br /> include Metaverse, blockchain, UE5, and more for <br /> different platforms and genres.            </p>
            <button
            className="bg-[#0ebab1] text-white rounded-md flex  w-96 p-6  justify-center  flex-row gap-5 items-center font-poppins"
          >
            <svg
              className="text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <mask
                id="mask0_527_522"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect width="16" height="16" fill="#D9D9D9"></rect>
              </mask>
              <g mask="url(#mask0_527_522)">
                <path
                  d="M10 12.6666L9.05004 11.7333L12.1167 8.6666H1.33337V7.33327H12.1167L9.06671 4.2666L10 3.33327L14.6667 7.99994L10 12.6666Z"
                  fill="white"
                ></path>
              </g>
            </svg>
            <a>Schedule a call</a>
          </button>
            </div>
            </div>}
        </div>
      </div>
    </>
  );
}

export default About;
