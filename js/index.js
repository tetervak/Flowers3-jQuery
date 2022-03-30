/* Alex Tetervak, Sheridan College, Ontario */

"use strict" // use the strict mode

// starts using jQuery
$(function () {
    // load the xml file
    $.getJSON("http://localhost:8080/api/flowers", displayFlowers);
});

function displayFlowers(data) {
    let $table = $("<table></table>");
    let flowers = data["_embedded"].flowers;
    flowers.forEach((flower, index) => {
            $table.append(
                `<tr> 
                <td>
                    <a href="flower.html" data-index="${index}">
                     <img src="images/flowers/${flower.pictures.small}" 
                        alt="${flower.id}" class="thumb">
                    </a> 
                </td> 
                <td>
                    <span class="flower_label">${flower.label}</span>&nbsp;&nbsp;
                    <span class="flower_price">${flower.price}</span><br>
                    ${flower.text}
                </td>
            </tr>`
            );
        }
    );
    $table.appendTo("main");

    $("table a").click(function () {
        let index = $(this).data("index");
        localStorage["flower"] = JSON.stringify(flowers[index]);
    });
}
