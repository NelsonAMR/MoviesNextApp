import { Filters, Movies } from "@/components";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h2>Popular Movies</h2>
      <div className="flex gap-4">
        <Filters />
        <Movies />
      </div>
    </main>
  );
}
