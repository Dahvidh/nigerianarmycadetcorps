import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ContactUs() {
  return (
    <>
      <Header />
      <section className="contact-us text-center py-12 px-4">
        <h2 className="text-2xl font-semibold text-gray-700">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Headquarters */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <div className="flex justify-center mb-4 text-primary">
              <FiMapPin className="w-8 h-8" />
            </div>
            <h3 className="font-medium text-lg text-gray-800">Headquarters</h3>
            <p className="text-gray-600 mt-2">
              FSTC Yaba, 68 Nigerian Army Reference Hospital, Myhoung Barracks,
              Lagos State, Nigeria.
            </p>
          </div>

          {/* Email */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <div className="flex justify-center mb-4 text-primary">
              <FiMail className="w-8 h-8" />
            </div>
            <h3 className="font-medium text-lg text-gray-800">Email Us</h3>
            <p className="text-gray-600 mt-2">
              info@nigerianarmycadets.org
              <br />
              support@nigerianarmycadets.org
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <div className="flex justify-center mb-4 text-primary">
              <FiPhone className="w-8 h-8" />
            </div>
            <h3 className="font-medium text-lg text-gray-800">Call Us</h3>
            <p className="text-gray-600 mt-2">+23400 0000 0000</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
