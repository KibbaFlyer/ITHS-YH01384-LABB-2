import React, { useEffect } from "react";

// Styled Components
import { H1, H2 } from '../styling/HomeComponentStyling'

// CSS
import animations from '../styling/Animations.module.css'

const HomeComponent: React.FC = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animations.show);
                    entry.target.classList.remove(animations.hidden);
                }
            });
        })

        const hiddenElements = document.querySelectorAll(`.${animations.hidden}`);
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, [])

    return (
        <>  
        <div className={animations.parallax}>
            <img ></img>
        </div>
            <div style={{"height": "calc(100vh + 500px)"}}>
                <H1 className={animations.hidden}>Hello and Welcome!</H1>
            </div>
            <H2 className={animations.hidden}>This is a small little submission for the React course at ITHS</H2>
            <H2 className={animations.hidden}>I have connected some external APIs, please have a look at the different tabs in the top</H2>
        </>
    );

};

export default HomeComponent;