$(function(){
    //$('[ data-bs-toggle="tooltip"]').tooltip'()
})

$(document).scroll(function () {
    const y = $("hmtl").scrollTop();
    y > 300 ? $('nav').addClass("nav-black") : $("nav").removeClass("nav-black")
});
