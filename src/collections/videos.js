var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(stringSearch, callback, thisObj) {
    if ((Date.now() - thisObj.lastSearch) > 500) {
      Backbone.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search',
        type: 'GET',
        data: {'q': stringSearch, 'part': 'snippet', 'maxResults': 5, 'key': window.YOUTUBE_API_KEY, 'type': 'video', 'videoEmbeddable': 'true'},
        contentType: 'application/json',
        success: function(data) {
          console.log('it works!');
          callback.call(thisObj, data);
          thisObj.lastSearch = Date.now();
        },
        error: function() {
          console.log('fix me :(');
        }
      });
    }
  },

});
