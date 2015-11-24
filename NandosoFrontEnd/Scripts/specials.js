﻿document.addEventListener("DOMContentLoaded", function () {
    loadSpecials();
});

function loadSpecials() {

    var specialTable = document.getElementById("specialContent");

    specialsModule.getSpecials(function (specialTable) {
        setupSpecialTable(specialTable);
    });

    // Callback function
    function setupSpecialTable(specials) {
        console.log(specials);
        for (i = 0; i < specials.length; i++) {

            // Create row 
            var row = document.createElement('tr');

            // Add the columns in the row (td / data cells)
            var imageCol = document.createElement('td');
            imageCol.innerHTML = specials[i].name;
            row.appendChild(imageCol);

            var nameCol = document.createElement('td');
            nameCol.innerHTML = specials[i].name;
            row.appendChild(nameCol);

            var descriptionCol = document.createElement('td');
            descriptionCol.innerHTML = specials[i].name;
            row.appendChild(descriptionCol);

            var promoCol = document.createElement('td');
            promoCol.innerHTML = specials[i].name;
            row.appendChild(promoCol);

            // Append the row to the end of the table
            specialTable.appendChild(row);

        }
    }
}