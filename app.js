
$.ajax({
  url: "http://fvi-grad.com:4004/sudoku",
  success: function (res,txt,xhr){
    for (var i = 0; i < res.length; i++){
      if(i === 2 || i === 5){
        $('#row').append(`<tr class='row`+i+` bottom' value='`+i+`'><tr>`)
      }else{
        $('#row').append(`<tr class='row`+i+`' value='`+i+`'><tr>`)
      }

      for(var j = 0; j < res[i].length; j++){
        if(j === 3 || j === 6){
          if(res[i][j] === ""){
           $('.row'+i).append(`<td class='left' value='`+j+`'><input maxlength='1'></input></td>`);
          }else{
            $('.row'+i).append(`<td class='left'>`+res[i][j]+`</td>`);
          }
        }else{
          if(res[i][j] === ""){
           $('.row'+i).append(`<td value='`+j+`'><input maxlength='1'></input></td>`);
          }else{
            $('.row'+i).append(`<td>`+res[i][j]+`</td>`);
          }
        }

      }
    }


  }
});

$('#valid').on('click', function(){

var matrix = new Array(9).fill(0).map(e => new Array(9).fill(0));
var arr =[];
var x = 0;
 $('td').each(function (i,e){

    if($(this).html().length > 1){
     //arr.push($(this).find("input").val());
     matrix[Math.floor(i/9)][i%9] = $(e).find('input').val();
    }else{
      //arr.push($(this).html());
      matrix[Math.floor(i/9)][i%9] = $(e).html();
    }
  })
  $.ajax({
    url: "http://fvi-grad.com:4004/sudoku",
    data: {board: matrix},
    method: "POST",
    success: function (res, txt, xhr){
        $('#valid').html(res);
    }
  })
  // for (var i = 0 ; i < matrix.length; i++){
  //   for(var j = 0; j < matrix[i].length; j++){
  //     matrix[i][j]= arr[x];
  //     x++;
  //   }
  // }
  //data : {board: matrix}
});
