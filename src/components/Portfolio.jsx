import React from "react";
import PrecioGasolineras from "../assets/portfolio/precioGasolineras.png";
import ecommerceWeb from "../assets/portfolio/ecommerceWeb.png";
import cineDeBarrio from "../assets/portfolio/cineDeBarrio.png";
import singuWords from "../assets/portfolio/singuWords.png";
import twitterAnalysis from "../assets/portfolio/twitterAnalysis.png";
import powerBi from "../assets/portfolio/powerBi.png";
import bankAnalisys from "../assets/portfolio/bankAnalysis.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bankAnalisys,
      demoLink: "https://github.com/Kecar2/JOBarcelona_23_Data_Science",
      codeLink: "https://github.com/Kecar2/JOBarcelona_23_Data_Science"
    },
    {
      id: 2,
      src: twitterAnalysis,
      demoLink: "https://github.com/Kecar2/Examen_Big_Data_Analisis_Clustering_Tweets",
      codeLink: "https://github.com/Kecar2/Examen_Big_Data_Analisis_Clustering_Tweets"
    },
    {
      id: 3,
      src: powerBi,
      demoLink: "https://github.com/Kecar2/ProyectosPorwerBI",
      codeLink: "https://github.com/Kecar2/ProyectosPorwerBI"
    },
    {
      id: 4,
      src: PrecioGasolineras,
      demoLink: "https://precios-gasolineras-nine.vercel.app/",
      codeLink: "https://github.com/Kecar2/preciosGasolineras"
    },
    {
      id: 5,
      src: ecommerceWeb,
      demoLink:"https://ecommerce-web-inky.vercel.app/",
      codeLink:"https://github.com/Kecar2/ecommerce-web"
    },
    {
      id: 6,
      src: cineDeBarrio,
      demoLink:"https://cinedebarrio-pi.vercel.app/",
      codeLink:"https://github.com/Kecar2/cinedebarrio"
    },
    {
      id: 7,
      src: singuWords,
      demoLink:"https://wordable.vercel.app/",
      codeLink:"https://github.com/Kecar2/Wordable"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={codeLink} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;