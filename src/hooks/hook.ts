import { useEffect, useState } from "react";

export function useScroll(slider: React.RefObject<HTMLDivElement>) {
    const [totalSlides, setTotalSlides] = useState(0);
    const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

    function slideTo(slideNumber: number) {
        if (slider.current && 0 <= slideNumber && slideNumber < totalSlides) {
            slider.current.scrollLeft =
                slider.current.clientWidth * slideNumber;

            setCurrentSlideNumber(slideNumber);
        }
    }

    function next() {
        if (
            slider.current &&
            currentSlideNumber + 1 !== slider.current.childElementCount
        ) {
            slideTo(currentSlideNumber + 1);
            setCurrentSlideNumber(currentSlideNumber + 1);
        }
    }

    function previous() {
        if (currentSlideNumber === 0) return;

        slideTo(currentSlideNumber - 1);
        setCurrentSlideNumber(currentSlideNumber - 1);
    }

    useEffect(() => {
        setTotalSlides(slider.current!.childElementCount);
    }, [slider]);

    return {
        next,
        slideTo,
        previous,
        totalSlides,
        currentSlideNumber,
        setCurrentSlideNumber,
    };
}
