import getParametersFn from "./getParameters";
let paras=getParametersFn(location.search);
let gender=paras.gender;
console.log(gender)   //获取gender.html传过来的性别参数
$(".allergy_choose").on("click","span",function(){
	$(this).addClass("active").siblings().removeClass("active");
	if($(this).data("name")=="hide"){
		$(".allergy_items").hide();
	}else if($(this).data("name")=="show"){
		$(".allergy_items").show();
	}
})

$(".allergy_items").on("click","span",function(){
	if($(this).hasClass("active")){
		$(this).removeClass("active");
		return;
	}
	$(this).addClass("active")
})
$(".allergyByn").on("click",()=>{
	var arr=[];
	$(".allergy_items span.active").each((ind,val)=>{
		arr.push($(val).text())
	})
	let url=encodeURI("?food="+arr);
	location.href="./illness.html"+url;
})