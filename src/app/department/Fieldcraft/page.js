import SchoolPage from "../../components/SchoolPage";

export default function FieldcraftSchool() {
  const courses = [
    {
      title: "Basic Fieldcraft Course",
      description: "Navigation, camouflage, and observation.",
    },
    {
      title: "Survival Skills Course",
      description: "Shelter construction and survival techniques.",
    },
    {
      title: "Advanced Field Operations Course",
      description: "Field leadership and tactical movement.",
    },
  ];

  return (
    <SchoolPage
      title="Cadet Fieldcraft & Survival School"
      image="/images/fieldcraft.jpg"
      courses={courses}
    />
  );
}
