import Image from "next/image";
import Link from "next/link";

type proptypes = {
  title: string;
};

const EducationLayout = (props: proptypes) => {
  const { title } = props;
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
      <div className="flex gap-4 h-full">
        <div className="w-1/2 h-full flex flex-col gap-4">
          <div className="w-full min-h-28 h-28 max-h-28 shadow rounded bg-white p-2 flex gap-3 cursor-pointer hover:bg-zinc-100 transition-all">
            <Image
              src={"/@/../Image/Quiz/alam.png"}
              alt={"Quiz"}
              width={100}
              height={100}
              className="h-full aspect-square object-cover rounded"
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Ilmu pengetahuan Alam</p>
                <p className="text-sm text-gray-500">
                  10 Pertanyaan &bull; Kelas 1 &bull; 10 Dimainkan
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <Image
                    src={"/@/../Image/quiz.png"}
                    alt={"Quiz"}
                    width={30}
                    height={30}
                    className="h-full aspect-square object-cover rounded-full"
                  />
                  <p className="text-xs">Ardiansyah &bull; 1 year ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full min-h-28 h-28 max-h-28 shadow rounded bg-white p-2 flex gap-3 cursor-pointer hover:bg-zinc-100 transition-all">
            <Image
              src={"/@/../Image/Quiz/alam.png"}
              alt={"Quiz"}
              width={100}
              height={100}
              className="h-full aspect-square object-cover rounded"
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Ilmu pengetahuan Alam</p>
                <p className="text-sm text-gray-500">
                  10 Pertanyaan &bull; Kelas 1 &bull; 10 Dimainkan
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <Image
                    src={"/@/../Image/quiz.png"}
                    alt={"Quiz"}
                    width={30}
                    height={30}
                    className="h-full aspect-square object-cover rounded-full"
                  />
                  <p className="text-xs">Ardiansyah &bull; 1 year ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full min-h-28 h-28 max-h-28 shadow rounded bg-white p-2 flex gap-3 cursor-pointer hover:bg-zinc-100 transition-all">
            <Image
              src={"/@/../Image/Quiz/alam.png"}
              alt={"Quiz"}
              width={100}
              height={100}
              className="h-full aspect-square object-cover rounded"
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Ilmu pengetahuan Alam</p>
                <p className="text-sm text-gray-500">
                  10 Pertanyaan &bull; Kelas 1 &bull; 10 Dimainkan
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <Image
                    src={"/@/../Image/quiz.png"}
                    alt={"Quiz"}
                    width={30}
                    height={30}
                    className="h-full aspect-square object-cover rounded-full"
                  />
                  <p className="text-xs">Ardiansyah &bull; 1 year ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full min-h-28 h-28 max-h-28 shadow rounded bg-white p-2 flex gap-3 cursor-pointer hover:bg-zinc-100 transition-all">
            <Image
              src={"/@/../Image/Quiz/alam.png"}
              alt={"Quiz"}
              width={100}
              height={100}
              className="h-full aspect-square object-cover rounded"
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Ilmu pengetahuan Alam</p>
                <p className="text-sm text-gray-500">
                  10 Pertanyaan &bull; Kelas 1 &bull; 10 Dimainkan
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <Image
                    src={"/@/../Image/quiz.png"}
                    alt={"Quiz"}
                    width={30}
                    height={30}
                    className="h-full aspect-square object-cover rounded-full"
                  />
                  <p className="text-xs">Ardiansyah &bull; 1 year ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full min-h-28 h-28 max-h-28 shadow rounded bg-white p-2 flex gap-3 cursor-pointer hover:bg-zinc-100 transition-all">
            <Image
              src={"/@/../Image/Quiz/alam.png"}
              alt={"Quiz"}
              width={100}
              height={100}
              className="h-full aspect-square object-cover rounded"
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Ilmu pengetahuan Alam</p>
                <p className="text-sm text-gray-500">
                  10 Pertanyaan &bull; Kelas 1 &bull; 10 Dimainkan
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <Image
                    src={"/@/../Image/quiz.png"}
                    alt={"Quiz"}
                    width={30}
                    height={30}
                    className="h-full aspect-square object-cover rounded-full"
                  />
                  <p className="text-xs">Ardiansyah &bull; 1 year ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full min-h-28 h-28 max-h-28 shadow rounded bg-white p-2 flex gap-3 cursor-pointer hover:bg-zinc-100 transition-all">
            <Image
              src={"/@/../Image/Quiz/alam.png"}
              alt={"Quiz"}
              width={100}
              height={100}
              className="h-full aspect-square object-cover rounded"
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Ilmu pengetahuan Alam</p>
                <p className="text-sm text-gray-500">
                  10 Pertanyaan &bull; Kelas 1 &bull; 10 Dimainkan
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <Image
                    src={"/@/../Image/quiz.png"}
                    alt={"Quiz"}
                    width={30}
                    height={30}
                    className="h-full aspect-square object-cover rounded-full"
                  />
                  <p className="text-xs">Ardiansyah &bull; 1 year ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-[33rem] shadow rounded bg-white box-border sticky top-20"></div>
      </div>
    </div>
  );
};
export default EducationLayout;
