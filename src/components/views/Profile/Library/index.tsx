import Button from "@/components/ui/Button";
import Image from "next/image";

type proptypes = {
  data?: [];
  title: string;
  desc?: string;
  textButton?: string;
};

const LibraryProfile = (props: proptypes) => {
  const { data, title, desc, textButton } = props;
  return (
    <div className="w-full">
      {data ? (
        <div className="flex gap-4 h-full mt-4">
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
          </div>
          <div className="w-1/2 h-[33rem] shadow rounded bg-white box-border sticky top-20"></div>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-6 items-center justify-center py-12">
          <Image
            src={"/@/../Image/nodata.png"}
            alt="nodata"
            width={300}
            height={300}
          />
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="font-semibold">{title}</p>
            <p className="">{desc}</p>
            <div className="w-1/2 mt-2">
              {textButton && <Button type="button">{textButton}</Button>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LibraryProfile;
