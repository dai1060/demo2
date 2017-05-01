function setCookie(name,value,iDay){	//设置cookie

	var oDate=new Date();
	oDate.setDate(oDate.getDate()+iDay);

	document.cookie=name+'='+value+';expires='+oDate;
};

function getCookie(name){	//获取cookie

	var arr=document.cookie.split('; ');

	for (var i = 0; i < arr.length; i++) {
		
		var arr2=arr[i].split('=');	//通过分割创建数组 

		if (arr2[0]==name) {	//第一个元素若等于name 则求的值就是数组第二个元素
			return arr2[1];
		};
	};
	return '';
};

function removeCookie(name){ 	//删除cookie

	setCookie(name,1,-1);//设置日期为-1天 = 昨天
}
