var myApp=new Framework7();
var $$=Dom7;
var leftView=myApp.addView('.view-left',{dynamicNavbar:true});
var mainView=myApp.addView('.view-main',{dynamicNavbar:true});

function addClub () {

	document.getElementById("container1").innerHTML='<object type="text/html" data="addclub.html" ></object>';

}

function addLitsocEvent() {
	document.getElementById("container1").innerHTML='<object type="text/html" data="addlitsocevent.html" ></object>';
}

function assignConvenors() {
	document.getElementById("container1").innerHTML='<object type="text/html" data="assignconvenors.html" ></object>';

}

function sendNotifs() {
	document.getElementById("container1").innerHTML='<object type="text/html" data="sendNotifs.html" ></object>';

}

function editClub() {
	document.getElementById("container1").innerHTML='<object type="text/html" data="editclub.html" ></object>';

}

function addClubEvent() {
	document.getElementById("container1").innerHTML='<object type="text/html" data="addclubevent.html" ></object>';

}

function addCore() {
	document.getElementById("container1").innerHTML='<object type="text/html" data="addcore.html" ></object>';

}

function addSec() {
	document.getElementById("container1").innerHTML='<object type="text/html" data="addsec.html" ></object>';

}
