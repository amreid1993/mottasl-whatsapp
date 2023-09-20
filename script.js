var apiUrl = "https://api.mottasl.com/v2";
var apiKey = "test-key";

function tryApi() {
    $.ajax({
        url: apiUrl + '/account/templates',
        contentType: 'application/json; charset=utf-8',
        dataType: 'jsonp',
        type: 'GET',
        headers: {
            apikey: apiKey,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            console.log(data);
        }, error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr);
            console.log(ajaxOptions);
            console.log(thrownError);
        }
    });
}