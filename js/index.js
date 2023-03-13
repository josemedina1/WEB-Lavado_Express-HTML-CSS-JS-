/* FUNCION PARA CAMBIAR DE COLOR LA BARRA DE NAVEGACION AL REALIZAR SCROLL - HOVER*/
$(document).ready(function () {


    $('.imgservi').hide();

    var nav = document.getElementById('navbar');

    window.addEventListener('scroll',function(){
        if(this.window.pageYOffset > 190){
            nav.classList.add('shadow');
            $(".menu").css({'background-color': ' #0f6ec1'});
            $('.enlace').css({'-webkit-text-stroke': '0px black'});
            $('.enlace').css({'color': '#f1eeee'});
        }else{ 
            nav.classList.remove('shadow');
            $(".menu").css({'background-color': ' #5555d600'});
            $('.enlace').css({'-webkit-text-stroke': '0.5px black'});
            $('.enlace').css({'color': '#010101'});
        }

        if(this.window.pageYOffset >= 600){
            $('.imgservi').fadeIn();

        }else{
            $('.imgservi').fadeOut();
        }

});
//------------------------------------------------------------------------

$.get("https://638cc70fd2fc4a058a5fbbdc.mockapi.io/s",
    function(data){
        $.each(data ,function(i,item){
            $('#servi_img').append("<div class='cuadroservicio'>" +
                "<div class='serviimg'>"+
                "<img class='imgservi' src= '"+ item.imagen + "' >"+
                "</div>" +
                "<div class='container dato'>"+"<h4>" + item.servicio + "</h4>"+
                "</div>"+
                " <h5 class='desc_serv '>" + item.descripcion + "</h5>" + 
            "</div>")
        })
    }
    );

});

const options = {method: 'GET'};

fetch('https://638cc70fd2fc4a058a5fbbdc.mockapi.io/s', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));











let quienes_somos = document.getElementById('somos');

let texto_quienessomos =`<p class="textoquienessomos" data-aos="flip-left">
    Una pareja emprendedora que su meta es dar el mejor servicio en limpieza,
    lavanderia e incluso carpinteria. Estamos comprometidos con nuestro trabajo y dar el mejor servicio, por lo que en 2022 
    decidimos crear N&J LavadoExpress.
    </p>`;

quienes_somos.innerHTML = texto_quienessomos;