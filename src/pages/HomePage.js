import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun?",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente modi deleniti doloribus vel necessitatibus deserunt nisi dicta dolore, quos exercitationem adipisci nesciunt consequatur accusantium. At voluptatibus et alias in.",
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego?",
    author: "Ania Kwiatkowska",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente modi deleniti doloribus vel necessitatibus deserunt nisi dicta dolore, quos exercitationem adipisci nesciunt consequatur accusantium. At voluptatibus et alias in.",
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia",
    author: "Jan Kowalski",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente modi deleniti doloribus vel necessitatibus deserunt nisi dicta dolore, quos exercitationem adipisci nesciunt consequatur accusantium. At voluptatibus et alias in.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
