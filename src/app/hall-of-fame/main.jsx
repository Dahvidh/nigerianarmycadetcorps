"use client";

import { useRouter } from "next/navigation";
import { FaFolder } from "react-icons/fa";

const folders = [
  { name: "Commanding Officers", link: "/admin/oscar-company" },
  { name: "2ICs", link: "/admin/golf-company" },
  { name: "Adjutants", link: "/admin/echo-company" },
  { name: "Intelligence Officers", link: "/admin/zulu-company" },
  { name: "Platoon Commander", link: "/admin/charlie-company" },
  { name: "Cheif Training Officers", link: "/admin/kilo-company" },
  { name: "Finance Officers", link: "/admin/kilo-company" },
  { name: "Quartermasters", link: "/admin/kilo-company" },
  { name: "Education Officers", link: "/admin/kilo-company" },
  { name: "Medical Officers", link: "/admin/kilo-company" },
  { name: "Provost Marshals", link: "/admin/kilo-company" },
  { name: "Regimemtal Sergeant Majors", link: "/admin/kilo-company" },
  { name: "Regimental Police", link: "/admin/kilo-company" },
  { name: "Company Police", link: "/admin/kilo-company" },
  { name: "Assistant Quartermasters", link: "/admin/kilo-company" },
  { name: "Assistant Training Officers", link: "/admin/kilo-company" },
  { name: "Assistant Finance Officers", link: "/admin/kilo-company" },
  { name: "Assistant Education Officers", link: "/admin/kilo-company" },
  { name: "Assistant Medical Officers", link: "/admin/kilo-company" },
  { name: "Platoon Sergeants", link: "/admin/kilo-company" },
  { name: "Regimental Clerks", link: "/admin/kilo-company" },
  { name: "Company Clerks", link: "/admin/kilo-company" },
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
