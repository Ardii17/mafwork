import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";
import DetailClassForum from "./Forum";
import DetailClassAssignment from "./Assignment";
import DetailClassMembers from "./Members";

type proptypes = {
  data: any;
};

const DetailClassView = (props: proptypes) => {
  const { data } = props;
  const [position, setPosition] = useState("Forum");
  const [contents, setContents] = useState<any>([]);
  useEffect(() => {
    if (data && Object.keys(data).length > 0 && data) {
      const assignments = Array.isArray(data.assignments)
        ? data.assignments
        : [];
      const lessons = Array.isArray(data.lessons) ? data.lessons : [];
      const posts = Array.isArray(data.posts) ? data.posts : [];
      setContents([...assignments, ...lessons, ...posts].flat());
    }
  }, [data]);

  return (
    <div
      className="w-full p-4 flex flex-col gap-4"
      style={{ marginTop: "60px" }}
    >
      <div
        className="w-full bg-cover h-52 flex flex-col justify-end text-white rounded-lg p-4 shadow"
        style={{
          backgroundImage: `url(/@/../Image/BackgroundClass/${data?.bg}.png)`,
        }}
      >
        <p className="text-3xl font-bold">{data.name}</p>
        <p className="font-semibold text-lg">{data.grade}</p>
      </div>
      <div className="flex flex-col w-full rounded-lg min-h-96 bg-white shadow">
        <div className="w-full bg-white border-b flex justify-center rounded-t-lg">
          <div className="items-center justify-center flex relative w-1/2">
            <Button
              type="button"
              className="bg-white text-black w-1/3 pb-2"
              onClick={() => {
                setPosition("Forum");
              }}
            >
              Forum
            </Button>
            <Button
              type="button"
              className="bg-white text-black w-1/3 pb-2"
              onClick={() => {
                setPosition("Tugas");
              }}
            >
              Tugas Kelas
            </Button>
            <Button
              type="button"
              className="bg-white text-black w-1/3 pb-2"
              onClick={() => {
                setPosition("Anggota");
              }}
            >
              Anggota Kelas
            </Button>
            <div
              className={`${position === "Forum" ? "-translate-x-full" : ""} ${
                position === "Tugas" ? "translate-x-0" : ""
              } ${
                position === "Anggota" ? "translate-x-full" : ""
              } absolute transition-all rounded-t-md w-1/3 h-1 bg-blue-700 bottom-0`}
            ></div>
          </div>
        </div>
        {position === "Forum" && (
          <DetailClassForum data={data} contents={contents} />
        )}
        {position === "Tugas" && (
          <DetailClassAssignment assignment={data.assignments} />
        )}
        {position === "Anggota" && (
          <DetailClassMembers members={data.members} owner={data.owner} />
        )}
      </div>
    </div>
  );
};

export default DetailClassView;
