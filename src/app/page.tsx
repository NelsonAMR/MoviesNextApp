import { Menu, Movies } from "@/components";

export default function Home() {
  return (
    <main className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold">Popular Movies</h2>
      <div className="flex gap-6 mt-4">
        <Menu />
        <Movies />
      </div>
    </main>
  );
}
