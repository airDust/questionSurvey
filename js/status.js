import getParametersFn from "./getParameters";
let paras=getParametersFn(location.search);
let answerInfo=paras.answerInfo;
console.log(answerInfo)   //获取illness.html传过来的性别参数
$(".title2").hide();
$(".title3").hide();
$(".dd_items").hide();
$(".status_describe").hide();
$(".wholeArticleBtn").hide();
$(".wholeArticle").hide();


$(".status_title").on("click",()=>{
	/*if($(".wholeArticle").is(":show")){
		return false;
	}*/
	$(".dd_items").hide();
	$(".dt_items").find("i").removeClass("top_arrow").addClass("bot_arrow");
	$(".status_title").hide();
	$(".title3").show();
	$(".status_describe").show();
	$(".wholeArticleBtn").show();
	$(".wholeArticleBtn").on("click",()=>{
		$(".wholeArticle").show();
		$(".wholeArticleBtn").hide();
	})
})

$(".dt_items").on("click",function(){
	$(".status_title").hide();
	$(".title2").show();
	$(".dt_items").find("i").removeClass("top_arrow").addClass("bot_arrow");
	$(".dd_items").hide();
	$(this).next().show();
	$(this).find("i").removeClass("bot_arrow").addClass("top_arrow");
})