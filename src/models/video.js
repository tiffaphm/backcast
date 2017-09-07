var Video = Backbone.Model.extend({
  // from documentation: when creating an instance of a model, you can pass in the initial values of the attributes, which will be set on the model. if you defined an initialize function, it will be invoked when the model is created
  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
  }

});
