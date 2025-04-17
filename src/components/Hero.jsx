import Button from "./Button";

function Hero() {
  return (
    <header className="pt-20 pb-8 px-8 md:pb-16 ">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/desktop/image-hero-left.png"
            />
            <img
              src="/tablet/image-hero.png"
              className="w-full h-auto  scale-140 sm:scale-125 md:scale-115 lg:scale-100 mb-20 lg:mb-0 lg:-translate-x-15 lg:-translate-y-6 "
              alt="Group video conference illustration"
            />
          </picture>
        </div>

        <div className="text-center flex flex-col gap-6 max-w-md mx-auto">
          <h1 className="text-md sm:text-[2.7rem] md:text-lg-tablet lg:text-lg red-hat-display-black leading-md text-slate-900">
            Group Chat <br />
            for Everyone
          </h1>
          <p className=" red-hat-display-medium leading-lg text-slate-600 ">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button color="primary">
              Download <span className="text-cyan-300">v1.3</span>
            </Button>
            <Button color="secondary">What is it?</Button>
          </div>
        </div>
        <div>
          <img
            src="/desktop/image-hero-right.png"
            alt=""
            className="hidden lg:block lg:translate-x-15 lg:translate-y-6 "
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
