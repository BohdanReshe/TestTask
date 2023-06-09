import React from "react";
import { Carousel } from "./elements/Carousel";
import { Section2 } from "./elements/Section2";
import { Section3 } from "./elements/Section3";
import { Section4 } from "./elements/Section4";

function Home() {
    return (
        <div>
            <Carousel />
            <Section2 />
            <Section3 />
            <Section4 />
        </div>
    )
}

export default Home