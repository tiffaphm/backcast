var VideoPlayerView = Backbone.View.extend({

  el: '.player',
  
  initialize: function() {
    this.render();
  },
  
  //id: '4WJLlWpzpP0',

  render: function(id, title, description) {
    this.$el.html(this.template());
    this.$('.embed-responsive-item').attr('src', 'https://www.youtube.com/embed/' + id);
    this.$('.video-player-details h3').text(title);
    this.$('.video-player-details div').text(description);
    return this;
  },
  
  

  template: templateURL('src/templates/videoPlayer.html')

});


