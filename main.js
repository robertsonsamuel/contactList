/*global $:false, jQuery:false */
$(document).ready(init);
var totalList = [];
  var $listItem = {'checked': false};
function init () {
  // Add to List activator
  $('#add').on('click',getInfo);
  //$('#save').on('click',storeListItem);
  // $('.checkbox').off();

  //lets enter key trigger getInfo function
  $(document).keypress(function(e) {
    if(e.which == 13) {
        getInfo();
    }
});
var totalLists = JSON.parse(localStorage.tasks) || "[]";
  if ((JSON.parse(localStorage.tasks)).length > 0){
    update();
  }


}




function update() {
  var listObjects = JSON.parse(localStorage.tasks)
  console.log(listObjects);
  listObjects.forEach(function(task){
    var $row = $('<tr>').addClass('unchecked');
    var $date = $('<td class="dateInput">' + task.date + '</td>');
    var $text = $('<td class="textInput">' + task.task + '</td>');
    var $check = $('<td>'+ '<input type ="checkbox" class="checkbox">' + '</td>').attr('checked', task.checked);

    $('.table').append($row.append($check,$text,$date));

  })
}

function getInfo () {
  var $dateInBox = $('#datepicker').val(); //date in string form
  var $textTodo = $('#textfield').val();

  var $row = $('<tr>').addClass('unchecked');
  var $date = $('<td class="dateInput">' + $dateInBox + '</td>');
  var $text = $('<td class="textInput">' + $textTodo + '</td>');
  var $check = $('<td>'+ '<input type ="checkbox" class="checkbox">' + '</td>');


  //sets data and time into $listItem object
  $listItem.task = $textTodo; //store text to object
  $listItem.date = $dateInBox; // store date to object

  //pushes to a master array
  totalList.push($listItem);
  localStorage.tasks = JSON.stringify(totalList);



  console.log(totalList);

  $('.table').append($row.append($check,$text,$date));
  //$check.off();
  $check.change(isChecked);
}

function isChecked () {
  //console.log($(this));
 if($(this).children().hasClass('unchecked')){
  $(this).closest('.unchecked').css('text-decoration', 'line-through');
  $(this).closest('.unchecked').addClass('checked').removeClass('unchecked');
 }


 return;

}
