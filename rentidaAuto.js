


var defaultPage = "home";
var presentPage;
presentPage=defaultPage;

//JS for managing main navigation
function changePage(This, calledPage = '') {
	document.getElementsByClassName("active")[0].classList.remove("active");
	This.parentNode.classList.add("active");
	document.getElementById(presentPage).classList.add("hide");
	if(calledPage!=''){
		document.getElementById(calledPage).classList.remove("hide");
		presentPage=calledPage;
	}

}

//JS for managing side navigation  of home page
function handleSideNavigation(This, calledPagePart=''){
	$("#homeBodyNavigation").find(".active").removeClass("active");
	$("#"+This).addClass("active");
	$(".pagePart").addClass("hide");
	$("#"+calledPagePart).removeClass("hide");
}
