import EducationLayout from "@/components/layout/EducationLayout";
import ModalLayout from "@/components/views/Class/Modal";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ThemeContext } from "@/components/context";

type proptypes = {
  dataClass: any[];
};

const ClassView = (props: proptypes) => {
  const { dataClass } = props;
  const { push } = useRouter();
  const Theme = useContext(ThemeContext);
  const [selectedIDClass, setSelectedIDClass] = useState("");
  const [selectedClass, setSelectedClass] = useState<any>({});
  const [contents, setContents] = useState<any[]>([]);
  const [onAddClass, setOnAddClass] = useState(false);

  useEffect(() => {
    setSelectedIDClass(dataClass[0]?.id);
  }, [dataClass]);

  useEffect(() => {
    if (selectedIDClass) {
      setSelectedClass(
        dataClass.find((item: any) => item.id === selectedIDClass)
      );
    }
  }, [selectedIDClass, dataClass]);

  useEffect(() => {
    if (Object.keys(selectedClass).length > 0) {
      setContents(
        [
          ...selectedClass?.assignments,
          ...selectedClass?.lessons,
          ...selectedClass?.posts,
        ].flat()
      );
    }
  }, [selectedClass]);

  return (
    <EducationLayout
      title="Kelas"
      buttonTitle="Buat Kelas"
      variantButton="red"
      onClick={() => setOnAddClass(true)}
    >
      <div className="w-2/5 h-full flex flex-col gap-2">
        {dataClass &&
          dataClass?.map((item: any) => (
            <div
              key={item.id}
              onClick={() => push(`/class/detail/${item.id}`)}
              onMouseEnter={() => setSelectedIDClass(item.id)}
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
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm font-semibold">{item.grade}</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={"/@/../Image/Ardi.png"}
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
      <div
        className="w-3/5 h-[33rem] shadow rounded bg-white box-border sticky top-20 overflow-y-auto"
        id="class"
      >
        {Object.keys(selectedClass).length > 0 && (
          <div className="w-full">
            <div
              className="w-full bg-cover h-28 rounded-t flex justify-end p-4 flex-col"
              style={{
                backgroundImage: `url(/@/../Image/BackgroundClass/${selectedClass?.bg}.png)`,
              }}
            >
              <p className="text-white text-xl font-semibold">
                {selectedClass?.name}
              </p>
              <p className="text-white text-sm font-semibold">
                {selectedClass?.grade}
              </p>
            </div>
            <div className="flex flex-col gap-4 p-4">
              {contents
                .sort(
                  (a, b) =>
                    new Date(b.createdAt.seconds).getTime() -
                    new Date(a.createdAt.seconds).getTime()
                )
                .map((item: any, index: number) => (
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
                              <p className="font-semibold">{item.teacher}</p>
                              <p className="flex gap-1 text-sm text-gray-500">
                                <p>
                                  {
                                    Theme?.secondsToCurrentDate(
                                      item?.createdAt.seconds
                                    ).date
                                  }
                                </p>
                                <p>
                                  {
                                    Theme?.secondsToCurrentDate(
                                      item?.createdAt.seconds
                                    ).month
                                  }
                                </p>
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="font-semibold">{item.ClassName}</p>
                        <p className="text-sm">{item.desc}</p>
                        <hr />
                        <div className="w-full relative">
                          <form>
                            <Input
                              type="text"
                              placeholder="Tambahkan Komentar untuk postingan"
                              name="comment"
                              className="rounded-full placeholder:text-sm pe-12"
                            />
                            <Button
                              type="submit"
                              className="w-12 absolute top-1/2 right-0 rounded-r-md -translate-y-1/2"
                            >
                              <i className="bx bx-send text-xl text-black" />
                            </Button>
                          </form>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="p-4 rounded shadow hover:bg-zinc-100 flex gap-4 items-center max-h-20 h-20 cursor-pointer"
                        onClick={() => push(`/${item.type}/detail/${item.id}`)}
                      >
                        <Image
                          src={`/@/../Image/${item.type}.png`}
                          alt={`photo ${item.title}`}
                          width={64}
                          height={80}
                          className="bg-white max-h-20"
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold text-sm">
                            {item.teacher.length > 20
                              ? `${item.teacher.slice(0, 16)}...`
                              : item.teacher}{" "}
                            memposting {item.type} baru : {item.title}
                          </p>
                          <p className="flex gap-1 text-sm text-gray-500">
                            <p>
                              {
                                Theme?.secondsToCurrentDate(
                                  item.createdAt.seconds
                                ).date
                              }
                            </p>
                            <p>
                              {
                                Theme?.secondsToCurrentDate(
                                  item.createdAt.seconds
                                ).month
                              }
                            </p>
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
      {onAddClass && <ModalLayout setOnAddClass={setOnAddClass} />}
    </EducationLayout>
  );
};

export default ClassView;
