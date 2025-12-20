import React from "react";
import Footer from "./Footer";

const courses = [
  {
    title: "MAN O' WAR BASIC COURSE",
    description:
      "This course is specially designed for all Non-Commissioned Officers (NCOs). The curriculum will cover an introduction to Man O’ War, Information gathering, Basic Profiling and Reporting, Rope Knotting, Camp activities, etc. At the end of the course, participants will be awarded a Course Badge and Certificate indicating that he/she is a graduate member of the Man O’ War Basic Course.",
    bgColor: "bg-black text-white",
    image: "/path-to-your-image.jpg", // Add your image path here
  },
  {
    title: "Technical and Vocational Skills Development Course",
    description:
      "This course is specially designed for Inspectorate Officers Cadre. At this stage, members will be exposed to Community Development Programmes and Volunteerism aiming at bridging bridges amongst neighbors. At the end of the Course, participants will be awarded a Course Badge and Certificate.",
    bgColor: "bg-blue-500 text-white",
  },
  {
    title: "Parade drill and Physical Training Course",
    description:
      "This course is specially designed for Superintendent Officers Cadre. It is to equip members with the pre-requisite to carry out rescue activities and be able to manage disaster effectively. It is compulsory for all members to attend this course for effective service delivery.",
    bgColor: "bg-black text-white",
  },
  {
    title: "INTELLIGENCE AND INFORMATION MANAGEMENT",
    description:
      "This course is specially designed for officers in the Commander Cadre. At this stage, members will be exposed to Intelligence and Information Management in relation to the primary activity of Man O’ War. At the end of the Course, participants will be awarded a Course Badge and Certificate.",
    bgColor: "bg-blue-500 text-white",
  },
  {
    title: "LEADERSHIP AND HUMAN MANAGEMENT",
    description:
      "This course is specially designed for National Command Officers Cadre. At this stage, members will be exposed to Leadership and Human Management in relation to the primary activity of Man O’ War. At the end of the Course, participants will be awarded a Course Badge and Certificate.",
    bgColor: "bg-black text-white",
  },
];

const CourseCategories = () => {
  return (
    <>
      <div className="container mx-auto py-10">
        <h2 className="text-2xl font-bold text-center mb-6">COURSE CATEGORY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`${course.bgColor} p-6 rounded-lg shadow-lg`}
            >
              {course.image && (
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover mb-4 rounded-md"
                />
              )}
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseCategories;
