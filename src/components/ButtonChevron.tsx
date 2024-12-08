import { PREV, NEXT } from "@/app/constants";
import React, { MouseEventHandler } from "react";

export default function ButtonChevron(props: {
  position: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const { position, handleClick } = props;
  return (
    <button
      id={position}
      className="px-4 py-2 bg-dark cursor-pointer"
      onClick={handleClick}
    >
      {position === PREV && (
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
      )}
      {position === NEXT && (
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
      )}
    </button>
  );
}
