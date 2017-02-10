// const boxB = document.querySelector('#boxB');

export default function applyImpulse() {
  console.log('Applying impulse');
  boxB.body.applyImpulse(new CANNON.Vec3(0, 130, 0), new CANNON.Vec3().copy(boxB.getAttribute('position')));
}
