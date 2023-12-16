import SessionVideoCard from "@/app/components/SessionVideoCard";

const CourseMainPage = () => {
  return (
    <section className="screen pt-[54px]">
      <iframe
        className="w-full h-56 lg:border-2 sm:h-72 md:h-96 lg:rounded-sm shadow-2xl border-indigo-700 lg:h-60"
        src="https://www.youtube.com/embed/4dprtEzunIk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
      ></iframe>
      <div className="px-7 mt-5">
        <h2 className="text-indigo-600 uppercase font-bold text-sm">Course</h2>
        <h2 className="text-2xl decoration-indigo-600 underline underline-offset-4">
          Python basic course
        </h2>
        <p className="text-sm mt-2">
          Discover the fascinating Pytherium, where each course is a door to
          mastering this powerful language!
        </p>
        <div className="mt-2 flex flex-col gap-1">
          <div className="flex items-center text-sm gap-2">
            <p>4.6</p>
            <div className="flex text-xs gap-[2px] text-indigo-600">
              <i class="lni lni-star-fill"></i>
              <i class="lni lni-star-fill"></i>
              <i class="lni lni-star-fill"></i>
              <i class="lni lni-star-fill"></i>
              <i class="lni lni-star-fill"></i>
            </div>
            <p className="text-indigo-600 underline underline-offset-2 decoration-indigo-600">
              (112 ratings)
            </p>
          </div>
          <div className="flex items-center text-sm">
            <p>
              Created by:{" "}
              <span className="text-indigo-600 underline underline-offset-2 decoration-indigo-600">
                Mars Nunez
              </span>
            </p>
          </div>
          <div className="flex items-center text-sm">
            <p>Last update: 12/2023</p>
          </div>
        </div>
        <div className="my-3 grid grid-cols-3 gap-3">
          <button className="text-white bg-indigo-700 tracking-wider rounded-lg px-3 py-2 flex items-center text-sm text-center">
            <p className="mx-auto">Start now!</p>
          </button>
          <button className="text-white border-2 tracking-wider border-indigo-700 rounded-lg px-3 py-2 flex items-center text-sm text-center">
            <p className="mx-auto">Save</p>
          </button>
          <button className="text-white border-2 tracking-wider border-indigo-700 rounded-lg px-3 py-2 flex items-center text-sm text-center">
            <p className="mx-auto">Share</p>
          </button>
        </div>
      </div>
      <div className="stars_bg mx-7 rounded-2xl border-2 border-indigo-700 px-3 py-3 flex flex-col gap-3 mt-5">
        {/* FIRST MODULE */}
        <div>
          <h4 className="text-xl mb-1">Hitting basics</h4>
          <div className="flex flex-col gap-1">
            <SessionVideoCard />
            <SessionVideoCard />
            <SessionVideoCard />
          </div>
        </div>
        {/* SECOND MODULE */}
        <div>
          <h4 className="text-xl mb-1">Project 101</h4>
          <div className="flex flex-col gap-1">
            <SessionVideoCard />
            <SessionVideoCard />
            <SessionVideoCard />
          </div>
        </div>
      </div>
      <div className="px-7 pt-5">
        <div className="bg-[#1F2428] border-2 border-indigo-600 rounded-xl px-4 py-3">
          <h4 className="text-xl">
            Instructor{" "}
            <span className="underline underline-offset-2 text-indigo-600 decoration-indigo-600">
              Mars Nunez
            </span>
          </h4>
          <div className="flex gap-4 mt-3 items-center">
            <figure className="w-64 rounded-full overflow-hidden h-fit">
              <img
                src="/img/me.jpeg"
                alt="instructor image"
                className="w-full"
              />
            </figure>
            <p className="text-sm">
              ¡Descubre el fascinante Pytherium, donde cada curso es una puerta
              hacia el dominio de este lenguaje poderoso!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseMainPage;
