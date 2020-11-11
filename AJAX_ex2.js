$('button').on("click", function() {
    let key = $('.key').val()
    let val= $('.data').val()
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q='+key+':'+val,
        success: function (data) {
            console.log(data)
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
  });
const fetch = function (id) {
   
}