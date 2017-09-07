var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.getSearchString();
    this.render();
    this.videoPlayer = new VideoPlayerView();
    new SearchView();
  },

  events: {
    'click .video-list-entry-title': 'setSelect',
    'click .search-bar .btn': 'getSearchString'
  },

  getSearchString: function(string) {
    var string = $('input').val() !== '' ? $('input').val() : 'elmo';
    var reassignModels = function(data) {
      this.models = data.items.map(function(object) {
        return new Video(object);
      });
      this.videos = new Videos(this.models);
      this.videoListView = new VideoListView({collection: this.videos});
    }
    this.videos.search(string, reassignModels, this);
  },

  setSelect: function(video) {
    var id = $(video.target)[0].classList[1];
    var title = $(video.target).text();
    var description = $(video.target).siblings().text();
    this.videoPlayer.render(id, title, description);
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
