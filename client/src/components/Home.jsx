import React from "react";
import Hero from "./Hero";
import Analystics from "./Analystics";
import NewsLetter from "./NewsLetters";
import Cards from "./Cards";

const Home = () => {
    return(
        <main>
            <Hero />
            <Analystics />
            <NewsLetter />
            <Cards />
        </main>
    )
}

export default Home;