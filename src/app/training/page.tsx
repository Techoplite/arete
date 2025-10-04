import BackButton from "@/components/BackButton";
import SearchBar from "@/components/SearchBar";

export default function page() {
  return (
    <div className="flex flex-row justify-between items-center">
      <BackButton />
      <SearchBar />
    </div>
  );
}
