var counter = 0;
var previous = 0;
$(document).ready(function()
{
  $(".character-select2").hide();
  $("#next").click(function()
  {
      counter++;
      if(counter > 1)
      {
        previous--;
      }
      if(counter == 1)
      {
        previous++;
      }
      console.log(previous);
      if(previous >= 0)
      {
        previous--;
      }
      if(counter == 1)
      {
        $(".character-select1").hide();
        $(".character-select2").show();
      }
      if(counter == 2)
      {
        $("#character-select2").hide();
        $("#character-select3").show();
      }
      if(counter == 3)
      {
        $("#character-select3").hide();
        $("#character-select4").show();
      }
      if(counter == 4)
      {
        $("#character-select4").hide();
        $("#character-select5").show();
      }
  });
  $("#previous").click(function()
  {
      counter--;
      if(counter > 1)
      {
        previous--;
      }
      if(counter == 1)
      {
        previous++;
      }
      console.log(previous);
      if(previous == 1)
      {
        $(".character-select2").hide();
        $(".character-select1").show();
      }
      if(previous == 2)
      {
        $("#character-select2").hide();
        $("#character-select3").show();
      }
      if(previous == 3)
      {
        $("#character-select3").hide();
        $("#character-select4").show();
      }
      if(previous == 4)
      {
        $("#character-select4").hide();
        $("#character-select5").show();
      }
  });
  $("#home").click(function()
  {
      $(".character-select1").show();
      $(".character-select2").hide();
      $(".character-select3").hide();
      $(".character-select4").hide();
  });

});
