/*
 With using xmlHttpRequest

 
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

*/

/*

    //with using jquery

    function getImageFromApi(){
        $.ajax({
            type: "GET",
            url: "https://dog.ceo/api/breeds/image/random",
            success : function(data){
                $('#dog-img').attr('src', data.message);
            }
        });
        
    }
    $('#fetch-button').click(getImageFromApi);

*/

//shortcut for get request
function getImageFromApi(){
   $.get('https://dog.ceo/api/breeds/image/random', function(data){
    $('#dog-img').attr('src', data.message);
   });
    
}
$('#fetch-button').click(getImageFromApi);