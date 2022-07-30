const STORAGE_KEY = 'movies-storage';
const app = new Vue({

  el: '#app',

  data : {

      test : "watchlist",

      movies: [
        {
          id : "1",
          title: "Step Up 3",
          Description: "",
          rating: "80%",
          img: '/static/img/stepup3.jpg',
          trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TZe1Qz2twbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },
        {
          id: "2",
          title: "Monster in Law",
          Description: "",
          rating: "80%",
          img: '/static/img/monsterinlaw.jpg',
          trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/njLr1z66EfA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },
        {
          "id": "3",
          "title": "Life Happens",
          "Description": "",
          "rating": "80%",
          "img": './static/img/lifeHappens.jpg',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/iJ_Fo0tXmDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },
        {
          "id": "4",
          "title": "Chucky",
          "Description": "",
          "rating": "80%",
          "img": './static/img/chucky.jpg',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/7xjAaO5NGy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },
        {
          "id": "5",
          "title": "Love happens",
          "Description": "",
          "rating": "80%",
          "img": './static/img/LoveHappens.jpg',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/lqp_PwvIwb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },
        {
          "id": "6",
          "title": "Jumanji",
          "Description": "",
          "rating": "80%",
          "img": '/static/img/chucky.jpg',
          "trailer": '<iframe width="560" height="315" src="https://www.youtube.com/embed/2QKg5SZ_35I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          "addToWatchList": "true",
        },
        {
          "id": "7",
          "title": "The God Father",
          "Description": "",
          "rating": "80%",
          "img": '/static/img/theGodfather.jpg',
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


