var VideoListView = Backbone.View.extend({
  
  el: '.list',
  
  initialize: function() {
    this.render();
  },

  render: function() {
    // this.$el.children().detach();
    this.$el.html(this.template());
    this.$('.video-list').empty();
    this.collection.forEach(this.renderVideo, this);
    return this;
  },
  
  renderVideo: function(video) {
    var videoView = new VideoListEntryView({model: video});
    $('.video-list').append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
