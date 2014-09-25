// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

initialize: function(){
  this.on('add', function(song){
    }, this);
  },

  enqueue: function(song){
    this.add(song);
  }
});