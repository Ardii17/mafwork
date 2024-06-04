import { useState } from "react";

type proptypes = {
  sectionRef: any;
  title: string;
  widthCard: number;
  children?: React.ReactNode;
};

const CarouselCard = (props: proptypes) => {
  const { sectionRef, title, widthCard, children } = props;
  const [translateX, setTranslateX] = useState(0);
  return (
    <div className="w-full px-4 relative">
      <h1 className="flex gap-3 items-center text-xl font-semibold">
        <i className="bx bxs-crown text-blue-700" />
        {title}
      </h1>
      <div className="overflow-hidden">
        <div
          className="flex py-4 transition-all"
          style={{ transform: `translateX(${translateX}px)` }}
          ref={sectionRef}
        >
          {children}
        </div>
      </div>
      <i
        className={`${
          translateX < 0 ? "block" : "hidden"
        } bx bx-chevron-left bg-white py-[2px] px-[6px] rounded-full absolute top-1/2 -translate-y-1/2 left-4 text-xl shadow cursor-pointer z-10 opacity-50 hover:opacity-100 transition-all scale-75 hover:scale-100`}
        onClick={() =>
          translateX < 0 ? setTranslateX(translateX + (widthCard + 8)) : {}
        }
      />
      <i
        className={`${
          translateX > -widthCard * 2 + 16 ? "block" : "hidden"
        } bx bx-chevron-right bg-white py-[2px] px-[6px] rounded-full absolute top-1/2 -translate-y-1/2 right-4 text-xl shadow cursor-pointer z-10 opacity-50 hover:opacity-100 transition-all scale-75 hover:scale-100`}
        onClick={() =>
          translateX > -widthCard * 2 + 16
            ? setTranslateX(translateX - (widthCard + 8))
            : {}
        }
      />
    </div>
  );
};

export default CarouselCard;
