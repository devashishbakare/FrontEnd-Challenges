// console.log("hey");
// function getImageFromApi(){
//     let xhr = new XMLHttpRequest();

//     xhr.open("GET", "https://newsapi.org/v2/everything?q=tesla&from=2023-01-08&sortBy=publishedAt&apiKey=61e459a1d34647719b6810d6270a1546", true);
    
//     xhr.onload = function(){

//         var data = JSON.parse(xhr.response);
        
//             $('#source-name').html(data.articles[i].source.name);
//             $('#author').html(data.articles[i].author);
//             $('#title').html(data.articles[i].title);
//             $('#description').html(data.articles[i].description);
//             $('#url').html(data.articles[i].url);
//             $('#publishedAt').html(data.articles[i].publishedAt);
//             $('#abc').attr('src', data.articles[i].urlToImage);
//             $('#content').html(data.articles[i].content);
       
//     };
//     xhr.send();
// }
// $('#fetch-button').click(getImageFromApi);

// {/* 
//     <div id = "source-name" class = "align-data"></div>
//     <div id = "author" class = "align-data"></div>
//     <div id = "title" class = "align-data"></div>
//     <div id = "description" class = "align-data"></div>
//     <div id = "url" class = "align-data"></div>
//     <div id = "urlToImage" class = "align-data"></div>
//     <div id = "publishedAt" class = "align-data"></div>
//     <div id = "content" class = "align-data"></div>
//  */}


//  $('#id').click(anyfunction);








function useAjaxCall(){

    // $.get("https://newsapi.org/v2/everything?q=tesla&from=2023-01-08&sortBy=publishedAt&apiKey=61e459a1d34647719b6810d6270a1546", function(data){
       
    // console.log(data);
    //     // $('#source-name').html(data.articles[0].source.name);
    //     // $('#author').html(data.articles[0].author);
    //     // $('#title').html(data.articles[0].title);
    //     // $('#description').html(data.articles[0].description);
    //     // $('#url').html(data.articles[0].url);
    //     // $('#publishedAt').html(data.articles[0].publishedAt);
    //     // //$('#abc').attr('src', data.articles[0].urlToImage);
    //     // $('#content').html(data.articles[0].content);
    // });

    // $.ajax({
    //     type : 'get',
    //     url : 'https://newsapi.org/v2/everything?q=apple&from=2023-02-07&to=2023-02-07&sortBy=popularity&apiKey=61e459a1d34647719b6810d6270a1546',
    //     success : function(data){
    //         console.log(data);
    //         $('#source-name').html(data.articles[0].source.name);
    //         $('#author').html(data.articles[0].author);
    //         $('#title').html(data.articles[0].title);
    //         $('#description').html(data.articles[0].description);
    //         $('#url').html(data.articles[0].url);
    //         $('#publishedAt').html(data.articles[0].publishedAt);
    //         $('#abc').attr('src', data.articles[0].urlToImage);
    //         $('#content').html(data.articles[0].content);
    
    //     }
    // });

    $.get('https://newsapi.org/v2/everything?q=apple&from=2023-02-07&to=2023-02-07&sortBy=popularity&apiKey=61e459a1d34647719b6810d6270a1546', function(data){
        $('#source-name').html(data.articles[0].source.name);
            $('#author').html(data.articles[0].author);
            $('#title').html(data.articles[0].title);
            $('#description').html(data.articles[0].description);
            $('#url').html(data.articles[0].url);
            $('#publishedAt').html(data.articles[0].publishedAt);
            $('#abc').attr('src', data.articles[0].urlToImage);
            $('#content').html(data.articles[0].content);
    })


}

$('#fetch-button').click(useAjaxCall);