AFRAME.registerComponent('reset-on-click', {

  init: function () {
    var video = document.querySelector('#Mary');
    this.el.addEventListener('click', function(evt){
        if (!video) { return; }
        video.pause();
        video.currentTime = 0; 
    });
  }
});