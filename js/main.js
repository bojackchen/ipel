$("nav a").click(function() {
    $(".navbar-collapse").collapse("hide");
});

$(document).ready(function(){
    // Add smooth scrolling to all internal links
    $("a[href='#ipel']").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 600, function(){
                window.location.hash = hash;
            });
        }
    });
})
