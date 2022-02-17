const apikey = "6207718034fd6215658583f4";
$("#loginForm").submit(() => false);

$("#login").on("click", function () {
    let enteredEmailAdd = $("#email").val();
    let enteredPassword = $("#psw").val();

    var settings = {
        async: true,
        crossDomain: true,
        url: "https://fontrivia-0c30.restdb.io/rest/user-login",
        method: "GET",
        headers: {
            "content-type": "application/json",
            "x-apikey": apikey,
            "cache-control": "no-cache",
        },
    };

    $.ajax(settings).done(function (response) {
        for (var i = 0; i < response.length; i++) {
            let tempUsername = response[i]["username"];
            let tempEmailAdd = response[i]["email-address"];
            let tempPassword = response[i]["password"];

            if (
                enteredEmailAdd == tempEmailAdd &&
                enteredPassword == tempPassword
            ) {
                alert(`Login Successful. Welcome ${tempUsername}!`);
                setTimeout(loadMainPage, 1000);

                function loadMainPage() {
                    window.location.href = `../HTML/index.html?username=${tempUsername}`;
                }
            }
        }
    });
});