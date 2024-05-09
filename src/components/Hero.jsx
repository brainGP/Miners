import React, { useEffect, useState, useRef } from "react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";

import PlusSvg from "../assets/svg/PlusSvg";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { heroIcons } from "../constants";

// Rings component for concentric circles
const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

// Gradient component for design aesthetics
const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

// BottomLine component for visual design at the bottom of the section
const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

// BackgroundCircles component for the parallax effect
const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      <Rings />
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        {/* Insert the moving elements here */}
      </MouseParallax>
    </div>
  );
};

// Hero component encapsulating all functionalities
const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <h1 className="h1 mb-6">
          Дэлхийд мэдлэг олборлох
          <span className="inline-block relative">
            Уурхайчид
            <img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-2"
              alt="Curve"
            />
          </span>
        </h1>
        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Тавтай морил
        </p>
        <Button href="/login" white>
          Аялалдаа гарах
        </Button>
      </div>
      <div className="container relative" ref={parallaxRef}>
        <BackgroundCircles parallaxRef={parallaxRef} />
        <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
          <div className="relative bg-n-8 rounded-t-[100px] rounded-b-[12px]">
            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
              <img src={robot} className="w-full " alt="AI" />
              <ScrollParallax isAbsolutelyPositioned></ScrollParallax>
              <ScrollParallax isAbsolutelyPositioned>
                <Notification
                  className="absolute right-[2rem] bottom-[3rem] w-[12rem] xl:w-[18rem] xl:right-[5.5rem] xl:bottom-[11rem]"
                  title="Process of"
                />
              </ScrollParallax>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
