"use client";

import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Features from "./components/Route/Features";
import Testimonials from "./components/Route/Testimonials";
import Clients from "./components/Route/Clients";
import Faq from "./components/Route/Faq";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const [route, setRoute] = useState("Login");
  return (
    <div>
      <Heading
        title="Somesha"
        description="Learn Anything from professionals"
        keywords="learn, professionals, courses, tutorials"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
      <Clients />
      <Features />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Page;
