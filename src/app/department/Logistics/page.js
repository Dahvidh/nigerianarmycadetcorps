import SchoolPage from "../../components/SchoolPage";

export default function LogisticsSchool() {
  const courses = [
    {
      title: "Basic Logistics Course",
      description:
        "Introduction to supply, transportation, and inventory management.",
    },
    {
      title: "Logistics Operations Course",
      description: "Planning and coordinating logistical support.",
    },
    {
      title: "Advanced Logistics Course",
      description: "Strategic logistics planning and resource management.",
    },
  ];

  return (
    <SchoolPage
      title="Cadet Logistics School"
      image="/images/logistics.jpg"
      courses={courses}
    />
  );
}
