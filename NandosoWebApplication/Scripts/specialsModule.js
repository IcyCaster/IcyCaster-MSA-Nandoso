// Module pattern, for promoting encapsulation.
var specialsModule = (function () {

    // Private things here

    // Return things here
    return {
        getSpecials: function (callback) {

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://nandosoo.azurewebsites.net/api/Specials",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });
        }
    };
}());