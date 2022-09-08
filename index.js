// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
   cats.push(name);
}


function destructivelyPrependCat(name){
    cats.unshift(name);
 }
 
function destructivelyRemoveLastCat(){
    cats.pop();
 }

 function destructivelyRemoveFirstCat(){
    cats.shift();
 }

function appendCat(name){
    const copyCats = [...cats, name]
    return copyCats;
}
function prependCat(name){
    const moreCopyCats = [name,...cats]
    return moreCopyCats;
}

function removeLastCat(){
    const takingCats = cats.slice(0,2);
    return takingCats;
}
function removeFirstCat(){
    const takingMoreCats = cats.slice(1);
    return takingMoreCats;
}
//function 
//function 
//function 
//function