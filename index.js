const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newCats = [...cats];
    newCats.push(name);
    return newCats;
    
}

function prependCat(name) {
    const moreCats = [...cats];
    moreCats.unshift(name);
    return moreCats;
}

function removeLastCat() {
    const lessCats = [...cats];
    lessCats.pop(name);
    return lessCats;
}

function removeFirstCat() {
    const oneLessCats = [...cats];
    oneLessCats.shift(name);
    return oneLessCats;
}