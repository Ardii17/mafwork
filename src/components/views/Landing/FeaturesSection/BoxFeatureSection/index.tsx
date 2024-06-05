import Image from "next/image";

type proptypes = {
  img: string;
  title: string;
  desc: string;
};

const BoxFeature = (props: proptypes) => {
  const { img, title, desc } = props;
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="text-center">
        <Image
          src={img}
          width={64}
          height={64}
          alt={title}
          className="mx-auto w-16 h-16"
        />
        <h4 className="mt-4 text-xl font-semibold text-gray-900">{title}</h4>
        <p className="mt-2 text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default BoxFeature;
