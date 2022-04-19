/* se cambia velocidad del scroll y se ajusta posición de navbar */

$(document).ready(function(){

    $("a").click(function(){
        var gato = this.hash

        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top -70
            },
            800
        )
    })
})

/* alerta cuando se envien los datos de contacto */

$("#boton").click(function(){
    alert("Sus datos se han enviado");
});