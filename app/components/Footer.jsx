const Footer = () => {
  return (
    <footer className="max-w-4xl lg:mx-auto lg:mt-16">
      <div className="flex justify-between px-10 max-w-2xl mx-auto lg:mx-0 lg:w-fit lg: gap-40 lg:pb-5">
        <div>
          <h6 className="text-lg font-semibold">Quick Links</h6>
          <ul className="text-sm flex flex-col gap-3 pt-3">
            <li>Home</li>
            <li>Moons</li>
            <li>About</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h6 className="text-lg font-semibold">Follow Us</h6>
          <ul className="text-sm flex flex-col gap-3 pt-3">
            <li className="flex items-center gap-1 justify-end">
              <i className="lni lni-facebook-oval"></i>
              <p>Facebook</p>
            </li>
            <li className="flex items-center gap-1 justify-end">
              <i className="lni lni-instagram-fill"></i>
              <p>Instragram</p>
            </li>
            <li className="flex items-center gap-1 justify-end">
              <i className="lni lni-twitter-original"></i>
              <p>Twitter / X</p>
            </li>
            <li className="flex items-center gap-1 justify-end">
              <i className="lni lni-github-original"></i>
              <p>Github</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <div className="absolute overflow-hidden flex items-end -mt-3 lg:-mt-48">
          <div className="absolute text-center w-full z-10 pb-3">
            <h6 className="text-xs font-normal">Mars Nunez presents:</h6>
            <h2 className="text-3xl uppercase font-bold tracking-widest">
              Moonyard
            </h2>
            <h6 className="text-xs font-normal">All rigts reserved</h6>
            <h6 className="">2023</h6>
          </div>
          <figure className="relative top-6">
            <img src="/img/sphere-cut.gif" alt="sphere" />
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
