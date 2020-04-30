$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });

    event.stopPropagation();


});
$(".fa-pen-alt").on("click",function(){
    $("input[type='text']").fadeToggle(); 
});
$("input[type='text']").keypress(function(event){
    if(event.which===13){
        var todoText=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> "+ todoText +"</li>");
    }
});