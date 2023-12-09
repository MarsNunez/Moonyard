import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="">
      <div className="absolute w-full">
        <Navbar />
      </div>
      {/* HOME VIEW */}
      <div className="home_container min-h-screen">
        <div className=" h-screen bg-black bg-opacity-30 flex items-center">
          <div className="text-center">
            <h1 className="uppercase font-bold text-4xl">
              The knowledge must flow
            </h1>
            <p className="text-md max-w-xs mx-auto">
              Join us and start your web development odyssey in the digital
              cosmos!
            </p>
            <button className="p-2 px-4 mt-5 rounded-md bg-indigo-600">
              <p>You were born on a moon and...</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
