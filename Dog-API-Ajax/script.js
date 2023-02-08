console.log("hey");
function getImageFromApi(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://dog.ceo/api/breeds/image/random", true);
    xhr.onload = function(){
        var data = JSON.parse(xhr.response);
        $('#dog-img').attr('src', data.message);
    };
    xhr.send();
}
$('#fetch-button').click(getImageFromApi);
