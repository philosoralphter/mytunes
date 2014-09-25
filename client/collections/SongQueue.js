// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

initialize: function(){
  this.on('add', function(song){
    }, this);
  },

  enqueue: function(song){
    this.add(song);
    console.log(song);
  },

  dequeue: function(song){
    this.remove(song);
    console.log(song);
  },

  playFirst: function(song){
    this.play(song);
  },

  ended: function(song){
    this.dequeue(song);
  }

});
