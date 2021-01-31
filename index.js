"use strict";

function handleMenuToggle() {
    $(document).on("click", "#menu-btn", function(e) {
        e.preventDefault();
        $("#nav-list").toggleClass("visible")
    });

    $(document).on("click", "#strategies", function(e) {
        e.preventDefault();
        $("#strategies-subnav").toggleClass("visible")
    });

    $(document).on("click", "#growth", function(e) {
        e.preventDefault();
        $("#growth-subnav").toggleClass("visible")
    });

    $(document).on("click", "#resources", function(e) {
        e.preventDefault();
        $("#resources-subnav").toggleClass("visible")
    });

    $(document).on("click", "#articles", function(e) {
        e.preventDefault();
        $("#articles-subnav").toggleClass("visible")
    });
}

function loadNav() {
    $("#nav-bar-container").load("components/navigation.html");
}

$(function() {
    loadNav();
    handleMenuToggle();
});