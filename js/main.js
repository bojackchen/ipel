$(document).on("click", ".nav a", function(item) {
  // Collapse navbar automatically after click on an item
  $("#ipelNavbar").collapse("hide");
})

$(document).ready(function() {
  // Last modified field
  if (document.getElementById("lastupdate") !== null)
    document.getElementById("lastupdate").innerHTML = "Last modified: " + document.lastModified;

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
