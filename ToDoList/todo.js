var heigh = document.documentElement.clientHeight;//获取窗口高度
			var prepare = document.getElementsByClassName("prepare")[0];
			var mainTop = document.getElementsByClassName("mainTop")[0];
			var mainWrite = document.getElementsByClassName("mainWrite")[0];
			var start = document.getElementsByClassName("start")[0];
			var inputToDo = document.getElementById("inputToDo");
			var submitToDo = document.getElementsByClassName("submitToDo")[0];
			var Etherious_Natsu_Dragneel = document.getElementsByClassName("Etherious_Natsu_Dragneel")[0];
			mainTop.style.height = heigh * 0.07 + "px";
			mainWrite.style.height = heigh * 0.15 + "px";
			prepare.style.minHeight = heigh * 0.7 + "px";
			start.style.minHeight = heigh * 0.7 +"px";
			Etherious_Natsu_Dragneel.style.height = heigh * 0.08 + "px"; //用百分比给各个模块给予高度

		
			submitToDo.onmousedown = function (){
				submitToDo.style.background = "rgba(76,175,80,0.7)";
			}                       //设置鼠标点击时的button的颜色
			submitToDo.onmouseup = function (){
				submitToDo.style.background = "rgba(76,175,80)";
			}                       // 设置鼠标点击松开时的button的颜色
			submitToDo.onclick = function(){
				if(inputToDo.value != ""){       //判断表单内是否为空值
					var list = document.createElement("li");  
					var worlds = document.createElement("span");
					var node = document.createTextNode(inputToDo.value);
					var a = document.createElement("a");
					var nodeA = document.createTextNode("finish");
					var delet = document.createElement("a");
					var nodeCe = document.createTextNode("delet");
					var change = document.createElement("a");
					var nodeCan = document.createTextNode("change");
					worlds.className = "worlds";
					a.className = "finish";
					delet.className = "delet";
					change.className = "change";
					worlds.appendChild(node);  
					list.appendChild(worlds);//添加计划内容
					delet.appendChild(nodeCe);
					list.appendChild(delet);
					change.appendChild(nodeCan);//添加更改内容
					list.appendChild(change);
					a.appendChild(nodeA); 
					list.appendChild(a);//添加完成
					prepare.appendChild(list);//将li标签插入todo区域内
					inputToDo.value = "";
				}
				a.onclick = function(){//完成按钮，删除ToDo中的标签，在FINISH中创建
					FINISH (worlds);
					prepare.style.minHeight = heigh * 0.7 + "px";
					start.style.minHeight = heigh * 0.7 +"px";
					if(prepare.offsetHeight > start.offsetHeight){
						start.style.minHeight = prepare.offsetHeight + "px";
					}
					if(prepare.offsetHeight < start.offsetHeight){
						prepare.style.minHeight = start.offsetHeight + "px";
					}

				}
				delet.onclick = function(){//删除按钮，删除ToDo中的标签和localstorage中的数据
					DELET(worlds);
					start.style.minHeight = prepare.offsetHeight + "px";
				}                          //给动态创建的标签添加事件，其函数写在创建标签函数中
				if(prepare.offsetHeight > start.offsetHeight){
					start.style.minHeight = prepare.offsetHeight + "px";
				}
			}

			function FINISH (worlds){   //FINISH按钮
				var listFinish = document.createElement("li");
				var worldsFinish = document.createElement("span");//复制完成文本，把它放入完成中
				var nodeFinish = document.createTextNode(worlds.innerHTML);
				var reDo = document.createElement("a");
				var nodeRE = document.createTextNode("redo");
				var changeFinish = document.createElement("a");
				var nodeChange = document.createTextNode("change");
				var deletFinish = document.createElement("a");
				var nodeDelet = document.createTextNode("delet");
				worldsFinish.className = "worldsFinish";
				reDo.className = "reDo";
				changeFinish.className = "nodeChange";
				deletFinish.className = "nodeDelet";
				
				worldsFinish.appendChild(nodeFinish);
				listFinish.appendChild(worldsFinish);
				
				deletFinish.appendChild(nodeDelet);
				listFinish.appendChild(deletFinish);
				
				changeFinish.appendChild(nodeChange);
				listFinish.appendChild(changeFinish);

				reDo.appendChild(nodeRE);
				listFinish.appendChild(reDo);


				start.appendChild(listFinish);
				worlds.parentNode.remove();  //删除该标签

				deletFinish.onclick = function(){
					DELET(worldsFinish);
					prepare.style.minHeight = heigh * 0.7 + "px";
					start.style.minHeight = heigh * 0.7 +"px";
					if(prepare.offsetHeight > start.offsetHeight){
						start.style.minHeight = prepare.offsetHeight + "px";
					}
					if(prepare.offsetHeight < start.offsetHeight){
						prepare.style.minHeight = start.offsetHeight + "px";
					}
				}                           //删除已经完成的项目

				if(prepare.offsetHeight < start.offsetHeight){
					prepare.style.minHeight= start.offsetHeight + "px";
				}
				
			}

			function DELET (worlds){   //DELET按钮
				worlds.parentNode.remove();  //删除该标签


				//删除该标签在localstorage中的数据
			}
