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
    // Check if user is logged in
    if (window.location.pathname !== "/login.html" && localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "login.html"; // Redirect to login page if not logged in
    }

    // Login functionality
    $("#loginBtn").click(function () {
        let username = $("#loginUser").val();
        let password = $("#loginPass").val();

        // Set a default login (change this for production use)
        const correctUsername = "admin";
        const correctPassword = "password123";

        if (username === correctUsername && password === correctPassword) {
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "index.html"; // Redirect to main page
        } else {
            $("#loginError").show(); // Show error message
        }
    });

    // Logout functionality
    $("#logoutBtn").click(function () {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "login.html"; // Redirect to login page
    });

    // Function to get the selected folder
    function getSelectedFolder() {
        return $("#folderSelect").val();
    }

    // Save Account Name
    $("#accSaveInput").click(function () {
        let folder = getSelectedFolder();
        let accUserInput = $("#accUserInput").val();
        localStorage.setItem(folder + "_accSavedInput", accUserInput);
        console.log("Saved Account Name for", folder, ":", accUserInput);
    });

    // Save Username
    $("#nameSaveInput").click(function () {
        let folder = getSelectedFolder();
        let nameUserInput = $("#nameUserInput").val();
        localStorage.setItem(folder + "_nameSavedInput", nameUserInput);
        console.log("Saved Username for", folder, ":", nameUserInput);
    });

    // Save Email
    $("#emailSaveInput").click(function () {
        let folder = getSelectedFolder();
        let emailUserInput = $("#emailUserInput").val();
        localStorage.setItem(folder + "_emailSavedInput", emailUserInput);
        console.log("Saved Email for", folder, ":", emailUserInput);
    });

    // Save Password
    $("#passSaveInput").click(function () {
        let folder = getSelectedFolder();
        let passUserInput = $("#passUserInput").val();
        localStorage.setItem(folder + "_passSavedInput", passUserInput);
        console.log("Saved Password for", folder, ":", passUserInput);
    });

    // Load pages dynamically & update stored values
    $(".nav-link").click(function (e) {
        e.preventDefault();
        let page = $(this).attr("id") + ".html";
        let folder = $(this).attr("id");

        $("#page-content-wrapper").load(page, function () {
            let accStoredValue = localStorage.getItem(folder + "_accSavedInput") || "No account name entered";
            let nameStoredValue = localStorage.getItem(folder + "_nameSavedInput") || "No username entered";
            let emailStoredValue = localStorage.getItem(folder + "_emailSavedInput") || "No email entered";
            let passStoredValue = localStorage.getItem(folder + "_passSavedInput") || "No password entered";

            console.log("Loading Page:", page, "Folder:", folder, "Data:", accStoredValue, nameStoredValue, emailStoredValue, passStoredValue);

            $("#page-content-wrapper #accDisplayData").text("Account name: " + accStoredValue);
            $("#page-content-wrapper #nameDisplayData").text("Username: " + nameStoredValue);
            $("#page-content-wrapper #emailDisplayData").text("Email: " + emailStoredValue);
            $("#page-content-wrapper #passDisplayData").text("Password: " + passStoredValue);
        });
    });
});