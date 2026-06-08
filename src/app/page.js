import {
  FaRegLightbulb,
  FaUsers,
  FaShieldAlt,
  FaDumbbell,
  FaFlag,
} from "react-icons/fa";
import Header from "../components/Header";

export default function AboutUs() {
  const schools = [
    "Cadet Police",
    "Medical",
    "Signals",
    "Intelligence",
    "Logistics",
    "Drill",
    "Fieldcraft",
    "Engineering",
    "Leadership",
    "Band",
    "Finance",
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[450px]">
        <img
          src="assets/10.41.00_6bb7df44.jpg"
          alt="NACC Cadets"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl font-bold mb-4">
              Nigerian Army Cadet Corps
            </h1>

            <p className="text-xl max-w-3xl mx-auto">
              Building Discipline, Leadership, Patriotism and Service Among
              Nigerian Youths.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6 text-black">
          About the Nigerian Army Cadet Corps
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          The Nigerian Army Cadet Corps (NACC) is a voluntary youth organization
          dedicated to developing disciplined, responsible, patriotic, and
          service-oriented young Nigerians through structured military-style
          training, leadership development, physical fitness, civic education,
          and character building.
        </p>

        {/* Corps Overview */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            Corps Overview
          </h3>

          <p className="text-gray-700">
            The Corps provides a platform for young Nigerians to develop
            leadership skills, teamwork, discipline, confidence, patriotism, and
            national consciousness while preparing them for future leadership
            responsibilities in society.
          </p>
        </div>

        {/* Core Objectives */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            Core Objectives
          </h3>

          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Develop leadership skills and patriotism.</li>
            <li>Promote military-style discipline and responsibility.</li>
            <li>Encourage civic responsibility and national service.</li>
            <li>Prepare cadets for future leadership opportunities.</li>
            <li>Promote national unity and integration.</li>
          </ul>
        </div>

        {/* Training Structure */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            Training Structure
          </h3>

          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Military drill and ceremonial training.</li>
            <li>Physical fitness and endurance development.</li>
            <li>Leadership and command training.</li>
            <li>Fieldcraft and survival skills.</li>
            <li>Citizenship education and national values.</li>
            <li>Specialist departmental training.</li>
            <li>Leadership camps and exercises.</li>
          </ul>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-green-700">36+</h3>
              <p className="text-gray-600 mt-2">States Represented</p>
            </div>

            <div className="bg-white shadow rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-green-700">11</h3>
              <p className="text-gray-600 mt-2">Specialist Schools</p>
            </div>

            <div className="bg-white shadow rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-green-700">3</h3>
              <p className="text-gray-600 mt-2">Officer Courses</p>
            </div>

            <div className="bg-white shadow rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-green-700">100%</h3>
              <p className="text-gray-600 mt-2">Leadership Focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Join the NACC?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <FaShieldAlt className="text-5xl text-green-700 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Discipline</h3>
              <p>Develop strong character and responsibility.</p>
            </div>

            <div className="text-center">
              <FaUsers className="text-5xl text-green-700 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Leadership</h3>
              <p>Learn command and teamwork skills.</p>
            </div>

            <div className="text-center">
              <FaDumbbell className="text-5xl text-green-700 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Fitness</h3>
              <p>Improve physical and mental resilience.</p>
            </div>

            <div className="text-center">
              <FaFlag className="text-5xl text-green-700 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Patriotism</h3>
              <p>Serve and contribute to national development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cadet Development Pathway */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Cadet Development Pathway
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Recruit",
              " Cadet JNCO",
              "Cadet SNCO",
              "Cadet JCO",
              "Cadet SCO",
            ].map((rank) => (
              <div
                key={rank}
                className="bg-white shadow rounded-lg p-5 text-center"
              >
                <h3 className="font-bold text-green-700">{rank}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Schools 
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Specialist Schools
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {schools.map((school) => (
              <div
                key={school}
                className="border rounded-lg p-5 hover:shadow-lg transition"
              >
                <h3 className="font-bold text-green-700">{school} School</h3>

                <p className="text-sm text-gray-600 mt-2">
                  Professional specialist training within the Nigerian Army
                  Cadet Corps.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Vision & Mission */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex items-start">
            <FaRegLightbulb className="text-green-700 text-3xl mr-4 mt-1" />

            <div>
              <h3 className="text-2xl font-bold mb-3">Vision</h3>

              <p className="text-gray-700">
                To be Nigeria's foremost youth military-oriented development
                organization, producing disciplined, patriotic and capable young
                leaders.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaUsers className="text-green-700 text-3xl mr-4 mt-1" />

            <div>
              <h3 className="text-2xl font-bold mb-3">Mission</h3>

              <p className="text-gray-700">
                To train, mentor and empower Nigerian youths through structured
                military-style education, leadership development, physical
                training, civic responsibility and national service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
