import React, { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Somesha"
          >
            Somesha
          </a>
          <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
            © 2024 somesha.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
            Product
          </h4>
          <div className="mt-3 grid space-y-3 text-sm">
            {["Pricing", "Docs"].map((item) => (
              <p key={item}>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  {item}
                </a>
              </p>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
            Company
          </h4>
          <div className="mt-3 grid space-y-3 text-sm">
            {["About us", "Blog", "Careers", "Newsroom", "Sitemap"].map(
              (item, index) => (
                <p key={item}>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                    href="#"
                  >
                    {item}
                  </a>
                  {item === "Careers" && (
                    <span className="inline text-blue-600 dark:text-blue-500">
                      ~ not hiring
                    </span>
                  )}
                </p>
              )
            )}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
            Resources
          </h4>
          <div className="mt-3 grid space-y-3 text-sm">
            {["Help & Support", "What's New"].map((item) => (
              <p key={item}>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  {item}
                </a>
              </p>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
            Developers
          </h4>
          <div className="mt-3 grid space-y-3 text-sm">
            {["Api", "GitHub"].map((item) => (
              <p key={item}>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  {item}
                </a>
              </p>
            ))}
          </div>
          <h4 className="mt-7 text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
            Industries
          </h4>
          <div className="mt-3 grid space-y-3 text-sm">
            {["Education"].map((item) => (
              <p key={item}>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  {item}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-5 mt-5 border-t border-gray-200 dark:border-neutral-700">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex items-center gap-x-3">
            <div className="hs-dropdown relative inline-flex">
              <button
                id="footer-language-dropdown"
                type="button"
                className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                onClick={toggleMenu}
              >
                <svg
                  className="size-3 rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                  id="flag-icon-css-us1"
                  viewBox="0 0 512 512"
                >
                  <g fillRule="evenodd">
                    <g strokeWidth="1pt">
                      <path
                        fill="#bd3d44"
                        d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                        transform="scale(3.9385)"
                      />
                      <path
                        fill="#fff"
                        d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                        transform="scale(3.9385)"
                      />
                    </g>
                    <path
                      fill="#192f5d"
                      d="M0 0h98.8v70H0z"
                      transform="scale(3.9385)"
                    />
                    <path
                      fill="#fff"
                      d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.3-1.7L6 18.5l1-2.7L4.6 14h3zm16.4 0l1 2.8h2.9l-2.3 1.7 1 2.7-2.4-1.7-2.4 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 17.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                      transform="scale(3.9385)"
                    />
                  </g>
                </svg>
                English
                <svg
                  className="hs-dropdown-toggle-icon h-2.5 w-2.5 text-gray-600 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.25 6.25L8 9.5L4.75 6.25"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={`hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[7.5rem] bg-white shadow-md dark:bg-neutral-800 mt-2 absolute ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {[
                  "Deutsch",
                  "Español",
                  "Français",
                  "Italiano",
                  "日本語",
                  "한국어",
                  "Nederlands",
                  "Português",
                  "Pусский",
                  "中文",
                ].map((lang) => (
                  <a
                    key={lang}
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700"
                    href="#"
                  >
                    {lang}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <ul className="mt-3 sm:mt-0 inline-flex gap-x-5 text-gray-600 dark:text-neutral-400">
            {["Terms", "Privacy", "Licenses"].map((item) => (
              <li key={item}>
                <a
                  className="hover:text-gray-800 dark:hover:text-neutral-200"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
