
var CELULAR_EMPRESA = '5592984737304';

    // carrega o link do botão reserva
    carregarBotaoReserva: () => {

        var texto = 'Olá!';

        let encode = encodeURI(texto);
        let URL = `https://wa.me/${CELULAR_EMPRESA}?text=${encode}`;

        $("#btnReserva").attr('href', URL);

    }

