import Calendar from "@/components/Calendar";
import WellnessButtons from "@/components/WellnessButtons";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#1a1a1a] to-[#000000] px-4 py-4 h-[-webkit-fill-available] flex flex-col">
      <Calendar />
      <WellnessButtons />
    </div>
  );
}
