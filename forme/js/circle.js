// 圆形进度条
$(function(){

	$('#html').radialIndicator({
				radius:70,
				barColor: '#0cc',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj1 = $('#html').data('radialIndicator');
			radialObj1.animate(80);

			$('#css').radialIndicator({
				radius:70,
				barColor: '#0cc',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj2 = $('#css').data('radialIndicator');
			radialObj2.animate(80);
			$('#javascript').radialIndicator({
				radius:70,
				barColor: '#0cc',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj3 = $('#javascript').data('radialIndicator');
			radialObj3.animate(70);
			$('#jquery').radialIndicator({
				radius:70,
				barColor: '#0cc',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj4 = $('#jquery').data('radialIndicator');
			radialObj4.animate(70);
			$('#bootstrap').radialIndicator({
				radius:70,
				barColor: '#0cc',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj5 = $('#bootstrap').data('radialIndicator');
			radialObj5.animate(60);
			$('#MySql').radialIndicator({
				radius:70,
				barColor: '#0cc',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj5 = $('#MySql').data('radialIndicator');
			radialObj5.animate(60);
			$('#Oracle').radialIndicator({
				radius:70,
				barColor: '#0cc',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj6 = $('#Oracle').data('radialIndicator');
			radialObj6.animate(70);
			$('#ps').radialIndicator({
				radius:70,
				barColor: '#0cc',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj7 = $('#ps').data('radialIndicator');
			radialObj7.animate(30);
			$('#SSM').radialIndicator({
				radius:70,
				barColor: '#0cc',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj8 = $('#SSM').data('radialIndicator');
			radialObj8.animate(60);

	
})