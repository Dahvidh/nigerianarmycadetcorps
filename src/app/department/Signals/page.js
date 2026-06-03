import SchoolPage from "../../components/SchoolPage";

export default function SignalsSchool() {
  const courses = [
    {
      title: "Basic Signals Course",
      description: "Radio communication procedures and message handling.",
    },
    {
      title: "Communications Operations Course",
      description: "Field communication networks and signal security.",
    },
    {
      title: "Advanced Signals Course",
      description:
        "Communications planning and command communications systems.",
    },
  ];

  return (
    <SchoolPage
      title="Cadet Signals School"
      image="/images/signals.jpg"
      courses={courses}
    />
  );
}
