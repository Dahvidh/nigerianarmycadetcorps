import SchoolPage from "../../components/SchoolPage";
export default function DrillSchool() {
  const courses = [
    {
      title: "Basic Drill Course",
      description: "Foot drill, ceremonial movements, and parade discipline.",
    },
    {
      title: "Drill Instructor Course",
      description: "Instructional methods and parade command.",
    },
    {
      title: "Advanced Ceremonial Course",
      description: "State ceremonies and large-scale parade management.",
    },
  ];

  return (
    <SchoolPage
      title="Cadet Drill & Ceremonial School"
      image="/assets/13.04.44_1770d611.jpg"
      courses={courses}
    />
  );
}
