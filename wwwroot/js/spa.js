$(document).ready(function () {
    //Load html from varius html pages into the dynamic content are in index.html
    $('#PassFolder1').click(function () {
        $('#page-content-wrapper').load('PassFolder1.html');
    })

    $('#PassFolder2').click(function () {
        $('#page-content-wrapper').load('PassFolder2.html');
    })

    $('#PassFolder3').click(function () {
        $('#page-content-wrapper').load('PassFolder3.html');
    })

    $('#indexPanel').click(function () {
        $('#page-content-wrapper').load('indexPanel.html');
    })
});

$(document).ready(function () {
    // Redirect to login if not logged in (except on signup)
    if (!["/login.html", "/SignUp.html"].includes(window.location.pathname) && localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "login.html";
    }

    // Sign-up functionality
    $("#createLoginBtn").click(function () {
        let newUsername = $("#createLoginUser").val();
        let newPassword = $("#createLoginPass").val();

        if (newUsername && newPassword) {
            localStorage.setItem("storedUsername", newUsername);
            localStorage.setItem("storedPassword", newPassword);
            alert("Account created successfully! You can now log in.");
            window.location.href = "login.html"; // Redirect to login page
        } else {
            alert("Please enter both a username and password.");
        }
    });

    // Login functionality
    $("#loginBtn").click(function () {
        let username = $("#loginUser").val();
        let password = $("#loginPass").val();

        let storedUsername = localStorage.getItem("storedUsername");
        let storedPassword = localStorage.getItem("storedPassword");

        if (username === storedUsername && password === storedPassword) {
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "index.html";
        } else {
            $("#loginError").text("Invalid username or password").show();
        }
    });

    // Logout functionality
    $("#logoutBtn").click(function () {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "login.html";
    });

    // Navigate to sign-up page
    $("#signupBtn").click(function () {
        window.location.href = "SignUp.html";
    });

    // Function to get selected folder
    function getSelectedFolder() {
        return $("#folderSelect").val();
    }

    // Generic function to save data using JSON
    function saveData() {
        let folder = getSelectedFolder();
        let storedData = JSON.parse(localStorage.getItem(folder)) || {};

        storedData.accSavedInput = $("#accUserInput").val();
        storedData.nameSavedInput = $("#nameUserInput").val();
        storedData.emailSavedInput = $("#emailUserInput").val();
        storedData.passSavedInput = $("#passUserInput").val();

        localStorage.setItem(folder, JSON.stringify(storedData));
        console.log(`Saved data for ${folder}:`, storedData);
    }

    // Save inputs
    $("#accSaveInput, #nameSaveInput, #emailSaveInput, #passSaveInput").click(saveData);

    // Function to load stored data for the selected folder
    function loadData(folder) {
        let storedData = JSON.parse(localStorage.getItem(folder)) || {};

        let accStoredValue = storedData.accSavedInput || "No account name entered";
        let nameStoredValue = storedData.nameSavedInput || "No username entered";
        let emailStoredValue = storedData.emailSavedInput || "No email entered";
        let passStoredValue = storedData.passSavedInput || "No password entered";

        console.log("Loading Data for", folder, storedData);

        setTimeout(() => {
            $("#accDisplayData").text("Account name: " + accStoredValue);
            $("#nameDisplayData").text("Username: " + nameStoredValue);
            $("#emailDisplayData").text("Email: " + emailStoredValue);
            $("#passDisplayData").text("Password: " + passStoredValue);
        }, 100);
    }

    // Handle navigation & load stored values
    $(".nav-link").click(function (e) {
        e.preventDefault();
        let page = $(this).attr("id") + ".html";
        let folder = $(this).attr("id");

        $("#page-content-wrapper").load(page, function () {
            loadData(folder);
        });
    });

    // Load initial data on page refresh
    loadData(getSelectedFolder());

});
