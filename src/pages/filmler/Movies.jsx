import React, { Component } from "react";
import Card from "../../components/cards/Card";
const films = [
  { id: 1, title: "Interstellar", director: "Christopher Nolan", year: 2014 },
  { id: 2, title: "Inception", director: "Christopher Nolan", year: 2010 },
  {
    id: 3,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
  },
  {
    id: 4,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
  },
  {
    id: 5,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
  },
  { id: 6, title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994 },
  { id: 7, title: "Forrest Gump", director: "Robert Zemeckis", year: 1994 },
  { id: 8, title: "Fight Club", director: "David Fincher", year: 1999 },
  { id: 9, title: "The Matrix", director: "The Wachowskis", year: 1999 },
  {
    id: 10,
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    year: 2003,
  },
  {
    id: 11,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
  },
  {
    id: 12,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
  },
  {
    id: 13,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
  },
  { id: 14, title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994 },
  { id: 15, title: "Forrest Gump", director: "Robert Zemeckis", year: 1994 },
  { id: 16, title: "Fight Club", director: "David Fincher", year: 1999 },
  { id: 17, title: "The Matrix", director: "The Wachowskis", year: 1999 },
  {
    id: 18,
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    year: 2003,
  },
  {
    id: 19,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
  },
  {
    id: 20,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
  },
];
export class Movies extends Component {
  render() {
    return (
      <div className="container my-3">
        <div className="row row-gap-3">
          {films.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default Movies;
