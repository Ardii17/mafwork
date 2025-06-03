import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

type proptypes = {
  title: string;
  children: React.ReactNode;
  buttonTitle?: string;
  variantButton?: string;
  onClick?: () => void;
};

const EducationLayout = (props: proptypes) => {
  const { title, children, buttonTitle, variantButton, onClick } = props;
  return (
    <div className="p-4 flex flex-col gap-4" style={{ marginTop: "60px" }}>
      <div className="w-full h-auto flex justify-between items-center p-4 shadow rounded bg-white relative">
        <div className="flex gap-4 items-center">
          <Image
            src={`/Image/${title.toLowerCase()}.png`}
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
        {buttonTitle && <div className="">
          <Button
            type="button"
            className={`flex items-center gap-2 text-white bg-${variantButton}-700 rounded-md`}
            onClick={onClick}
          >
            <i className="bx bx-plus text-xl" /> {buttonTitle}
          </Button>
        </div>}
      </div>
      <div className="flex gap-4 h-full">{children}</div>
    </div>
  );
};
export default EducationLayout;
