const STORAGE_KEY = 'movies-storage';
const app = new Vue({

  el: '#app',

  data : {

      test : "watchlist",

      movies: [
        {
          id : "1",
          title: "Kong: Skull Island",
          Description: "Scientists, soldiers and adventurers unite to explore a mythical, uncharted island in the Pacific Ocean. Cut off from everything they know, they venture into the domain of the mighty Kong, igniting the ultimate battle between man and nature. As their mission of discovery soon becomes one of survival, they must fight to escape from a primal world where humanity does not belong.",
          rating: "80%",
          img: './static/img/KongSkull.jpg',
          trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TZe1Qz2twbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },

        {
          id: "2",
          title: "Shrek",
          Description: "Once upon a time, in a far away swamp, there lived an ogre named Shrek (Mike Myers) whose precious solitude is suddenly shattered by an invasion of annoying fairy tale characters.",
          rating: "80%",
          img: './static/img/Shrek.png',
          trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/njLr1z66EfA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },

        {
          "id": "3",
          "title": "Moonlight",
          "Description": "A look at three defining chapters in the life of Chiron, a young black man growing up in Miami. His epic journey to manhood is guided by the kindness, support and love of the community that helps raise him.",
          "rating": "80%",
          "img": './static/img/Moonlight.jpg',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/iJ_Fo0tXmDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },

        {
          "id": "4",
          "title": "The Matrix",
          "Description": "Gunned down by Detective Mike Norris (Chris Sarandon), dying murderer Charles Lee Ray (Brad Dourif) uses black magic to put his soul inside a doll named Chucky -- which Karen Barclay (Catherine Hicks) then buys for her young son, Andy (Alex Vincent). ",
          "rating": "80%",
          "img": './static/img/The Matrix.jpg',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/7xjAaO5NGy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },

        {
          "id": "5",
          "title": "Us",
          "Description": "",
          "rating": "80%",
          "img": './static/img/Us.webp',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/lqp_PwvIwb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },

        {
          "id": "6",
          "title": "Spider-Verse",
          "Description": "",
          "rating": "80%",
          "img": './static/img/spiderverse.webp',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/2QKg5SZ_35I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },

        {
          "id": "7",
          "title": "Stars Wars Saga",
          "Description": "",
          "rating": "80%",
          "img": './static/img/Star Wars.webp',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/UaVTIH8mujA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },

        {
          "id": "8",
          "title": "Back to the Future",
          "Description": "",
          "rating": "80%",
          "img": './static/img/BacktoTheFuture.webp',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/UaVTIH8mujA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },
        {
          "id": "9",
          "title": "Captain Marvel",
          "Description": "",
          "rating": "80%",
          "img": './static/img/CaptainMarvel.webp',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/UaVTIH8mujA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },
        {
          "id": "10",
          "title": "077: No Time To Die",
          "Description": "",
          "rating": "80%",
          "img": './static/img/NotTimeToDie.webp',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/UaVTIH8mujA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },

        {
          "id": "11",
          "title": "Hunger Games",
          "Description": "",
          "rating": "80%",
          "img": './static/img/HungerGames.jpg',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/UaVTIH8mujA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },

        {
          "id": "12",
          "title": "Seven",
          "Description": "",
          "rating": "80%",
          "img": './static/img/Seven.jpg',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/UaVTIH8mujA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },
        
        {
          "id": "13",
          "title": "Life",
          "Description": "",
          "rating": "80%",
          "img": './static/img/Life.jpg',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/UaVTIH8mujA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },
        
        {
          "id": "14",
          "title": "Midsommar",
          "Description": "",
          "rating": "80%",
          "img": './static/img/Midsmmnar.jpg',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/UaVTIH8mujA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },
        
        {
          "id": "15",
          "title": "Spiderman 2",
          "Description": "",
          "rating": "80%",
          "img": './static/img/Spiderman.webp',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/UaVTIH8mujA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },
        
        {
          "id": "16",
          "title": "Kong",
          "Description": "",
          "rating": "80%",
          "img": './static/img/Kong.jpg',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/UaVTIH8mujA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },
        
        {
          "id": "17",
          "title": "Seven",
          "Description": "",
          "rating": "80%",
          "img": './static/img/Seven.jpg',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/UaVTIH8mujA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },{
          "id": "18",
          "title": "Dunkirk",
          "Description": "",
          "rating": "80%",
          "img": './static/img/Dunkirk.jpg',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/UaVTIH8mujA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },{
          "id": "19",
          "title": "Godzilla",
          "Description": "",
          "rating": "80%",
          "img": './static/img/Godzilla.jpeg',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/UaVTIH8mujA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },
        
        {
          "id": "20",
          "title": "E.T.",
          "Description": "",
          "rating": "80%",
          "img": './static/img/ET.jpg',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/UaVTIH8mujA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },
      ],

      // Create new Array property to hold movies for watchlist
      stagedMovies : [],

      // Watchlist
      watchList : []

    },
      // methods
      methods: {

        removeMovies(x) {
          this.Movies.splice(x, 1);
          this.saveMovies();
        },

        saveMovies() {
          const parsed = JSON.stringify(this.addToWatchList);
          localStorage.setItem('addToWatchList', parsed);
        },

        
        addToWatchList(movie) {

           // get from Storage

          let storageData;

          if (JSON.parse(localStorage.getItem(STORAGE_KEY)) == null) {

            storageData = [] 
          
          } else {

            storageData = JSON.parse(localStorage.getItem(STORAGE_KEY))
          }

          // Assign staged movies property to data in localStorage
          this.stagedMovies = storageData;         

          // add movie to staged movies
          this.stagedMovies.push(movie)
          //console.log(this.stagedMovies)

          // convert staged movies to JSON String
          let jsonMovies = JSON.stringify(this.stagedMovies)

          // save jsonMovies to localStorage
          localStorage.setItem(STORAGE_KEY, jsonMovies)

          //check to ensure storage is being populated
          //console.log(localStorage.getItem(STORAGE_KEY))
          alert("\"" + movie.title + "\"" + " was added to the Watch-List.");
        }

      }
})


