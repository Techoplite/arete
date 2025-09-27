import styles from "./WellnessButton.module.scss";

export default function WellnessButton({
  label,
  color,
}: {
  label: string;
  color: string;
}) {
  return (
    <button
      className={`${styles[color]} w-full h-[-webkit-fill-available] flex-1 ${styles.button}`}
    >
      {label}
    </button>
  );
}
