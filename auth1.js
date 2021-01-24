//login
const Signin = document.getElementById("LoginBTN");
Signin.addEventListener('click', (e) => {
    e.preventDefault();

    //get user detail
    const email = GetVal("email");
    const password = GetVal("password");

    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        var url = 'Infopage.html';
        var userID = cred.user.uid;
        window.location= url+"?id="+userID
    });
});
function GetVal(n) {
    var element = document.getElementById(n).value;
    return element
}