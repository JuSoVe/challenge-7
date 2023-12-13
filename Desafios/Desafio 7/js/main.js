document.addEventListener('DOMContentLoaded', function () {
    console.log("El contenido se cargó completamente.")

    var textArea = document.getElementById('origen')
    textArea.addEventListener("input", habilitar)
    var btn = document.getElementsByTagName("button")[0]
    var divDestino = document.getElementById("destino")
    var vaciar = document.getElementsByClassName("btn-vaciar")[0]
    var mayus = document.getElementsByClassName("btn-convertir-a-mayusculas")[0]
    var listok = document.getElementsByTagName("li")

    cargartext(textArea);
    Reemplazar();
    botones();
    okay ();
    

    function habilitar() {
        var entradas = document.getElementsByTagName("input")
        for (let i = 0; i < entradas.length; i++) {
            entradas[i].disabled = false
        }
        btn.disabled = false
    }

    function Reemplazar() {
        var reemplazarText = document.getElementById('btn-reemplazar')
        reemplazarText.addEventListener("click", function (e) {
            divDestino.innerHTML = textArea.value;
        })
    }

    function botones() {
        var entradas = document.getElementsByTagName("input")

        entradas[1].addEventListener('click', function (e) {
            divDestino.innerHTML += textArea.value;
        });
        entradas[2].addEventListener('click', function (e) {
            for (let i = 0; i < 5; i++) {
                divDestino.innerHTML += textArea.value;
            }
        });
        entradas[3].addEventListener('click', function (e) {
            for (let i = 0; i < 10; i++) {
                divDestino.innerHTML += textArea.value;
            }
        });
        entradas[4].addEventListener('click', function (e) {
            var veces = prompt("Ingrese la cantidad de veces a agregar:");
            for (let i = 0; i < veces; i++) {
                divDestino.innerHTML += textArea.value;
            }
        });
    }
    function cargartext(textArea) {
        textArea.value = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>';
    }

    vaciar.addEventListener('click', function (e) {
        divDestino.innerHTML = '';
    });
    mayus.addEventListener('click', function (e) {
        divDestino.innerHTML = divDestino.innerHTML.toUpperCase();
    });
    btn.addEventListener('click', function (e) {
        divDestino.innerHTML = divDestino.innerHTML.toLowerCase();
    });

    function okay () {
        for (let i = 0; i < listok.length; i++) {
            listok[i].innerHTML = "[OK] " + listok[i].innerHTML;
        }
    }
});






