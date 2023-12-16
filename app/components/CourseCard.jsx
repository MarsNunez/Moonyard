import Link from "next/link";

const CourseCard = () => {
  return (
    <div className="bg-[#242424] py-4 px-6 rounded-2xl max-w-2xl lg:flex items-center lg:pl-24 lg:relative">
      <div className="max-lg:hidden px-4 py-5 w-fit rounded-xl absolute -left-16 bg-gradient-to-r from-indigo-600 via-indigo-800 to-indigo-900">
        <figure className="w-24">
          <img src="/img/python-logo.svg" alt="pythonLogo" />
        </figure>
      </div>
      <div>
        <div className="h-3 w-16 rounded-full mx-auto bg-indigo-600" />
        <p className="py-4 pb-2 font-extralight text-sm text-slate-500">
          Latest update: 12/2023
        </p>
        <h4 className="text-lg font-medium tracking-wider underline underline-offset-4 decoration-indigo-600">
          Python basic course
        </h4>
        <p className="leading-5 text-sm line-clamp-3 tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod adipiscing elit, sed do eiusmod adipiscing elit, sed do
          eiusmod
        </p>
        <div className="flex items-center justify-center mt-3">
          <Link
            href={"/moons/pytherium/12031231923"}
            className="font-light mx-auto bg-gradient-to-r from-indigo-600 via-indigo-800 to-indigo-900 rounded-full px-3 py-[2px]"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
