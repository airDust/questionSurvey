import getParametersFn from "./getParameters";
let paras=getParametersFn(location.search);
let vegetables=paras.vegetables;
if(vegetables){
	console.log(vegetables)   //获取illness.html传过来的性别参数
}

$.ajax({
	url:"../data/question_data.json",
	dataType:"json",
	type:"get"
})
 .done(function(data){
 	var str="";
 	for(var i=0;i<data.length;i++){
 		str+=`<dl>`
				+`<dt>${data[i].qName}</dt>`
				+`<dd>`
					+`<span>没有</span>`
					+`<span>很少</span>`
					+`<span>有时</span>`
					+`<span>经常</span>`
					+`<span>总是</span>`
				+`</dd>`
			+`</dl>`
 	}
 	$(".questionBox").html(str);

 	$(".questionBox dl").each((ind,val)=>{
 		$(val).on("click","span",function(){
 			$(this).addClass("active").siblings().removeClass("active");
 		})
 	})
 	$('.submitBtn').on("click",()=>{
 		let answers=$(".questionBox").find("span.active")
 		if(answers.length<60){
 			alert("请完善选项");
 			return;
 		}
 		let answerInfo=[];
		$(".questionBox span.active").each((ind,val)=>{
			answerInfo.push($(val).text())
		})
		
		let url=encodeURI("?answerInfo="+answerInfo);
			location.href="./status.html"+url;
	 	})
 })