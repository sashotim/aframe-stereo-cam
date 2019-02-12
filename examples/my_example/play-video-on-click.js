AFRAME.registerComponent('play-on-click', {
  schema: {
    event: {type: 'string', default: ''},
    message: {type: 'string', default: 'Hello, World!'}
  },

  init: function () {
    var video = document.querySelector('#Mary');
    this.el.addEventListener('click', function(){
        if (!video) { return; }
        if (video.paused){
          console.log('play button clicked')
          console.log(video.paused)
          video.play();
        }
        
    });
  }
});