var school = {
    name: "Arena",
    location: "Sarajevo",
    established: 2020,
}
function myFunction(name) {
    school.name = "Paragon";
    return school;
}
console.log(myFunction(school));
module.exports = {school, myFunction};
