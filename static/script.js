var scene = document.querySelector('a-scene');
var boxA = document.querySelector('#boxA');
var boxB = document.querySelector('#boxB');

scene.addEventListener('loaded', function () {
  var bodyA = boxA.body;
  var pivotA = new CANNON.Vec3().copy(bodyA.position); // Vector from posA perpendicular to axisA

  var bodyB = boxB.body;
  var pivotB = new CANNON.Vec3().copy(bodyB.position); // Vector from posB perpendicular to axisB
  bodyB.inertia.set

  var pointToPointConstraint = new CANNON.PointToPointConstraint(bodyA, pivotA, bodyB, pivotB);
  bodyB.world.addConstraint(pointToPointConstraint);
});

setInterval(function () {
  var x = boxB.getAttribute('position').x;
  var z = boxB.getAttribute('position').z;
  var f = 3;
  boxB.body.applyImpulse(new CANNON.Vec3(z * f, 0, -x * f), new CANNON.Vec3().copy(boxB.getAttribute('position')));
}, 1500)
