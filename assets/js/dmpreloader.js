var timeout1;
var loading;

var myArray = new Array(
	Array(
		Array(1,100),
		Array(3,160),
		Array(7,340),
		Array(10,750),
		Array(13,900),
		Array(19,1100),
		Array(43,1400),
		Array(69,1650),
		Array(74,2200),
		Array(83,2500),
		Array(91,2900),
		Array(98,3600)
	),
	Array(
		Array(7,100),
		Array(11,160),
		Array(13,340),
		Array(19,750),
		Array(22,900),
		Array(26,1100),
		Array(34,1400),
		Array(41,1650),
		Array(49,2200),
		Array(55,2500),
		Array(62,2900),
		Array(74,3600)
	),
	Array(
		Array(2,100),
		Array(9,160),
		Array(10,340),
		Array(14,750),
		Array(20,900),
		Array(27,1100),
		Array(33,1400),
		Array(35,1650),
		Array(47,2200),
		Array(52,2500),
		Array(67,2900),
		Array(81,3600)
	),
	Array(
		Array(4,100),
		Array(11,160),
		Array(19,340),
		Array(22,750),
		Array(34,900),
		Array(40,1100),
		Array(41,1400),
		Array(48,1650),
		Array(58,2200),
		Array(67,2500),
		Array(79,2900),
		Array(91,3600)
	),
	Array(
		Array(9,100),
		Array(10,160),
		Array(17,340),
		Array(26,750),
		Array(35,900),
		Array(48,1100),
		Array(53,1400),
		Array(55,1650),
		Array(62,2200),
		Array(66,2500),
		Array(69,3600),
		Array(71,4600)
	)
);

var percentage = myArray[Math.floor(Math.random() * myArray.length)];
	
$(document).ready(function(e){
	loading = true;
	start_loading_handler();
});

$(window).load(function(e){
	loading = false;
	set_loaded(100);
	end_loading_handler();
});

function start_loading_handler(){	
	$.each(percentage, function( index, value ) {
		timeout1 = setTimeout(
			function(){
				if(loading==true){
					//loading data
					set_loaded(value[0]);
				}
			},value[1]
		);
	});
	
}

function end_loading_handler(){
	$('#preloader .loading').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
}

function set_loaded(percent){
	$('#preloader .loading .text').html(percent+'%');
	$('#preloader .loading .percentage').css('width',percent+'%');
}