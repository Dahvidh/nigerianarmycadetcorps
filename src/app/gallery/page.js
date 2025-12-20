"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const photos = [
  {
    id: 1,
    src: "/images/photo1.jpg",
    details: "Man O War members attending a briefing.",
    date: "Friday 14-06-2024",
  },
  {
    id: 2,
    src: "/images/photo2.jpg",
    details:
      "The National Commander recently paid an official visit to the Ondo State Governor office in Akure.",
    date: "Friday 14-06-2024",
  },
  {
    id: 3,
    src: "/images/photo3.jpg",
    details: "Award presentation ceremony.",
    date: "Friday 14-06-2024",
  },
];

export default function PhotoUpdate() {
  return (
    <div className="bg-gray-100 py-10 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-6">Photo Update</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}

function PhotoCard({ photo }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-64 h-40 overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={photo.src}
        alt="Photo"
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 transform hover:scale-105"
      />
      {hover && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white p-4 text-center">
          {/*<p className="text-sm mb-2">{photo.details}</p>*/}
          <p className="text-xs opacity-75 mb-3">{photo.date}</p>
          <button className="bg-blue-500 px-4 py-1 text-white rounded hover:bg-blue-600 text-sm">
            View Image
          </button>
        </div>
      )}
    </div>
  );
}
