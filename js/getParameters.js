let parameter=(para)=>{
		let paras=decodeURI(para).substr(1);
		let arr=paras.split("&");
		let obj={};
		for(let i=0;i<arr.length;i++){
			let key=arr[i].split("=")[0],
				val=arr[i].split("=")[1];
				obj[key]=val
		}
		return obj;
	}

	export default parameter;