const userID = "tuqh8iLTdlMMxqtwVe789JNIvnR2";
window.addEventListener("DOMContentLoaded", load())
function load() {
    var username = document.getElementById("userName");

    db.collection("Patient").doc(userID).get().then(function(doc){
        username.innerHTML = doc.data().FirstName;
    }); 
}