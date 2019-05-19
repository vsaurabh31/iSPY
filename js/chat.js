$(function(){
    $(".c_h").click(function(e) {
             if ($(".chat_container").is(":visible")) {
                 $(".c_h .right_c .mini").text("+")
             } else {
                 $(".c_h .right_c .mini").text("-")
             }
             $(".chat_container").slideToggle("slow");
             return false
         });
 });