"use client";
import React from "react";

const chainOfCommand = [
  {
    title: "National Headquarters (Strategic Command Level)",
    roles: [
      "National Commandant (Cadet General)",
      "Deputy National Commandant (Cadet Lt. General)",
      "National Chief of Staff (Cadet Major General)",
      "National Adjutant General (Cadet Brigadier General)",
      "National Training and Operations Officer (Cadet Brigadier General)",
      "National Provost Marshal (Cadet Colonel)",
      "National Intelligence & Surveillance Officer (Cadet Colonel)",
      "National Logistics & Supply Officer (Cadet Colonel)",
    ],
  },
  {
    title: "Zonal Command (Operational Command Level)",
    roles: [
      "Zonal Commander (Cadet Brigadier General)",
      "Zonal Deputy Commander (Cadet Colonel)",
      "Zonal Training Officer (Cadet Lt. Colonel)",
      "Zonal Provost Officer (Cadet Lt. Colonel)",
      "Zonal Logistics Officer (Cadet Major)",
    ],
  },
  {
    title: "State Command (Tactical Command Level)",
    roles: [
      "State Commandant (Cadet Colonel)",
      "Deputy State Commandant (Cadet Lt. Colonel)",
      "State Adjutant (Cadet Major)",
      "State Operations/Training Officer (Cadet Captain)",
      "State Provost Officer (Cadet Captain)",
      "State Intelligence Officer (Cadet Lieutenant)",
    ],
  },
  {
    title: "Area/Local Command (Unit Command Level)",
    roles: [
      "Area/Local Commandant (Cadet Major)",
      "Training Officer (Cadet Captain)",
      "Provost Officer (Cadet Lieutenant)",
      "Adjutant/Secretary (Cadet 2nd Lieutenant)",
    ],
  },
  {
    title: "Company/School Command (Company Level)",
    roles: [
      "Company Commander (Cadet Captain or Cadet Lieutenant)",
      "Company Sergeant Major (Cadet Warrant Officer Class 2)",
      "Platoon Leaders (Cadet Sergeants or Corporals)",
      "Cadets (Privates – Non-Commissioned Cadets)",
    ],
  },
  {
    title: "Specialist Units (Parallel Command under HQ Supervision)",
    roles: [
      "Cadet Medical Corps",
      "Cadet Band Corps",
      "Cadet Signal/IT Corps",
      "Cadet Tactical Squad",
      "Cadet Provost/Police Unit",
    ],
  },
];

export default function Hierachy() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-green-900">
          NACC Chain of Command
        </h1>
        {chainOfCommand.map((section, idx) => (
          <div key={idx} className="mb-10 bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">
              {section.title}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {section.roles.map((role, index) => (
                <li key={index} className="text-gray-700">
                  {role}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
