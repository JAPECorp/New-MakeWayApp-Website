import Image from "next/image";
import React from "react";

function HowComponent(props) {
  return (
    <div className="mt-20">
      <div
        className={`flex ${
          props.flexDirection ?? "flex-col"
        } w-full bg-slate-40 justify-center gap-10
      lg:gap-28 
      lg:h-ijikod-px-450 lg:flex-row
      
      `}
      >
        <div className="w-full flex items-center">
          <div>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-6">
                <span className="ring">
                  <svg
                    className="w-3 h-3 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"></path>
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                  Create an Account
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Both parties (people whoses cars have been blocked by each
                  other) should have the MakeWay app downloaded on their phones
                  and register by adding some basic information (phone number
                  and email address).
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="ring">
                  <svg
                    className="w-3 h-3 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"></path>
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  Add Your Car Number
                </h3>

                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  After being registered, add your car number to your account.
                  i.e please enter your own car number or a car you often use
                  number.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="ring">
                  <svg
                    className="w-3 h-3 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"></path>
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 d">
                  Ping The Car Blocking You
                </h3>

                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Send a request to the owner of the car preventing you from
                  moving by entering the car number and clicking on the ping
                  button to notify the Car owner that he/she is blocking you.
                </p>
              </li>
            </ol>
          </div>
        </div>

        <div className="w-full ">
          <div className="h-full w-full relative hidden lg:block">
            <Image
              objectFit="contain"
              src={props.src}
              alt="how-Image"
              width="750px"
              height="900px"
              // layout="fill" // layout="fill", layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowComponent;
