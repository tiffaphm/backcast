var Videos = Backbone.Collection.extend({

  model: Video,
  
  //url: 'src/data/exampleVideoData.js' 

  search: function(stringSearch, callback) {
    
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {'query': stringSearch, 'part': 'snippet', 'maxResults': 5, 'key': 'AIzaSyC70l54u8_hL06rP9vEFag88Xz2YHaY-dM', 'type': 'video', 'videoEmbeddable': 'true'},
      contentType: 'application/json',
      success: function(data) {
        console.log('it works!');
        callback(data);
      },
      error: function() {
        console.log('fix me :(');
      }
    });
  },

});

// on click submit button
// var stringSearch = $('input').val();
// Videos.search(stringSearch);
