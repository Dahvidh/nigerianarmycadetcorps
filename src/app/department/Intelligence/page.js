import SchoolPage from "../../components/SchoolPage";

export default function IntelligenceSchool() {
  const courses = [
    {
      title: "Basic Intelligence Course",
      description:
        "Introduction to intelligence gathering and information management.",
    },
    {
      title: "Security Operations Course",
      description: "Threat assessment, surveillance, and protective security.",
    },
    {
      title: "Advanced Intelligence Course",
      description:
        "Intelligence planning and analysis for senior appointments.",
    },
  ];

  return (
    <SchoolPage
      title="Cadet Intelligence School"
      image="/images/intelligence.jpg"
      courses={courses}
    />
  );
}
