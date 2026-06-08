import { FaRegLightbulb, FaUsers } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto">
      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="border-4 border-indigo-600 p-2 rounded-md">
          <img
            src="/assets/C1.jpg"
            alt="About NACC"
            className="w-full rounded-md"
          />
          {/* <div className="text-center mt-2">
            <h3 className="font-bold text-lg text-black">
              CDT. MAJ. ADANU ELLEN, CSS, FSS
            </h3>
            {/* <p className="text-red-600 font-semibold">COMPANY COMMANDER</p>
            <p className="text-gray-500">NACC, OSCAR COMPANY</p> 
          </div>*/}
        </div>
      </div>

      {/* Content Section */}
      {/* Content Section */}
      <div className="lg:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-black mb-4">
          About the Nigerian Army Cadet Corps
        </h2>

        {/*<p className="text-gray-600 mb-6">
          The Nigerian Army Cadet Corps (NACC) is a youth paramilitary
          organization established to instill discipline, patriotism,
          leadership, and military values in young Nigerians. Operating under
          the guidance and supervision of the Nigerian Army, the Corps provides
          structured military-style education, leadership development, physical
          training, civic responsibility, and national service opportunities for
          cadets across Nigeria.
        </p>*/}

        {/* Overview */}
        <div className="mb-6 border-l-4 border-green-700 pl-4">
          <h3 className="text-xl font-bold text-black mb-2">Corps Overview</h3>

          <p className="text-gray-600">
            The Nigerian Army Cadet Corps serves as a platform for developing
            future leaders through military-oriented training, character
            development, patriotism, teamwork, and service to the nation. The
            Corps prepares cadets for responsible citizenship while providing
            exposure to military, security, and public service careers.
          </p>
        </div>

        {/* Core Objectives */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-black mb-3">Core Objectives</h3>

          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Develop leadership qualities, patriotism, and civic responsibility
              among Nigerian youths.
            </li>
            <li>
              Provide military-style training, discipline, and character
              development.
            </li>
            <li>
              Prepare cadets for future opportunities in the Armed Forces,
              security services, and public service institutions.
            </li>
            <li>
              Promote national unity, teamwork, integrity, and mutual respect.
            </li>
            <li>
              Build confidence, resilience, and problem-solving abilities in
              young people.
            </li>
          </ul>
        </div>

        {/* Training Structure */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-black mb-3">
            Training Structure
          </h3>

          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Military drill, parade training, and ceremonial procedures.</li>
            <li>Physical fitness training and endurance development.</li>
            <li>Leadership and command responsibility training.</li>
            <li>Fieldcraft, survival skills, map reading, and navigation.</li>
            <li>
              Citizenship education, civic responsibility, and national values.
            </li>
            <li>
              Specialist training through departmental schools such as Cadet
              Police, Medical, Signals, Intelligence, Logistics, Engineering,
              Finance, and Band.
            </li>
          </ul>
        </div>

        {/* Vision */}
        <div className="flex items-start mb-6">
          <FaRegLightbulb className="text-green-700 text-2xl mr-3 mt-1" />

          <div>
            <h3 className="text-lg font-bold text-black">VISION</h3>

            <p className="text-gray-600">
              To be Nigeria's foremost youth military-oriented development
              organization, producing disciplined, patriotic, and capable young
              leaders committed to national development and service.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="flex items-start">
          <FaUsers className="text-green-700 text-2xl mr-3 mt-1" />

          <div>
            <h3 className="text-lg font-bold text-black">MISSION</h3>

            <p className="text-gray-600">
              To train, mentor, and empower Nigerian youth through structured
              military-style education, leadership development, physical
              training, civic responsibility, and national service, fostering a
              generation of disciplined, courageous, and service-oriented
              citizens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
