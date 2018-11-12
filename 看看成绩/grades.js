var inquire = document.getElementById("inquire").addEventListener("click",inform);
	var selectTime = document.getElementById("selectTime");
	function inform(){
		var xhr = new XMLHttpRequest();
		var term = document.getElementById("theTerm").value;
		var year = document.getElementById("theYear").value;
		xhr.open('POST','http://192.168.230.25:3000/api/grade',true);
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				var dataAll = JSON.parse(this.responseText);
				// console.log(dataAll);//在控制台上打印所有学科及其信息
				 selectTime.style.display = 'none';//隐藏下拉框以及提示信息
				for(var i = 0;i < 100;i ++){
					if(dataAll.data[i] == null){
						break;
					}
				}//判断该学生该学期的科目总数，以便于生成同样数量的div显示课程信息
				var many = i;

				var tell = document.createElement('p');
				var directory = document.getElementById("directory");
				var theTell = document.createTextNode("请点击快速查询课程的科目");
				tell.appendChild(theTell);
				tell.id = "tell";
				directory.appendChild(tell);//打印"请点击快速查询课程的科目"


				var open = document.createElement("a");
				open.id = 'open';
				var directory = document.getElementById("directory");
				var openNext = document.createTextNode("展开>");
				open.appendChild(openNext);
				directory.appendChild(open);//打印课程目录展开








				for(var j = 0;j < i;j ++){
					var directory = document.getElementById("directory");
					var directoryI = document.createElement("a");//查询成绩的目录
					var node = document.createTextNode(dataAll.data[j].KCMC);
					var c = j + 1;
					directoryI.href = "#" + c;
					directoryI.onclick = function(){
						location.replace(this.href);
					}
					directoryI.appendChild(node);//输入课程的名称
					directory.appendChild(directoryI);//将a标签插入div中
					directoryI.className = "directoryI";
				}
				directoryI.style.borderBottomRightRadius = "1rem";
				directoryI.style.borderBottomLeftRadius = "1rem";
				var directoryIOne = document.getElementsByClassName("directoryI")[0];
				directoryIOne.style.borderTopRightRadius = "1rem";
				directoryIOne.style.borderTopLeftRadius = "1rem";
				





				var packUp = document.createElement("p");
				packUp.id = 'packUp';
				var directory = document.getElementById("directory");
				var packUpNext = document.createTextNode("收起<");
				packUp.appendChild(packUpNext);
				directory.appendChild(packUp);//打印课程目录收起




				for(var k = 0;k < i;k ++){
					// var node = document.createTextNode("课程科目" + dataAll.data[k].KCMC);
					var arrive = document.createElement("a");//点击目录时切换到对应的科目
					var d = k + 1;
					arrive.id = d;
					page.appendChild(arrive);






					// （创建每一科成绩的显示块，将其插入到父元素中）
						var result = document.getElementById("page");//为创建的div元素寻找插入点
						var subject1 = document.createElement("div");
						subject1.className = "subject1";
						subject1.id = "tobe1";
						page.appendChild(subject1);//将创建的div元素插入到父元素中


						var node0 = document.createTextNode(dataAll.data[k].KCMC);
						var lesson = document.createElement("div");
						lesson.id = "lesson";
						// lesson.style.background = "#686868";
						lesson.appendChild(node0);
						subject1.appendChild(lesson);//创建显示课程名称的div，给其中加入数据，插入上面创建的快div中


						
						var node1 = document.createTextNode("百分之成绩： " + dataAll.data[k].BFZCJ);
						var score = document.createElement("li");
						score.id = "listWorlds";
						// score.style.background = "#D0D0D0";
						score.appendChild(node1);
						subject1.appendChild(score);//创建列表来存放信息，以下每一行此

						var node2 = document.createTextNode("学分： " + dataAll.data[k].XF);
						var studyGrade = document.createElement("li");
						studyGrade.id = "listWorlds";
						// studyGrade.style.background = "#A8A8A8";
						studyGrade.appendChild(node2);
						subject1.appendChild(studyGrade);//同上

						var node3 = document.createTextNode("绩点： " + parseInt(dataAll.data[k].JD*100)/100);
						var express = document.createElement("li");
						express.id = "listWorlds";
						// express.style.background = "#D0D0D0";
						express.appendChild(node3);
						subject1.appendChild(express);//同上


						var node4 = document.createTextNode("课程标记： " + dataAll.data[k].KCBJ);
						var tab = document.createElement("li");
						tab.id = "listWorlds";
						// tab.style.background = "#A8A8A8";
						tab.appendChild(node4);
						subject1.appendChild(tab);//同上

						var node5 = document.createTextNode("课程号： " + dataAll.data[k].KCH);
						var number = document.createElement("li");
						number.id = "listWorlds";
						// number.style.background = "#D0D0D0";
						number.appendChild(node5);
						subject1.appendChild(number);//同上









				}
			var directoryII = document.getElementsByClassName("directoryI");
			var subject1 = document.getElementsByClassName("subject1");
			var directory = document.getElementById("directory");
			// console.log(i);
			open.onclick = function(){
				for(var i = 0;i < many;i ++){
					directoryII[i].style.display = "block";
				}
				open.style.display = "none";
				packUp.style.display = "inline-block";
				directory.style.height = 6 + i * 2.57 + "rem";//利用已知的课程的多少来决定目录的高低，保持目录和成绩的距离适当

			}
			packUp.onclick = function(){
				for(var i = 0;i < many;i ++){
					directoryII[i].style.display = "none";
				}
				open.style.display = "inline-block";
				packUp.style.display = "none";
				directory.style.height = "5rem";
      			window.scroll(0,0);
			}

				
			}
		}
		xhr.send("term=" + term + "&" + "year=" + year);
		
	}
