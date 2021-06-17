// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
    drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift(name);
}

function appendDriver(name) {
   const addDriver = [...drivers, name];
   return addDriver
}

function prependDriver(name) {
    const removeD = [name, ...drivers]
    return removeD
}

function removeLastDriver(name) {
    const removeD = drivers.slice(0, 2);
    return removeD
}

function removeFirstDriver(name) {
    const removeD = drivers.slice(1);
    return removeD
}