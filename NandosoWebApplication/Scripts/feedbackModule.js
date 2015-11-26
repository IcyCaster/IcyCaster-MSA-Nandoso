// Module pattern, for promoting encapsulation.
var feedbackModule = (function () {

    // Private things here

    // Return things here
    return {
        getFeedback: function (callback) {

            $.ajax({
                type: "GET",
                dataType: "json",               
                url: "http://nandosoo.azurewebsites.net/api/Feedback",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });
        }
    };

    return {
        addFeedback: function (sendData) {

            $.ajax({
                type: "POST",
                dataType: "json",
                data: sendData,
                url: "http://nandosoo.azurewebsites.net/api/Feedback",
                success: function (data) {
                    console.log(data);
                }
            });
        }
    };

}());