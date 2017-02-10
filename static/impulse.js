export default function applyImpulse(element) {
  console.log('Applying impulse');
  element.body.applyImpulse(new CANNON.Vec3(0, 150, 0), new CANNON.Vec3().copy(element.getAttribute('position')));
}
