//some planning
// click button to add data to table
// checked state and when clicked remove item that is checked
// checked items can be edited


$(document).ready(init);

var contacts = []; //contact list array, holds many people
var people = {
  name,
  email,
  phone,
  address,
  checked:false,
  editing:false,
};



function init () {

$('#add').on('click',addContact);  //onclick to add contact

//keyboard input
$(document).keypress(function(e) {
  if(e.which == 13) {
      addContact();
  }


});
} // init funtion end


function addContact() {  //adds contat to an object to be pushed to the the table
// Name should be longer than 2 chars
if( ($('#contactName').val()).length < 2 ){
  alert("Enter a name longer than one character!");
  return ;
}

// writing to the peope object
people.name = $('#contactName').val();
people.email = $('#contactEmail').val();
people.phone = $('#telephoneNumber').val();
people.address = $('#address').val();

$('#contactName').val('').focus();
$('#contactEmail').val('');
$('#telephoneNumber').val('');
$('#address').val('');

contacts.push(people); //pushes each person to the contacts array

}
