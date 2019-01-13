//alert($(window).width());
var activeID;
var UA = navigator.userAgent,
iOS = !!(UA.match(/iPad|iPhone/i));
var totalText = 1;

var logR = 1;

function init(){
	dragText();
	editTextSize();
	unselectAnyText();
	addText();
	setFontBold();
	setFontItalic();
	savePicture();
	deleteText();
	goBackEditImage();
}

function goBackEditImage(){
	if(iOS){
		$(document).on('touchstart','#btt-edit-picture',function(){
			
			$(".pors-picture").fadeOut('slow',function(){
					$(".pors-container").fadeIn();
				});
			return false;
		});
	}
}

function deleteText(){
	if(iOS){
		$(document).on('touchstart','#icn-font-delete',function(){
			$("#text-"+activeID).remove();
			$(".text-tools").hide();
			$(".editable-tools").show();
			return false;
		});
	}else{
		$(document).on('click','#icn-font-delete',function(){
			$("#text-"+activeID).remove();
			$(".text-tools").hide();
			$(".editable-tools").show();
			return false;
		});
	}
}

function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}

function savePicture(){
	if(iOS){
		$(document).on('touchstart','#savePicture',function(){
			html2canvas($('.pors-editable-box')[0],{
				scale:4
			}).then(function(canvas) {
				var dataURL = canvas.toDataURL('image/png');
				$("#mirror").attr("src", dataURL);
				$(".pors-container").fadeOut('slow',function(){
					$(".pors-picture").fadeIn();
				});
				
			});
			return false;
		  });
	}else{
		$(document).on('click','#savePicture',function(){
			html2canvas(document.querySelector('.pors-editable-box')).then(function(canvas) {
				saveAs(canvas.toDataURL(), 'cover.png');
			});
			return false;
		  });
	}
}

function setFontItalic(){
	if(iOS){
		$(document).on('touchstart','#icn-font-italic',function(){
			var bold = $("#text-"+activeID).attr('data-italic');
			if(bold == 'false'){
				$("#text-"+activeID).attr('data-italic','true');
				$("#text-"+activeID).addClass('text-italic');
			}else{
				$("#text-"+activeID).attr('data-italic','false');
				$("#text-"+activeID).removeClass('text-italic');
			}
			return false;
		});
	}else{
		$(document).on('click','#icn-font-italic',function(){
			var bold = $("#text-"+activeID).attr('data-italic');
			if(bold == 'false'){
				$("#text-"+activeID).attr('data-italic','true');
				$("#text-"+activeID).addClass('text-italic');
			}else{
				$("#text-"+activeID).attr('data-italic','false');
				$("#text-"+activeID).removeClass('text-italic');
			}
			return false;
		});
	}
}

function setFontBold(){
	if(iOS){
		$(document).on('touchstart','#icn-font-bold',function(){
			var bold = $("#text-"+activeID).attr('data-bold');
			if(bold == 'false'){
				$("#text-"+activeID).attr('data-bold','true');
				$("#text-"+activeID).css('font-family','sukhumvit_setsemi_bold');
			}else{
				$("#text-"+activeID).attr('data-bold','false');
				$("#text-"+activeID).css('font-family','sukhumvit_setmedium');
			}
			return false;
		});
	}else{
		$(document).on('click','#icn-font-bold',function(){
			var bold = $("#text-"+activeID).attr('data-bold');
			if(bold == 'false'){
				$("#text-"+activeID).attr('data-bold','true');
				$("#text-"+activeID).css('font-family','sukhumvit_setsemi_bold');
			}else{
				$("#text-"+activeID).attr('data-bold','false');
				$("#text-"+activeID).css('font-family','sukhumvit_setmedium');
			}
			return false;
		});
	}
}

function addText(){
	if(iOS){
		$(document).on('touchstart','#btt-add-text',function(){
			totalText++;
			
			var format = '<div class="edit-text" contenteditable="false" id="text-'+totalText+'" data-id="'+totalText
			+'" data-stage="0" data-size="36" data-size-m="14" data-bold="false" data-italic="false">'+
			
			'ข้อความ..</div>';
			
			$(".pors-editable-box").append(format);
			
			return false;
		});
	}else{
		$(document).on('click','#btt-add-text',function(){
			totalText++;
			
			var format = '<div class="edit-text" contenteditable="false" id="text-'+totalText+'" data-id="'+totalText
			+'" data-stage="0" data-size="36" data-size-m="14" data-bold="false" data-italic="false">'+
			
			'ข้อความ..</div>';
			
			$(".pors-editable-box").append(format);
			
			return false;
		});
	}
}

