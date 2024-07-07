import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
        <div className="lg:col-span-5 lg:col-start-1">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl text-gray-800 font-bold lg:text-4xl dark:text-neutral-200">
              It is all about learning from the best
            </h2>
            <p className="text-gray-600 dark:text-neutral-400">
              we have tutors from all over the world who are ready to teach you
              the best of what they know. We have the best tutors in the market.
            </p>
          </div>

          <blockquote className="relative">
            <svg
              className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200 dark:text-neutral-800"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                fill="currentColor"
              />
            </svg>

            <div className="relative z-10">
              <p className="text-xl italic text-gray-800 dark:text-white">
                Amazing people to work with. Very professional.
              </p>
            </div>

            <footer className="mt-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {/* <Image
                    className="size-8 rounded-full"
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                      alt="Image Description"
                                      width={32}
                                        height={32}
                                        /> */}
                </div>
                <div className="grow ms-4">
                  <div className="font-semibold text-gray-800 dark:text-neutral-200">
                    Grace Ekirapa
                  </div>
                  <div className="text-xs text-gray-500 dark:text-neutral-500">
                    Student | Somesha
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>

        <div className="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
          <div className="space-y-6 sm:space-y-8">
            <ul className="grid grid-cols-2 divide-y-2 divide-x-2 divide-gray-200 overflow-hidden dark:divide-neutral-700">
              <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-neutral-200">
                  5k+
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400">
                  Students who have taken courses with us
                </p>
              </li>

              <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-neutral-200">
                  <svg
                    className="flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m5 12 7-7 7 7" />
                    <path d="M12 19V5" />
                  </svg>
                  18
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400">
                  Countries where our tutors are from
                </p>
              </li>

              <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-neutral-200">
                  <svg
                    className="flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m5 12 7-7 7 7" />
                    <path d="M12 19V5" />
                  </svg>
                  98%
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400">
                  Our customer satisfaction rate
                </p>
              </li>

              <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-neutral-200">
                  113
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400">
                  The number of tutors we have in our platform
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
