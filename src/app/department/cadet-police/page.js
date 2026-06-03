import Image from "next/image";
import SchoolPage from "../../components/SchoolPage";

export default function CadetPoliceSchool() {
  const courses = [
    {
      title: "Basic Cadet Police Course",
      description:
        "Introduces military policing, discipline enforcement, guard duties, and security procedures.",
    },
    {
      title: "Provost Operations Course",
      description:
        "Training in investigations, traffic control, ceremonial security, and detainee handling.",
    },
    {
      title: "Advanced Police Leadership Course",
      description:
        "Develops command, supervision, and management skills for senior Cadet Police personnel.",
    },
  ];

  return (
    <SchoolPage
      title="Cadet Police & Provost School"
      image="/images/cadet-police.jpg"
      courses={courses}
    />
  );
}
