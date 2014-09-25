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

  playFirst: function(){
    this.at(0).play();
  },

  ended: function(song){
    this.playFirst();
    this.dequeue(song);
  }

});
