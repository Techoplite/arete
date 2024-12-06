import getCurrentMonth from "@/utils/getCurrentMonth";
import getCurrentYear from "@/utils/getCurrentYear";
import getPreviousCurrentNextMonth from "@/utils/getPreviousCurrentNextMonth";
import { MouseEventHandler, useEffect, useState } from "react";

export default function CalendarControls() {
  const PREV = "PREV";
  const NEXT = "NEXT";

  const currentMonth = getCurrentMonth();
  const currentYear = getCurrentYear();

  const date = `${currentMonth} ${currentYear}`;

  const [months, setMonths] = useState<string[]>(
    getPreviousCurrentNextMonth(date)
  );

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if ((event.target as HTMLButtonElement).id === PREV)
      setMonths(getPreviousCurrentNextMonth(months[0]));
    if ((event.target as HTMLButtonElement).id === NEXT)
      setMonths(getPreviousCurrentNextMonth(months[2]));
  };

  useEffect(() => {
    console.log("months", months);
  });

  return (
    <div className="flex flex-row justify-center align-center">
      <button
        id={PREV}
        className="px-4 py-2 bg-dark cursor-pointer"
        onClick={handleClick}
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

      <div></div>

      <button
        id={NEXT}
        className="px-4 py-2 bg-dark cursor-pointer"
        onClick={handleClick}
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
