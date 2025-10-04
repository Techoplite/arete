import Link from "next/link";
import styles from "./WellnessButton.module.scss";

export default function WellnessButton({
  label,
  color,
}: {
  label: string;
  color: string;
}) {
  return (
    <Link
      href={label.toLowerCase()}
      className={`${styles[color]} w-full h-[-webkit-fill-available] flex items-center justify-center text-lg py-2`}
    >
      {label}
    </Link>
  );
}
