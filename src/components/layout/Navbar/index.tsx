import Input from "@/components/ui/Input";
import { useState } from "react";

const List = (props: {
  setFiltered: any;
  content: string;
  filtered: string;
}) => {
  const { setFiltered, content, filtered } = props;
  return (
    <li
      className={`${
        content === filtered ? "text-blue-700 bg-blue-50" : ""
      } cursor-pointer py-2 px-3`}
      onClick={setFiltered}
    >
      {content}
    </li>
  );
};

const NavbarLayout = () => {
  const [onFilter, setOnFilter] = useState(false);
  const [filtered, setFiltered] = useState("Quiz");

  const handleClickFilter = (contentFilter: string) => {
    setFiltered(contentFilter);
    setOnFilter(false);
  };

  return (
    <div className="py-2 px-4 flex gap-4 bg-white shadow fixed w-5/6 z-50">
      <div className="relative w-full">
        <i className="bx bx-search absolute top-1/2 -translate-y-1/2 left-4" />
        <Input
          type="text"
          placeholder="Search..."
          name="search"
          className="ps-10 pe-32"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 right-4 flex gap-3 cursor-pointer items-center"
          onClick={() => setOnFilter(!onFilter)}
        >
          <i className={`bx bx-filter-alt text-xl`} />
          <p className="font-semibold">{filtered}</p>
          <i
            className={`${
              onFilter ? "-rotate-180" : "rotate-0"
            } bx bx-chevron-down text-xl transition-all`}
          />
        </div>
        <div
          className={`${
            onFilter ? "block" : "hidden"
          } absolute transition-all right-0 h-auto w-28 bg-white shadow rounded`}
        >
          <ul>
            <List
              setFiltered={() => handleClickFilter("Kelas")}
              content="Kelas"
              filtered={filtered}
            />
            <List
              setFiltered={() => handleClickFilter("Tugas")}
              content="Tugas"
              filtered={filtered}
            />
            <List
              setFiltered={() => handleClickFilter("Quiz")}
              content="Quiz"
              filtered={filtered}
            />
            <List
              setFiltered={() => handleClickFilter("Ujian")}
              content="Ujian"
              filtered={filtered}
            />
          </ul>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <button className="bg-blue-700 text-white px-3 py-2 rounded text-nowrap">
          Enter Code
        </button>
        <i className="bx bx-bell text-xl py-2 px-3 rounded-full bg-zinc-100 cursor-pointer" />
      </div>
    </div>
  );
};

export default NavbarLayout;
