import { PropsWithChildren, useRef } from "react";
import { ReactNode } from "@interfaces/interface";
import { useScroll } from "@hooks/hook";

function SliderNavigation({
    totalSlides,
    onClick,
    selectedButtonNumber,
}: {
    totalSlides: number;
    selectedButtonNumber: number;
    onClick: (event: number) => void;
}) {
    const li = [];

    for (let index = 0; index < totalSlides; index++) {
        li.push(
            <li
                key={index}
                className={`${
                    index === selectedButtonNumber ? "active" : ""
                } h-4 w-4 cursor-pointer rounded-full border-2 border-black`}
                onClick={() => {
                    onClick(index);
                }}
            ></li>
        );
    }
    return li;
}

export default function Carousel({ children }: PropsWithChildren) {
    if (!Array.isArray(children)) return children;

    const slider: React.RefObject<HTMLDivElement> =
        useRef<HTMLDivElement>(null);

    const {
        next,
        slideTo,
        previous,
        totalSlides,
        currentSlideNumber,
        setCurrentSlideNumber,
    } = useScroll(slider);

    return (
        <>
            <div className="carousel relative">
                <div className="slider" ref={slider}>
                    {children.map((element: ReactNode, index: number) => {
                        return (
                            <div className="content" key={index}>
                                {element}
                            </div>
                        );
                    })}
                </div>

                <div className="nav-button absolute left-0 top-full flex w-full justify-center">
                    <button
                        id="left"
                        className="m-5 w-10 rounded p-2"
                        onClick={() => {
                            previous();
                        }}
                    >
                        <img
                            src="/public/assets/icons/direction.svg"
                            className="w-full rotate-180"
                        />
                    </button>
                    <ul className="mx-6 flex items-center gap-x-5" id="nav-1">
                        {
                            <SliderNavigation
                                totalSlides={totalSlides}
                                selectedButtonNumber={currentSlideNumber}
                                onClick={(event: number) => {
                                    slideTo(event);
                                    setCurrentSlideNumber(event);
                                }}
                            />
                        }
                    </ul>
                    <button
                        id="right"
                        className="m-5 w-10 rounded p-2"
                        onClick={() => {
                            next();
                        }}
                    >
                        <img
                            src="/public/assets/icons/direction.svg"
                            className="w-full"
                        />
                    </button>
                </div>
            </div>
        </>
    );
}
