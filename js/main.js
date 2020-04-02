/* Alex Tetervak, Sheridan College, Ontario */

"use strict"; // use the strict mode

// starts using jQuery
$(function() {
    // load the xml file
    $.getJSON("data/catalog.json",displayFlowers);
});

function displayFlowers(data) {
    let $table = $("<table></table>");
    $table.appendTo("main");
    let flowers = data.flowers;
    flowers.forEach(function (flower, index) {
            $table.append(
                `<tr> 
                <td>
                    <a href="flower.html" data-index="${index}">
                     <img src="images/flowers/${flower.pictures.small}" 
                        alt="${flower.name}" class="thumb">
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

    $("table a").click(function(){
        let index = $(this).data("index");
        localStorage["flower"] = JSON.stringify(flowers[index]);
    });
}




