var activeID;
var UA = navigator.userAgent,
iOS = !!(UA.match(/iPad|iPhone/i));



function initText(){
	
	if (iOS) {
	   $(document).on('touchstart','.edit-text', function (e) {
	      // e.target.click();
	      //$(document).on('click','.edit-text',function(){
			//$("#log").prepend('<div>click</div>');
			//$(".edit-text").removeClass('active-text');
			//$(".edit-text").attr('contenteditable',false);
			
			$(this).attr('contenteditable',true);
			$(this).addClass('active-text');
			
			var fontSize = $(this).attr('data-size');
			var fontBold = $(this).attr('data-bold');
			var fontItalic = $(this).attr('data-italic');
			activeID = $(this).attr('data-id');
			
			$("#delete-"+activeID).show();
			//$("#edit-text-"+activeID).draggable({
			$("#text-"+activeID).draggable({
				containment: ".pors-editable-box"
			});
			$(this).css('font-size',fontSize);
			return false;
	   });
	}else{
		
		$(document).on('click','.edit-text',function(){
		//$("#log").prepend('<div>click</div>');
		//$(".edit-text").removeClass('active-text');
		//$(".edit-text").attr('contenteditable',false);
		
		$(this).attr('contenteditable',true);
		$(this).addClass('active-text');
		
		var fontSize = $(this).attr('data-size');
		var fontBold = $(this).attr('data-bold');
		var fontItalic = $(this).attr('data-italic');
		activeID = $(this).attr('data-id');

		$("#delete-"+activeID).show();
		//$("#edit-text-"+activeID).draggable({
		$("#text-"+activeID).draggable({
			containment: ".pors-editable-box"
		});
		$(this).css('font-size',fontSize);
		return false;
	});
		
	}

	


	
	
	$(document).on('click','.pors-editable-box',function(){
		$("#log").prepend('<div>WOw</div>');
		removeOtherActiveText();
		return false;
	});
	
	$(document).on('click','.btt-set-bold',function(){
		console.log('set bold');
		$("#log").prepend('<div>Bold</div>');
		setBold(activeID);
		return false;
	});
	
}

function clickToEditAndDrag(){
	
}

function removeOtherActiveText(){
	$(".edit-text").removeClass('active-text');
	$(".edit-text").attr('contenteditable',false);
	$("#move-"+activeID).hide();
	$("#delete-"+activeID).hide();
	$("#edit-text-"+activeID).draggable( "destroy" );

}

function setBold(target){

	
	target = '#text-'+target;
	var currentState = $(target).attr('data-bold');
	console.log(target);

	if(currentState == 'true'){
		$(target).removeClass('text-bold');
		$(target).attr('data-bold','false');
	}else{
		$(target).addClass('text-bold');
		$(target).attr('data-bold','true');
	}

}