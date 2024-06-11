import Image from "next/image";
import { Poppins } from "next/font/google";
import Button from "@/components/ui/Button";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const DetailAssignmentView = () => {
  return (
    <div
      className={"p-4 w-full min-h-[40rem] h-[40rem] overflow-y-auto"}
      style={{ marginTop: "60px" }}
    >
      <div className="w-full flex gap-4 h-auto">
        <div className="flex-[2] shadow p-4 rounded-lg h-full bg-white flex gap-4">
          <Image
            src={"/@/../Image/tugas-2.png"}
            alt={"Tugas"}
            width={50}
            height={50}
            className="aspect-square object-cover rounded max-h-[50px]"
          />
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold">Tugas 1</h1>
                <i className="bx bx-dots-vertical-rounded text-2xl cursor-pointer px-2 py-1 rounded-full hover:bg-zinc-100" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-600">
                  Muhammad Ardiansyah Firdaus
                </p>
                <p className="text-sm font-semibold text-gray-600">
                  Tenggat: 12 Juni 2024
                </p>
              </div>
            </div>
            <hr className="h-[2px] bg-gray-500" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi laboriosam ipsam esse libero culpa exercitationem nihil,
              qui aspernatur temporibus ea rem. Doloremque saepe aliquam magnam
              harum tempora vero nobis maxime!
            </p>
            <hr className="h-[2px] bg-gray-500" />
            <div>
              <p className="flex items-center gap-4 font-semibold">
                <i className="bx bx-group text-3xl" /> 100 Komentar Kelas
              </p>
              <div className="h-auto flex flex-col gap-4 mt-3">
                <div className="flex gap-4">
                  <Image
                    src={"/@/../Image/Ardi.png"}
                    alt={"Quiz"}
                    width={40}
                    height={40}
                    className="h-full aspect-square object-cover rounded-full"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold">
                      Muhammad Ardiansyah Firdaus
                    </p>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero sed necessitatibus asperiores. Ab ipsa ex est non
                      velit excepturi temporibus architecto, ut voluptatem,
                      pariatur veritatis in quis a nostrum nobis!
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis voluptates libero commodi maxime, saepe, fuga nemo similique aliquam minima harum magni consequuntur, esse quos ut totam neque. Ut, aliquam quo!
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi rerum numquam minus distinctio perferendis architecto laborum nihil natus doloribus, consequatur ab, nobis suscipit ipsa dicta rem iure cupiditate modi totam?
                      Libero sed necessitatibus asperiores. Ab ipsa ex est non
                      velit excepturi temporibus architecto, ut voluptatem,
                      pariatur veritatis in quis a nostrum nobis!
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis voluptates libero commodi maxime, saepe, fuga nemo similique aliquam minima harum magni consequuntur, esse quos ut totam neque. Ut, aliquam quo!
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi rerum numquam minus distinctio perferendis architecto laborum nihil natus doloribus, consequatur ab, nobis suscipit ipsa dicta rem iure cupiditate modi totam?
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Image
                    src={"/@/../Image/Ardi.png"}
                    alt={"Quiz"}
                    width={40}
                    height={40}
                    className="h-full aspect-square object-cover rounded-full"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold">
                      Muhammad Ardiansyah Firdaus
                    </p>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero sed necessitatibus asperiores. Ab ipsa ex est non
                      velit excepturi temporibus architecto, ut voluptatem,
                      pariatur veritatis in quis a nostrum nobis!
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis voluptates libero commodi maxime, saepe, fuga nemo similique aliquam minima harum magni consequuntur, esse quos ut totam neque. Ut, aliquam quo!
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi rerum numquam minus distinctio perferendis architecto laborum nihil natus doloribus, consequatur ab, nobis suscipit ipsa dicta rem iure cupiditate modi totam?
                      Libero sed necessitatibus asperiores. Ab ipsa ex est non
                      velit excepturi temporibus architecto, ut voluptatem,
                      pariatur veritatis in quis a nostrum nobis!
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis voluptates libero commodi maxime, saepe, fuga nemo similique aliquam minima harum magni consequuntur, esse quos ut totam neque. Ut, aliquam quo!
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi rerum numquam minus distinctio perferendis architecto laborum nihil natus doloribus, consequatur ab, nobis suscipit ipsa dicta rem iure cupiditate modi totam?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full sticky top-0 p-4 bg-white rounded-md shadow flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Pengumpulan</p>
              <p className="text-sm font-semibold">Ditugaskan</p>
            </div>
            <form className="flex flex-col gap-4">
              <Button
                type="button"
                className="rounded shadow border text-black flex gap-3 items-center justify-center w-full hover:bg-zinc-100 transition-all"
              >
                <i className="bx bx-plus text-xl" />
                <p>Tambah</p>
              </Button>
              <Button type="submit">Kumpulkan</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAssignmentView;
