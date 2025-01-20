import NavSocials from "./nav-socials";

export default function Footer() {
  return (
    <footer className="bg-white py-8 mt-auto relative">
      <div className="bg-gradient-to-r from-transparent via-gray-200 to-transparent h-1 absolute top-0 left-0 right-0"></div>
      <div className="flex justify-between items-center p-4">
        <p className="text-sm text-gray-500">
          &copy; 2023 Nicolas Ottati. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">Developed by Nicolas Ottati</p>
        <NavSocials />
      </div>
    </footer>
  );
}
