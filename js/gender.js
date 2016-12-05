
$(".sex").on("click","dl",function(){
	
	$(this).find(".chooseBtn").addClass("active").end().siblings().find(".chooseBtn").removeClass("active");

})

$(".genderBtn").on("click",()=>{
	let gender=$(".sex").find(".chooseBtn.active").parents("dl").data("gender");
	let urlParas=encodeURI("?gender="+gender)
	location.href="./allergy.html"+urlParas;
})


