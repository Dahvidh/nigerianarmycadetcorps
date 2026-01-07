"use client";
import React from "react";

const VerifiedOfficerProfile = ({
  photo,
  name,
  rank,
  dob,
  address,
  intake,
  recruitmentDetails = {},
  fouls = [],
  achievements = [],
  medicalDetails = {},
}) => {
  console.log("Officer Info:", { name, photo, rank, dob, address, intake, recruitmentDetails, fouls, achievements, medicalDetails });

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 mt-8 text-gray-900 dark:text-gray-100">
      <div className="flex items-center space-x-6">
        <img
          src={photo}
          alt={`${name || "Officer"}'s photo`}
          className="w-32 h-32 rounded-full border-4 border-gray-300 dark:border-gray-700 object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold">
            {name || <span className="text-red-500">[Name Not Provided]</span>}
          </h2>
          <p className="text-lg">{rank}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">DOB: {dob}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Intake: {intake}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold border-b pb-1 mb-2">Address</h3>
        <p>{address}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold border-b pb-1 mb-2">
          Recruitment Details
        </h3>
        <ul className="list-disc list-inside space-y-1">
          {Object.entries(recruitmentDetails).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold border-b pb-1 mb-2">
          Medical Records
        </h3>
        {Object.keys(medicalDetails).length > 0 ? (
          <ul className="list-disc list-inside space-y-1">
            {Object.entries(medicalDetails).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No medical records provided.</p>
        )}
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold border-b pb-1 mb-2">
          Fouls & Disciplinary Actions
        </h3>
        {fouls.length > 0 ? (
          <ul className="list-disc list-inside space-y-2">
            {fouls.map((foul, index) => (
              <li key={index}>
                <strong>{foul.description}</strong> — {foul.date}
                <br />
                <span className="text-sm text-red-500">
                  Action: {foul.action}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-green-500">No fouls recorded.</p>
        )}
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold border-b pb-1 mb-2">
          Achievements
        </h3>
        {achievements.length > 0 ? (
          <ul className="list-disc list-inside space-y-1">
            {achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No achievements listed.</p>
        )}
      </div>
    </div>
  );
};

const OfficerProfilePage = () => {
  return (
    <VerifiedOfficerProfile
      name=" Lawrence I. Ononammadu"
      photo="/assets/Ononammadu.jpeg"
      rank="Cadet Lance Corporal"
      dob="10-08-2006"
      address="54, Alabi Oyo street Bucknor, Ejigbo, Lagos State, Nigeria"
      intake="2024"
      recruitmentDetails={{
        SerialNo: "NACC/OC/FSTCY/24/B/003",
        Batch: "2023 Bravo",
        Platoon: "Bravo Platoon",
        Department: "Cadet Police",
        Instructor: "CDT MAJ Adanu Ellen",
        "Recruitment Date": "2024-08-15",
        "Medical Status": "Fit",
        Status: "Active",
        Post: "Cadet Police",
        "Training Status": "Active",
      }}
      medicalDetails={{
        BloodGroup: "O+",
        Genotype: "AA",
        Height: "5'9\"",
        Weight: "72kg",
        Colorblind: "No",
        Allergies: "None",
        LastMedicalCheck: "2025-02-01",
      }}
      fouls={[
        {
          description: "",
          date: "",
          action: "",
        },
      ]}
      achievements={[
        " ",
        
      ]}
    />
  );
};

export default OfficerProfilePage;

