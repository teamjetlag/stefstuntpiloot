export default function applyImpulse(element) {
  console.log('Applying impulse');
  element.body.applyImpulse(new CANNON.Vec3(0, 130, 0), new CANNON.Vec3().copy(boxB.getAttribute('position')));
}
