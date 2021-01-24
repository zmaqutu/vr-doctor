/* auth.onAuthStateChanged(user => {
    if (user) {
        setupUI(user);
    } else {
        setupUI
    }
}); */
//get element
function GetVal(n) {
    var element = document.getElementById(n).value;
    return element
}
// sign up
const signupForm = document.querySelector('#SignUp-Form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //validate form
    if (GetVal("c_fname") == "" || GetVal("c_email") == "" || GetVal("c_number") == "" || GetVal("c_pass") == "" || GetVal("c_confpass") == "" || GetVal("c_lname") == "" || GetVal("DOB") == "") {
        document.getElementById("errMsg").innerHTML = "Please complete all feilds"
    } else {
        // get user info
        const email = signupForm['c_email'].value;
        const password = signupForm['c_pass'].value;

        if (document.getElementById('c_confpass').value ==
            document.getElementById('c_pass').value) {
            // sign up the user
            auth.createUserWithEmailAndPassword(email, password).then(cred => {
                //create patient details
                db.collection("Patient").doc(cred.user.uid).set({
                    FirstName : GetVal("c_fname"),
                    LastName : GetVal("c_lname"),
                    Email : email,
                    DOB : GetVal("DOB"),
                    Phone : GetVal("c_number"),
                    FirstName : GetVal("c_fname"),
                    FirstName : GetVal("c_fname")

                }).then(() => {
                    window.location ='Infopage.html';
                })
            });
        } else {
            alert("Passwords do not match");
        }
    }
})/* .catch(err => {
    signupForm.querySelector('#errMsg').innerHTML = err.message;
}); */