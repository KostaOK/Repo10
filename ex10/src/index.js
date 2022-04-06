function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Challe Salle",
            title: "Gud vajb",
            release_year: 2018,
            id: 123,
            formats: {
                1: "MP3",
                2: "CD",
                3: "Plosca"
            }
        }
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;