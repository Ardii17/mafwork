import { ThemeContext } from "@/components/context";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Loading from "@/components/ui/Loading";
import userServices from "@/services/user";
import { useSession } from "next-auth/react";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useState,
} from "react";

type proptypes = {
  setOnAddClass: Dispatch<SetStateAction<boolean>>;
};

const ModalLayout = (props: proptypes) => {
  const { setOnAddClass } = props;
  const Theme = useContext(ThemeContext);
  const session: any = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    setIsLoading(true);
    const data: any = {
      name: form.class.value,
      grade: form.level.value,
      desc: form.desc.value,
      classTime: form.classTime.value,
      classDuration: form.classDuration.value,
      classLocation: form.classLocation.value,
      createdAt: new Date(),
      code: Theme?.generateRandomCode(),
      owner: session.data?.user?.id,
      members: [],
    };

    const result = await userServices.addClass(session.data?.user?.token, data);

    if (result.status === 200) {
      const resultUpdate = await userServices.updateProfile(
        session.data?.token,
        {
          classesOwned: [
            ...(Theme?.profile?.classesOwned || []),
            result.data.data,
          ],
        }
      );

      if (resultUpdate.status === 200) {
        Theme?.updateLocalStorageProfile(session.data?.user.id, {
          ...Theme?.profile,
          classesOwned: [
            ...(Theme?.profile?.classesOwned || []),
            result.data.data,
          ],
        });
        setIsLoading(false);
        setOnAddClass(false);
        window.location.reload();
        form.reset();
      }
    } else {
      console.log("error");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg w-full max-w-md mx-2"
      >
        <div className="px-4 py-2 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Buat Kelas</h2>
        </div>
        <div className="px-4 py-3 max-h-[30rem] overflow-y-auto">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Kelas
            </label>
            <Input
              name="class"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tingkatan Kelas
            </label>
            <Input
              name="level"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Deskripsi Kelas
            </label>
            <textarea
              name="desc"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Waktu Kelas
            </label>
            <Input
              name="classTime"
              type="time"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Durasi Kelas (jam)
            </label>
            <Input
              name="classDuration"
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Lokasi Kelas
            </label>
            <select
              name="classLocation"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            >
              <option>Pilih Lokasi</option>
              <option>Online</option>
              <option>Ruang Kelas A</option>
              <option>Ruang Kelas B</option>
            </select>
          </div>
        </div>
        <div className="px-4 py-2 border-t border-gray-200 flex justify-end">
          <Button
            type="button"
            className="bg-gray-500 text-white rounded mr-2"
            onClick={() => setOnAddClass(false)}
          >
            Batal
          </Button>
          {isLoading ? (
            <Button type="button" className="bg-blue-500 text-white rounded">
              <Loading size={20} />
            </Button>
          ) : (
            <Button type="submit" className="bg-blue-500 text-white rounded">
              Buat
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ModalLayout;
