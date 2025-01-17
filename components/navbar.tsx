import NavLinks from "./nav-links";
import NavSocials from "./nav-socials";

export default async function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex flex-col items-start">
        <div className="text-2xl text-gray-700 font-bold">Nicolas Ottati</div>
        <div className="text-sm text-gray-500">Junior Developer | Event & Project Manager</div>
      </div>
      <NavLinks />
      <NavSocials />
    </div>
  );
}
