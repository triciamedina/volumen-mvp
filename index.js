"use strict";

function loadNav() {
    $("#nav-bar-container").load("components/navigation.html");
}

$(function() {
    loadNav();
});