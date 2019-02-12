AFRAME.registerComponent('replay-on-click', {
  schema: {
    event: {type: 'string', default: ''},
    message: {type: 'string', default: 'Hello, World!'}
  },

  init: function () {
    var video = document.querySelector('#Mary');
    this.el.addEventListener('click', function(){
      var currentTimestamp = video.currentTime;
        video.currentTime = currentTimestamp - 30;
    })
  }
});