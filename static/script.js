var scene = document.querySelector('a-scene');

var boxA = document.querySelector('#boxA');
var boxB = document.querySelector('#boxB');

console.log(THREE)

AFRAME.registerComponent('slider', {
  schema: {
    width: {type: 'number', default: 1},
    height: {type: 'number', default: 1},
    depth: {type: 'number', default: 1},
    color: {type: 'color', default: '#AAA'}
  },

  init: function() {
    var data = this.data;
    var el = this.el;
    this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    this.material = new THREE.MeshStandardMaterial({color: data.color});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    el.setObject3D('mesh', this.mesh);
  },

  update: function (oldData) {
    var data = this.data;
    var el = this.el;
    // If `oldData` is empty, then this means we're in the initialization process.
    // No need to update.
    if (Object.keys(oldData).length === 0) { return; }
    // Geometry-related properties changed. Update the geometry.
    if (data.width !== oldData.width ||
      data.height !== oldData.height ||
      data.depth !== oldData.depth) {
      el.getObject3D('mesh').geometry = new THREE.BoxBufferGeometry(data.width, data.height,
        data.depth);
    }
    // Material-related properties changed. Update the material.
    if (data.color !== oldData.color) {
      el.getObject3D('mesh').material.color = data.color;
    }
  },

  remove: function () {
    this.el.removeObject3D('mesh');
  }
});

scene.addEventListener('loaded', function() {

  console.log('load');
  var bodyA = boxA.body;
  var pivotA = new CANNON.Vec3().copy(bodyA.position); // Vector from posA perpendicular to axisA

  var bodyB = boxB.body;
  var pivotB = new CANNON.Vec3().copy(bodyB.position); // Vector from posB perpendicular to axisB
  bodyB.inertia.set

  var pointToPointConstraint = new CANNON.PointToPointConstraint(bodyA, pivotA, bodyB, pivotB);
  bodyB.world.addConstraint(pointToPointConstraint);

});

// scene.addEventListener('click', function() {
//   boxB.body.applyImpulse(new CANNON.Vec3(0, 100, 0), new CANNON.Vec3().copy(boxB.getAttribute('position')));
// });


setInterval(function() {
  var x = boxB.getAttribute('position').x;
  var z = boxB.getAttribute('position').z;
  var f = 10;
  boxB.body.applyImpulse(new CANNON.Vec3(z*f, 0, -x*f), new CANNON.Vec3().copy(boxB.getAttribute('position')));
}, 1500)
