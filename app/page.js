import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="home_view">
      {/* <div className="absolute w-full">
        <Navbar />
      </div> */}

      {/* LANDING */}
      <div className="home_container min-h-screen">
        <div className="h-screen bg-black bg-opacity-30 flex justify-center items-center">
          <div className="text-center px-14">
            <h1 className="uppercase font-bold text-4xl md:text-5xl">
              The knowledge must flow
            </h1>
            <p className="text-md max-w-xs mx-auto md:text-lg">
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
      <section className="bg-white text-black text-center lg:text-left py-14 px-10 md:py-20">
        <div className="max-w-5xl lg:mx-auto">
          <h3 className="font-semibold text-indigo-600 text-3xl">
            How to grow in the universe?
          </h3>
          <p>All you need to do in just 3 steps</p>
          <div className="lg:grid grid-cols-3 lg:mt-11">
            <div className="mt-10 lg:mt-0 px-16 lg:px-0">
              <div className="flex w-fit mx-auto lg:mx-0 text-2xl items-center gap-2">
                <div className="text-3xl lg:text-indigo-600">
                  <i className="lni lni-invention"></i>
                </div>
                <h4 className="font-semibold lg:text-indigo-600">Learn</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
            <div className="stick lg:hidden" />
            <div className="px-16 lg:px-0">
              <div className="flex w-fit mx-auto lg:mx-0 text-2xl items-center gap-2">
                <div className="text-2xl lg:text-indigo-600 lg:text-3xl">
                  <i className="lni lni-hammer"></i>
                </div>
                <h4 className="font-semibold lg:text-indigo-600">Create</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
            <div className="stick lg:hidden" />
            <div className="px-16 lg:px-0">
              <div className="flex w-fit mx-auto lg:mx-0 text-2xl items-center gap-2">
                <div className="lg:text-indigo-600 lg:text-3xl">
                  <i className="lni lni-rocket"></i>
                </div>
                <h4 className="font-semibold lg:text-indigo-600">Travel</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* INTEREST */}
      <section className="py-14 lg:py-24 px-7 text-center">
        <h3 className="text-2xl uppercase font-semibold">
          Are you <span className="text-indigo-600">interested?</span>
        </h3>
        <p>Let us tell you 3 important things</p>
        {/* 3 CARDS */}
        <div className="mt-12 lg:mt-36 flex max-lg:flex-col gap-8 lg:grid grid-cols-3 lg:max-w-4xl mx-auto">
          <div className="border bg-white rounded-[40px] lg:rounded-3xl py-6 lg:pb-8 lg:pt-20 px-7 max-lg:pl-24 lg:h-fit flex lg:flex-col lg:justify-between items-center max-w-xl mx-auto">
            <figure className="w-28 lg:w-36 mx-auto max-lg:absolute absolute">
              <img
                src="/img/planet.png"
                alt="moons-img"
                className="h-full w-full mx-auto relative lg:-top-40 max-lg:-left-28"
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
          <div className="border bg-white rounded-[40px] lg:rounded-3xl py-6 lg:pb-8 lg:pt-20 px-7 max-lg:pl-24 lg:h-fit flex lg:flex-col lg:justify-between items-center max-w-xl mx-auto">
            <figure className="w-28 lg:w-36 mx-auto max-lg:absolute absolute">
              <img
                src="/img/building.png"
                alt="moons-img"
                className="h-full w-full mx-auto relative lg:-top-40 max-lg:-left-28"
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
          <div className="border bg-white rounded-[40px] lg:rounded-3xl py-6 lg:pb-8 lg:pt-20 px-7 max-lg:pl-24 lg:h-fit flex lg:flex-col lg:justify-between items-center max-w-xl mx-auto">
            <figure className="w-28 lg:w-36 mx-auto max-lg:absolute absolute">
              <img
                src="/img/shield.png"
                alt="moons-img"
                className="h-full w-full mx-auto relative lg:-top-40 max-lg:-left-28"
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
      {/* HOME MESSAGE */}
      <section className="stars_bg min-h-screen">
        <div className="h-screen w-full flex items-center justify-center">
          <figure>
            <img
              src="/img/multicolor-planet.png"
              alt="multi color planet"
              className="rotate-90"
            />
          </figure>
          <div className="absolute bg-white bg-opacity-60 text-center mx-10 p-7 rounded-3xl max-w-2xl">
            <p className="text-black text-sm lg:text-base">
              Bienvenido al fascinante universo de aprendizaje en línea, donde
              cada conocimiento es un planeta por descubrir y conquistar. En
              nuestra página web, te invitamos a embarcarte en un emocionante
              viaje intergaláctico de desarrollo web. Nace en un planeta y
              aprende su tecnología, crea asombrosos proyectos y expande tu
              horizonte digital como un verdadero desarrollador(a) de la web.
            </p>
            <h3 className="text-indigo-600 uppercase font-bold mt-7 lg:text-xl">
              Moonyard
            </h3>
          </div>
        </div>
      </section>
      {/* PLANETS */}
      <section className="stars_bg text-center font-semibold text-2xl px-10 pb-16 lg:pb-28">
        <h2 className="uppercase lg:text-2xl">
          Travel across
          <span className="text-indigo-600"> different planets</span>
        </h2>
        {/* PLANETS WRAPPER */}
        <div className="mt-10 lg:mt-20 flex flex-col gap-5 lg:gap-24">
          <div className="flex flex-col lg:flex-row gap-7 lg:gap-10 items-center justify-center">
            <figure className="w-52">
              <img
                src="/img/p1.png"
                alt="codeon planet image"
                className="h-full w-full"
              />
            </figure>
            <div className="lg:text-left">
              <h5 className="text-indigo-600 mb-2 text-2xl">Codeon</h5>
              <p className="text-base">
                <span className="text-indigo-400">Population: </span>356
                inhabitants. <br />
                <span className="text-indigo-400">Spoken language: </span>HTML
                and CSS. <br />
                <span className="text-indigo-400">
                  Number of routes:
                </span> 4. <br />
                <span className="text-indigo-400">Motto: </span>Strong
                foundations are everything.
              </p>
            </div>
          </div>
          <div className="stick lg:hidden" />
          <div className="flex flex-col lg:flex-row gap-7 lg:gap-10 items-center justify-center">
            <figure className="w-72 lg:order-last">
              <img
                src="/img/p2.png"
                alt="scriptia planet image"
                className="h-full w-full"
              />
            </figure>
            <div className="lg:text-right">
              <h5 className="text-indigo-600 mb-2 text-2xl">Scriptia</h5>
              <p className="text-base">
                <span className="text-indigo-400">Population:</span> 248
                inhabitants. <br />
                <span className="text-indigo-400">Spoken language: </span>
                Javascript. <br />
                <span className="text-indigo-400">
                  Number of routes:
                </span> 5. <br />
                <span className="text-indigo-400">Motto:</span> Give me a goal
                and I will achieve it.
              </p>
            </div>
          </div>
          <div className="stick lg:hidden" />
          <div className="flex flex-col lg:flex-row gap-7 lg:gap-10 items-center justify-center">
            <figure className="w-36">
              <img
                src="/img/p3.png"
                alt="codeon planet image"
                className="h-full w-full"
              />
            </figure>
            <div className="lg:text-left">
              <h5 className="text-indigo-600 mb-2 text-2xl">Pytherium</h5>
              <p className="text-base">
                <span className="text-indigo-400">Population: </span>
                1045 inhabitants. <br />
                <span className="text-indigo-400">Spoken language: </span>
                Python. <br />
                <span className="text-indigo-400">
                  Number of routes:{" "}
                </span>8. <br />
                <span className="text-indigo-400">Motto: </span>Observe,
                automate and surpass.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* LATEST POSTS */}
      <section className="p-10 py-14">
        <h2 className="uppercase text-2xl font-semibold text-center mb-10">
          Latest <span className="text-indigo-600">posts</span>
        </h2>
        <div className="flex flex-col lg:flex-row lg:max-w-3xl w-full mx-auto gap-5 md:gap-10 items-center">
          <div className="rounded-lg overflow-hidden text-black border-2  border-indigo-600 max-w-xl">
            <figure className="w-full h-44">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8fDA%3D"
                alt="post image"
                className="h-full w-full object-cover object-center"
              />
            </figure>
            <div className="bg-white px-6 py-3">
              <p className="text-sm">20 Oct 2023</p>
              <h4 className="text-xl font-medium">Some title</h4>
              <p className="text-sm line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="text-white bg-indigo-600 rounded-full px-3 py-2 mt-3">
                Read more
              </button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden text-black border-2  border-indigo-600 max-w-xl">
            <figure className="w-full h-44">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8fDA%3D"
                alt="post image"
                className="h-full w-full object-cover object-center"
              />
            </figure>
            <div className="bg-white px-6 py-3">
              <p className="text-sm">20 Oct 2023</p>
              <h4 className="text-xl font-medium">Some title</h4>
              <p className="text-sm line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="text-white bg-indigo-600 rounded-full px-3 py-2 mt-3">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center w-fit mx-auto px-5 py-1 mt-10">
          <p className="text-center">More posts</p>
          <i className="lni lni-chevron-right"></i>
        </div>
      </section>
    </main>
  );
}
