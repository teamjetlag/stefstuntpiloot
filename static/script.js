
scene.addEventListener('loaded', function() {

  var cylinder = document.createElement('a-cylinder');
  cylinder.setAttribute('id', 'boxA');
  cylinder.setAttribute('color', 'white');
  cylinder.setAttribute('static-body', '');
  cylinder.setAttribute('position', '0 0 0');
  cylinder.setAttribute('width', 0.5);
  cylinder.setAttribute('height', 1);
  cylinder.setAttribute('depth', 0.5);

  var bol = document.createElement('a-sphere');
  bol.setAttribute('id', 'boxB');
  bol.setAttribute('dynamic-body', 'mass: 50');
  bol.setAttribute('color', 'red');
  bol.setAttribute('position', '0 5 0.2');
  bol.setAttribute('radius', '0.5');

  var koekeloekie =   document.querySelector('a-scene').appendChild(cylinder);
  console.log(Object.keys(koekeloekie), koekeloekie.components);
  document.querySelector('a-scene').appendChild(cylinder);
  document.querySelector('a-scene').appendChild(bol);
  
  var scene = document.querySelector('a-scene');
  var boxA = document.querySelector('#boxA');
  var boxB = document.querySelector('#boxB');

  var bodyA = boxA.body;
  var pivotA = new CANNON.Vec3().copy(bodyA.position); // Vector from posA perpendicular to axisA

  var bodyB = boxB.body;
  var pivotB = new CANNON.Vec3().copy(bodyB.position); // Vector from posB perpendicular to axisB

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
  boxB.body.applyImpulse(new CANNON.Vec3(z * f, 0, -x * f), new CANNON.Vec3().copy(boxB.getAttribute('position')));
}, 1500)
