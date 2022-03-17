// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    const destructivelyAppendCat = cats;
    destructivelyAppendCat.push(name);
    return destructivelyAppendCat;
}

function destructivelyRemoveLastCat() {
    const destructivelyRemoveLastCat = cats;
    destructivelyRemoveLastCat.pop();
    return destructivelyRemoveLastCat;
}

function destructivelyRemoveFirstCat() {
    const destructivelyRemoveFirstCat = cats;
    destructivelyRemoveFirstCat.shift();
    return destructivelyRemoveFirstCat;
}

function destructivelyPrependCat(name) {
    const destructivelyPrependCat = cats;
    destructivelyPrependCat.unshift(name);
    return destructivelyPrependCat;
}

function appendCat(name) {
    const copyCats = cats.slice();
    copyCats.push(name);
    return copyCats;
}

function prependCat(name) {
    const copyCats = cats.slice();
    copyCats.unshift(name);
    return copyCats;
}

function removeLastCat() {
    const copyCats = cats.slice();
    copyCats.pop();
    return copyCats;
}

function removeFirstCat() {
    const copyCats = cats.slice();
    copyCats.shift();
    return copyCats;
}