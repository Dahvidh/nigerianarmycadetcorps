import SchoolPage from "../../components/SchoolPage";

export default function FinanceSchool() {
  const courses = [
    {
      title: "Basic Finance Course",
      description: "Financial administration, record keeping, and budgeting.",
    },
    {
      title: "Financial Management Course",
      description: "Resource management, auditing, and accountability.",
    },
    {
      title: "Advanced Finance & Administration Course",
      description:
        "Financial planning, procurement oversight, and strategic resource management.",
    },
  ];

  return (
    <SchoolPage
      title="Cadet Finance School"
      image="/images/finance.jpg"
      courses={courses}
    />
  );
}
