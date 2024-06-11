import Image from "next/image";

type proptypes = {
  owner: string;
  members: any[];
};

const DetailClassMembers = (props: proptypes) => {
  const { owner, members } = props;
  return (
    <div className="w-full py-4 px-20">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-2xl">Pengajar</p>
          <hr className="h-[2px] bg-blue-700 rounded-full" />
          <div className="flex gap-4 items-center">
            <Image
              src={"/@/../Image/Ardi.png"}
              alt="photo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p className="font-semibold">Muhammad Ardiansyah Firdaus</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-2xl">Siswa</p>
          <hr className="h-[2px] bg-blue-700 rounded-full" />
          <div className="flex gap-4 items-center">
            <Image
              src={"/@/../Image/Ardi.png"}
              alt="photo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p className="font-semibold">Muhammad Ardiansyah Firdaus</p>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src={"/@/../Image/Ardi.png"}
              alt="photo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p className="font-semibold">Muhammad Ardiansyah Firdaus</p>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src={"/@/../Image/Ardi.png"}
              alt="photo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p className="font-semibold">Muhammad Ardiansyah Firdaus</p>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src={"/@/../Image/Ardi.png"}
              alt="photo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p className="font-semibold">Muhammad Ardiansyah Firdaus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailClassMembers;
