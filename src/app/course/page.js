import Image from "next/image";

export default function CourseSection() {
  return (
    <section className="py-12 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center">Course</h2>
        <nav className="text-sm text-gray-600 text-center mt-2">
          <a href="/" className="hover:text-blue-500">
            Home
          </a>{" "}
          / <span>Course</span>
        </nav>
        <div className="mt-6">
          <Image
            src="/path-to-image.jpg"
            alt="C & L T C Training"
            width={800}
            height={400}
            className="w-full rounded-md"
          />
        </div>
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold">Basic Officer's Course I</h3>
          <p className="mt-2 text-gray-700 max-w-3xl mx-auto">
            The Citizenship and Leadership Training Centre is a parastatal under
            the Ministry of Youth and Sport Development. It is also the parental
            body of MAN O’ WAR NIGERIA. The Centre is an informal institution.
            It uses the challenges found in the environment to confront
            participants for the purpose of developing the core values of
            courage, trust, integrity, and compassion for others.
          </p>
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold">Basic Officer's Course II</h3>
          <p className="mt-2 text-gray-700 max-w-3xl mx-auto">
            The Citizenship and Leadership Training Centre is a parastatal under
            the Ministry of Youth and Sport Development. It is also the parental
            body of MAN O’ WAR NIGERIA. The Centre is an informal institution.
            It uses the challenges found in the environment to confront
            participants for the purpose of developing the core values of
            courage, trust, integrity, and compassion for others.
          </p>
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold">Advanced Officer's Course</h3>
          <p className="mt-2 text-gray-700 max-w-3xl mx-auto">
            The Citizenship and Leadership Training Centre is a parastatal under
            the Ministry of Youth and Sport Development. It is also the parental
            body of MAN O’ WAR NIGERIA. The Centre is an informal institution.
            It uses the challenges found in the environment to confront
            participants for the purpose of developing the core values of
            courage, trust, integrity, and compassion for others.
          </p>
        </div>
      </div>
    </section>
  );
}
