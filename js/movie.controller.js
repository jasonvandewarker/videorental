(function () {
  'use strict';

  angular
    .module('app')
    .controller('MovieController', MovieController);

  MovieController.$inject = [];

  function MovieController() {
    const vm = this;
    vm.selectedMovie;
    vm.rent = rent;
    vm.rentButton;
    vm.showDetails = false;

    activate();

    ////////////////

    function activate() {

      var movies = [{
          "Id": "/en/star_wars_episode_iv_a_new_hope",
          "Title": "Star Wars Episode IV: A New Hope",
          "ReleaseDate": "1977-05-25T00:00:00",
          "Rating": "PG (USA)",
          "Image": "assets/pics/starwars.jpg",
          "Genre": "Adventure Film, Action Film, Science Fiction, Fantasy",
          "RunTime": 121.0,
          "Starring": "Mark Hamill, Harrison Ford, Carrie Fisher",
          "DirectedBy": "George Lucas"
        },
        {
          "Id": "/wikipedia/fi_id/965243",
          "Title": "The Avengers",
          "ReleaseDate": "2012-04-11T00:00:00",
          "Rating": "PG-13 (USA)",
          "Image": "assets/pics/avengers.jpg",
          "Genre": "Action Film, Science Fiction, Fantasy",
          "RunTime": 143.0,
          "Starring": "Robert Downey Jr, Chris Evans, Mark Ruffalo",
          "DirectedBy": "Joss Whedon"
        },
        {
          "Id": "/en/the_lord_of_the_rings_the_return_of_the_king",
          "Title": "The Lord of the Rings: The Return of the King",
          "ReleaseDate": "2003-12-01T00:00:00",
          "Rating": "PG-13 (USA)",
          "Image": "assets/pics/rotk.jpg",
          "Genre": "Adventure Film, Fantasy, Action Film",
          "RunTime": 201.0,
          "Starring": "Elijah Wood, Sean Astin, Viggo Mortensen",

          "DirectedBy": "Peter Jackson"
        },
        {
          "Id": "/en/toy_story_3",
          "Title": "Toy Story 3",
          "ReleaseDate": "2010-06-12T00:00:00",
          "Rating": "G (USA)",
          "Image": "assets/pics/toystory3.jpg",
          "Genre": "Family, Adventure Film, Fantasy, Animation, Adventure Comedy, Children's Fantasy, Comedy, Comedy-drama",
          "RunTime": 103.0,
          "Starring": "Tom Hanks, Tim Allen, Wallace Shawn",
          "DirectedBy": "Lee Unkrich"
        },
        {
          "Id": "/en/the_dark_knight",
          "Title": "The Dark Knight",
          "ReleaseDate": "2008-07-14T00:00:00",
          "Rating": "PG-13 (USA)",
          "Image": "assets/pics/DarkKnight.jpg",
          "Genre": "Action Film, Crime Fiction, Thriller, Drama, Adventure Film, Superhero movie, Film noir",
          "RunTime": 152.0,
          "Starring": "Michael Caine, Gary Oldman, Aaron Eckhart",
          "DirectedBy": "Christopher Nolan"
        },
        {
          "Id": "/en/harry_potter_and_the_philosophers_stone",
          "Title": "Harry Potter and the Philosopher's Stone",
          "ReleaseDate": "2001-11-04T00:00:00",
          "Rating": "PG (USA)",
          "Image": "assets/pics/hpStone.jpg",
          "Genre": "Adventure Film, Family, Fiction",
          "RunTime": 152.0,
          "Starring": "Daniel Radcliffe, Rupert Grint, Emma Watson",
          "DirectedBy": "Chris Columbus"
        },
        {
          "Id": "/en/harry_potter_and_the_deathly_hallows_part_i",
          "Title": "Harry Potter and the Deathly Hallows - Part I",
          "ReleaseDate": "2010-11-11T00:00:00",
          "Rating": "PG-13 (USA)",
          "Image": "assets/pics/hpdh1.jpg",
          "Genre": "Fantasy, Adventure Film, Family, Mystery, Action Film, Drama, Fiction",
          "RunTime": 146.0,
          "Starring": "Daniel Radcliffe, Emma Watson, Rupert Grint",
          "DirectedBy": "David Yates"
        },
        {
          "Id": "/en/harry_potter_and_the_order_of_the_phoenix_2007",
          "Title": "Harry Potter and the Order of the Phoenix",
          "ReleaseDate": "2007-06-28T00:00:00",
          "Rating": "PG-13 (USA)",
          "Image": "assets/pics/hporder.jpg",
          "Genre": "Family, Mystery, Adventure Film, Fantasy, Fantasy Adventure, Fiction",
          "RunTime": 142.0,
          "Starring": "Daniel Radcliffe, Rupert Grint, Emma Watson",
          "DirectedBy": "David Yates"
        },
        {
          "Id": "/en/harry_potter_and_the_half_blood_prince_2008",
          "Title": "Harry Potter and the Half-Blood Prince",
          "ReleaseDate": "2009-07-06T00:00:00",
          "Rating": "PG (USA)",
          "Image": "assets/pics/hphalfblood.jpg",
          "Genre": "Adventure Film, Fantasy, Mystery, Action Film, Family, Romance Film, Children's Fantasy, Children's/Family, Fantasy Adventure, Fiction",
          "RunTime": 153.0,
          "Starring": "Rupert Grint, Daniel Radcliffe, Emma Watson",
          "DirectedBy": "David Yates"
        },
        {
          "Id": "/en/the_lord_of_the_rings_the_two_towers",
          "Title": "The Lord of the Rings: The Two Towers",
          "ReleaseDate": "2002-12-05T00:00:00",
          "Rating": "PG-13 (USA)",
          "Image": "assets/pics/twotowers.jpg",
          "Genre": "Adventure Film, Fantasy, Action Film, Epic film, Drama",
          "RunTime": 179.0,
          "Starring": "Elijah Wood, Sean Astin, Viggo Mortensen",
          "DirectedBy": "Peter Jackson"
        },
        {
          "Id": "/en/jurassic_park_1993",
          "Title": "Jurassic Park",
          "ReleaseDate": "1993-06-09T00:00:00",
          "Rating": "PG-13 (USA)",
          "Image": "assets/pics/jp.jpg",
          "Genre": "Science Fiction, Adventure Film",
          "RunTime": 127.0,
          "Starring": "Sam Neill, Laura Dern, Jeff Goldblum",
          "DirectedBy": "Steven Spielberg"
        },


        {
          "Id": "/en/the_lord_of_the_rings_the_fellowship_of_the_ring",
          "Title": "The Lord of the Rings: The Fellowship of the Ring",
          "ReleaseDate": "2001-12-10T00:00:00",
          "Rating": "PG-13 (USA)",
          "Image": "assets/pics/fellowship.jpg",
          "Genre": "Adventure Film, Fantasy, Action Film",
          "RunTime": 178.0,
          "Starring": "Elijah Wood, Ian McKellen, Viggo Mortensen",
          "DirectedBy": "Peter Jackson"
        },
        {
          "Id": "/en/finding_nemo",
          "Title": "Finding Nemo",
          "ReleaseDate": "2003-05-30T00:00:00",
          "Rating": "G (USA)",
          "Image": "assets/pics/fn.jpg",
          "Genre": "Animation, Adventure Film, Comedy, Family, Animal Picture",
          "RunTime": 100.0,
          "Starring": "Alexander Gould, Albert Brooks, Ellen DeGeneres",
          "DirectedBy": "Andrew Stanton"
        },
        {
          "Id": "/en/star_wars_episode_iii_revenge_of_the_sith",
          "Title": "Star Wars Episode III: Revenge of the Sith",
          "ReleaseDate": "2005-05-15T00:00:00",
          "Rating": "PG-13 (USA)",
          "Image": "assets/pics/ep3.jpg",
          "Genre": "Science Fiction, Fantasy, Action Film, Adventure Film",
          "RunTime": 140.0,
          "Starring": "Ewan McGregor, Natalie Portman, Ian McDiarmid",
          "DirectedBy": "George Lucas"
        },
        {
          "Id": "/wikipedia/it_id/2539984",
          "Title": "Inception",
          "ReleaseDate": "2010-07-08T00:00:00",
          "Rating": "PG-13 (USA)",
          "Image": "assets/pics/inception.jpg",
          "Genre": "Science Fiction, Action Film, Thriller, Mystery, Adventure Film",
          "RunTime": 142.0,
          "Starring": "Leonardo DiCaprio, Cillian Murphy, Ellen Page",
          "DirectedBy": "Christopher Nolan"
        },
        {
          "Id": "/en/independence_day_1996",
          "Title": "Independence Day",
          "ReleaseDate": "1996-06-25T00:00:00",
          "Rating": "PG-13 (USA)",
          "Image": "assets/pics/id.jpg",
          "Genre": "Science Fiction, Thriller, Action/Adventure, Action Film",
          "RunTime": 145.0,
          "Starring": "Jeff Goldblum Will Smith, Bill Pullman",
          "DirectedBy": "Roland Emmerich"
        },
      ]
      vm.movies = movies;

    } //end of activate

    function rent() {
      const someDate = new Date();
      const dd = someDate.getDate();
      const mm = someDate.getMonth() + 1;
      const yy = someDate.getFullYear();
      const formattedDate = mm + '/' + dd + '/' + yy;
      const rentalDate = mm + '/' + (dd + 1) + '/' + yy;

      alert("You rented this movie on " + formattedDate + ". It's due on " + rentalDate + ".");
    }

    vm.updateMovies = function (rentals) {
      vm.selectedMovie = rentals;
      vm.showDetails = !vm.showDetails;
    }


  }
})();