function nameInfo(){
  alert("Enter Function - Debug Message");
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var middleName = document.getElementById("middleName").value;

  var fullName =  lastName + ", " + firstName + " " + middleName;

  document.getElementById("fullName").innerHTML = fullName;

}
