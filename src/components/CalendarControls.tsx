import getCurrentMonth from "@/utils/getCurrentMonth";
import getCurrentYear from "@/utils/getCurrentYear";
// import { MouseEventHandler, useState } from "react";

export default function CalendarControls() {
  //   const [next, setNext] = useState(false);
  //   const [prev, setPrev] = useState(false);
  //   const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
  //     console.log("click");

  //     if ((e.target as HTMLButtonElement)?.id === "next") {
  //       setNext(true);
  //       setPrev(false);
  //     }
  //     if ((e.target as HTMLButtonElement)?.id === "prev") {
  //       setPrev(true);
  //       setNext(false);
  //     }
  //   };

  //   const hidden = "opacity-0 w-0";
  //   const visible = "w-full";

  return (
    <div className="flex flex-row justify-center align-center">
      <button
        id="prev"
        className="px-4 py-2 bg-dark cursor-pointer"
        // onClick={handleClick}
      >
        <svg
          className="pointer-events-none"
          width="15"
          height="24"
          viewBox="0 0 15 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.82 21.18L5.66 12L14.82 2.82L12 0L0 12L12 24L14.82 21.18Z"
            fill="white"
          />
        </svg>
      </button>
      <div className="text-2xl self-center text-center w-full">
        {getCurrentMonth()} {getCurrentYear()}
      </div>
      {/* <div
        className={`text-2xl self-center text-center transition-all ${
          prev ? visible : hidden
        }`}
      >
        prev 2024
      </div>
      <div
        className={`text-2xl self-center text-center transition-all ${
          prev || next ? "translate-x-full opacity-0 w-0" : "w-full"
        }`}
      >
        {getCurrentMonth()} {getCurrentYear()}
      </div>
      <div
        className={`text-2xl self-center text-center transition-all ${
          next ? visible : hidden
        }`}
      >
        next 2024
      </div> */}

      <button
        id="next"
        className="px-4 py-2 bg-dark cursor-pointer"
        // onClick={handleClick}
      >
        <svg
          className="pointer-events-none"
          width="15"
          height="24"
          viewBox="0 0 15 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.179932 21.18L9.33993 12L0.179932 2.82L2.99993 0L14.9999 12L2.99993 24L0.179932 21.18Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
