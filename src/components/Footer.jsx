import React from "react";
import Section from "./Section";
import { facebook, instagram } from "../assets";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved. Powered by Nest
          Education IT School
        </p>

        <div className="flex gap-5 flex-wrap">
          <a
            href="https://www.facebook.com/"
            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
          >
            <img src={facebook} alt="Facebook Icon" />
          </a>
          <a
            href="https://www.instagram.com/nest_education_it_school/"
            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
          >
            <img src={instagram} alt="Instagram Icon" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
