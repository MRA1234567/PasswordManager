$(document).ready(function () {
    $('#PassFolder1').click(function () {
        $('#page-content-wrapper').load('PassFolder1.html');
    })
});

$(document).ready(function () {
    $('#PassFolder2').click(function () {
        $('#page-content-wrapper').load('PassFolder2.html');
    })
});

$(document).ready(function () {
    $('#PassFolder3').click(function () {
        $('#page-content-wrapper').load('PassFolder3.html');
    })
});

$(document).ready(function () {
    $('#indexPanel').click(function () {
        $('#page-content-wrapper').load('indexPanel.html');
    })
});

$(document).ready(function () {
    $('#Login').click(function () {
        $('#page-content-wrapper').load('Login.html');
    })
});

$(document).ready(function () {
    // Redirect to login if not logged in
    if (window.location.pathname !== "/login.html" && localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "login.html";
    }

    // Login functionality
    $("#loginBtn").click(function () {
        let username = $("#loginUser").val();
        let password = $("#loginPass").val();

        if (username === "admin" && password === "password123") {
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "index.html";
        } else {
            $("#loginError").show();
        }
    });

    // Logout functionality
    $("#logoutBtn").click(function () {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "login.html";
    });

    // Function to get selected folder
    function getSelectedFolder() {
        return $("#folderSelect").val();
    }

    // Generic function to save data
    function saveData(type, inputId) {
        let folder = getSelectedFolder();
        let userInput = $(inputId).val();
        localStorage.setItem(folder + "_" + type, userInput);
        console.log(`Saved ${type} for ${folder}:`, userInput);
    }

    // Save inputs
    $("#accSaveInput").click(() => saveData("accSavedInput", "#accUserInput"));
    $("#nameSaveInput").click(() => saveData("nameSavedInput", "#nameUserInput"));
    $("#emailSaveInput").click(() => saveData("emailSavedInput", "#emailUserInput"));
    $("#passSaveInput").click(() => saveData("passSavedInput", "#passUserInput"));

    // Function to load stored data for the selected folder
    function loadData(folder) {
        let accStoredValue = localStorage.getItem(folder + "_accSavedInput") || "No account name entered";
        let nameStoredValue = localStorage.getItem(folder + "_nameSavedInput") || "No username entered";
        let emailStoredValue = localStorage.getItem(folder + "_emailSavedInput") || "No email entered";
        let passStoredValue = localStorage.getItem(folder + "_passSavedInput") || "No password entered";

        console.log("Loading Data for", folder, ":", accStoredValue, nameStoredValue, emailStoredValue, passStoredValue);

        setTimeout(() => {
            $("#accDisplayData").text("Account name: " + accStoredValue);
            $("#nameDisplayData").text("Username: " + nameStoredValue);
            $("#emailDisplayData").text("Email: " + emailStoredValue);
            $("#passDisplayData").text("Password: " + passStoredValue);
        }, 100); // Delay to ensure elements are available
    }

    // Handle navigation & load stored values
    $(".nav-link").click(function (e) {
        e.preventDefault();
        let page = $(this).attr("id") + ".html";
        let folder = $(this).attr("id");

        $("#page-content-wrapper").load(page, function () {
            loadData(folder); // Load stored data into the page
        });
    });

    // Load initial data on page refresh
    loadData(getSelectedFolder());
});
