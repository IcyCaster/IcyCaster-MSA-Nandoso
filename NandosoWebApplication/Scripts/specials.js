document.addEventListener("DOMContentLoaded", function () {
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
            var img = document.createElement('img');
            img.setAttribute('src', specials[i].ImgURL);
            img.style.width = '300px';
            imageCol.appendChild(img);
            row.appendChild(imageCol);

            var nameCol = document.createElement('td');
            nameCol.innerHTML = specials[i].Name;
            row.appendChild(nameCol);

            var descriptionCol = document.createElement('td');
            descriptionCol.innerHTML = specials[i].Description;
            row.appendChild(descriptionCol);

            var promoCol = document.createElement('td');
            promoCol.innerHTML = specials[i].PromoCode;
            row.appendChild(promoCol);

            var expiryCol = document.createElement('td');
            expiryCol.innerHTML = specials[i].ExpiryDate;
            row.appendChild(expiryCol);

            // Append the row to the end of the table
            specialTable.appendChild(row);

        }
    }
}