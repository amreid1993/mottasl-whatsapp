var apiUrl = "https://api.mottasl.com/v2";
var apiKey = "test-key";

function tryApi() {
    getData(apiUrl + '/account/templates').then((data) => {
        console.log(data);
    });

    // $.ajax({
    //     url: apiUrl + '/account/templates',
    //     contentType: 'application/json',
    //     // dataType: 'json',
    //     type: 'GET',
    //     headers: {
    //         apikey: apiKey,
    //         'Access-Control-Allow-Origin': '*'
    //     },
    //     success: function (data) {
    //         console.log(data);
    //     }, error: function (xhr, ajaxOptions, thrownError) {
    //         console.log(xhr);
    //         console.log(ajaxOptions);
    //         console.log(thrownError);
    //     }
    // });
}

async function getData(url = "") {
    const response = await fetch(url, {
        method: "GET",
        mode: "no-cors", // no-cors, *cors, same-origin
        headers: {
            "Content-Type": "application/json",
            "apikey": apiKey,
        },
    });
    return response.json();
}