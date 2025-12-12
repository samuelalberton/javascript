
    function carregar() {
    
    var img = document.getElementById('imagens')

    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()

    var hFormat = hora < 10 ? "0" + hora : hora
    var mFormat = minutos < 10 ? "0" + minutos : minutos

    var res = document.getElementById('res')
            res.innerHTML = `Agora são ${hFormat}:${mFormat}`
}

    