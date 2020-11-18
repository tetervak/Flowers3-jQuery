/* Alex Tetervak, Sheridan College, Ontario */

"use strict"; // use the strict mode

// starts using jQuery
$(function () {

    let flower = JSON.parse(localStorage["flower"]);
    $("span.flower_name").text(flower.label);
    $("span.flower_price").text(flower.price);
    $("img.flower_image")
        .attr("src", `images/flowers/${flower.pictures.large}`)
        .attr("alt", flower.label);
    $("p.flower_info").text(flower.text);
    $("a:contains(Wikipedia)").attr("href", flower.wiki);
});