import CourseCard from "@/app/components/CourseCard";

const Moon = () => {
  return (
    <section>
      <div className="min-h-screen bg-python-planet bg_image flex flex-col justify-center items-center">
        <div className="text-center">
          <p className="text-4xl md:text-5xl font-black tracking-wider">
            Pytherium
          </p>
          <p className="tracking-wide mt-3">Observe, automate and surpass</p>
        </div>
        <div className="absolute top-3/4 p-3">
          <i class="lni lni-angle-double-down animate-bounce"></i>
        </div>
      </div>
      <div className="bg_secundary lg:pb-32 lg:pt-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl uppercase font-semibold py-10 md:py-14 px-7">
            Planet <span className="text-indigo-600">information</span>
          </h2>
          <div className="lg:flex items-center lg:gap-10 lg:px-10">
            <p className="text-center text-sm md:text-base px-7 lg:px-0 lg:h-fit mb-12 max-w-2xl mx-auto lg:max-w-md lg:text-left">
              Discover the fascinating Pytherium. From the elegance of syntax to
              the mysteries of libraries, each lesson will guide you on a cosmic
              journey toward developing mastery. Get ready to unlock the
              potential of Python and create amazing projects that challenge the
              limits of programming. Welcome to an educational odyssey where the
              magic of Python becomes your tool to conquer the digital universe!
            </p>
            <iframe
              className="w-full h-56 lg:border-2 sm:h-72 md:h-96 lg:rounded-sm shadow-2xl border-indigo-700 lg:h-60"
              src="https://www.youtube.com/embed/4dprtEzunIk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="py-10 px-7">
        <h2 className="text-center text-2xl uppercase font-semibold">
          Courses
        </h2>
        <div className="max-w-[250px] lg:max-w-[350px] font-light mx-auto rounded-2xl px-2 mt-4 py-1 ring-2 ring-indigo-600 bg-slate-900 flex items-center">
          <div className="text-xl flex items-center mr-2">
            <label htmlFor="course" className="flex">
              <i class="lni lni-search-alt"></i>
            </label>
          </div>
          <input
            type="text"
            id="course"
            className="w-full bg-transparent outline-none"
          />
        </div>
        <div className="mt-10 flex flex-col items-center gap-7">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </section>
  );
};

export default Moon;
