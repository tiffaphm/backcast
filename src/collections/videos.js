var Videos = Backbone.Collection.extend({

  model: Video,

  //url: 'src/data/exampleVideoData.js'

  search: function(stringSearch, callback, thisObj) {
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {'q': stringSearch, 'part': 'snippet', 'maxResults': 5, 'key': 'AIzaSyC70l54u8_hL06rP9vEFag88Xz2YHaY-dM', 'type': 'video', 'videoEmbeddable': 'true'},
      contentType: 'application/json',
      success: function(data) {
        console.log('it works!');
        callback.call(thisObj, data);
      },
      error: function() {
        console.log('fix me :(');
      }
    });
  },

});
