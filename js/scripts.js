$(document).ready(function(){
    // $('.carousel').carousel({interval:2000});
    // $("#carouselPause").click(function(){
    //     $("#mycarousel").carousel('pause');
    // });
    // $("#carouselPlay").click(function(){
    //     $("#mycarousel").carousel('cycle');
    // });
    $("#carouselButton").click(function(){
        if($('#carouselButton').children('span').hasClass("fa-pause")){
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children('span').removeClass('fa-pause')
            $("#carouselButton").children('span').addClass('fa-play')
        }  
        else{
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children('span').removeClass('fa-play')
            $("#carouselButton").children('span').addClass('fa-pause')
        }
    });

    $("#loginOpenBtn").click(function(){
        $("#loginModal").modal();
    });
    $("#loginCloseBtn").click(function(){
        $('#loginModal').modal('hide');
    })
    $("#tableOpenBtn").click(function(){
        $("#resModal").modal();
    });
    $("#tableCloseBtn").click(function(){
        $('#resModal').modal('hide');
    })
});