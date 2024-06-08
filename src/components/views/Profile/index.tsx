import Button from "@/components/ui/Button";
import Image from "next/image";
import { useState } from "react";
import LibraryProfile from "./Library";
import { useRouter } from "next/router";

const ProfileView = (props: { query?: string | string[] | "" }) => {
  const { query } = props;
  const [position, setPosition] = useState("Ujian");
  const { push } = useRouter();

  return (
    <div className="p-4 bg-zinc-100 h-screen" style={{ marginTop: "60px" }}>
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow flex flex-col gap-4">
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <Image
                className="w-24 h-24 rounded-full"
                src="/@/../Image/Ardi.png"
                alt="Foto Profil"
                width={96}
                height={96}
              />
              <div>
                <h2 className="text-2xl font-bold">
                  Muhammad Ardiansyah Firdaus
                </h2>
                <p className="text-gray-600">Mahasiswa</p>
                <p className="text-gray-600">Email: mardif45@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex space-x-4">
                <Button
                  type="button"
                  className="flex gap-2 flex-nowrap bg-white text-black border border-gray-400 rounded items-center hover:bg-zinc-100 transition-all"
                >
                  <i className="bx bx-share-alt" />{" "}
                  <p className="text-sm"> Share Profile</p>
                </Button>
                <Button
                  type="button"
                  className="flex gap-2 flex-nowrap bg-white text-black border border-gray-400 rounded items-center"
                >
                  <i className="bx bx-edit" />{" "}
                  <p className="text-sm"> Edit Profile</p>
                </Button>
              </div>
              <div className="flex space-x-8 items-center justify-center">
                <div className="flex flex-col items-center justify-center flex-1">
                  <p className="text-xl font-bold">0</p>
                  <p className="text-gray-600">Quiz</p>
                </div>
                <div className="flex flex-col items-center justify-center flex-1">
                  <p className="text-xl font-bold">0</p>
                  <p className="text-gray-600">Ujian</p>
                </div>
                <div className="flex flex-col items-center justify-center flex-1">
                  <p className="text-xl font-bold">0</p>
                  <p className="text-gray-600">Favorite</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="items-center justify-center flex relative w-1/2">
              <Button
                type="button"
                className="bg-white text-black w-1/3 pb-2"
                onClick={() => {
                  setPosition("Quiz"), push("/profile?q=quiz");
                }}
              >
                Quiz
              </Button>
              <Button
                type="button"
                className="bg-white text-black w-1/3 pb-2"
                onClick={() => {
                  setPosition("Ujian"), push("/profile?q=ujian");
                }}
              >
                Ujian
              </Button>
              <Button
                type="button"
                className="bg-white text-black w-1/3 pb-2"
                onClick={() => {
                  setPosition("Favorite"), push("/profile?q=favorite");
                }}
              >
                Favorite
              </Button>
              <div
                className={`${position === "Quiz" ? "-translate-x-full" : ""} ${
                  position === "Ujian" ? "translate-x-0" : ""
                } ${
                  position === "Favorite" ? "translate-x-full" : ""
                } absolute transition-all w-1/3 h-1 bg-blue-700 bottom-0`}
              ></div>
            </div>
          </div>
        </div>
        {query === "quiz" && (
          <LibraryProfile
            title="Yuk Buat Quiz Pertamamu!"
            desc="Klik Tombol dibawah buat membuat Quiz"
            textButton="Buat Quiz"
          />
        )}
        {query === "ujian" && (
          <LibraryProfile
            title="Yuk Buat Ujian Pertamamu!"
            desc="Klik Tombol dibawah buat membuat Ujian"
            textButton="Buat Ujian"
          />
        )}
        {!query && (
          <LibraryProfile
            title="Yuk Buat Ujian Pertamamu!"
            desc="Klik Tomnol dibawah buat membuat Ujian"
            textButton="Buat Ujian"
          />
        )}
        {query === "favorite" && (
          <LibraryProfile
            title="Kamu Belum Memiliki Favorite"
          />
        )}
      </div>
    </div>
  );
};

export default ProfileView;
