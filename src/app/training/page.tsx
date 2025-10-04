import BackButton from "@/components/BackButton";
import SearchBar from "@/components/SearchBar";

export default function page() {
  const data = [
    { name: "Pull ups", caloriesPerUnit: 10 },
    { name: "Push ups", caloriesPerUnit: 8 },
    { name: "Squats", caloriesPerUnit: 7 },
    { name: "Lunges", caloriesPerUnit: 9 },
    { name: "Plank", caloriesPerUnit: 5 },
    { name: "Burpees", caloriesPerUnit: 12 },
    { name: "Mountain Climbers", caloriesPerUnit: 11 },
    { name: "Jumping Jacks", caloriesPerUnit: 6 },
    { name: "Sit ups", caloriesPerUnit: 8 },
    { name: "Leg Raises", caloriesPerUnit: 7 },
  ];

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <BackButton />
        <SearchBar />
      </div>
      {data.map((exercise) => (
        <div key={exercise.name} className="bg-gray p-2 w-full">
          <h2 className="text">{exercise.name}</h2>
          <p className="text-light-gray">
            {exercise.caloriesPerUnit} calories burned
          </p>
        </div>
      ))}
    </>
  );
}
