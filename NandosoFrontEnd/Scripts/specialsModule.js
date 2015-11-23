// Module pattern, for promoting encapsulation.
var SpecialsModule = (function () {

    // Private things here

    // Return things here
    return {
        getSpecials: function (callback) {

            $.ajax({
                type: "GET",
                dataType: "json",
                url
            })
        }

    };

}());