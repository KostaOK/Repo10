var myPet = {
    "species": "American Akita",
    "name": "Kong",
    "legs": 4,
    "friends": ["Amigo", "Chico"],
}

function myFunction(myObj) {
    return myObj;
};

console.log(myFunction(myPet));
module.exports = { myPet, myFunction};