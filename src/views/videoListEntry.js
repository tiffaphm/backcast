var VideoListEntryView = Backbone.View.extend({
  
  model: Video,
  
  initialize: function(video) {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el.html();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
