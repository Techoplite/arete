import Calendar from "@/components/Calendar";
import WellnessButtons from "@/components/WellnessButtons";

export default function Home() {
  return (
    <div style={{ height: "calc(100vh - 128px)" }}>
      <Calendar />
      <WellnessButtons />
    </div>
  );
}
