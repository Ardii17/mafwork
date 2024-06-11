import { ThemeContext } from "@/components/context";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";

const List = (props: {
  onClick?: any;
  content: string;
  filtered?: string;
  children?: React.ReactNode;
}) => {
  const { onClick, content, filtered, children } = props;
  return (
    <li
      className={`${content === filtered ? "text-blue-700 bg-blue-50" : ""} ${
        children ? "flex gap-3 items-center" : ""
      } cursor-pointer py-2 px-5 font-semibold`}
      onClick={onClick}
    >
      <p className="text-2xl">{children}</p> <p>{content}</p>
    </li>
  );
};

const SidebarLayout = () => {
  const session: any = useSession();
  const Theme = useContext(ThemeContext);
  const { pathname, push } = useRouter();

  return (
    <div className="w-full min-h-screen h-screen max-h-screen relative">
      <div className="fixed w-1/6 min-h-screen h-screen max-h-screen bg-white shadow flex flex-col gap-4">
        <div className="w-full flex items-center justify-center mt-4">
          <Image
            src={"/@/../Image/Mafwork Text.png"}
            alt={"Logo"}
            width={130}
            height={130}
          />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="font-semibold text-center">
            {session.data?.user.username}
          </p>
          <p className="text-sm opacity-70">Student</p>
        </div>
        <div className="mt-8">
          <ul>
            <List
              content="Beranda"
              onClick={() => push("/home")}
              filtered={`${pathname.split("/")[1] === "home" ? "Beranda" : ""}`}
            >
              <i className="bx bx-home" />
            </List>
            <List
              content="Kelas"
              onClick={() => push("/class")}
              filtered={`${pathname.split("/")[1] === "class" ? "Kelas" : ""}`}
            >
              <i className="bx bx-chalkboard" />
            </List>
            <List
              content="Tugas"
              onClick={() => push("/assignment")}
              filtered={`${
                pathname.split("/")[1] === "assignment" ? "Tugas" : ""
              }`}
            >
              <i className="bx bx-task" />
            </List>
            <List
              content="Quiz"
              onClick={() => push("/quiz")}
              filtered={`${pathname.split("/")[1] === "quiz" ? "Quiz" : ""}`}
            >
              <i className="bx bx-question-mark" />
            </List>
            <List
              content="Ujian"
              onClick={() => push("/exam")}
              filtered={`${pathname.split("/")[1] === "exam" ? "Ujian" : ""}`}
            >
              <i className="bx bx-file" />
            </List>
            <List
              content="Profile"
              onClick={() => push("/profile")}
              filtered={`${
                pathname.split("/")[1] === "profile" ? "Profile" : ""
              }`}
            >
              <i className="bx bxs-user-detail" />
            </List>
            <List
              content="Pengaturan"
              onClick={() => push("/setting")}
              filtered={`${
                pathname.split("/")[1] === "setting" ? "Pengaturan" : ""
              }`}
            >
              <i className="bx bx-cog" />
            </List>
            <List content="Logout" onClick={() => Theme?.signOut()}>
              <i className="bx bx-log-out" />
            </List>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
