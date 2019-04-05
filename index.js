"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


function isFiniteNumber(arg) {
    return (typeof arg === 'number' && (arg - arg === 0));
}
exports.isFiniteNumber = isFiniteNumber;


function notFiniteNumber(arg) {
    return !(isFiniteNumber(arg));
}
exports.notFiniteNumber = notFiniteNumber;
