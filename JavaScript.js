var Artists = ["Twenty One Pilots", "Bastille", "Hasley", "Imagine Dragons", "Melanie Martinez", "The Neighbourhood"];
var ArtistsImages = ["url('Twenty One Pilots Logo.png')", "url('Bastille Logo.jpg')", "url('Halsey Logo.jpg')", "url('Imagine Dragons Logo.jpg')", "url('Melanie Martinez Logo.jpg')", "url('The Neighbourhood Logo.jpg')"];
var TOP = ["Heavydirtysoul", "Stressed Out", "Tear In My Heart", "Ride", "Guns For Hands", "Car Radio"];
var Bastille = ["Icarus", "Laura Palmer", "Torn Apart", "Overjoyed", "Send Them Off", "Bad Blood"];
var Halsey = ["Gasoline", "Colors", "New Americana", "Hurricane", "Castle", "Drive"];
var ImagineDragons = ["Radioactive", "Shots", "Gold", "I Bet My Life", "Polaroid", "Monster"];
var MelanieMartinez = ["Dollhouse", "Cry Baby", "Pity Party", "Alphabet Boy", "Mrs. Potato Head", "Carousel"];
var TheN = ["Sweater Weather", "Daddy Issues", "Cry Baby", "R.I.P 2 My Youth", "Afraid", "Prey"];


//var reader; //GLOBAL File Reader object
//var modal = document.getElementById('id01'); // Get the modal
//var LoggedIn = 0;
// When the user clicks anywhere outside of the modal, close it
//window.onclick = function (event)
//{
//  if (event.target == modal )
//{
//  modal.style.display = "none";
//}
//}
/*
function Login()
{
	var Username = document.getElementById("Usrname").value;
	var Password = document.getElementById("Pas").value;


	if(LoggedIn == 0)
	{
		if (Username == "TestAccount1" && Password == "Admin1")
		{
			document.getElementById("LoginButton").innerHTML = "Logged in as " + Username;
			document.getElementById("CreatAccount").innerHTML = "Logout";
			LoggedIn = 1;
		}
	}
}

function Logout()
{
	document.getElementById("LoginButton").innerHTML = "Login";
	document.getElementById("CreatAccount").innerHTML = "Create Account";
	LoggedIn = 0;
}

function LoggedInCheck()
{
	if(LoggedIn == 1)
	{
		modal.style.display = "none";
	}
	return;
}
*/
//function checkFileAPI() {
//    if (window.File && window.FileReader && window.FileList && window.Blob) {
//    reader = new FileReader();
//      return true; 
//    } else {
//  alert('The File APIs are not fully supported by your browser. Fallback required.');
//    return false;
//  }
//}

document.getElementById("Card1").onclick = function () 
{
    qwerty()
};

function SetBackground(CardID) 
{
    alert("bluhh");
    var BackImage = document.getElementById("CardID").style.backgroundImage;
    alert(BackImage);
    document.getElementById("parallax2").style.backgroundImage = BackImage;
}

//Sets the cards images
function SetCardImages() 
{
    document.getElementById("Card1").style.backgroundImage = "url('Twenty One Pilots Logo.png')";
    document.getElementById("Card2").style.backgroundImage = "url('Bastille Logo.jpg')";
    document.getElementById("Card3").style.backgroundImage = "url('Halsey Logo.jpg')";
    document.getElementById("Card4").style.backgroundImage = "url('Imagine Dragons Logo.jpg')";
    document.getElementById("Card5").style.backgroundImage = "url('Melanie Martinez Logo.jpg')";
    document.getElementById("Card6").style.backgroundImage = "url('The Neighbourhood Logo.jpg')";
}

//Slideshow code
var slideIndex = 1;
var Auto = true;

showSlides(slideIndex);

function ToggleAutoPlay()
{
    Auto = !Auto;
}

function plusSlides(n) 
{
    showSlides(slideIndex += n);
}

