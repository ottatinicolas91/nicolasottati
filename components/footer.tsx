import NavSocials from "./nav-socials";

export default function Footer() {
  return (
    <footer className="bg-white py-6 mt-auto">
      <div className="flex justify-between items-center p-4">
        <p className="text-sm text-gray-500">&copy; 2023 Nicolas Ottati. All rights reserved.</p>
        <p className="text-sm text-gray-500">Developed by Nicolas Ottati</p>
        <NavSocials />
      </div>
    </footer>
  );
}
