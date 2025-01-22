"use server";

export default async function ContactForm() {
  return (
    <div className="flex flex-col gap-4 p-10 rounded-lg shadow-xl bg-white dark:bg-neutral-800 dark:shadow-neutral-950">
      <div className="min-w-md max-w-md">
        <label
          htmlFor="input-label"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Name
        </label>
        <input
          type="text"
          id="input-label"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="John Doe"
        />
      </div>
      <div className="min-w-md max-w-md">
        <label
          htmlFor="input-label"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="input-label"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="john@doe.com"
        />
      </div>
      <div className="relative min-w-md max-w-md space-y-3">
        <textarea
          className="sm:p-5 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          rows={3}
          placeholder="Write your message here"
        ></textarea>
        <div className="absolute bottom-2 end-3 z-10">
          <button
            type="button"
            className="py-1.5 px-3 inline-flex shrink-0 justify-center items-center text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
