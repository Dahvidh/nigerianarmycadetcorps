import Image from "next/image";
import SchoolPage from "../../components/SchoolPage";

export default function MedicalSchool() {
  const courses = [
    {
      title: "Basic First Aid Course",
      description: "Fundamental lifesaving and emergency response skills.",
    },
    {
      title: "Field Medical Course",
      description:
        "Casualty evacuation, field sanitation, and disaster response.",
    },
    {
      title: "Advanced Medical Instructor Course",
      description:
        "Preparation of medical instructors and emergency response coordinators.",
    },
  ];

  return (
    <SchoolPage
      title="Cadet Medical School"
      image="/images/medical.jpg"
      courses={courses}
    />
  );
}
