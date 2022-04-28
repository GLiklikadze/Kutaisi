
        //index.html
        
$(document).ready(function(){
  let box1 = $("#box1");
  let box2 = $("#box2");
  $(document).hover(function(){
   box1.animate({opacity: '1'}, 5000);
   box2.animate({opacity: '1'}, 12000);
  });
  });
               //Ajax
        
$(document).ready(function(){
  $(document).hover(function(){
    $.ajax({url  : "kutaisi-history.txt", 
      success : function(result){
      $("#box1").html(result);
      }});
    });
  });


          //culture.html

$(document).ready(function(){
  for (let i = 1; i <= 3; i++) {
   $("#cult-box" + i).click(function(){
    $("#cult-info" + i).toggle();
     $("#cult-txt" + i).css({"font-weight":"bold"});
    });
  }
});

            //adventure.html

$(document).ready(function(){
  for(let i = 0; i <= 4; i++){
    $("#adv-box" + i).mouseenter(function(){
      $("#adv-txt" + i).slideDown("slow");
    });
    $("#adv-box" + i).mouseleave(function(){
    $("#adv-txt" + i).slideUp("slow");
    });
  }
});

//food.html

$(document).ready(function(){
  $(".food-txt").mouseenter(function(){
    $(this).css({"background-color" : "rgba(69, 55, 40, 0.8)",
                  "color" : "white",
                  "height" : "50%"
    });
   });
    $(".food-txt").mouseleave(function(){
      $(this).css({"background-color" : "white",
                   "color" : "rgba(69, 55, 40, 0.8)",
                  });
    });
});


$(document).ready(function(){
  $(".food-box").mouseenter(function(){
   $(this).css({"opacity" : "1",
               });
   });
   $(".food-box").mouseleave(function(){
     $(this).css({"opacity" : "0.95"
                  });
     });
});







   
   
   

  