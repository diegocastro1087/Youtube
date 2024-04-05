window.onload = function() {
    var showmore = document.querySelector(".showmore");
    var everythingofinfo = document.querySelector(".everythingofinfo");
    var showless = document.querySelector(".showless")
    var subscribe = document.querySelector('.subscribe')
    var subscrito = document.querySelector('.subscribe2')

    showless.onclick = function() {
        everythingofinfo.style.display = "none";
        showmore.style.display = "flex";
    };

    showmore.onclick = function() {
         everythingofinfo.style.display = "block";
         showmore.style.display = "none";
    };

    subscribe.onclick = function() {
            subscribe.style.display = "none";
            subscrito.style.display = "flex";
    }

    subscrito.onclick = function() {
        subscribe.style.display = "flex";
        subscrito.style.display = "none";
}
};


    const everything = document.querySelector(".everything")
    const comentarios = document.querySelector(".comentarios")
    const anuncio = document.querySelector(".anuncio")
    const rightthings = document.querySelector(".rightthings")
    const left = document.querySelector(".left")
    const leftvideo = document.querySelector(".left video")
    const input = document.querySelector(".input")
    const mic = document.querySelector(".mic")
    const ac1 = document.querySelector(".ac1")
    const ac2 = document.querySelector(".ac2")
    const search = document.querySelector(".search")

    function verificarTamanho(element) {
        if(window.innerWidth < 900) {
            element.style.display = 'block';
        } else {
            element.style.display = 'flex';
        }
    }

    function verificarTamanho2(element) {
        if(window.innerWidth < 900) {
            element.style.display = 'none'; 
        } else {
            element.style.display = 'block';
        }
    }

    function verificarTamanho3(element) {
        if(window.innerWidth < 1800) {
            element.style.display = 'none'; 
        } else {
            element.style.display = 'flex';
        }
    }

    function verificarTamanho4(element) {
        if(window.innerWidth < 900) {
            element.style.width = '90%'; 
            
        } else {
            element.style.width = '50vw';
        }
    }

    function verificarTamanho5(element) {
        if(window.innerWidth < 900) {
            element.style.display = 'none'; 
        } else {
            element.style.display = 'flex';
        }
    }

    function verificarTamanho6(element) {
        if(window.innerWidth < 900) {
            element.style.backgroundColor = '#212121'; 
            element.style.borderRadius = '14px';
        } else {
            element.style.borderRadius = '0px 1000px 1000px 0px';
        }
    }

    function verificarTamanho7(element) {
        if(window.innerWidth < 1300) {
            element.style.display = 'none'; 
        } else {
            element.style.display = 'flex';
        }
    }

    function verificarTamanho8(element) {
        if(window.innerWidth < 900) {
            element.style.width = '100%'; 
            
        } else {
            element.style.width = '50vw';
        }
    }

    verificarTamanho(everything)
    verificarTamanho2(comentarios)
    verificarTamanho7(anuncio)
    verificarTamanho3(rightthings)
    verificarTamanho4(left)
    verificarTamanho5(input)
    verificarTamanho5(mic)
    verificarTamanho5(ac1)
    verificarTamanho5(ac2)
    verificarTamanho6(search)
    verificarTamanho8(leftvideo)

    window.addEventListener('resize', function() {
        verificarTamanho(everything);
        verificarTamanho2(comentarios)
        verificarTamanho7(anuncio)
        verificarTamanho3(rightthings)
        verificarTamanho4(left)
        verificarTamanho5(input)
        verificarTamanho5(mic)
        verificarTamanho5(ac1)
        verificarTamanho5(ac2)
        verificarTamanho6(search)
        verificarTamanho8(leftvideo)
      });