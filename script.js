//when user click edit profile
function editProfile(element) {
    //create var to hold the object we want to edit
    var username = document.querySelector(".username");
    //change the username to Jane Don't
    username.innerText = "Jane Don't";
}
//when user click accept button
function acceptRequest(element) {
    //we have to get up to levels to access the entire div that holds the row we want to remove
    var parent = element.parentNode;
    var grandParent = parent.parentNode; 
    //remove the entire row
    grandParent.remove();
    //subtract 1 from Connect Requests
    document.querySelector(".small-notification").innerText--;
    //add 1 to Your Connections
    document.querySelector(".large-notification").innerText++;
}
//when user click reject button
function rejectRequest (element) {
    //we have to get up to levels to access the entire div that holds the row we want to remove
    var parent = element.parentNode;
    var grandParent = parent.parentNode; 
    //remove the entire row
    grandParent.remove();
    //subtract 1 from Connect Requests
    document.querySelector(".small-notification").innerText--;
}