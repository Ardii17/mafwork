import Image from "next/image";
import Link from "next/link";

type proptypes = {
  title: string;
  children: React.ReactNode;
};

const EducationLayout = (props: proptypes) => {
  const { title, children } = props;
  return (
    <div className="p-4 flex flex-col gap-4" style={{ marginTop: "60px" }}>
      <div className="w-full h-auto p-4 flex gap-4 items-center shadow rounded bg-white relative">
        <Image
          src={`/@/../Image/${title.toLowerCase()}.png`}
          width={60}
          height={60}
          alt={"Kelas"}
          className="rounded-full object-cover aspect-square"
        />
        <div className="leading-3">
          <p className="font-semibold flex items-center gap-1 text-gray-500">
            <Link href={"/home"}>Home</Link>{" "}
            <i className="bx bx-chevron-right text-xl" /> {title}
          </p>
          <p className="font-semibold text-xl font-sans">
            {title.replace(/_/g, " ")}
          </p>
        </div>
      </div>
      <div className="flex gap-4 h-full">{children}</div>
    </div>
  );
};
export default EducationLayout;
