import EducationLayout from "@/components/layout/EducationLayout";
import { log } from "console";
import Image from "next/image";
import { useEffect, useState } from "react";

type proptypes = {
  data: any[];
};

const ClassView = (props: proptypes) => {
  const { data } = props;
  const [selectedIDClass, setSelectedIDClass] = useState("");
  const [selectedClass, setSelectedClass] = useState<any>({});
  const secondsToCurrentDate = (seconds: number) => {
    const date = new Date(seconds * 1000);
    const currentDate = date.getDate();
    const currentMonth = date.getMonth();

    // Array yang berisi nama bulan
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    return {
      date: currentDate,
      month: months[currentMonth],
    };
  };

  useEffect(() => {
    setSelectedIDClass(data[0]?.id);
  }, [data]);

  useEffect(() => {
    if (selectedIDClass) {
      setSelectedClass(data.find((item: any) => item.id === selectedIDClass));
    }
  }, [selectedIDClass, data]);

  return (
    <EducationLayout title="Kelas">
      <div className="w-2/5 h-full flex flex-col gap-4">
        {data.map((item: any) => (
          <div
            key={item.id}
            className="w-full min-h-28 h-28 max-h-28 shadow rounded bg-white p-2 flex gap-3 cursor-pointer hover:bg-zinc-100 transition-all"
          >
            <Image
              src={"/@/../Image/Quiz/alam.png"}
              alt={"Quiz"}
              width={100}
              height={100}
              className="h-full aspect-square object-cover rounded"
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm font-semibold">{item.class}</p>
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
        ))}
      </div>
      <div className="w-3/5 h-[33rem] shadow rounded bg-white box-border sticky top-20 overflow-y-auto">
        {Object.keys(selectedClass).length > 0 && (
          <div className="w-full">
            <div className="w-full bg-blue-700 h-28 rounded-t flex justify-end p-4 flex-col">
              <p className="text-white text-xl font-semibold">
                {selectedClass?.title}
              </p>
              <p className="text-white text-sm font-semibold">
                {selectedClass?.class}
              </p>
            </div>
            <div className="flex flex-col gap-4 p-4">
              {selectedClass?.data.map((item: any, index: number) => (
                <div key={index} className="border rounded">
                  {item.type === "post" ? (
                    <div className="shadow rounded p-4 flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                          <Image
                            src={"/@/../Image/Ardi.png"}
                            alt="photo"
                            width={64}
                            height={64}
                            className="rounded-full"
                          />
                          <div className="flex flex-col ">
                            <p className="font-semibold">Muhammad Ardiansyah Firdaus</p>
                            <p className="flex gap-1 text-sm text-gray-500">
                              <p>
                                {secondsToCurrentDate(item.date.seconds).date}
                              </p>
                              <p>
                                {secondsToCurrentDate(item.date.seconds).month}
                              </p>
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  ) : (
                    <div className="p-4 rounded shadow flex gap-4 items-center max-h-20 h-20">
                      <Image
                        src={`/@/../Image/${item.type}.png`}
                        alt={`photo ${item.title}`}
                        width={64}
                        height={80}
                        className="bg-white max-h-20"
                      />
                      <div className="flex flex-col">
                        <p className="font-semibold text-sm">Ardiansyah Memposting {item.type} baru : {item.title}</p>
                        <p className="flex gap-1 text-sm text-gray-500">
                          <p>{secondsToCurrentDate(item.date.seconds).date}</p>
                          <p>{secondsToCurrentDate(item.date.seconds).month}</p>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </EducationLayout>
  );
};

export default ClassView;
