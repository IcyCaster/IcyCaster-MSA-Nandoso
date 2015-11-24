// Module pattern, for promoting encapsulation.
var specialsModule = (function () {

    // Private things here

    // Return things here
    return {
        getSpecials: function (callback) {

            $.ajax({
                type: "GET",
                dataType: "jsonp",
                url: "http://api.uinames.com/?amount=25",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });
        }
    };
}());