import { FaRegLightbulb, FaUsers } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto">
      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="border-4 border-indigo-600 p-2 rounded-md">
          <img
            src="/assets/13.04.29_d09fc737.jpg"
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
      <div className="lg:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-black mb-4">About Us</h2>
        <p className="text-gray-600 mb-4">
          Nigerian Army Cadet Forces, which later became known as Nigerian Army
          Cadet Corps, is a youth paramilitary organization modeled to instill
          discipline, patriotism, leadership, and military-style training among
          young Nigerians, particularly at the secondary school level. While it
          is not part of the official Nigerian Army, its activities are
          supervised and guided by the Nigerian Army. The NACC is influenced by
          military doctrine and structure, and its roots trace back to
          post-colonial Nigeria's broader goals of national unity, defense
          consciousness, and youth empowerment.
        </p>

        {/* Vision */}
        <div className="flex items-start mb-4">
          <FaRegLightbulb className="text-blue-600 text-2xl mr-3" />
          <div>
            <h3 className="text-lg font-bold text-black">VISION</h3>
            <p className="text-gray-600">
              Our vision is to be the foremost youth paramilitary organization
              in Nigeria, instilling discipline, patriotism, leadership,
              military-style excellence in young Nigerians for national
              development and global relevance, and serving as a preparatory
              platform for those interested in military, security, or public
              service careers.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="flex items-start">
          <FaUsers className="text-blue-600 text-2xl mr-3" />
          <div>
            <h3 className="text-lg font-bold text-black">MISSION</h3>
            <p className="text-gray-600">
              To train, mentor, and empower Nigerian youth through structured
              military-style education, leadership development, physical
              training, civic responsibility, and national service, fostering a
              new generation of morally upright, courageous, and
              service-oriented citizens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
