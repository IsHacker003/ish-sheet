setTimeout(function(){document.getElementById("contscent").style="background-color:black; height:100%;";},3000);
function submitDetails() {
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var message=document.getElementById("message").value;
  var data={name,email,message};
  document.getElementsByClassName("btn-success")[0].innerHTML = "Working...";
  firebase.database().ref("/").child("general-messages/").push(data);
  setTimeout(function(){document.getElementById("contscent").innerHTML = "<h1 class='text-success'>Message Submitted!</h1>";},2000);
}
