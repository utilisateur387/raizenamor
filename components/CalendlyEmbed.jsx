'use client'

import React, { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

const CalendlyEmbed = ({ url }) => {
  const [root, setRoot] = useState(null)
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
    setRoot(document.getElementById("offerings"))
  }, []);

  return (
      <PopupButton
        url={url}
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={root}
        text="BOOK"
        className='btn w-full md:w-60 text-center'
      />
  );
};

export default CalendlyEmbed;