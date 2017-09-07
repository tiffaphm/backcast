var VideoPlayerView = Backbone.View.extend({

  el: '.player',
  
  initialize: function() {
    this.render();
  },

  render: function(id, title, description) {
    this.$el.html(this.template({id: id, title: title, description: description}));
    return this;
  },
  
  template: templateURL('src/templates/videoPlayer.html')

});


