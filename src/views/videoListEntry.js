var VideoListEntryView = Backbone.View.extend({
  
  model: Video,
  
  initialize: function(video) {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.$('.media-object').attr('src', this.model.attributes.snippet.thumbnails.default.url);
    // console.log(this);
    return this.$el.html();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
