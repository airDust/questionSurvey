import getParametersFn from "./getParameters";
let paras=getParametersFn(location.search);
let food=paras.food;
//console.log(food)   //获取allergy.html传过来的性别参数
$(".illness_choose").on("click","span",function(){
	$(this).addClass("active").siblings().removeClass("active");
	if($(this).data("name")=="hide"){
		$(".illness_items").hide();
	}else if($(this).data("name")=="show"){
		$(".illness_items").show();
	}
})

$(".illness_items").on("click","span",function(){

	if($(this).hasClass("active")){
		$(this).removeClass("active");
		return;
	}
	$(this).addClass("active")
})
$(".illnessBtn").on("click",()=>{
	var arr=[];
	$(".illness_items span.active").each((ind,val)=>{
		arr.push($(val).text())
	})
	let url=encodeURI("?illness="+arr);
	location.href="./basicInfo.html"+url;
})