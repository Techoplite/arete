export default function getCurrentYear(): number {
  const date = new Date();
  return date.getFullYear();
}
