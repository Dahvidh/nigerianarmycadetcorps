import SchoolPage from "../../components/SchoolPage";

export default function BandSchool() {
  const courses = [
    {
      title: "Basic Military Music Course",
      description: "Fundamentals of military music and marching band skills.",
    },
    {
      title: "Band Instructor Course",
      description: "Training for band leaders and instructors.",
    },
    {
      title: "Advanced Bandmaster Course",
      description: "Band administration and ceremonial performances.",
    },
  ];

  return (
    <SchoolPage
      title="Cadet Band & Music School"
      image="/images/band.jpg"
      courses={courses}
    />
  );
}
