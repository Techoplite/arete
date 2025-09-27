import Calendar from "@/components/Calendar";
import WellnessButtons from "@/components/WellnessButtons";

export default function Home() {
  return (
    <div className="h-screen px-2 py-16 flex flex-col gap-[20px]">
      <Calendar />
      <WellnessButtons />
    </div>
  );
}
