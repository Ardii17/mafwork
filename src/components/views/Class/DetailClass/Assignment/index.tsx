import { ThemeContext } from "@/components/context";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useContext, useState } from "react";

type proptypes = {
  assignment: any;
};

const DetailClassAssignment = (props: proptypes) => {
  const { assignment } = props;
  const Theme = useContext(ThemeContext);
  const [onFilter, setOnFilter] = useState(false);
  return (
    <div className="w-full py-4 px-20">
      <div className="flex items-center justify-between">
        <div className="relative w-1/3">
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            onMouseDown={() => setOnFilter(true)}
            onChange={() => setOnFilter(false)}
            name="topic"
          >
            <option disabled className="bg-gray-300 text-white">
              Pilih Topik
            </option>
            <option>Pertemuan 1</option>
            <option>Pertemuan 2</option>
            <option>Pertemuan 3</option>
          </select>
          <i
            className={`${
              onFilter ? "-rotate-180" : "rotate-0"
            } bx bx-chevron-down absolute transition-all top-1/2 -translate-y-1/2 right-3 text-2xl`}
          />
        </div>
        <div className="w-1/6">
          <Button
            type="button"
            className="flex gap-1 rounded-full items-center justify-center bg-blue-700 text-white w-full"
          >
            <i className="bx bx-plus text-xl" />
            <p>Buat</p>
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 mt-4">
        {assignment &&
          assignment
            .sort(
              (a: any, b: any) =>
                new Date(b.createdAt.seconds).getTime() -
                new Date(a.createdAt.seconds).getTime()
            )
            .map((item: any, index: number) => (
              <div
                key={index}
                className="w-full rounded-md py-2 ps-4 pe-8 shadow flex items-center justify-between hover:bg-zinc-100 cursor-pointer"
              >
                <div className="flex gap-4 items-center">
                  <Image
                    src={"/Image/Ardi.png"}
                    alt="photo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <p className="font-semibold">{item.title}</p>
                </div>
                <p className="text-sm font-semibold text-gray-500 flex gap-2">
                  Diposting{" "}
                  <p className="flex gap-1 text-sm text-gray-500">
                    <p>
                      {
                        Theme?.secondsToCurrentDate(item?.createdAt.seconds)
                          .date
                      }
                    </p>
                    <p>
                      {
                        Theme?.secondsToCurrentDate(item?.createdAt.seconds)
                          .month
                      }
                    </p>
                    <p>
                      {
                        Theme?.secondsToCurrentDate(item?.createdAt.seconds)
                          .year
                      }
                    </p>
                  </p>
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default DetailClassAssignment;
