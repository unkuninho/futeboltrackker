// Função para fazer o download da imagem e depois abrir a página de composição de tweet do Twitter
function compartilharNoTwitterComImagem(numeroPartida, textoTweet) {
    // URL da imagem
    var urlImagem = "partida_vista/partida" + numeroPartida + ".jpg";

    // Requisição para baixar a imagem
    var xhr = new XMLHttpRequest();
    xhr.open('GET', urlImagem, true);
    xhr.responseType = 'blob'; // Tipo de resposta é uma blob (imagem)
    xhr.onload = function(event) {
        var blob = xhr.response;
        var url = window.URL || window.webkitURL;
        var imgURL = url.createObjectURL(blob);

        // Cria um link temporário para o download da imagem
        var link = document.createElement('a');
        link.href = imgURL;
        link.download = 'partida' + numeroPartida + '.jpg'; // Nome do arquivo para download
        link.click();

        // Após o download, abre a página de composição de tweet do Twitter com a imagem baixada
        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(textoTweet), "_blank");
    };
    xhr.send();
}

// Exemplo de uso:
var numeroPartida = 1; // Número da partida
var textoTweet = "Exemplo de tweet com imagem para a Partida " + numeroPartida; // Texto do tweet

// Chamada à função para compartilhar no Twitter com imagem
compartilharNoTwitterComImagem(numeroPartida, textoTweet);
