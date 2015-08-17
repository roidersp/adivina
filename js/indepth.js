var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="adivina-quien";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;

var numeroImages2=8;
 var slider_on2=false;
 var intervalID2;
var posicion_slider2=0;

var preguntas=[];
var respuestasletra=[];

var pregunta0_si=[6,3,1,8];
var pregunta0_no=[2,7,9,5,4];
var pregunta1a_si=[4,9,2];
var pregunta1a_no=[5,7];
var pregunta1b_si=[8,6];
var pregunta1b_no=[1,3];
var pregunta2a_si=[5];
var pregunta2a_no=[7];
var pregunta2b_si=[2];
var pregunta2b_no=[4,9];
var pregunta2c_si=[3];
var pregunta2c_no=[1];
var pregunta2d_si=[8];
var pregunta2d_no=[6];
var pregunta3_si=9;
var pregunta3_no=4;

var tecnico="";
var num_preg=0;

$(document).on("click","path",function(){
	alert("test");
});

$(document).on("click", "#indepth_share_twiiter", function(){
	var text = encodeURIComponent("¡"+tecnico+" es mi técnico del Tri! Lo descubrí jugando Adivina Quién");
	var url = encodeURIComponent("http://juanfutbol.com/indepth/adivina-quien");
	window.open("https://twitter.com/share?text="+text+"&url="+url+"&via=juanfutbol","","width=500, height=300");
	}
);

$(document).on("click", "#indepth_share_fb", function(){
	var text = encodeURIComponent("¡"+tecnico+" será técnico del Tri! Lo descubrí jugando Adivina Quién");
	var url = encodeURIComponent("http://juanfutbol.com/indepth/adivina-quien?text="+text);
	window.open("https://www.facebook.com/sharer/sharer.php?u="+url,"","width=500, height=300");

});


$(document).on("click", ".adivina_btn", function(){
	switch(num_preg){
		case 0:
			obj=null;
			if($(this).attr("resp")=="si"){
				obj=pregunta0_si;
				respuestasletra.push("a");
				$("#adivina_preg").html("¿Tu técnico se rasura?");
			}else{
				obj=pregunta0_no;
				respuestasletra.push("b");
				$("#adivina_preg").html("¿Tu técnico tiene pelo?");
			}

			$.each( obj, function( i, val ) {
			  $( "#adivina_tarjeta" + val ).addClass("adivina_tarjetab");
			});

			num_preg++;
			break;
		case 1:
			obj=null;
			if($(this).attr("resp")=="si"){
				if(respuestasletra[0]=="a"){
					obj=pregunta1a_si;
					respuestasletra.push("a");
					$("#adivina_preg").html("¿Tu técnico es violento?");
				}else{
					obj=pregunta1b_si;
					respuestasletra.push("c");
					$("#adivina_preg").html("¿Tu técnico ha dirigido en México?");
				}
			}else{
				if(respuestasletra[0]=="a"){
					obj=pregunta1a_no;
					respuestasletra.push("b");
					$("#adivina_preg").html("¿Tu técnico ha dirigido al América?");
				}else{
					obj=pregunta1b_no;
					respuestasletra.push("d");
					$("#adivina_preg").html("¿Tu técnico ha sido pretendido sin éxito por el Cruz Azul?");
				};
			}
						
			$.each( obj, function( i, val ) {
			  $( "#adivina_tarjeta" + val ).addClass("adivina_tarjetab");
			});
			
			num_preg++;
			break;
		case 2:
		
			obj=null;			
			num_preg=5;
			
			if($(this).attr("resp")=="si"){
				if(respuestasletra[1]=="a"){
					obj=pregunta2a_si;
					tecnico="Caixinha";
					$("#adivina_preg").html("¡"+tecnico+" sería tu técnico del Tri! ");
					$(".adivina_botones").hide();
					$(".indepth_share_card_boton").css("display","table");
					
				}
				
				if(respuestasletra[1]=="b"){
					obj=pregunta2b_si;
					num_preg=3;
					$("#adivina_preg").html("Tu técnico ha fracasado rotundamente con el América");
				}
				
				if(respuestasletra[1]=="c"){
					obj=pregunta2c_si;
					tecnico="Bielsa";
					$("#adivina_preg").html("¡"+tecnico+" sería tu técnico del Tri! ");
					$(".indepth_share_card_boton").css("display","table");
					$(".adivina_botones").hide();
				}
				
				if(respuestasletra[1]=="d"){
					obj=pregunta2d_si;
					tecnico="Sampaoli";
					$("#adivina_preg").html("¡"+tecnico+" sería tu técnico del Tri! ");
					$(".indepth_share_card_boton").css("display","table");
					$(".adivina_botones").hide();
				}
				
			}else{
				
				
				if(respuestasletra[1]=="a"){
					obj=pregunta2a_no;
					tecnico="Vucetich";
					$("#adivina_preg").html("¡"+tecnico+" sería tu técnico del Tri! ");
					$(".indepth_share_card_boton").css("display","table");
					$(".adivina_botones").hide();
					
				}
				
				if(respuestasletra[1]=="b"){
					obj=pregunta2b_no;
					tecnico="Tuca";
					$("#adivina_preg").html("¡"+tecnico+" sería tu técnico del Tri! ");
					$(".indepth_share_card_boton").css("display","table");
					$(".adivina_botones").hide();
					
				}
				
				if(respuestasletra[1]=="c"){
					obj=pregunta2c_no;
					tecnico="Camacho";
					$("#adivina_preg").html("¡"+tecnico+" sería tu técnico del Tri! ");
					$(".indepth_share_card_boton").css("display","table");
					$(".adivina_botones").hide();
				}
				
				if(respuestasletra[1]=="d"){
					obj=pregunta2d_no;
					tecnico="Sabella";
					$("#adivina_preg").html("¡"+tecnico+" sería tu técnico del Tri! ");
					$(".indepth_share_card_boton").css("display","table");
					$(".adivina_botones").hide();
				}
			}
			
			$.each( obj, function( i, val ) {
			  $( "#adivina_tarjeta" + val ).addClass("adivina_tarjetab");
			});
			
			
			break;
		case 3:
			obj=null;
			if($(this).attr("resp")=="si"){
				obj=pregunta3_si;
				tecnico="La Volpe";
				$("#adivina_preg").html("¡"+tecnico+" sería tu técnico del Tri! ");
				$(".indepth_share_card_boton").css("display","table");
				$(".adivina_botones").hide();
			}else{
				obj=pregunta3_no;
				tecnico="Matosas";
				$("#adivina_preg").html("¡"+tecnico+" sería tu técnico del Tri! ");
				$(".indepth_share_card_boton").css("display","table");
				$(".adivina_botones").hide();
			}
			
			  $( "#adivina_tarjeta" + obj ).addClass("adivina_tarjetab");
			
			
			num_preg=5;
			
			break;
		case 5:
		 alert("Juego terminado");
			break;
		
	}
});

