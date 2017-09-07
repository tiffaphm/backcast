var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    var models = window.exampleVideoData.map(function(video) {
      return new Video(video);
    });
    this.videos = new Videos(models);
    new VideoListView({collection: this.videos});
    this.videoPlayer = new VideoPlayerView();
    // console.log(this.videos); //refactor later
  },
  
  events: {
    'click .video-list-entry-title': 'setSelect'
  },
  
  setSelect: function(video) {
    var id = $(video.target)[0].classList[1];
    var title = $(video.target).text();
    var description = $(video.target).siblings().text();
    // console.log(title);
    // console.log(id);
    this.videoPlayer.render(id, title, description);
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
