$(document).on("click", "a[href='#ipel']", function(item) {
  // Add smooth scrolling to all internal links
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $("html, body").animate({
      scrollTop: $(hash).offset().top
    }, 600, function(){
      window.location.hash = hash;
    });
  }
})
