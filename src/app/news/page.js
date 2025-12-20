import React from "react";

const NewsUpdate = () => {
  const newsItems = [
    {
      image: "/news1.jpg",
      title:
        "NATIONAL COMMANDER OF MAN O WAR NIGERIA VISITS ONDO STATE GOVERNOR’S OFFICE",
      description:
        "The National Commander of Man O War Nigeria, CN Academician Gbenega Emmanuel, recently paid an official visit to the Ondo State Governor Office in Akure.",
    },
    {
      image: "/news2.jpg",
      title:
        "MAN O WAR NIGERIA ACTING NATIONAL COMMANDER PAYS HOMAGE TO FORMER MINISTER OF YOUTH AND SPORT",
      description:
        "The Acting National Commander paid homage to former Minister of Youth and Sport, Mr. Sunday Dare Akin, in Ogbomosho, Oyo State.",
    },
    {
      image: "/news3.jpg",
      title: "PROFILE OF THE ACTING NATIONAL COMMANDER MAN O WAR NIGERIA",
      description:
        "Profile of the Acting National Commander Man O War Nigeria, CN Academician Gbenega Emmanuel, MIPM.",
    },
  ];

  return (
    <section className="text-center py-8">
      <h2 className="text-2xl font-bold mb-4">News Update</h2>
      <div className="grid grid-cols-3 gap-4">
        {newsItems.map((news, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-auto rounded-lg mb-2"
            />
            {/*<h3 className="text-lg font-bold mb-1">{news.title}</h3>
            <p className="text-gray-600 text-sm">{news.description}</p>*/}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsUpdate;
