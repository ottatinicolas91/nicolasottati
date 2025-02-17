"use client";

import { useEffect } from "react";

export default function ModalProject({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    window.addEventListener("keydown", handleKeyDown);
    disableScroll();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      enableScroll();
    };
  }, [onClose]);

  return (
    <div
      id="hs-vertically-centered-scrollable-modal"
      className="hs-overlay fixed inset-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none bg-neutral-900 bg-opacity-80 flex items-center justify-center"
      role="dialog"
      tabIndex={-1}
      aria-labelledby="hs-vertically-centered-scrollable-modal-label"
    >
      <div
        className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-100 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
            <h3
              id="hs-vertically-centered-scrollable-modal-label"
              className="font-bold text-gray-800 dark:text-white"
            >
              Modal title
            </h3>
            <button
              type="button"
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
              aria-label="Close"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg
                className="shrink-0 size-4"
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
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-4 overflow-y-auto">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Be bold
                </h3>
                <p className="mt-1 text-gray-800 dark:text-neutral-400">
                  Motivate teams to do their best work. Offer best practices to
                  get users going in the right direction. Be bold and offer just
                  enough help to get the work started, and then get out of the
                  way. Give accurate information so users can make educated
                  decisions. Know your user&apos;s struggles and desired outcomes and
                  give just enough information to let them get where they need
                  to go.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Be optimistic
                </h3>
                <p className="mt-1 text-gray-800 dark:text-neutral-400">
                  Focusing on the details gives people confidence in our
                  products. Weave a consistent story across our fabric and be
                  diligent about vocabulary across all messaging by being brand
                  conscious across products to create a seamless flow across all
                  the things. Let people know that they can jump in and start
                  working expecting to find a dependable experience across all
                  the things. Keep teams in the loop about what is happening by
                  informing them of relevant features, products and
                  opportunities for success. Be on the journey with them and
                  highlight the key points that will help them the most - right
                  now. Be in the moment by focusing attention on the important
                  bits first.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Be practical, with a wink
                </h3>
                <p className="mt-1 text-gray-800 dark:text-neutral-400">
                  Keep our own story short and give teams just enough to get
                  moving. Get to the point and be direct. Be concise - we tell
                  the story of how we can help, but we do it directly and with
                  purpose. Be on the lookout for opportunities and be quick to
                  offer a helping hand. At the same time realize that novbody
                  likes a nosy neighbor. Give the user just enough to know that
                  something awesome is around the corner and then get out of the
                  way. Write clear, accurate, and concise text that makes
                  interfaces more usable and consistent - and builds trust. We
                  strive to write text that is understandable by anyone,
                  anywhere, regardless of their culture or language so that
                  everyone feels they are part of the team.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
