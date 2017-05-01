		function getStyle(obj,name)
		//获取style（从非行间）
		{
			if(obj.currentStyle)
			{
				return obj.currentStyle[name];
				//在IE下用currentStyle
			}
			else
			{
				return getComputedStyle(obj,false)[name];
				//在火狐下用getComputedStyle
			}
		};


		function startMove(obj,json,fnEnd)
		{
			
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var bStop=true;
				// 假设所有值都已经达到了

				for(var attr in json)
				{
					var cur=0;
					if (attr=='opacity')
					{
						var cur=Math.round(parseFloat(getStyle(obj,attr))*100);
						//四舍五入最后的结果，不会有后面一串0
						//*100方便计算透明度
					}
					else
					{
						var cur=parseInt(getStyle(obj,attr));
						//分析参数，返回整数
					}
					
					var speed=(json[attr]-cur)/6;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
					//取整后再重新赋值给speed

					if (cur!=json[attr]) {
						bStop=false;
					}
				
					if(attr=='opacity')
						//判断属性是否为透明度
					{
						obj.style.filter='alpha(opacity:'+(cur+speed)+')';
						obj.style.opacity=(cur+speed)/100;
					}
					else
					{
						obj.style[attr]=cur+speed+'px';
					}

				}
				if(bStop)
				//判断是否全部达到目标值
				{
					clearInterval(obj.timer);
					if(fnEnd)fnEnd();
					//判断是否有fnEnd有则执行
				}
			},30);
	    };
