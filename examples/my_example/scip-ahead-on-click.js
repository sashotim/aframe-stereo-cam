AFRAME.registerComponent('scip-ahead-on-click', {

  init: function () {
    var video = document.querySelector('#Mary');
    this.el.addEventListener('click', function(){
      var currentTimestamp = video.currentTime;
      console.log(video.currentTime);
        video.currentTime = parseFloat(currentTimestamp) + 30;
        console.log(video.currentTime);
    })
  }
});