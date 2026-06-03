import Image from "next/image";

export default function CourseSection() {
  const courses = [
    {
      title: "Basic Officer's Course (BOC)",
      description:
        "The Basic Officer's Course is the foundational leadership training programme for newly commissioned officers of the Nigerian Army Cadet Corps (NACC). The course develops military discipline, leadership principles, drill instruction, administration, communication skills, command responsibilities, and officer ethics. Graduates are equipped to lead cadets at unit level and perform junior command appointments within the Corps.",
    },
    {
      title: "Senior Officer's Course (SOC)",
      description:
        "The Senior Officer's Course prepares officers for greater leadership responsibilities within formations and commands. The curriculum focuses on personnel management, instructional techniques, operational planning, training administration, leadership development, public relations, and organizational management. Successful participants are qualified to supervise subordinate officers and coordinate major training activities.",
    },
    {
      title: "Advanced Officer's Course (AOC)",
      description:
        "The Advanced Officer's Course is the highest professional development programme for NACC officers. It develops strategic leadership, command and staff capabilities, policy implementation, operational planning, crisis management, institutional administration, and national youth development strategies. Graduates are prepared for senior command, staff, and advisory appointments within the Corps.",
    },
  ];

  return (
    <section className="py-12 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Officer Development Courses
        </h2>

        <nav className="text-sm text-gray-600 text-center mt-2">
          <a href="/" className="hover:text-green-700">
            Home
          </a>{" "}
          / <span>Officer Courses</span>
        </nav>

        <div className="mt-8">
          <Image
            src="/images/officer-course-banner.jpg"
            alt="NACC Officer Training"
            width={1200}
            height={500}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-10 mt-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-sm text-center"
            >
              <h3 className="text-2xl font-semibold mb-4">{course.title}</h3>

              <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
