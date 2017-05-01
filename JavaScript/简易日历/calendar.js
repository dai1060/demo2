window.onload=function() 
{
	var oDiv=document.getElementById('div1');
	// var aDiv=document.getElementByClassName('div2');
	
	var aDiv=oDiv.getElementsByTagName('div')[0];
	var oLit=oDiv.getElementsByTagName('li');

	var arr=
	[
		'JAN','FER','MAR','APR','MAY','JUN',
		'JUL','AUG','SEP','OCT','FER','DEC',
	];
	var arr1=[
				'1231442342','22222','33333','44444','55555','66666',
				'77777','888888','999999','10 10 10 10 10 10',
				'11 11 11 11 11','12 12 12 12 12',
			];
	for (var i = 0; i < arr.length; i++) 
	{
		oLit[i].index=i;
		oLit[i].innerHTML='<h2>'+(i+1)+'</h2><br/>'+arr[i]
		//在li标签里循环添加arr里的项
		oLit[i].onmouseover=function() 
		{
			for (var i = 0; i < oLit.length; i++) {
				oLit[i].className='';
			}
			this.className='active';
			aDiv.innerHTML='<h4>'+(this.index+1)+'月活动</h4><p>'+arr1[this.index]+'</p>'
		}
	}


}