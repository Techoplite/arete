import WellnessButton from "./WellnessButton";

export default function WellnessButtons() {
  return (
    <div className="flex gap-2.5 flex-col w-full flex-1">
      <WellnessButton label="Training" color="red" />
      <WellnessButton label="Nutrition" color="green" />
    </div>
  );
}
