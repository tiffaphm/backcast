var VideoPlayerView = Backbone.View.extend({

  el: '.player',
  
  initialize: function() {
    // this.render();
  },

  render: function(obj) {
    this.$el.html(this.template(obj));
    // console.log(obj.statistics);
    // return this;
  },
  
  getVideo: function(id) {
    var that = this;
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/videos',
      type: 'GET',
      data: {'id': id, 'part': 'snippet,contentDetails,statistics', 'maxResults': 1, 'key': 'AIzaSyC70l54u8_hL06rP9vEFag88Xz2YHaY-dM'},
      contentType: 'application/json',
      success: function(data) {
        console.log('it works!');
        console.log(data.items[0]);
        
        that.render(data.items[0]);
      },
      error: function() {
        console.log('fix me :(');
      }
    });
  },
  
  template: templateURL('src/templates/videoPlayer.html')

});

// 'key': 'AIzaSyC70l54u8_hL06rP9vEFag88Xz2YHaY-dM', 