$(document).on("click", "#adivina_jugar" ,function(){
		var position = $(".indepth_content_top").position();
		$('html, body').animate({
			scrollTop: position.top
		}, 2000);
	});

var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}


var slider_estados = function(){
	$(document).on("click",".indepth_box_buttom_item",function(){
		var estado=$(this).attr("estado");
		var estado_numero= $(this).attr("num");
		console.log(estado+"-"+estado_numero);
		$("#indepth_"+estado).animate({"margin-left":(-estado_numero*100)+"%"},700);
		$("#"+estado +" .indepth_box_buttom_item").removeClass('active');
		$(this).addClass('active');
	})
}


var startslider2 =function(){
	slider_on2=true;
	console.log("start");
	clearInterval(intervalID2);
	 intervalID2=setInterval(function(){
	 	if(posicion_slider2<numeroImages2-1){
	 		posicion_slider2++;
	 	}else{
	 		posicion_slider2=0;
	 	}
	 	slider_change2();	 		
	 }, 4000);
}
				 
var slider_change2=function(){
	 $(".indepth_docs_content").animate({"margin-left":-posicion_slider2*100+"%"},700);
	 $(".indepth_docs_ball").removeClass('active');
	 $("#indepth_docs_ball_"+posicion_slider2).addClass('active');
	  //$(".indepth_info_team_img").css("border-bottom","none");
	 //$("#indepth_info_team"+posicion_slider2+" .indepth_info_team_img").css("border-bottom","3px solid black");

}
						 
var slider_stop2= function(){
	slider_on2=false;
	clearInterval(intervalID2);
}

var slider_back2=function(){
	 if(posicion_slider2>0){
	            posicion_slider2 = posicion_slider2-1;
	            slider_change2();
	        }
	       slider_stop2();
}

var slider_next=function(){
	 if(numeroImages2-1>posicion_slider2){
            posicion_slider2 = posicion_slider2+1;
            slider_change2();
	        }
	       slider_stop2();
}


$(".indepth_docs_ball").on("click",function(){
	posicion_slider2=$(this).attr("number");
	 slider_change2();
	 slider_stop2();
});

$(".indepth_docs").on("click",function(){
	slider_stop2();
})

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

  var detect_mobile=function(){
	 var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
 };
 
	var mobile=false;
	
	 if (isMobile.Android())
	 {
	 mobile=true;
	 }
	 else if (isMobile.BlackBerry())
	 {
	 mobile=true;
	 }
	 else if (isMobile.iOS())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Opera())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Windows())
	 {
	 mobile=true;
	 }
	 else
	 {
	 mobile=false;
 }
	 return mobile;
 }
 
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};







$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	slider_estados();
	 startslider2();
	var ventana_alto = $(window).height();
	//$("#indepth_break_2").css("height",)
	if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
    {   	
    
			 $('#indepth_cover_view').css("position","absolute");
    }else{
    	$('#indepth_cover').css("height",(ventana_alto-100)+"px");
    	 if(ventana_alto>600){
	 	$('.indepth_break').css("height",ventana_alto+"px");


	 	//$('#indepth_cover .indepth_cover_back_body').css("top",ventana_alto*.60);
 	}
	 //ventana_alto=ventana_alto-(ventana_alto*.15)
	 	//$('.indepth_anuncio_section').css("height",ventana_alto-(ventana_alto*.10)+"px");
    }
    
    if(navigator.platform == 'iPad'){
	    //$("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
	    console.log("ipad")
    }
		loadDisqus($("#indepth_coments"),disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);
});

$(window).on("resize", function(){
	indepth_sizeAdjust(false);
	var ventana_alto = $(window).height();
    	$('#indepth_cover').css("height",(ventana_alto-100)+"px");
    	 if(ventana_alto>600){
	 	$('.indepth_break').css("height",ventana_alto+"px");
	 	//$('#indepth_cover .indepth_cover_back_body').css("top",ventana_alto*.60);
 	}
	 if(navigator.platform == 'iPad'){
	    //$("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
    }
	 if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
    { 
    }else{
    	var ventana_alto = $(window).height();
	 //ventana_alto=ventana_alto-(ventana_alto*.15)
	 	//$('.indepth_anuncio_section').css("height",ventana_alto-(ventana_alto*.10)+"px");
    }
})