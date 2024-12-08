import getCurrentMonth from "@/utils/getCurrentMonth";
import getCurrentYear from "@/utils/getCurrentYear";
import getPreviousCurrentNextMonth from "@/utils/getPreviousCurrentNextMonth";
import { MouseEventHandler, useState } from "react";
import ButtonChevron from "./ButtonChevron";
import { NEXT, PREV } from "@/app/constants";



export default function CalendarControls() {
  const currentMonth = getCurrentMonth();
  const currentYear = getCurrentYear();

  const date = `${currentMonth} ${currentYear}`;

  const [months, setMonths] = useState<string[]>(
    getPreviousCurrentNextMonth(date)
  );

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newLocal = (event.target as HTMLButtonElement).id === PREV;
    if (newLocal)
      setMonths(getPreviousCurrentNextMonth(months[0]));
    if ((event.target as HTMLButtonElement).id === NEXT)
      setMonths(getPreviousCurrentNextMonth(months[2]));
  };

  return (
    <div className="flex flex-row justify-center align-center">
      <ButtonChevron position={PREV} handleClick={handleClick} />
      <div className="w-full text-2xl text-center">{months[1]}</div>
      <ButtonChevron position={NEXT} handleClick={handleClick} />
    </div>
  );
}
