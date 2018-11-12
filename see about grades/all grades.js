var studyGrades = document.getElementsByClassName("studyGrades");
		var button = document.getElementsByClassName("button");
		var object = document.getElementsByClassName("object");
		var studyGrades1 = document.getElementById("studyGrades1");
		var clickFirst = 0;
		var clickSecond = 0;
		var clickThird = 0;
		var clickFours = 0;// 定义四个变量用来判断点击是否重复
		for(var i = 0;i < 4;i ++){
			(function(i){
				button[i].onclick = function(){
					studyGrades1.style.display = "none";
					for(var j = 0;j < 4;j ++){
						studyGrades[j].style.display = "none";
						button[j].style.boxShadow = "none";
						object[i].style.display = "none";
					}
					studyGrades[i].style.display = "block";
					button[i].style.boxShadow = "0.5rem 0.5rem 0.5rem #404040";
					object[i].style.display = "table";
				}
			}(i))
		}














		//el课程输入到div中
		var xhr = new XMLHttpRequest();
		xhr.open('POST',“”,true);

		xhr.onreadystatechange = function (){
			if(this.status == 200 && this.readyState == 4){
				var inform = JSON.parse(this.responseText);
				console.log(inform);//  记得删掉



				for(var many = 0;many < 100;many ++){
					if(inform.data.reCourse.dataList[many] == null){
						break;
					}
				}//判断通过的必修课的个数




				//打印所有通过的必修课的学分总和
				var reCourseSum = 0;
				var studyGradesSum = document.getElementsByClassName("studyGradesSum")[0];
				var reCourseSumTittleTd = document.createElement("p");
				reCourseSumTittleTd.style.fontSize = "1.5rem";
				reCourseSumTittleTd.style.background = "#00FF99";
				reCourseSumTittleTd.style.borderRadius = "1rem";
				reCourseSumTittleTd.style.lineHeight = "2rem";
				for(var i = 0;i < many;i ++){
					inform.data.reCourse.dataList[i].XF = Number(inform.data.reCourse.dataList[i].XF);
					reCourseSum += inform.data.reCourse.dataList[i].XF;
				}
				var reCourseSumNode = document.createTextNode("学分总和：" + reCourseSum);
				reCourseSumTittleTd.appendChild(reCourseSumNode);
				studyGradesSum.appendChild(reCourseSumTittleTd);




				// 创建表格tr标签
				for(var i = 0;i < many;i ++){
					var overline = document.createElement("tr");
					overline.className = "overline";
					overline.style.background = "rgba(0,255,153,0.2)"
					var reCourseSumWorld = document.createElement("td");
					reCourseSumWorld.className = "reCourseSumWorld";
					var reCourseSumGrade = document.createElement("td");
					reCourseSumGrade.className = "reCourseSumGrade";
					var reCourseSumWorldNode = document.createTextNode(inform.data.reCourse.dataList[i].KCMC);
					var reCourseSumGradeNode = document.createTextNode("学分：" + inform.data.reCourse.dataList[i].XF); 
					reCourseSumWorld.appendChild(reCourseSumWorldNode);
					overline.appendChild(reCourseSumWorld);
					reCourseSumGrade.appendChild(reCourseSumGradeNode);
					overline.appendChild(reCourseSumGrade);
					object[0].appendChild(overline);
				}
















				for(var many = 0;many < 100;many ++){
					if(inform.data.elCourse.dataList[many] == null){
						break;
					}
				}//判断通过的选修课的个数




				//打印所有通过的选修课的学分总和
				var elCourseSum = 0;
				var studyGradesSum = document.getElementsByClassName("studyGradesSum")[1];
				var elCourseSumTittleTd = document.createElement("p");
				elCourseSumTittleTd.style.fontSize = "1.5rem";
				elCourseSumTittleTd.style.background = "#4CAF50";
				elCourseSumTittleTd.style.borderRadius = "1rem";
				elCourseSumTittleTd.style.lineHeight = "2rem";
				for(var i = 0;i < many;i ++){
					inform.data.elCourse.dataList[i].XF = Number(inform.data.elCourse.dataList[i].XF);
					elCourseSum += inform.data.elCourse.dataList[i].XF;
				}
				var elCourseSumNode = document.createTextNode("学分总和：" + elCourseSum);
				elCourseSumTittleTd.appendChild(elCourseSumNode);
				studyGradesSum.appendChild(elCourseSumTittleTd);





				// 创建表格tr标签
				for(var i = 0;i < many;i ++){
					var overline = document.createElement("tr");
					overline.className = "overline";
					overline.style.background = "rgba(76,175,80,0.2)";
					var elCourseSumWorld = document.createElement("td");
					elCourseSumWorld.className = "reCourseSumWorld";
					var elCourseSumGrade = document.createElement("td");
					elCourseSumGrade.className = "reCourseSumGrade";
					var elCourseSumWorldNode = document.createTextNode(inform.data.elCourse.dataList[i].KCMC);
					var elCourseSumGradeNode = document.createTextNode("学分：" + inform.data.elCourse.dataList[i].XF); 
					elCourseSumWorld.appendChild(elCourseSumWorldNode);
					overline.appendChild(elCourseSumWorld);
					elCourseSumGrade.appendChild(elCourseSumGradeNode);
					overline.appendChild(elCourseSumGrade);
					object[1].appendChild(overline);
				}











				//同上
				for(var many = 0;many < 100;many ++){
					if(inform.data.failCourse.dataList[many] == null){
						break;
					}
				}




				
				var failCourseSum = 0;
				var studyGradesSum = document.getElementsByClassName("studyGradesSum")[2];
				var failCourseSumTittleTd = document.createElement("p");
				failCourseSumTittleTd.style.fontSize = "1.5rem";
				failCourseSumTittleTd.style.background = "orange";
				failCourseSumTittleTd.style.borderRadius = "1rem";
				failCourseSumTittleTd.style.lineHeight = "2rem";
				for(var i = 0;i < many;i ++){
					inform.data.failCourse.dataList[i].XF = Number(inform.data.failCourse.dataList[i].XF);
					failCourseSum += inform.data.failCourse.dataList[i].XF;
				}
				var failCourseSumNode = document.createTextNode("学分总和：" + failCourseSum);
				failCourseSumTittleTd.appendChild(failCourseSumNode);
				studyGradesSum.appendChild(failCourseSumTittleTd);




				for(var i = 0;i < many;i ++){
					var overline = document.createElement("tr");
					overline.className = "overline";
					overline.style.background = "rgba(255,165,0,0.2)";
					var failCourseSumWorld = document.createElement("td");
					failCourseSumWorld.className = "reCourseSumWorld";
					var failCourseSumGrade = document.createElement("td");
					failCourseSumGrade.className = "reCourseSumGrade";
					var failCourseSumWorldNode = document.createTextNode(inform.data.failCourse.dataList[i].KCMC);
					var failCourseSumGradeNode = document.createTextNode("学分：" + inform.data.failCourse.dataList[i].XF); 
					failCourseSumWorld.appendChild(failCourseSumWorldNode);
					overline.appendChild(failCourseSumWorld);
					failCourseSumGrade.appendChild(failCourseSumGradeNode);
					overline.appendChild(failCourseSumGrade);
					object[2].appendChild(overline);
				}

				







				//同上
				for(var many = 0;many < 100;many ++){
					if(inform.data.supCourse.dataList[many] == null){
						break;
					}
				}




				
				var supCourseSum = 0;
				var studyGradesSum = document.getElementsByClassName("studyGradesSum")[3];
				var supCourseSumTittleTd = document.createElement("p");
				supCourseSumTittleTd.style.fontSize = "1.5rem";
				supCourseSumTittleTd.style.background = "red";
				supCourseSumTittleTd.style.borderRadius = "1rem";
				supCourseSumTittleTd.style.lineHeight = "2rem";
				for(var i = 0;i < many;i ++){
					inform.data.supCourse.dataList[i].XF = Number(inform.data.supCourse.dataList[i].XF);
					supCourseSum += inform.data.supCourse.dataList[i].XF;
				}
				var supCourseSumNode = document.createTextNode("学分总和：" + supCourseSum);
				supCourseSumTittleTd.appendChild(supCourseSumNode);
				studyGradesSum.appendChild(supCourseSumTittleTd);



			
				for(var i = 0;i < many;i ++){
					var overline = document.createElement("tr");
					overline.className = "overline";
					overline.style.background = "rgba(255,0,0,0.2)";
					var supCourseSumWorld = document.createElement("td");
					supCourseSumWorld.className = "reCourseSumWorld";
					var supCourseSumGrade = document.createElement("td");
					supCourseSumGrade.className = "reCourseSumGrade";
					var supCourseSumWorldNode = document.createTextNode(inform.data.supCourse.dataList[i].KCMC);
					var supCourseSumGradeNode = document.createTextNode("学分：" + inform.data.supCourse.dataList[i].XF); 
					supCourseSumWorld.appendChild(supCourseSumWorldNode);
					overline.appendChild(supCourseSumWorld);
					supCourseSumGrade.appendChild(supCourseSumGradeNode);
					overline.appendChild(supCourseSumGrade);
					object[3].appendChild(overline);
				}









			}
		}
		xhr.send();
