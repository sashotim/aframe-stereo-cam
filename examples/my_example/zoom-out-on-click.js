AFRAME.registerComponent('zoom-out-on-click', {

  init: function () {
    var camera = document.querySelector('#camera');
    camera.setAttribute('zoom', 1);
    
    this.el.addEventListener('click', function(){
      var currentZoom = camera.getAttribute('zoom');
      var zoomAfterClick = parseFloat(currentZoom) - 0.25;
      camera.setAttribute('zoom', zoomAfterClick);
    });
  }
});