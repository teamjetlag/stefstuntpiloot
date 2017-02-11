export default function applyImpulse(element) {
  console.log(element.getAttribute('position').x);
  console.log(element.getAttribute('position').z);
  const posx = element.getAttribute('position').x;
  const posz = element.getAttribute('position').z;
  if (
    (posx < -4 && (posz > -1.5 && posz <0)) ||
    ((posx > -1.5 && posx < 0) && posz > 4) ||
    (posx > 4 && (posz < 1.5 && posz > 0)) ||
    ((posx < 1.5 && posx > 0) && posz < -4)
  ) {
    console.log('Applying impulse');
    element.body.applyImpulse(new CANNON.Vec3(0, 150, 0), new CANNON.Vec3().copy(element.getAttribute('position')));
  }
}
