$(document).ready(function() {
	// var canvas = document.getElementById("leCanvas");
	// var context = canvas.getContext("2d");
	// //context.globalCompositeOperation = "source-over"; 
	var deg = 0;

	// var image = new Image();
	// var strSourceBG = "khunghinh.png";
	// image.src = strSourceBG;
	// image.onload = function() {
	// 	context.drawImage(image, 0, 0, canvas.width, canvas.height);
	// };
	$(function() {
		$('.image-editor').cropit({
			imageState: {
				src: 'default.png'
			}
		});
		$('.select-image-btn').click(function() {
			$('.cropit-image-input').click();
		});
		$('#rotate_right').click(function(){ 
			deg += 90;
			if(deg >=360) deg = 0;
			$('#crop-image').css('transform','rotate('+deg+'deg)');
		});
		$('#rotate_left').click(function(){ 
			deg -= 90;
			if(deg <= -360) deg = 0;
			$('#crop-image').css('transform','rotate('+deg+'deg)');
		});
	});
	
	$('.export').click(function() {
		$('body').addClass('on-export').css({
			width: $(window).width(),
			height: $(window).height()
		});
		$('#save-wrap').html($('.image-editor>.column1').clone());
		domtoimage.toBlob( $('#save-wrap')[0] )
		    .then(function (blob) {
		    	var d = new Date();
				var n = d.getTime();
				if( blob ){
					saveAs(blob, 'avatar-'+n+'.png');
				}else{
					alert('Vui lòng thử lại');
				}
				$('#save-wrap').html('');
				$('body').removeClass('on-export').attr('style','');
		    	return false;
		    });
		return false;
	});
	
});