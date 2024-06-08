import { ThemeContext } from "@/components/context";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Loading from "@/components/ui/Loading";
import { retrieveDataByField } from "@/lib/firebase/service";
import userServices from "@/services/user";
import { useSession } from "next-auth/react";
import { FormEvent, useContext, useState } from "react";

const ModalKode = () => {
  const Theme = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const session: any = useSession();
  const [error, setError] = useState("");
  const [categoryKode, setCategoryKode] = useState("kelas");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    setLoading(true);
    try {
      if (categoryKode === "kelas") {
        const result: any = await retrieveDataByField(
          "classes",
          "code",
          form.code.value
        );

        if (result) {
          Theme?.handleJoinedClass(result[0].id, async (status: boolean) => {
            if (status) {
              await userServices.updateClass(
                session.data?.token,
                result[0].id,
                {
                  ...result[0],
                  members: [
                    ...(result[0].members || []),
                    session.data?.user.id,
                  ],
                }
              );
              form.reset();
              setLoading(false);
              window.location.reload();
            }
          });
        }
      } else {
        setError("Kode Tidak Tersedia");
        setLoading(false);
        throw new Error("Kode Tidak Tersedia");
      }
    } catch (error) {
      setError("Kode Tidak Tersedia");
      setLoading(false);
    }
  };

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 overflow-y-auto flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-2 p-4 flex flex-col gap-4">
        <p className="font-semibold">Enter Code</p>
        <p>
          Mintalah kode kepada pengajar maupun siswa yang ingin diikuti, lalu
          masukan kodenya dibawah ini
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="relative w-2/5">
              <select
                name="filter"
                defaultValue={categoryKode}
                className="w-full p-2 border rounded-md font-semibold"
                onChange={(e) => setCategoryKode(e.target.value)}
              >
                <option value="kelas">Kelas</option>
                <option value="quiz">Quiz</option>
                <option value="ujian">Ujian</option>
              </select>
              <i className="bx bx-chevron-down absolute top-1/2 right-2 -translate-y-1/2 text-xl" />
            </div>
            <Input
              type="text"
              placeholder="Kode"
              name="code"
              className="w-3/5"
            />
          </div>
          <p className="text-red-700">{error}</p>
          <div className="w-full flex justify-end">
            <div className="w-1/2 flex gap-2">
              <Button type="button" onClick={() => Theme?.setEnterCode(false)}>
                Batal
              </Button>
              {loading ? (
                <Button type="button">
                  <Loading size={20} />
                </Button>
              ) : (
                <Button type="submit">Gabung</Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalKode;
