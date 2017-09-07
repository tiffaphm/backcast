var VideoListEntryView = Backbone.View.extend({
  
  model: Video,
  
  initialize: function(video) {
    this.render();
    //this.on('select', something);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.$('.media-object').attr('src', this.model.attributes.snippet.thumbnails.default.url);
    this.$('.video-list-entry-title').text(this.model.attributes.snippet.title);
    this.$('.video-list-entry-title').addClass(this.model.id);
    this.$('.video-list-entry-detail').text(this.model.attributes.snippet.description);
    return this.$el.html();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
