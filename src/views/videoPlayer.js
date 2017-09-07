var VideoPlayerView = Backbone.View.extend({

  el: '.player',
  
  initialize: function() {
    this.render();
  },
  
  //id: '4WJLlWpzpP0',

  render: function(id) {
    this.$el.html(this.template());
    this.$('.embed-responsive-item').attr('src', 'https://www.youtube.com/embed/' + id);
    return this;
  },
  
  

  template: templateURL('src/templates/videoPlayer.html')

});


