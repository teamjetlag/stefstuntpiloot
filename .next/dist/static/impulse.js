'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyImpulse;
function applyImpulse(element) {
  console.log('Applying impulse');
  element.body.applyImpulse(new CANNON.Vec3(0, 130, 0), new CANNON.Vec3().copy(boxB.getAttribute('position')));
}