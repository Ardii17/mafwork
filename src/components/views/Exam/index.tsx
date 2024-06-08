import EducationLayout from "@/components/layout/EducationLayout";
import Image from "next/image";

const ExamView = () => {
  return (
    <EducationLayout title="Ujian" buttonTitle="Buat Ujian" variantButton="yellow">
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
    </EducationLayout>
  );
};

export default ExamView;
