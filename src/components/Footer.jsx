import React from "react";
import Section from "./Section";
import { socials } from "../constants";

function Footer() {
  return (
    <Section crosses id="footer" className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption lg:block text-n-4">
          ©{new Date().getFullYear()}. All rights reserved.
        </p>
        <ul className="flex gap-4">
          {socials.map((item) => (
            <a
              href={item.url}
              key={item.id}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6 "
            >
              <img
                src={item.iconUrl}
                alt="socialicons"
                width={16}
                height={16}
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Footer;
