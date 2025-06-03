import EducationLayout from "@/components/layout/EducationLayout";
import Image from "next/image";

type proptypes = {
  data: any[];
};

const AssignmentView = (props: proptypes) => {
  const { data } = props;

  return (
    <EducationLayout title="Tugas">
      <div className="w-2/5 h-full flex flex-col gap-2">
        {data &&
          data.map((item: any, index: number) => (
            <div
              key={index}
              className="w-full min-h-28 h-28 max-h-28 shadow rounded bg-white p-2 flex gap-3 cursor-pointer hover:bg-zinc-100 transition-all"
            >
              <Image
                src={"/Image/Quiz/alam.png"}
                alt={"Quiz"}
                width={100}
                height={100}
                className="h-full aspect-square object-cover rounded"
              />
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.classname}</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={"/Image/quiz.png"}
                      alt={"Quiz"}
                      width={30}
                      height={30}
                      className="h-full aspect-square object-cover rounded-full"
                    />
                    <p className="text-xs">
                      {item.teacher.length > 20
                        ? `${item.teacher.slice(0, 16)}...`
                        : item.teacher}{" "}
                      &bull; 1 year ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="w-3/5 h-[33rem] shadow rounded bg-white box-border sticky top-20"></div>
    </EducationLayout>
  );
};

export default AssignmentView;
