import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="">
      <div className="absolute w-full">
        <Navbar />
      </div>
      {/* LANDING */}
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
      {/* STEPS */}
      <section className="bg-white text-black text-center py-14 px-3">
        <h3 className="font-semibold text-indigo-600 text-3xl">
          How to grow in the universe?
        </h3>
        <p>All you need to do in just 3 spets</p>
        <div className="mt-10 px-16">
          <h4 className="text-2xl font-semibold">Learn</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <div className="stick" />
        <div className="px-16">
          <h4 className="text-2xl font-semibold">Create</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <div className="stick" />
        <div className="px-16">
          <h4 className="text-2xl font-semibold">Travel</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
      </section>
      {/* INTEREST */}
      <section className="py-14 px-7 text-center">
        <h3 className="text-2xl uppercase font-semibold">
          Are you <span className="text-indigo-600">interested?</span>
        </h3>
        <p>Let us tell you 3 important things</p>
        {/* 3 CARDS */}
        <div className="mt-12 flex flex-col gap-8">
          <div className="border bg-white rounded-[40px] py-6 px-7 pl-24 flex items-center">
            <figure className="w-28 mx-auto absolute">
              <img
                src="/img/planet.png"
                alt="moons-img"
                className="h-full w-full relative mx-auto -left-28"
              />
            </figure>
            <div>
              <h5 className="uppercase text-indigo-600 font-semibold">Moons</h5>
              <p className="text-black text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="border bg-white rounded-[40px] py-6 px-7 pl-24 flex items-center">
            <figure className="w-28 mx-auto absolute">
              <img
                src="/img/building.png"
                alt="moons-img"
                className="h-full w-full relative mx-auto -left-28"
              />
            </figure>
            <div>
              <h5 className="uppercase text-indigo-600 font-semibold">
                Buildings
              </h5>
              <p className="text-black text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="border bg-white rounded-[40px] py-6 px-7 pl-24 flex items-center">
            <figure className="w-28 h-28 mx-auto absolute">
              <img
                src="/img/shield.png"
                alt="moons-img"
                className="h-full w-full relative mx-auto -left-28"
              />
            </figure>
            <div>
              <h5 className="uppercase text-indigo-600 font-semibold">
                Spacing Guild
              </h5>
              <p className="text-black text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="message_container min-h-screen">
        <div className="h-screen w-full flex items-center justify-center">
          <figure>
            <img
              src="/img/multicolor-planet.png"
              alt="multi color planet"
              className="rotate-90"
            />
          </figure>
          <div className="absolute bg-white bg-opacity-60 text-center mx-10 p-7 rounded-3xl">
            <p className="text-black text-sm">
              Bienvenido al fascinante universo de aprendizaje en línea, donde
              cada conocimiento es un planeta por descubrir y conquistar. En
              nuestra página web, te invitamos a embarcarte en un emocionante
              viaje intergaláctico de desarrollo web. Nace en un planeta y
              aprende su tecnología, crea asombrosos proyectos y expande tu
              horizonte digital como un verdadero desarrollador(a) de la web.
            </p>
            <h3 className="text-indigo-600 uppercase font-bold mt-7">
              Moonyard
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
