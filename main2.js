//some planning
// click button to add data to table
// checked state and when clicked remove item that is checked
// checked items can be edited


$(document).ready(init);

//JSON.parse(localStorage.contacts || "[]"); //contact list array, holds many people
//$('.remove').on('click',removeContacts);

var contacts = [];
var rmCounter = 0;
function init () {

$('#add').on('click',addContact);  //onclick to add contact

//$('.remove').on('click',removeContacts);
letclick();
//keyboard input
$(document).keypress(function(e) {
  if(e.which == 13) {addContact(); }
}); // end keyboard input
//

writeOldContacts();

} // init funtion end
function letclick() {
   $('.remove').on('click',removeContacts);
    return;
}

function addContact() {  //adds contat to an object to be pushed to the the table
// Name should be longer than 2 chars

var people = {
  personname:'',
  email:'',
  phone:'',
  address:'',
  checked:false,
  editing:false,
};
  if( ($('#contactName').val()).length < 2 ){
    alert("Enter a name longer than one character!");
    return ;
  }

  // writing to the peope object
  people.personname = $('#contactName').val();
  people.email = $('#contactEmail').val();
  people.phone = $('#telephoneNumber').val();
  people.address = $('#address').val();

  $('#contactName').val('').focus();
  $('#contactEmail').val('');
  $('#telephoneNumber').val('');
  $('#address').val('');
  //console.log("people", people)
  contacts.push(people);
  //console.log("contacts", contacts)

  updateTable(people);  // makes table with contact info
  saveContacts();

} //end addContact


function saveContacts() {

  console.log(contacts);
  var SavedContacts = JSON.stringify(contacts);
  localStorage.contacts = SavedContacts;
  console.log(localStorage.contacts);
}

function removeContacts() {

var spliceme = $(this).closest('td').length;
var splice =[];
splice.push(spliceme,1);
var take = splice[0];

contacts = JSON.parse(localStorage.contacts);
contacts.splice(take,1);
$(this).parent('tr').remove();
saveContacts();
}

function edit() {
 $(this).closest('td').parent().append('<input type="text">');
}




function updateTable(person) {
  var $name = $('<td class="name">' + person.personname  + '</td>');
  var $email = $('<td class="email">'+ person.email + '</td>');
  var $phone = $('<td class="phone">'+ person.phone + '</td>');
  var $address=$('<td class="address">'+person.address + '</td>');
  var $edit = $('<td class="edit" id="edit">'+'<button><i class="fa fa-pencil"></i> Edit</button>'+ '</td>');
  var $remove = $('<td>'+'<button class="remove"><i class="fa fa-minus-circle"></i> Remove</button>'+ '</td>');
  var $row = $('<tr>');

  $('.table').append($row.append($name,$email,$phone,$address,$edit,$remove));

}



// its pretty wet here I'm aware
function writeOldContacts() {
  var currentContacts = JSON.parse(localStorage.contacts)
//  console.log(currentContacts,"currentContacts");
  currentContacts.forEach(function(contact){
    var $name = $('<td class="name">' + contact.personname  + '</td>');
    var $email = $('<td class="email">'+ contact.email + '</td>');
    var $phone = $('<td class="phone">'+ contact.phone + '</td>');
    var $address=$('<td class="address">'+contact.address + '</td>');
    var $edit = $('<td class="edit" id="edit">'+'<button><i class="fa fa-pencil"></i> Edit</button>'+ '</td>');
    var $remove = $('<td class="remove">'+'<button class="remove"><i class="fa fa-minus-circle"></i> Remove</button>'+ '</td>');
    var $row = $('<tr>');
    $('.table').append($row.append($name,$email,$phone,$address,$edit,$remove));

  });
$('.remove').on('click',removeContacts);
$('.edit').on('click',edit);
}
