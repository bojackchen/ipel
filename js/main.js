$(document).on("click", ".nav a", function(item) {
  // Collapse navbar automatically after click on an item
  $("#ipelNavbar").collapse("hide");
})

$(document).ready(function() {
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

$(document).ready(function() {
  $("#ipelBanner").load("../common/ipelBanner.html");
  $("#navbar").load("../common/navbar.html");
  $("#hkBanner").load("../common/hkBanner.html");
  $("#footer").load("../common/footer.html");
})
