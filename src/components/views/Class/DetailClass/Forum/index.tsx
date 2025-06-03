import { ThemeContext } from "@/components/context";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";

type proptypes = {
  data: any;
  contents: any;
};

const DetailClassForum = (props: proptypes) => {
  const { data, contents } = props;
  const { push } = useRouter();
  const Theme = useContext(ThemeContext);
  return (
    <div className="w-full rounded-b-lg flex p-4 gap-4 h-screen">
      <div className="flex flex-col gap-4 flex-[1]">
        <div className="rounded-md shadow border p-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Kode Kelas</p>
            <i className="bx bx-dots-vertical text-xl" />
          </div>
          <p className="text-2xl font-semibold py-2">{data.code}</p>
        </div>
        <div className="rounded-md shadow border p-4 flex flex-col gap-3">
          <p className="font-semibold">Mendatang</p>
          <p className="text-sm">Tidak ada tugas yang harus diselesaikan</p>
          <p className="text-sm text-end text-blue-700">Lihat Semua</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 flex-[4]">
        <div className="rounded-md shadow border p-4 flex gap-4 items-center cursor-pointer hover:text-gray-950 text-gray-500">
          <Image
            src={"/Image/Ardi.png"}
            alt="photo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <p className="font-semibold text-sm">Umumkan sesuatu ke kelas anda</p>
        </div>
        <div className="flex flex-col gap-2">
          {contents
            .sort(
              (a: any, b: any) =>
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
                          src={"/Image/Ardi.png"}
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
                      src={`/Image/${item.type}.png`}
                      alt={`photo ${item.title}`}
                      width={64}
                      height={80}
                      className="bg-white max-h-20"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold text-sm">
                        {item.teacher} memposting {item.type} baru :{" "}
                        {item.title}
                      </p>
                      <p className="flex gap-1 text-sm text-gray-500">
                        <p>
                          {
                            Theme?.secondsToCurrentDate(item.createdAt.seconds)
                              .date
                          }
                        </p>
                        <p>
                          {
                            Theme?.secondsToCurrentDate(item.createdAt.seconds)
                              .month
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
    </div>
  );
};

export default DetailClassForum;