function currentSlide(n) 
{
    showSlides(slideIndex = n);
}

function showSlides(n) 
{
    var i;
    var slides = document.getElementsByClassName("mySlides fade");
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1
    }
    
    if (n < 1) 
    {
        slideIndex = slides.length
    }
    
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function playIt()
{
   document.getElementById("embed").innerHTML="<embed src='Bad Blood.mp3' autostart=true loop=false volume=100 hidden=true>";
   return true;
}

function PopulateArray()
{
    //alert("Bluhh");
    //var Artists = ["Twenty One Pilots", "Bastille", "Hasley", "Imagine Dragons", "Melanie Martinez", "The Neighbourhood"];
    //var ArtistsImages = ["url('Twenty One Pilots Logo.png')", "url('Bastille Logo.jpg')", "url('Halsey Logo.jpg')", "url('Imagine Dragons Logo.jpg')", "url('Melanie Martinez Logo.jpg')", "url('The Neighbourhood Logo.jpg')"]
}

function SetArtist(ID)
{
    document.getElementById("Songs1").style.backgroundImage = ArtistsImages[ID];
    document.getElementById("ArtistsName").innerHTML = Artists[ID];
    if(ID == 0)
        {
            
            document.getElementById("Song1").innerHTML = TOP[0];
            document.getElementById("Song2").innerHTML = TOP[1];
            document.getElementById("Song3").innerHTML = TOP[2];
            document.getElementById("Song4").innerHTML = TOP[3];
            document.getElementById("Song5").innerHTML = TOP[4];
            document.getElementById("Song6").innerHTML = TOP[5];
        }
    
    if(ID == 1)
        {
            document.getElementById("Song1").innerHTML = Bastille[0];
            document.getElementById("Song2").innerHTML = Bastille[1];
            document.getElementById("Song3").innerHTML = Bastille[2];
            document.getElementById("Song4").innerHTML = Bastille[3];
            document.getElementById("Song5").innerHTML = Bastille[4];
            document.getElementById("Song6").innerHTML = Bastille[5]; 
        }
    
    if(ID == 2)
        {
            document.getElementById("Song1").innerHTML = Halsey[0];
            document.getElementById("Song2").innerHTML = Halsey[1];
            document.getElementById("Song3").innerHTML = Halsey[2];
            document.getElementById("Song4").innerHTML = Halsey[3];
            document.getElementById("Song5").innerHTML = Halsey[4];
            document.getElementById("Song6").innerHTML = Halsey[5]; 
        }
    
    if(ID == 3)
        {
            document.getElementById("Song1").innerHTML = ImagineDragons[0];
            document.getElementById("Song2").innerHTML = ImagineDragons[1];
            document.getElementById("Song3").innerHTML = ImagineDragons[2];
            document.getElementById("Song4").innerHTML = ImagineDragons[3];
            document.getElementById("Song5").innerHTML = ImagineDragons[4];
            document.getElementById("Song6").innerHTML = ImagineDragons[5]; 
        }
    
    if(ID == 4)
        {
            document.getElementById("Song1").innerHTML = MelanieMartinez[0];
            document.getElementById("Song2").innerHTML = MelanieMartinez[1];
            document.getElementById("Song3").innerHTML = MelanieMartinez[2];
            document.getElementById("Song4").innerHTML = MelanieMartinez[3];
            document.getElementById("Song5").innerHTML = MelanieMartinez[4];
            document.getElementById("Song6").innerHTML = MelanieMartinez[5]; 
        }
    
    if(ID == 5)
        {
            document.getElementById("Song1").innerHTML = TheN[0];
            document.getElementById("Song2").innerHTML = TheN[1];
            document.getElementById("Song3").innerHTML = TheN[2];
            document.getElementById("Song4").innerHTML = TheN[3];
            document.getElementById("Song5").innerHTML = TheN[4];
            document.getElementById("Song6").innerHTML = TheN[5]; 
        }
}