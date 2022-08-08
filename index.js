const cats = [
    "Milo", "Otis", "Garfield"
]

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop(cats.length - 1);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo")
}

function appendCat(name) {
    // const copyOfCats = cats.push("Broom")
    const copyOfCats = [...cats, "Broom"];
    return copyOfCats;
}

function prependCat(name) {
    const copyOfCats = ["Arnold", ...cats]
    return copyOfCats;
}

function removeLastCat() {
    const newCats = [...cats]
    newCats.splice(-1, 1)
    return newCats;
    
}

function removeFirstCat() {
    const newCats = [...cats]
    newCats.splice(0, 1)
    return newCats;
}