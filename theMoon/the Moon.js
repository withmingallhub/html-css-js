var screenW = document.documentElement.clientWidth;
			var screenH = document.documentElement.clientHeight;
			var img = document.getElementsByTagName("img");
			for(var i = 0;i < 100;i++){
				var x = parseInt(Math.random()*screenW);
				var y = parseInt(Math.random()*screenH);
				img[i].style.top = y + 'px';
				img[i].style.left = x + 'px';


				var scale = Math.random()*1.25;
				img[i].style.transform = 'scale(' + scale + ',' + scale + ')';


				var rate =Math.random()*1.25;
				img[i].style.animationDelay = rate + 's';

			}
