AFRAME.registerComponent('replay-on-click', {

  init: function () {
    var video = document.querySelector('#Mary');
    this.el.addEventListener('click', function(){
      var currentTimestamp = video.currentTime;
        video.currentTime = currentTimestamp - 30;
    })
  }
});