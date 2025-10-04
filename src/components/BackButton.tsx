import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="text-foreground px-6 bg-gray h-[-webkit-fill-available] flex items-center justify-center"
    >
      {" "}
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
    </Link>
  );
}
