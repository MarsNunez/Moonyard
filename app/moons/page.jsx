import Link from "next/link";

const Moons = () => {
  return (
    <section className="screen">
      <div className="text-center py-24 lg:pt-32 px-5">
        <h2 className="uppercase font-semibold text-2xl lg:text-3xl">
          Choose a moon,{" "}
          <span className="text-indigo-600">travel and learn</span> its
          technology
        </h2>
        <section className="text-center font-semibold text-2xl px-10 max-lg:pb-16">
          {/* PLANETS WRAPPER */}
          <div className="mt-10 lg:mt-20 flex max-lg:flex-col gap-5 lg:gap-10 lg:grid grid-cols-3 max-w-6xl mx-auto">
            <Link
              href={"/moons/codeon"}
              className="flex flex-col gap-7 lg:gap-10 max-lg:items-center max-lg:justify-center group"
            >
              <div className="lg:min-h-[290px] flex items-center justify-center">
                <figure className="w-52 group-hover:scale-110 duration-200">
                  <img
                    src="/img/p1.png"
                    alt="codeon planet image"
                    className="h-full w-full"
                  />
                </figure>
              </div>
              <div className="">
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
            </Link>
            <div className="stick lg:hidden" />
            <Link
              href={"/moons/scriptia"}
              className="flex flex-col gap-7 lg:gap-10 max-lg:items-center max-lg:justify-center group"
            >
              <div className="lg:min-h-[290px] flex items-center justify-center">
                <figure className="w-72 group-hover:scale-110 duration-200">
                  <img
                    src="/img/p2.png"
                    alt="scriptia planet image"
                    className="h-full w-full"
                  />
                </figure>
              </div>
              <div className="">
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
            </Link>
            <div className="stick lg:hidden" />
            <Link
              href={"/moons/pytherium"}
              className="flex flex-col gap-7 lg:gap-10 max-lg:items-center max-lg:justify-center group"
            >
              <div className="lg:min-h-[290px] flex items-center justify-center">
                <figure className="w-36 group-hover:scale-110 duration-200">
                  <img
                    src="/img/p3.png"
                    alt="codeon planet image"
                    className="h-full w-full"
                  />
                </figure>
              </div>
              <div className="">
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
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Moons;
