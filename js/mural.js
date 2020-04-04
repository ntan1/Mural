// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZAl7UzorPRSCoiAXQVHIr66irqJSniio",
    authDomain: "mural-fc495.firebaseapp.com",
    databaseURL: "https://mural-fc495.firebaseio.com",
    projectId: "mural-fc495",
    storageBucket: "mural-fc495.appspot.com",
    messagingSenderId: "405515397526",
    appId: "1:405515397526:web:d79512b68af49ff8a7d5b7",
    measurementId: "G-MWYE9XMLZT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

$(document).ready(function(){
    let shapesRef = db.collection("Submitted-Shapes").get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, "=>", doc.data());
            // let embedSvg = $(`<div id="${doc.id}" class="tile" title="${doc.data().title}" submitName="${doc.data().submitName}">`).append(doc.data().svg.replace('width="600" height="600"', 'width="300" height="300" viewBox="0 0 600 600"')).css("background-color", doc.data().bgColour);
            let embedSvg = $(`<div id="${doc.id}" class="tile" title="${doc.data().title}" submitName="${doc.data().submitName}">`).append(doc.data().svg.replace('width="600" height="600"', 'width="384" height="384" viewBox="0 0 600 600"')).css("background-color", doc.data().bgColour);
            // $("#display").append("<div class='tile'>" + doc.data().svg.replace('width="600" height="600"', 'width="300" height="300" viewBox="0 0 600 600"') + "</div>").css("background-color", doc.data().bgColour);
            $("#display").append(embedSvg);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    
});