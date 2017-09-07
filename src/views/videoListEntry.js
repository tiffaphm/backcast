var VideoListEntryView = Backbone.View.extend({
  
  model: Video,
  
  el: '.video-list h5',
  
  initialize: function(video) {
    this.render(); // render something  
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
