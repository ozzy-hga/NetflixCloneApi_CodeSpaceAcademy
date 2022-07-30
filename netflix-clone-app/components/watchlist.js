const STORAGE_KEY = 'movies-storage';

// ---- Start Vue Instance ----

const watchApp = new Vue({

  el: '#watchlist-app',

  // lifecycle hook
  created() {

    // json object has been created
    if (localStorage.getItem(STORAGE_KEY) != null) {

        console.log('data exists')
        // parseJson to JavaScript and save it to watchlist prop
        this.watchList = JSON.parse(localStorage.getItem(STORAGE_KEY));

    } else {

        console.log('storage is empty')
        // set it = to empty array
        this.watchList = [];
    }

  }, // end of created hook/property


  // start of data property

  data : {

    searchbar : "",

    watchList : []

  }, // end of data property


  methods : {
  
    // Method 2:
    deleteFromWatchlist(m) {

      //loop over watchlist
      for (let i = 0; i < this.watchList.length; i++) {

        // filter out movie if movie in watchlist has same id as movie we clicked on
        if (this.watchList[i].id == m.id) {
          this.watchList.splice(i, 1)
        }  
      }

      console.log(this.watchList)

      this.updateLocalStorage(STORAGE_KEY, this.watchList)

      alert("\"" + m.title + "\"" + "was removed from the Watch-List")
          
    },

    // method 2:
    updateLocalStorage(key, data) {

      // Update local storage with JSON string of array
      jsonData = JSON.stringify(data);
      localStorage.setItem(key, jsonData);
    
    }
  
  },// end of method property


  // Computed Property
  computed : {
   
    sortedWatchlist : function() {

      return this.watchList.sort( (m1, m2) => {
        
        return a - b
      })
    }
    
  }
  // end of Computed

})
// ---- end of Vue Instance ----