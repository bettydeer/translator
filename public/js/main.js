var $input = $('#input');
var $button = $('#button');
var $result = $('#result');

$button.click(function(){

  $.post('/translate', {
      text: $input.val()
  }, function(data){
      $result.text(data.text);
  });
});
