export function Header() {
  return (
    <header className="bg-primary h-14">
      <div className="container flex justify-between items-center mx-auto h-full gap-10">
        <h1 className="text-2xl font-bold text-secondary">MOVIES</h1>
        <input
          type="text"
          className="rounded p-1 pl-2 outline-none w-full max-w-lg"
          placeholder="Search a movie..."
        />
      </div>
    </header>
  );
}
