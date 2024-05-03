import React, { Component } from "react";
import Card from "../../components/cards/Card";
const films = [
  {
    id: 1,
    image:
      "https://m.media-amazon.com/images/I/91JnoM0khKL._AC_UF1000,1000_QL80_.jpg",
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
  },
  {
    id: 2,
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_ae.jpg",
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
  },
  {
    id: 3,
    image:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
  },
  {
    id: 4,
    image:
      "https://play-lh.googleusercontent.com/ZucjGxDqQ-cHIN-8YA1HgZx7dFhXkfnz73SrdRPmOOHEax08sngqZMR_jMKq0sZuv5P7-T2Z2aHJ1uGQiys",
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
  },
  {
    id: 5,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
  },
  {
    id: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/4f/The_Hobbit_-_The_Desolation_of_Smaug_theatrical_poster.jpg",
    title: "The Hobbit: An Unexpected Journey",
    director: "Piter Cekson",
    year: 2012,
  },
  {
    id: 7,
    image:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
  },
  {
    id: 8,
    image:
      "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    title: "Fight Club",
    director: "David Fincher",
    year: 1999,
  },
  {
    id: 9,
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    title: "The Matrix",
    director: "The Wachowskis",
    year: 1999,
  },
  {
    id: 10,
    image:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    year: 2003,
  },
  {
    id: 11,
    image:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
  },
  {
    id: 12,
    image:
      "https://play-lh.googleusercontent.com/ZucjGxDqQ-cHIN-8YA1HgZx7dFhXkfnz73SrdRPmOOHEax08sngqZMR_jMKq0sZuv5P7-T2Z2aHJ1uGQiys",
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
  },
  {
    id: 13,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
  },
  {
    id: 14,
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/4f/The_Hobbit_-_The_Desolation_of_Smaug_theatrical_poster.jpg",
    title: "The Hobbit: An Unexpected Journey",
    director: "Piter Cekson",
    year: 2012,
  },
  {
    id: 15,
    image:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
  },
  {
    id: 16,
    image:
      "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    title: "Fight Club",
    director: "David Fincher",
    year: 1999,
  },
  {
    id: 17,
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    title: "The Matrix",
    director: "The Wachowskis",
    year: 1999,
  },
  {
    id: 18,
    image:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    year: 2003,
  },
  {
    id: 19,
    image:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
  },
  {
    id: 20,
    image:
      "https://play-lh.googleusercontent.com/ZucjGxDqQ-cHIN-8YA1HgZx7dFhXkfnz73SrdRPmOOHEax08sngqZMR_jMKq0sZuv5P7-T2Z2aHJ1uGQiys",
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
  },
  {
    id: 21,
    image: "https://kinoo.club/uploads/posts/2023-07/311_poster_1690547273.jpg",
    title: "Once Upon a Time in America",
    director: "Serco Leone",
    year: 1984,
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
