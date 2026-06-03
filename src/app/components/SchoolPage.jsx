import Image from "next/image";

export default function SchoolPage({ title, image, courses }) {
  return (
    <section className="py-12 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center">{title}</h1>

        <div className="mt-8">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={500}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {courses.map((course, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">{course.title}</h3>

              <p className="text-gray-700">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
