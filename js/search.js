$(function() {
  var mark = function() {
    var keyword = $("input[name='keyword']").val();
    var options = {};
    // determine selected options
    $("input[name='opt[]']").each(function() {
      options[$(this).val()] = $(this).is(":checked");
    });
    // remove previous marked elements
    $(".jrnlcnf").unmark({
      done: function() {
        $(".jrnlcnf").mark(keyword, options);
      }
    });
  };

  $("input[name='keyword']").on("input", mark);
  $("input[type='checkbox']").on("change", mark);
});
