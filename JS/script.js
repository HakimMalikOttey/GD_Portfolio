
function fade() {
    $(".projects ul").css({ 'opacity': 0 });
    jQuery(".NavBut").on('click', function (event) {
        var thetarget = this.getAttribute('target')
        var theid = this.getAttribute('id');
        if (thetarget != "_blank") {
            var thehref = this.getAttribute('href')
            event.preventDefault();
            jQuery("#MainBody").fadeOut(function () {
                window.location = thehref;
            }).delay(500);
            $("#MainBody").fadeIn(function () {
            });
        }
    });
}
// setTimeout(function () {
//     $('#MainBody').fadeIn();
// }, 500);
// $('butfoc').click(function(){

// });
jQuery(document).ready(function () {
    if (window.innerWidth <= 1412) {
        $("#NavBox").children().remove();
        $("#NavBox").load("SmallNav.html", function () {
            fade();
        });
    }
    else {
        $("#NavBox").children().remove();
        $("#NavBox").load("NavBar.html", function () {
            fade();
        });
    }
    if (window.innerWidth <= 700) {
        $("#resbox").children().remove();
        $("#resbox").load("ResumeSmall.html");
    }
    else {
        $("#resbox").children().remove();
        $("#resbox").load("ResumeBig.html");
    }
    jQuery("#MainBody").fadeIn();
});
function focusInput() {
    if ($(".projects ul").css('opacity') == 0) {
        $(".projects ul").css({ 'opacity': 1 });
    }
    else {
        $(".projects ul").css({ 'opacity': 0 });
    }
}
$(document).on("click", "#Adaptchar", function (e) {
    var top = document.getElementById("#Adaptchar").offsetTop;
    window.scrollTo(0, top);
});
window.addEventListener('resize', () => {
    var w = window.innerWidth;
    var toosmall = 1412;
    if (w <= toosmall) {
        $("#NavBox").children().remove();
        $("#NavBox").load("SmallNav.html");
    }
    else {
        $("#NavBox").children().remove();
        $("#NavBox").load("NavBar.html");
    }
    if (w <= 700) {
        $("#resbox").children().remove();
        $("#resbox").load("ResumeSmall.html");
    }
    else {
        $("#resbox").children().remove();
        $("#resbox").load("ResumeBig.html");
    }
    console.log(w);
});
