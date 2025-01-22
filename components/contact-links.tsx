"use client";

import React, { useEffect, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const ContactLinks = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-xs flex flex-col my-4">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg hover:bg-gray-200 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        href={isMobile ? "tel:+971588464354" : "sms:+971588464354"}
      >
        <Phone strokeWidth={1.5} />
        +971 58 846 4354
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg hover:bg-gray-200 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        href="https://github.com/ottatinicolas91"
      >
        <Mail strokeWidth={1.5} />
        ottatinicolas91@gmail.com
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg hover:bg-gray-200 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        href="https://www.linkedin.com/in/nicolas-ottati/"
      >
        <MapPin strokeWidth={1.5} />
        Dubai, UAE
      </Link>
    </div>
  );
};

export default ContactLinks;
