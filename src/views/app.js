var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.lastSearch = Date.now() - 500;
    this.getSearchString();
    this.render();
    this.videoPlayer = new VideoPlayerView();
    this.videoPlayer.getVideo('4WJLlWpzpP0');
    new SearchView();
  },

  events: {
    'click .video-list-entry-title': 'setSelect',
    'keyup .search-bar': 'getSearchString',
    'click .search-bar .btn': 'getSearchString',
    'click .toggle-autoplay': 'toggleAutoplay'
  },

  getSearchString: function(string) {
    var string = $('input').val() !== '' ? $('input').val() : 'elmo';
    var reassignModels = function(data) {
      this.models = data.items.map(function(object) {
        return new Video(object);
      });
      this.videos = new Videos(this.models);
      this.videoListView = new VideoListView({collection: this.videos});
    };
    this.videos.search(string, reassignModels, this);
  },

  setSelect: function(video) {
    var id = $(video.target)[0].classList[1];
    var title = $(video.target).text();
    var description = $(video.target).siblings().text();
    this.videoPlayer.getVideo(id);
  },

  toggleAutoplay: function(string) {
    this.videoPlayer.autoplay = this.videoPlayer.autoplay === 0 ? 1 : 0;
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
