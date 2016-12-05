import getParametersFn from "./getParameters";
let paras=getParametersFn(location.search);
let illness=paras.illness;
//console.log(illness)   //获取illness.html传过来的性别参数
$(".mask").hide();

$(".mask").on("click","span",()=>{
	$(".mask").hide();
})
$(".content").on("click","li",function(){
	if($(this).find("i").hasClass("active")){
		$(this).find("i").removeClass("active");
		return;
	}
	$(this).find("i").addClass("active")
})

$(".basicBtn").on("click",()=>{
	$(".mask").show();
	
})

$(".test_btn").on("click",()=>{
	let vegetables=[];
	$(".content li i.active").each((ind,val)=>{
		vegetables.push($(val).next().text())
	})
	let url=encodeURI("?vegetables="+vegetables);
	location.href="./howFeel.html"+url;
})

