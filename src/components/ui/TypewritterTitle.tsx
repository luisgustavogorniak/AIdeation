"use client";
import React from "react";
import TypewriterComponent from "typewriter-effect";

type Props = {};

const TypewritterTitle = (props: Props) => {
  return (
    <TypewriterComponent
      options={{ loop: true }}
      onInit={(typewriter) => {
        typewriter
          .typeString("🚀 Superchaged productivity")
          .pauseFor(1000)
          .deleteAll()
          .typeString("🤖 AI powered insights")
          .start();
      }}
    />
  );
};

export default TypewritterTitle;