function editTextSize(){
	if(iOS){
	
		$(document).on('touchstart','#icn-font-increase',function(e){
			var size = $("#text-"+activeID).attr('data-size-m');
			size = parseInt(size);
			size = size+4;
			$("#show-text-size").html(size);
			$("#text-"+activeID).attr('data-size-m',size);
			$("#text-"+activeID).css('font-size',size+'px');
			$("#log").prepend('<div>'+logR+' : Font size : '+size+'</div>');
			logR++;
			return false;
		});
		
		
		$(document).on('touchstart','#icn-font-decrease',function(e){
			var size = $("#text-"+activeID).attr('data-size-m');
			size = parseInt(size);
			size = size-4;
				$("#show-text-size").html(size);
			$("#text-"+activeID).attr('data-size-m',size);
			$("#text-"+activeID).css('font-size',size+'px');
			$("#log").prepend('<div>'+logR+' : Font size : '+size+'</div>');
			logR++;
			return false;
		});
		
	}else{
		$(document).on('click','#icn-font-increase',function(){
			var size = $("#text-"+activeID).attr('data-size');
			size = parseInt(size);
			size = size+4;
				$("#show-text-size").html(size);
			$("#text-"+activeID).attr('data-size',size);
			$("#text-"+activeID).css('font-size',size+'px');
			$("#log").prepend('<div>'+logR+' : Font size : '+size+'</div>');
			logR++;
			return false;
		});
		
		
		$(document).on('click','#icn-font-decrease',function(){
			var size = $("#text-"+activeID).attr('data-size');
			size = parseInt(size);
			size = size-4;
				$("#show-text-size").html(size);
			$("#text-"+activeID).attr('data-size',size);
			$("#text-"+activeID).css('font-size',size+'px');
			$("#log").prepend('<div>'+logR+' : Font size : '+size+'</div>');
			logR++;
			return false;
		});
	}
}

function dragText(){
	if (iOS) {
	   $(document).on('touchstart','.edit-text', function (e) {	
		   	var stage = $(this).attr('data-stage');
		   	if(stage == '0'){
		   		$(this).attr('data-stage','1');
				$(this).addClass('active-drag');
				activeID = $(this).attr('data-id');
				
				$("#text-"+activeID).draggable({
					containment: ".pors-editable-box"
				});
				
				$(".editable-tools").hide();
				var textSize = $("#text-"+activeID).attr('data-size-m');
				$("#show-text-size").html(textSize);
				
				$(".text-tools").show();
				
				$("#log").prepend('<div>'+logR+' : touch : '+stage+' , active ID : '+activeID+'</div>');
				logR++;
		   	}else if(stage =='1'){
			   	$("#log").prepend('<div>'+logR+' : touch : '+stage+'</div>');
				logR++;
		   	}
	   		return false;
		 });
		 
		 
		 
		 $(document).on('touchstart','#icn-edit-text',function(e){
		 	 if ($("#text-"+activeID).data('uiDraggable')) {
				$("#text-"+activeID).draggable( "destroy" );
			}

			$("#text-"+activeID).removeClass('active-drag');
			$("#text-"+activeID).addClass('active-text');
			$("#text-"+activeID).attr('contenteditable',true);
		 	return false;
		 });
		 
		
	}else{
		$(document).on('click','.edit-text',function(){
			$(".edit-text").removeClass('active-text');
			$(".edit-text").removeClass('active-drag');
			var stage = $(this).attr('data-stage');
			
			if(stage == '0'){
				$(this).attr('data-stage','1');
				$(this).addClass('active-drag');
				activeID = $(this).attr('data-id');
				$("#text-"+activeID).draggable({
					containment: ".pors-editable-box"
				});
				
				$(".editable-tools").hide();
				var textSize = $("#text-"+activeID).attr('data-size');
				$("#show-text-size").html(textSize);
				$(".text-tools").show();
				$("#log").prepend('<div>'+logR+' : active ID : '+activeID+'</div>');
				logR++;
				console.log('0');
			}else if(stage == '1'){
				$(this).attr('data-stage','2');
				$(this).removeClass('active-drag');
				$(this).addClass('active-text');
				$(this).attr('contenteditable',true);
				$(this).draggable( "destroy" );
				
				console.log('1');
			}else{
				
				$(this).attr('data-stage','2');
				$(this).removeClass('active-drag');
				$(this).addClass('active-text');
				$(this).attr('contenteditable',true);
				if ($(this).data('uiDraggable')) {
					$(this).draggable( "destroy" );
				}
				
			}
			
			/*
			$(this).attr('contenteditable',true);
			activeID = $(this).attr('data-id');
			$("#text-"+activeID).draggable({
					containment: ".pors-editable-box"
				});
		*/
			return false;
		});
	}
}

function unselectAnyText(){
if (iOS) {
	$(document).on('touchstart','.pors-editable-box', function (e) {
		$(".edit-text").removeClass('active-text');
		$(".edit-text").removeClass('active-drag');
		$(".edit-text").attr('contenteditable',false);
		$(".edit-text").attr('data-stage','0');
		if ($("#text-"+activeID).data('uiDraggable')) {
			$("#text-"+activeID).draggable( "destroy" );
		}
		$(".text-tools").hide();
		$(".editable-tools").show();
		return false;
	});
}else{
	$(document).on('click','.pors-editable-box',function(){
		console.log('aaa');
		$(".edit-text").removeClass('active-text');
		$(".edit-text").removeClass('active-drag');
		$(".edit-text").attr('contenteditable',false);
		$(".edit-text").attr('data-stage','0');
		if ($("#text-"+activeID).data('uiDraggable')) {
			$("#text-"+activeID).draggable( "destroy" );
		}
		$(".text-tools").hide();
		$(".editable-tools").show();
		return false;
	});
}
}