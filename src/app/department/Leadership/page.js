import SchoolPage from "../../components/SchoolPage";

export default function LeadershipSchool() {
  const courses = [
    {
      title: "Junior Leadership Course",
      description: "Leadership fundamentals and team management.",
    },
    {
      title: "Senior Leadership Course",
      description: "Advanced leadership and personnel administration.",
    },
    {
      title: "Command Leadership Course",
      description: "Strategic leadership and command responsibilities.",
    },
  ];

  return (
    <SchoolPage
      title="Cadet Leadership Development School"
      image="/images/leadership.jpg"
      courses={courses}
    />
  );
}
