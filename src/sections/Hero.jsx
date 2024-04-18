import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { iphone1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [coverImage, setcoverImage] = useState(iphone1);

  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen">
      <div className="relative xl:w-2/5 pl-16 flex flex-col justify-center items-start w-full pt-28 bg-black">
        {/* <p className="text-xl font-montserrat text-coral-red rounded">Our Summer collections</p> */}

        <h1 className="mt-10 font-palanquin text-8xl font-bold text-slate-50">
          <span>iPhone 15 Pro</span>
          <br />
        </h1>
        <p className="font-montserrat text-slate-400 text-xl leading-8 mt-6 mb-14 sm:max-w-sm">Titanium. Begitu kuat. Begitu ringan. Begitu Pro</p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold text-slate-50">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-4 bg-cover bg-center bg-black">
        <img src={coverImage} alt="shoe colletion" width={610} height={502} className="object-contain relative z-10 aspect-square" />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[10%] sm:left-[7%] max-sm:px-6 z-30">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard index={index} imgURL={image} changeBigShoeImage={(shoe) => setcoverImage(shoe)} bigShoeImg={coverImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
