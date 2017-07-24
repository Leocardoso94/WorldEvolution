var posicao = true;
var resize = false;
var ypos, servicospos, quemsomospos, equipepos, clientespos, contatopos, image,intervalo;

function parallex () {
   ypos = window.pageYOffset; 
   servicospos = $('#servicos').offset();
   quemsomospos = $('#quemsomos').offset();
   equipepos = $('#equipe').offset();
   clientespos = $('#clientes').offset();
   contatopos = $('#contato').offset();

   image = document.getElementById('parallax');

   if (ypos < quemsomospos.top) {
   image.style.top = ypos + 'px';
}



}
window.addEventListener('scroll',parallex);

console.log("%c　　　　　/)  ─―  ヘ        \n　　　＿／　　　　　 ＼     \n　 ／　　　　●　　　● 丶    \n　｜　　　　　　　▼　  |  \n　｜　　　　　　　亠　ノ  \n　 U￣U￣￣￣￣U￣         \n\nSou Xela, a Capivara e te guiarei pelo site.\nNão, não sou um gato. Pessoa de pouca fé.","background:black; color:yellow; line-height:1; font-size:20px; ");



$(function(){
   

//menu responsivo

   $('.descermenu').click(function() {
      $( ".vertical" ).slideToggle( "slow" );
   });
//fim menu responsivo

//Menu de acordo com a divisão

   $(window).scroll(function(){

     if(ypos < quemsomospos.top ){
         $('.desliza').removeClass('ativa');
         $('a[href="#home"]').addClass('ativa');
      }

      if(ypos>=(quemsomospos.top-45) && ypos < servicospos.top ){
         $('.desliza').removeClass('ativa');
         $('a[href="#quemsomos"]').addClass('ativa');
      }

      if(ypos>=(servicospos.top-45) && ypos < equipepos.top){
         $('.desliza').removeClass('ativa');
         $('a[href="#servicos"]').addClass('ativa');
      }

      if(ypos>=(equipepos.top-45) && ypos < clientespos.top){
         $('.desliza').removeClass('ativa');
         $('a[href="#equipe"]').addClass('ativa');
      }

      if(ypos>=(clientespos.top-45) && ypos < contatopos.top){
         $('.desliza').removeClass('ativa');
         $('a[href="#clientes"]').addClass('ativa');
      }

      if(ypos>=(contatopos.top-45)){
         $('.desliza').removeClass('ativa');
         $('a[href="#contato"]').addClass('ativa');
      }

   });

   //Fim menu de acordo com a divisão

   //

	$('.desliza').click(function(){

      $('.vertical').slideUp('slow');
      $('.tabletdentro').attr('src', 'img/Clientes/inicial.png');

      
      $('html, body').animate({
             scrollTop: $( $(this).attr('href') ).offset().top
         }, 1000);
      
         return false;         
	});

   $('.fechar').click(function(){


      $('#servicos img').removeClass('pulse-slow');

      $('.txt').hide();

      $('.pfecha').hide();

      $('.imagem').hide();

      $('#servicos h1').text('Serviços');

      if (window.innerWidth > 1100) {

      $('.web').animate({
         width: '180px',
         height: '180px'
      });

      $('.primeiro').delay(0).animate({
                              
      });

      $('.desen').delay(300).animate({
         width: '180px',
         height: '180px'
      });

      $('.segundo').delay(300).animate({
               'margin-left': '16em'   
         });
         $('.hard').delay(600).animate({
         width: '180px',
         height: '180px'
      });

      $('.terceiro').delay(600).animate({
            'margin-top': '150px',
         'margin-left': '16em'                
         });
         $('.redes').delay(900).animate({
         width: '180px',
         height: '180px'
      });

         $('.quarto').delay(900).animate({
            'margin-top': '150px',
         'margin-left': '16em'                    
         });

          $('.fechar').fadeOut('slow');

         posicao = true;
      }
   });

	$(window).scroll(function () {
		if (ypos>=(quemsomospos.top-45)) {
			$('#menu').addClass('fixo');
		}
		else{
			$('#menu').removeClass('fixo');
		}

	});
	
   $('#servicos figure').click(function(){

      $('#servicos h3').fadeOut('1000');

      var texto = $(this).attr('title');

      if($(window).width() < 1100){

         $('#servicos h1').text(texto);

          $('#panel2').animate({ 
            left: "0%"});

         $('html, body').animate({
             scrollTop: $('#servicos').offset().top
         }, 1000);

         if ($(this).attr('class') == 'primeiro') {
             $('#panel2 p').html('Desenvolvemos websites de acordo com seu gosto!<br><br>Através de uma pesquisa sobre sua empresa, elaboramos nossas ideias, para obtermos sucesso na criação do Site.<br><br>Este Serviço é completo, desde a criação, quanto a divulgação do site na Internet.<br><br>Nosso intuito é criar um site com design moderno e funcional, tornando o site bastante agradável de se acessar.<br><br>Se sua empresa já obtém um site, e deseja dar uma “recauchutada” nele, nossa equipe irá remodelar seu site para que fique do jeito que você desejar.<br><br>Enfim, nosso serviço não acaba na entrega do site, iremos dar as orientações necessárias para que você consiga administrá-lo tranquilamente, ou podemos administrá-lo para você.');
         }
         if ($(this).attr('class') == 'segundo') {
             $('#panel2 p').html('As nossas soluções estão entre sistemas básicos até os mais complexos. Avaliaremos a necessidade do nosso cliente com diversas ferramentas que garantem compreender o mais próximo possível o uso e objetivo da aplicação do software á empresa. <br><br>      Desenvolvemos com a ferramenta de linguagem de programação C#(lê-se Csharp) e o banco de dados (SqlServer) que juntos permitem alcançar grandes resultados ao seu projeto e/ou empreendimento. <br><br>      Cada cliente é uma realidade. No entanto, é possível afirmar que comumente a utilização do software retornam em: otimização e automização de todos os processos da empresa e portanto, mais produtividade.');
         }

         if ($(this).attr('class') == 'terceiro') {
             $('#panel2 p').html('Para o bom funcionamento de uma empresa é imprescindível o uso de computadores e fundamental componentes de qualidade para as aplicações da sua empresa.      <br><br>Realizamos uma "triagem", identificamos a situação problema que por vezes não está relacionado a nossa formação mas que pode ser apurado por nossos especialistas e encaminhado aos profissionais indicados. <br><br>      Por fim, realizamos a instalação, manutenção, atualização de todo o hardware, ou seja, o físico da sua empresa e o mais importante: adotando todas as boas práticas de um bom especialista nesta área.       </p>');
         }

         if ($(this).attr('class') == 'quarto') {
             $('#panel2 p').html('Informatizamos seu escritório! <br><br>Se o seu escritório precisa que as maquinas “conversem entre si” e tenha alguém para administrar essa “conversa”, você veio ao site certo!<br><br>Projetamos uma rede bem estruturada, de acordo com todas as normas técnicas, visando o desempenho da rede, usamos equipamentos com melhor custo-benefício, visando o desempenho do seu bolso.<br><br>Iremos também configurar seus servidores, de acordo com seu desejo, usamos vários serviços para controlar os arquivos da rede, e também os usuários.<br><br>Enfim, daremos todo o treinamento necessário para que você possa manter sua rede funcionando perfeitamente.<br><br>Conte conosco!');
         }


      }

if($(window).width() > 1100){

      $('.fechar').fadeIn('slow');

      $('#servicos img').removeClass('pulse-slow');      

	  $(this).find('img').addClass('pulse-slow');

	if (posicao==true) {
		$('.web').animate({
			width: '50px',
			height: '50px'
		});
   		$('.primeiro').delay(0).animate({
  							 			
   		});
   		$('.desen').delay(300).animate({
			width: '50px',
			height: '50px'
		});
   		$('.segundo').delay(300).animate({
   				'margin-left': '40px'	
   		});
   		$('.hard').delay(600).animate({
			width: '50px',
			height: '50px'
		});
   		$('.terceiro').delay(600).animate({
   			'margin-top': '250px',
  			'margin-left': '-273px'  		 			
   		});
   		$('.redes').delay(900).animate({
			width: '50px',
			height: '50px'
		});
   		$('.quarto').delay(900).animate({
   			'margin-top': '250px',
  			'margin-left': '-110px'    		 			
   		});
   		}
   		posicao = false;
   		$('#servicos h1').fadeOut('slow',function(){
   			$('#servicos h1').text(texto).fadeIn('slow').css({
   				top: '300px'
   				
   			});
   		});
   		if (texto=="Web"){

            $('.txt').hide('slow');

   			$('.imagem').fadeOut('slow', function() {
   				$(this).attr('src', 'img/webs.png').delay(700).fadeIn();
   			});

   			$('.webtxt').delay(700).fadeIn('slow');
   		}
   		if (texto=="Redes"){

            $('.txt').hide('slow');

   			$('.imagem').fadeOut('slow', function() {
   				$(this).attr('src', 'img/redesserv.png').delay(700).fadeIn();
   			});

            $('.redestxt').delay(700).fadeIn('slow');
   		}
   		if (texto=="Hardware"){

            $('.txt').hide('slow');

   			$('.imagem').fadeOut('slow', function() {
   				$(this).attr('src', 'img/hards.png').delay(700).fadeIn();
   			});

            $('.hardtxt').delay(700).fadeIn('slow');
   		}
   		if (texto=="Desenvolvimento"){
            $('.txt').hide('slow');

   			$('.imagem').fadeOut('slow', function() {
   				$(this).attr('src', 'img/desenvs.png').delay(700).fadeIn();
   			});

            $('.desenvtxt').delay(700).fadeIn('slow');
   		}  

         $('.pfecha').fadeIn('slow');	  		
      }
	});

   $('.close').click(function(event) {
       $('#panel, #panel2').animate({ 
            left: "100%"});
       $('#servicos h1').text('Serviços');
   });

$( window ).resize(function() {

  if($(window).width()<=550)
  {
     $('.segundo').css({
               'margin-left': '0em'   
         });
$('.terceiro').css({
            'margin-top': '3em',
         'margin-left': '0em'                
         });
$('.quarto').css({
            'margin-top': '3em',
         'margin-left': '0em'                    
         });
  }

   if ($(window).width() <= 1100 && $(window).width() > 550) {

      resize =true;

       $('#servicos img').removeClass('pulse-slow');

      $('#servicos .txt, .imagem, .pfecha, .fechar').css({
        'display': 'none'
      });

      $('.web').css({
         width: '180px',
         height: '180px'
      });

      $('.primeiro').css({
                              
      });

      $('.desen').css({
         width: '180px',
         height: '180px'
      });

      $('.segundo').css({
               'margin-left': '2.5em'   
         });
         $('.hard').css({
         width: '180px',
         height: '180px'
      });

      $('.terceiro').css({
            'margin-top': '3em',
         'margin-left': '2.5em'                
         });
         $('.redes').css({
         width: '180px',
         height: '180px'
      });

         $('.quarto').css({
            'margin-top': '3em',
         'margin-left': '2.5em'                    
         });

   }
  if ($(window).width() > 1100) {

if (resize = true) {
         resize = false;

         posicao = true;
         $('.segundo').css({
               'margin-left': '16em'   
         });
         $('.terceiro').css({
            'margin-top': '150px',
         'margin-left': '16em'                
         });
         $('.quarto').css({
            'margin-top': '150px',
         'margin-left': '16em'                    
         });
   }
}

});
   
   $('#equipe figure').click(function(){

     /* $('#equipe figure').css('opacity', '0.6');
      $(this).css('opacity', '1');
      $('*').removeClass('destaque');*/


       $('#equipe figure').removeClass('dance');
       clearInterval(intervalo);

        if ($(window).width() > 1100) {
         
         $('#panel').animate({ 
            left: "0%"});
         $('html, body').animate({
             scrollTop: ($('.monitor').offset().top -20)
         }, 1000);
        }
      

      $('#equipe article p').fadeOut(1);
      $('*').removeClass('click');
      $('#equipe ul').fadeOut(1);


      if ($(window).width() <= 1100) {
         
         $('#panel').animate({ 
            left: "0%"});
         $('html, body').animate({
             scrollTop: $('#equipe').offset().top
         }, 1000);

      
       if ($(this).attr('class') == 'leo') {
      $('#panel p').html('<strong>Leonardo</strong><br><br>Paulista, 20 anos, amante da Tecnologia. <br><br> Sempre buscando coisas novas para aprender. Um pouco preguiçoso as vezes mas sempre busca resolver os problemas de uma maneira criativa.');
      }
      if ($(this).attr('class') == 'victor') {
      $('#panel p').html('<strong>Vitor</strong><br><br>Um tanto admirador pelo mundo da tecnologia. Sua meta é estar sempre estudando a fim de encontrar a área de sua carreira profissional, que pode ser T.I. <br><br> Paulista, tem 19 anos e busca, assim como seus colegas, sua primeira oportunidade no mercado de T.I. ');
      }
      if ($(this).attr('class') == 'benja') {
      $('#panel p').html('<strong>Benjamin</strong><br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quam delectus, ex doloremque deleniti debitis. Ut, repellendus sunt. Dolore fuga eaque, quos provident ex iste perferendis, expedita voluptatibus temporibus repellendus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quam delectus, ex doloremqusdasaebitissdsctus, ex doloremque deleniti debitis. Ut, repellendus sunt. Dolore fuga eaque, quos provident ex iste perferendis, expedita voluptatibus temporibus repellendus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quam delectus, ex doloremque deleniti debitis. Ut, repellendus sunt. Dolore fuga eaque, quos provident ex iste perferendis, expedita voluptatibus temporibus repellendus.');
      }
      if ($(this).attr('class') == 'andre') {
      $('#panel p').html('<strong>André</strong><br><br>André Willian Rocha dos Santos, estudante de análise e desenvolvimento de sistemas pela Unifieo e técnico em informática pelo Senac são Paulo. <br><br> Uma pessoa determinada e muito esforçada. <br><br> Adora aprender coisas novas e estar ligado no mundo da tecnologia.');
      }
   }
      
      if ($(this).attr('class') == 'benja') {

         $(this).addClass('dance');

       
         $('.benjah').fadeIn(1000).addClass('click');         

         $('.benjatxt').fadeIn(1000).addClass('click');
      }

       if ($(this).attr('class') == 'andre') {

         $(this).addClass('dance');
         $('.andreh').fadeIn(1000).addClass('click');         
         $('.andretxt').addClass('click').fadeIn(1000);
      }

      if ($(this).attr('class') == 'leo') {

          $(this).addClass('dance');
          $('.leoh').fadeIn(1000).addClass('click'); 
         $('.leotxt').fadeIn(1000).addClass('click');
      }

      if ($(this).attr('class') == 'victor') {

          $(this).addClass('dance');
          $('.victorh').fadeIn(1000).addClass('click');              

         $('.victortxt').fadeIn(1000).addClass('click');
      }
          intervalo = setInterval(slidetxt,30000);

   });

    intervalo = setInterval(slidetxt,30000);

   $('#equipe article p:eq(0), article ul:eq(0)').addClass('click');


   function slidetxt(){


      if ($('.click').next().size()) {

         $('.click').fadeOut(1).removeClass('click').next().fadeIn('slow').addClass('click');
      }
      else{

         $('.click').fadeOut(1).removeClass('click');
         $('*').removeClass('click');
         
         $('#equipe article p:eq(0), article ul:eq(0)').fadeIn(1000).addClass('click');

      }    

   
   }

   $('#equipe li').mouseover(function(){
      $(this).css('background-color', '#EEEEEE').find('.icon').animate({'letter-spacing': '5px'},50);
   }).mouseleave(function() {
      $(this).css('background-color', '').find('.icon').animate({'letter-spacing': '0px'},50);
   });

  var quadrado = $('#clientes section').offset();
  var quadradoL = $('#clientes section').width();
  var quadradoA = $('#clientes section').height();
  var bolha;
  //var par = $('.par');
  //var impar = $('.impar');

  var x=4;     

 

 $('.bolha').click(function() {
   $('.bolha').css('opacity', '0.5');
    $(this).css('opacity', '1');
 });



$('.bolha img').click(function() {

   if ($(this).attr('class') == 'jus') {
      $('.tabletdentro').attr('src', 'img/Clientes/jusservicos.jpg');

   }
   if ($(this).attr('class') == 'cultura') {
      $('.tabletdentro').attr('src', 'img/Clientes/livrariacultura.jpg');
     
   }
    if ($(this).attr('class') == 'carrefour') {
      $('.tabletdentro').attr('src', 'img/Clientes/carrefourservicos.jpg');
     
   }

    if ($(this).attr('class') == 'nestle') {
      $('.tabletdentro').attr('src', 'img/Clientes/nestlefundo.jpg');
     
   }
    if ($(this).attr('class') == 'magazinecirculo') {
      $('.tabletdentro').attr('src', 'img/Clientes/magazinefundo.jpg');
     
   }    if ($(this).attr('class') == 'marcocirculo') {
      $('.tabletdentro').attr('src', 'img/Clientes/marcolucciofundo.jpg');
     
   }
   if ($(this).attr('class') == 'habibscirculo') {
      $('.tabletdentro').attr('src', 'img/Clientes/habibsfundo.jpg');
     
   }

   if ($(this).attr('class') == 'mitsubishi') {
      $('.tabletdentro').attr('src', 'img/Clientes/mitsubishfundo.jpg');
     
   }

   if ($(this).attr('class') == 'blackb') {
      $('.tabletdentro').attr('src', 'img/Clientes/blackberryfundo.jpeg');
     
   }

   if ($(this).attr('class') == 't2p') {
      $('.tabletdentro').attr('src', 'img/Clientes/t2p.jpg');
     
   }


   if ($(window).width()<1100) {

      $('html, body').animate({
             scrollTop: ($('.tabletdentro').offset().top - 100)
         }, 1000);
   }


  
});

$('.soc-linkedin').click(function(event) {
   if ($('.leotxt').attr('class') =='leotxt click' ) {
      $(this).attr('target', '_blank');
      $(this).attr('href', 'https://br.linkedin.com/in/leocardoso94');
   }

   if ($('.andretxt').attr('class') =='andretxt click' ) {
      $(this).attr('target', '_blank');
      $(this).attr('href', 'https://br.linkedin.com/pub/andré-willian-rocha/b0/b97/563');
   }

   if ($('.victortxt').attr('class') =='victortxt click' ) {
      $(this).attr('target', '_blank');
      $(this).attr('href', 'https://br.linkedin.com/pub/vitor-hugo/b5/884/810');
   }

   if ($('.benjatxt').attr('class') =='benjatxt click' ) {

      $(this).attr('href', 'javascript:alert("Ele não tem Linkedin rs! :(")');
         $(this).attr('target', '_self');

   }


});

$('.voce').click(function(event) {
   $('html, body').animate({
             scrollTop: $('#contato').offset().top 
   }, 1000);
});



});

