var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    // this.models = window.exampleVideoData.map(function(video) {
    //   return new Video(video);
    // });
    this.videos = new Videos(this.models);
    this.videoListView = new VideoListView({collection: this.videos});
    this.videoPlayer = new VideoPlayerView();
    new SearchView();
    this.on('searched', function(event) {
      //console.log(this.videos);
      console.log('hi');
      this.videoListView = new VideoListView({collection: this.videos});
    });
  },
  
  models: window.exampleVideoData.map(function(video) {
    return new Video(video);
  }),
  
  events: {
    'click .video-list-entry-title': 'setSelect',
    'click .search-bar .btn': 'getSearchString'
  },
  
  reassignModels: function(data) {
    this.models = data.items.map(function(object) {
      return new Video(object);
    });
    this.videos = new Videos(this.models);
    AppView.triggerEvent();
  },
  
  triggerEvent: function() {
    this.trigger('searched');
  },
  
  getSearchString: function() {
    var string = $('input').val();
    this.videos.search(string, this.reassignModels);
    //this.videos = new Videos(this.models);
    //console.log(this.models);
    // console.log(this.videos.search(string));
    // maybe refactor to somehow use get//set
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
