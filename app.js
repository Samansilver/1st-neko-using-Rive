const r = new rive.Rive({
  src: 'neko_project.riv',
  // OR the path to a discoverable and public Rive asset
  // src: '/public/example.riv',
  canvas: document.getElementById('canvas'),
  autoplay: true,
  animations: 'Timeline 1',
  stateMachines: 'bumpy',
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  },
});
