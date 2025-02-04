$(document).ready(function(){

    /*Efecto Header>.Menu----Barra de navegación*/
    $('.menu a').each(function(index, elemento){
        $(this).css({
            top: '-200px'
        });
        $(this).animate({
            top:'0'
        },1100+(index*500));
    })
    /*Efecto Header>.Textos----Titulo Principal*/
    if($(window).width() > 800){
        $('header .textos').css({
            'opacity': '0',
            'margin-top': '0'
        });
        $('header .textos').animate({
            opacity: 1,
            'margin-top': '-52px'
        }, 1100);
    }
    /*Scroll de elementos de Barra de Navegación*/
    var acercaDe = $('#acerca-de').offset().top,
        menu=$('#platillos').offset().top,
        galeria=$('#galeria').offset().top,
        ubicacion=$('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:acercaDe-100
        }, 500);
    })
    $('#btn-menu').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:menu
        }, 500);
    })
    $('#btn-galeria').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:galeria
        }, 500);
    })
    $('#btn-ubicacion').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:ubicacion
        }, 500);
    })


})