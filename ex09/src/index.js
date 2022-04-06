function myFunction(myObj, checkProp) {
    if(myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    }
    return "Not Found";
}
console.log(myFunction({title:"Titanic", song:"My heart Will Go On", genre: "drama", grenre:"drama"}, "title"));
console.log(myFunction({title:"Titanic", song:"My heart Will Go On", genre: "drama", grenre:"drama"}, "song"));
console.log(myFunction({title:"Titanic", song:"My heart Will Go On", genre: "drama", grenre:"drama"}, "genre"));
console.log(myFunction({title:"Titanic", song:"My heart Will Go On", genre: "drama", grenre:"drama"}, "actor"));