import Image from "next/image";
import Footer from "./Footer";

const formations = [
  {
    title: "NATIONAL HEADQUATERS",
    description: "It Comprises of all headquaters nationwide",
  },
  {
    title: "STATE HEADQUATERS",
    description: "It Comprises of all battalions in a state",
  },
  {
    title: "BATTALION",
    description: "It Comprises of all 36 State FCT Abuja and Railway Command",
  },
  { title: "COMPANY", description: "It Comprises of all Area Command" },
  { title: "PLATOON", description: "It Comprises of Multiple Units" },
  { title: "SECTION", description: "It is the Smallest Base of Man O' War" },
  {
    title: " UNIT",
    description: "It Comprises of Multiple Sections and Detachments",
  },
  {
    title: "SQUAD",
    description: "It Comprises of Multiple Teams and Individuals",
  },
  { title: "TEAM", description: "It Comprises of Individuals" },
];

export default function Formation() {
  return (
    <>
      <div className="text-center py-10 px-5">
        <h2 className="text-2xl font-bold uppercase text-gray-800 mb-6">
          Formation
        </h2>
        <div className="relative w-full max-w-4xl mx-auto mb-10">
          <Image
            src="/formation-image.jpg"
            alt="Formation of officers"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>
        <h3 className="text-xl font-semibold uppercase text-gray-800 mb-6">
          The Formation of the Nigerian Army Cadet Corps
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {formations.map((item, index) => (
            <div
              key={index}
              className="bg-black text-white p-5 rounded-lg shadow-md"
            >
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
