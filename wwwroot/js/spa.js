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
    // Clear local storage on page load (optional, remove if you want to keep data)
    localStorage.clear();
    console.log("Local Storage Cleared!");

    // Function to get the selected folder
    function getSelectedFolder() {
        return $("#folderSelect").val();
    }

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
        let folder = $(this).attr("id"); // Get folder name from link ID

        $("#page-content-wrapper").load(page, function () {
            let nameStoredValue = localStorage.getItem(folder + "_nameSavedInput") || "No username entered";
            let emailStoredValue = localStorage.getItem(folder + "_emailSavedInput") || "No email entered";
            let passStoredValue = localStorage.getItem(folder + "_passSavedInput") || "No password entered";

            console.log("Loading Page:", page, "Folder:", folder, "Data:", nameStoredValue, emailStoredValue, passStoredValue);

            $("#page-content-wrapper #nameDisplayData").text("Username: " + nameStoredValue);
            $("#page-content-wrapper #emailDisplayData").text("Email: " + emailStoredValue);
            $("#page-content-wrapper #passDisplayData").text("Password: " + passStoredValue);
        });
    });
});