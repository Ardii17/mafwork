import Image from "next/image";

type proptypes = {
  img: string;
  title: string;
  desc?: string;
  category: string;
  width?: number;
  link?: () => void;
};

const CardQuiz = (props: proptypes) => {
  const { img, title, category, desc, width, link } = props;
  return (
    <div
      className={`flex flex-col mx-1 gap-2 bg-white shadow rounded-md cursor-pointer hover:shadow-lg transition-all`}
      style={{width: width, minWidth: width}}
      onClick={link}
    >
      <Image
        src={img}
        alt="Quiz"
        width={400}
        height={370}
        className="rounded-t-md"
      />
      <div className="px-4 flex flex-col gap-2 pb-4">
        <p className="text-sm font-semibold text-blue-700">{category}</p>
        <p className="pb-4">{title}</p>
        <p className="text-sm opacity-70">{desc}</p>
      </div>
    </div>
  );
};

export default CardQuiz;
