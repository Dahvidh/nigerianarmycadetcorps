import SchoolPage from "../../components/SchoolPage";

export default function EngineeringSchool() {
  const courses = [
    {
      title: "Basic Engineering Course",
      description: "Introduction to military engineering concepts.",
    },
    {
      title: "Construction & Maintenance Course",
      description: "Camp construction and infrastructure maintenance.",
    },
    {
      title: "Advanced Engineering Course",
      description: "Engineering planning and project supervision.",
    },
  ];

  return (
    <SchoolPage
      title="Cadet Engineering School"
      image="/images/engineering.jpg"
      courses={courses}
    />
  );
}
