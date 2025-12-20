import { FaRegLightbulb, FaUsers } from "react-icons/fa";
import Header from "../components/Header";

export default function AboutUs() {
  return (
    <>
      <Header />

      <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto">
        {/* Content Section */}
        <div className="p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-black mb-4">About Us</h2>
          <p className="text-gray-600 mb-4">
            Nigerian Army Cadet Forces, which later became known as Nigerian
            Army Cadet Corps (NACC), is a youth paramilitary organization
            modeled to instill discipline, patriotism, leadership, and
            military-style training among young Nigerians, particularly at the
            secondary school level. While it is not part of the official
            Nigerian Army, its activities are supervised and guided by the
            Nigerian Army. The NACC is influenced by military doctrine and
            structure, and its roots trace back to post-colonial Nigeria's
            broader goals of national unity, defense consciousness, and youth
            empowerment.
          </p>

          <h3 className="text-lg font-bold text-black mb-2">
            History and Development
          </h3>
          <p className="text-gray-600 mb-2">
            Established in 1976 during the military regime of General Olusegun
            Obasanjo as a youth paramilitary organization inspired by the
            structure and discipline of the Nigerian Army. It was designed to
            instill leadership, discipline, physical fitness, and patriotism in
            young Nigerians, especially students in secondary schools and some
            tertiary institutions. The idea was heavily influenced by the
            British Army Cadet Force and the Junior Reserve Officers' Training
            Corps (JROTC) in the United States.
          </p>
          <p className="text-gray-600 mb-2">
            Mid-to-late 1980s: Some secondary schools, particularly Federal
            Government Colleges and Unity Schools, began introducing Cadet units
            with military-style drills.
          </p>
          <p className="text-gray-600 mb-2">
            1990s: Informal expansion and growth of NACC units began in Northern
            and South-Western Nigeria, especially in schools near military
            barracks or cantonments.
          </p>
          <p className="text-gray-600 mb-2">
            1996–1999: The name "Nigerian Army Cadet Corps" became more formally
            used in several school units and adopted Nigerian Army ranks,
            drills, and parade customs.
          </p>
          <p className="text-gray-600 mb-2">
            Today, the Nigerian Army Cadet Corps exists in many secondary
            schools across the country, especially in Unity Schools, Federal
            Government Colleges, and military-affiliated schools. It's not
            officially part of the Nigerian Armed Forces but is recognized for
            its role in youth military education and leadership training.
          </p>
          <p className="text-gray-600 mb-2">
            Early 2000s: More schools across the country established NACC as a
            recognized extracurricular or paramilitary club.
          </p>
          <p className="text-gray-600 mb-2">
            2004: Schools began holding inter-school Cadet parades and
            leadership camps.
          </p>
          <p className="text-gray-600 mb-2">
            2007–2009: Some NACC units started re-aligning with local military
            commands for training support and mentorship.
          </p>
          <p className="text-gray-600 mb-2">
            2010s: Nationwide presence and coordination began.
          </p>
          <p className="text-gray-600 mb-2">
            2012: The Corps began a push among several schools to unify the
            corps under a single national command or umbrella.
          </p>
          <p className="text-gray-600 mb-2">
            2014–2017: Several states began forming zonal and state command
            structures to coordinate cadet activities.
          </p>
          <p className="text-gray-600 mb-2">
            2018: Public awareness of cadet corps increased, with more
            participation in Independence Day and Armed Forces Remembrance Day
            parades.
          </p>
          <p className="text-gray-600 mb-2">
            2019: Some NACC Companies were dissolved due to gross misconduct.
          </p>
          <p className="text-gray-600 mb-2">
            2020–2022: NACC adapted to modern formats with the inclusion of
            digital leadership seminars, and social media presence.
          </p>
          <p className="text-gray-600 mb-2">
            2023: NACC Companies began restructuring, drafting official
            constitutions, standard operating procedures (SOPs) to align with
            the original mode of operations, and engaging in partnerships with
            security agencies for training.
          </p>
          <p className="text-gray-600 mb-2">
            2024–2025: Rising efforts to model the NACC after the Nigerian Army
            and the British Army Cadet Force, focusing on creating standardized
            training manuals, rank structures, and national cadet competitions.
          </p>

          <p className="text-gray-600 mb-4">
            The NACC often operates in partnership or under the mentorship of
            local army units or military personnel who serve as trainers or
            advisors. It is structured similarly to military formations.
          </p>

          <h3 className="text-lg font-bold text-black mb-2">
            Purpose and Mission
          </h3>
          <p className="text-gray-600 mb-2">
            The core mission of the NACC has always been to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>
              Groom young Nigerians into{" "}
              <span className="font-semibold">
                responsible, patriotic citizens
              </span>
              .
            </li>
            <li>
              Provide{" "}
              <span className="font-semibold">
                basic military-style training
              </span>{" "}
              such as drill, physical training (PT), and tactics.
            </li>
            <li>
              Serve as a <span className="font-semibold">feeder program</span>{" "}
              for the Nigerian Defence Academy (NDA) or a career in the Armed
              Forces.
            </li>
          </ul>

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
                training, civic responsibility, and national service, fostering
                a new generation of morally upright, courageous, and
                service-oriented citizens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
