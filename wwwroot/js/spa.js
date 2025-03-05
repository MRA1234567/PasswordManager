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
    $("#saveInput").click(function () {
        let userInput = $("#userInput").val(); // Get input value
        localStorage.setItem("savedInput", userInput); // Store it
        console.log("Saved Input:", userInput); // Debugging
    });

    $(".nav-link").click(function (e) {
        e.preventDefault();

        let page = $(this).attr("id") + ".html";
        $("#page-content-wrapper").load(page, function () {
            let storedValue = localStorage.getItem("savedInput") || "No password entered";
            console.log("Loading Page:", page, "Stored Value:", storedValue); // Debugging
            $("#page-content-wrapper #displayData").text("Password: " + storedValue);
        });
    });
});