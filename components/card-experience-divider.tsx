export default function CardExperienceDivider() {
  return (
    <div className="flex flex-col w-full px-4 md:px-5 mx-4 items-center -mt-2">
      <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
        <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
      </div>
        <div className="w-1 h-24 bg-neutral-200 dark:bg-neutral-800 rounded-full -mt-2"></div>
    </div>
  );
}