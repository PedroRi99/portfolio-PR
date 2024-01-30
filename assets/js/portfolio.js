$('#collapse-navbar').on('show.bs.collapse', function() {
	$('.topCasaFina-banner').css('transform', 'translate(-50%, 10%');

});

$('#collapse-navbar').on('hide.bs.collapse', function() {
	$('.topCasaFina-banner').css('transform', 'translate(-50%, -50%');
});

$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('#formulario').submit(function(event){
        if($('#contato-nome').val() === '' || $('#contato-email').val() === '' || $('#contato-assunto').val() === ''){
            event.preventDefault();
        }else{
            $('#btn-click').css({
                "display": "none"
            });
        }

        if($('#contato-nome').val() === ''){
            $('#contato-nome').css({
                "border": "2px solid red"
            });
        }else{
            $('#contato-nome').css({
                "border": ""
            });
        }

        if($('#contato-email').val() === ''){
            $('#contato-email').css({
                "border": "2px solid red"
            });
        }else{
            $('#contato-email').css({
                "border": ""
            });
        }

        if($('#contato-assunto').val() === ''){
            $('#contato-assunto').css({
                "border": "2px solid red"
            });
        }else{
            $('#contato-assunto').css({
                "border": ""
            });
        }
    });
});

function ativaLetra(titulo){
    const arrTexto = titulo.innerHTML.split('');
    titulo.innerHTML = '';
    arrTexto.forEach((letra, i) => {
        setTimeout(()=>{
            titulo.innerHTML += letra;
        }, 75 * i);
    });
}

const titulo = document.querySelector('.titulo-principal');
const texto = document.querySelector('.texto-principal');
ativaLetra(titulo);
ativaLetra(texto);

AOS.init({
    duration: 1000,
  });