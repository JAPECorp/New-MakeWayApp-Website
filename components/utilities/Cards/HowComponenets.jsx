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
                    id="Add_User"
                    data-name="Add User"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="18"
                    viewBox="0 0 20 19"
                  >
                    <path
                      id="Add_User-2"
                      data-name="Add User"
                      d="M0,15.746c0-2.585,3.454-3.231,7.5-3.231,4.067,0,7.5.669,7.5,3.253S11.545,19,7.5,19C3.434,19,0,18.329,0,15.746Zm16.1-5.658V8.911H14.9a.912.912,0,0,1,0-1.823h1.2V5.911a.9.9,0,1,1,1.8,0V7.088h1.2a.912.912,0,0,1,0,1.823H17.9v1.177a.9.9,0,1,1-1.8,0ZM2.537,5.027a4.963,4.963,0,1,1,9.925,0,4.963,4.963,0,1,1-9.925,0Z"
                      fill="#1E5CDE"
                    />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                  Create an Account
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Both parties (people whose cars have been blocked by each
                  other) should have the MakeWay app downloaded on their phones
                  and register by adding some basic information (phone number
                  and email address).
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="ring">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="18"
                    viewBox="0 0 20 20"
                  >
                    <g id="Plus" transform="translate(0 0)">
                      <path
                        id="Plus-2"
                        data-name="Plus"
                        d="M14.67,20H5.33a5.349,5.349,0,0,1-3.944-1.394A5.356,5.356,0,0,1,0,14.67V5.33A5.358,5.358,0,0,1,1.386,1.386,5.358,5.358,0,0,1,5.33,0h9.33a5.372,5.372,0,0,1,3.945,1.386A5.345,5.345,0,0,1,20,5.33v9.34C20,18.057,18.057,20,14.67,20ZM6.33,9.16a.819.819,0,0,0-.83.83.839.839,0,0,0,.83.84H9.16V13.66a.83.83,0,1,0,1.66,0V10.83h2.84a.835.835,0,0,0,0-1.669H10.82V6.34a.83.83,0,1,0-1.66,0V9.16Z"
                        transform="translate(0 0)"
                        fill="#1E5CDE"
                      />
                    </g>
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  Add Your Car Number/The Number of A Car You Often Use
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
                    id="Send"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="18"
                    viewBox="0 0 20 20"
                  >
                    <path
                      id="Send-2"
                      data-name="Send"
                      d="M19.435.582A1.933,1.933,0,0,0,17.5.079L1.408,4.76A1.919,1.919,0,0,0,.024,6.281a2.253,2.253,0,0,0,1,2.1L6.06,11.477a1.3,1.3,0,0,0,1.61-.193l5.763-5.8a.734.734,0,0,1,1.06,0,.763.763,0,0,1,0,1.067l-5.773,5.8a1.324,1.324,0,0,0-.193,1.619L11.6,19.054A1.91,1.91,0,0,0,13.263,20a2.078,2.078,0,0,0,.25-.01A1.95,1.95,0,0,0,15.144,18.6L19.916,2.525a1.964,1.964,0,0,0-.48-1.943"
                      fill="#1E5CDE"
                    />
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
          <div className="h-full w-full relative">
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
