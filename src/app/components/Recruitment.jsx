const Recruitment = () => {
  return (
    <section
      className="recruitment-section bg-cover bg-center text-white py-20"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Nigerian Army Cadet Corps Recruitment
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          The Nigerian Army Cadet Corps is more than just an organization—it’s
          is a youth paramilitary organization modeled to instill discipline,
          patriotism, leadership, and military-style training among young
          Nigerians, particularly at the secondary school level. While it is not
          part of the official Nigerian Army,it's activities are supervised and
          guided by the Nigerian Army. The NACC is influenced by military
          doctrine and structure, and its roots trace back to post-colonial
          Nigeria's broader goals of national unity, defense consciousness, and
          youth empowerment.
        </p>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Whether you’re looking to enhance your leadership skills, serve your
          community, or contribute to national progress, The Nigerian Army Cadet
          Corps offers the perfect platform to stand out and distinctively make
          a difference.
        </p>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Take the first step towards a rewarding journey of personal growth and
          civic duty. Join us today and be part of the force for positive
          change!
        </p>
        <a
          href="#"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded text-lg inline-block"
        >
          Join Our Ranks
        </a>
      </div>
    </section>
  );
};

export default Recruitment;
