"use client";

import { useRouter } from "next/navigation";
import { FaFolder } from "react-icons/fa";

const folders = [
  { name: " E.Adanu", link: "/verified/officers/adanu-e" },
  { name: "D.C Chima", link: "/verified/officers/d.c.chima" },
  { name: "D.O Nnamdi", link: "/verified/officers/d.o.nnamdi" },
  { name: "L.I Ononammadu", link: "/verified/officers/l.i.ononammadu" },
  { name: "J.O Aneke", link: "/verified/officers/j.o.aneke" },
    { name: "O.C Simon", link: "/verified/officers/o.c.simon" },
  { name: "O.T Richard", link: "/verified/officers/o.t.richard" },
];

export default function FolderGrid() {
  const router = useRouter();

  const handleClick = (link) => {
    router.push(link);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
      {folders.map((folder, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center space-y-2 cursor-pointer group group-hover:shadow-md"
          onClick={() => handleClick(folder.link)}
        >
          <FaFolder className="text-yellow-500 text-7xl group-hover:shadow-md group-hover:text-green-500 transform group-hover:scale-110 transition-all duration-300 ease-out" />
          <p className="mt-3 text-center text-gray-800 text-lg font-semibold">
            {folder.name}
          </p>
        </div>
      ))}
    </div>
  );
}
