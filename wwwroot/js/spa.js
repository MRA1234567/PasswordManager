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
    $("#passSaveInput").click(function () {
        let passUserInput = $("#passUserInput").val(); // Get input value
        localStorage.setItem("passSavedInput", passUserInput); // Store it
        console.log("Pass Saved Input:", passUserInput); // Debugging
    });

    $(".nav-link").click(function (e) {
        e.preventDefault();

        let page = $(this).attr("id") + ".html";
        $("#page-content-wrapper").load(page, function () {
            let passStoredValue = localStorage.getItem("passSavedInput") || "No password entered";
            console.log("Loading Page:", page, "Pass Stored Value:", passStoredValue); // Debugging
            $("#page-content-wrapper #passDisplayData").text("Password: " + passStoredValue);
        });
    });
});

$(document).ready(function () {
    $("#nameSaveInput").click(function () {
        let nameUserInput = $("#nameUserInput").val(); // Get input value
        localStorage.setItem("nameSavedInput", nameUserInput); // Store it
        console.log("Name Saved Input:", nameUserInput); // Debugging
    });

    $(".nav-link").click(function (e) {
        e.preventDefault();

        let page = $(this).attr("id") + ".html";
        $("#page-content-wrapper").load(page, function () {
            let nameStoredValue = localStorage.getItem("nameSavedInput") || "No username entered";
            console.log("Loading Page:", page, "Name Stored Value:", nameStoredValue); // Debugging
            $("#page-content-wrapper #nameDisplayData").text("Username: " + nameStoredValue);
        });
    });
});

$(document).ready(function () {
    $("#emailSaveInput").click(function () {
        let passUserInput = $("#emailUserInput").val(); // Get input value
        localStorage.setItem("emailSavedInput", emailUserInput); // Store it
        console.log("Email Saved Input:", emailUserInput); // Debugging
    });

    $(".nav-link").click(function (e) {
        e.preventDefault();

        let page = $(this).attr("id") + ".html";
        $("#page-content-wrapper").load(page, function () {
            let emailStoredValue = localStorage.getItem("emailSavedInput") || "No email entered";
            console.log("Loading Page:", page, "Email Stored Value:", emailStoredValue); // Debugging
            $("#page-content-wrapper #emailDisplayData").text("Email: " + emailStoredValue);
        });
    });
});