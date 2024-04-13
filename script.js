window.addEventListener("load", function() {
    // Registro de apelidos dos times
    var apelidos = {
        "Internacional": "Colorado",
        "Bahia": "Tricolor de Aço",
        "Cruzeiro": "Cabuloso",
        "Botafogo": "Fogão",
        "Vitória": "Leão",
        "Palmeiras": "Porco",
        "Fluminense": "Fluzao",
        "Bragantino": "Massa Bruta",
        "Vasco da Gama": "Gigante da Colina",
        "Grêmio": "Tricolor Gaúcho",
        "Corinthians": "Timão",
        "Atlético-MG": "Galo",
        "São Paulo": "Trikas",
        "Fortaleza": "Leão do Pici",
        "Athletico-PR": "Furacão",
        "Cuiabá": "Dourado",
        "Atlético-GO": "Dragão",
        "Flamengo": "Mengão",
        "Criciúma": "Tigre",
        "Juventude": "Papagaio de Ouro"
        // Adicione outros times conforme necessário
    };

    // Array de informações das partidas
    var partidas = [
        { data: new Date("2024-05-13"), time1: "Internacional", time2: "Bahia", campeonato: "Campeonato Brasileiro", poster: "poster1.jpg", imagem_twitter: "https://raw.githubusercontent.com/unkuninho/futeboltrackker/main/partida1.jpg", imagem_download: "https://raw.githubusercontent.com/unkuninho/futeboltrackker/main/partida1.jpg" },
        { data: new Date("2024-05-14"), time1: "Cruzeiro", time2: "Botafogo", campeonato: "Campeonato Brasileiro", poster: "poster2.jpg", imagem_twitter: "https://github.com/unkuninho/futeboltrackker/blob/main/partida2.jpg?raw=true", imagem_download: "https://github.com/unkuninho/futeboltrackker/blob/main/partida2.jpg?raw=true" },
        { data: new Date("2024-05-14"), time1: "Vitória", time2: "Palmeiras", campeonato: "Campeonato Brasileiro", poster: "poster3.jpg", imagem_twitter: "https://github.com/unkuninho/futeboltrackker/blob/main/partida3.jpg?raw=true", imagem_download: "https://github.com/unkuninho/futeboltrackker/blob/main/partida3.jpg?raw=true" },
        { data: new Date("2024-05-13"), time1: "Fluminense", time2: "Bragantino", campeonato: "Campeonato Brasileiro", poster: "poster4.jpg", imagem_twitter: "https://github.com/unkuninho/futeboltrackker/blob/main/partida4.jpg?raw=true", imagem_download: "https://t2.tudocdn.net/618065?w=824&h=494" },
        { data: new Date("2024-05-14"), time1: "Vasco da Gama", time2: "Grêmio", campeonato: "Campeonato Brasileiro", poster: "poster5.jpg", imagem_twitter: "https://t2.tudocdn.net/618065?w=824&h=494", imagem_download: "https://t2.tudocdn.net/618065?w=824&h=494" },
        { data: new Date("2024-05-14"), time1: "Corinthians", time2: "Atlético-MG", campeonato: "Campeonato Brasileiro", poster: "poster6.jpg", imagem_twitter: "https://t2.tudocdn.net/618065?w=824&h=494", imagem_download: "https://t2.tudocdn.net/618065?w=824&h=494" },
        { data: new Date("2024-05-13"), time1: "São Paulo", time2: "Fortaleza", campeonato: "Campeonato Brasileiro", poster: "poster7.jpg", imagem_twitter: "https://raw.githubusercontent.com/unkuninho/futeboltrackker/main/partida7.jpg", imagem_download: "https://raw.githubusercontent.com/unkuninho/futeboltrackker/main/partida7.jpg" },
        { data: new Date("2024-05-14"), time1: "Athletico-PR", time2: "Cuiabá", campeonato: "Campeonato Brasileiro", poster: "poster8.jpg", imagem_twitter: "https://t2.tudocdn.net/618065?w=824&h=494", imagem_download: "https://t2.tudocdn.net/618065?w=824&h=494" },
        { data: new Date("2024-05-14"), time1: "Atlético-GO", time2: "Flamengo", campeonato: "Campeonato Brasileiro", poster: "poster9.jpg", imagem_twitter: "https://t2.tudocdn.net/618065?w=824&h=494", imagem_download: "https://t2.tudocdn.net/618065?w=824&h=494" },
        { data: new Date("2024-05-14"), time1: "Criciúma", time2: "Juventude", campeonato: "Campeonato Brasileiro", poster: "poster10.jpg", imagem_twitter: "https://t2.tudocdn.net/618065?w=824&h=494", imagem_download: "https://t2.tudocdn.net/618065?w=824&h=494" }
    ];

    // Cria o container para as partidas
    var partidasContainer = document.createElement('div');
    partidasContainer.classList.add('partidas-container');
    document.body.appendChild(partidasContainer);

    // Loop sobre as partidas
    partidas.forEach(function(partida, index) {
        // Cria o elemento para a partida
        var partidaElement = document.createElement('div');
        partidaElement.classList.add('partida');
        partidasContainer.appendChild(partidaElement);

        // Cria e adiciona a data da partida
        var dataPartidaElement = document.createElement('p');
        dataPartidaElement.innerHTML = 'Data da Partida: <span class="dataPartida">' + partida.data.toLocaleDateString("pt-BR") + '</span>';
        partidaElement.appendChild(dataPartidaElement);

        // Cria e adiciona o campeonato
        var campeonatoElement = document.createElement('p');
        campeonatoElement.innerHTML = 'Campeonato: <span class="campeonato">' + partida.campeonato + '</span>';
        partidaElement.appendChild(campeonatoElement);

        // Cria e adiciona a imagem do poster
        var imgElement = document.createElement('img');
        imgElement.src = partida.poster;
        imgElement.alt = 'Poster da Partida ' + (index + 1);
        partidaElement.appendChild(imgElement);

        // Cria e adiciona botões de compartilhamento
        var btnCompartilharTime1 = document.createElement('button');
        btnCompartilharTime1.textContent = 'Tweetar como ' + apelidos[partida.time1];
        partidaElement.appendChild(btnCompartilharTime1);

        var btnCompartilharTime2 = document.createElement('button');
        btnCompartilharTime2.textContent = 'Tweetar como ' + apelidos[partida.time2];
        partidaElement.appendChild(btnCompartilharTime2);

        var btnCompartilharAssistido = document.createElement('button');
        btnCompartilharAssistido.textContent = 'Assisti à partida!';
        partidaElement.appendChild(btnCompartilharAssistido);

        // Cria e adiciona botão para baixar a imagem
        var btnBaixarImagem = document.createElement('button');
        btnBaixarImagem.textContent = 'Baixar Imagem';
        partidaElement.appendChild(btnBaixarImagem);

        // Adiciona evento de clique para baixar a imagem
        btnBaixarImagem.addEventListener("click", function() {
            baixarImagem(partida.imagem_download);
        });

        // Adiciona eventos de clique aos botões de compartilhamento
        btnCompartilharTime1.addEventListener("click", function() {
            compartilharNoTwitter(apelidos[partida.time1], partida.time2, partida.campeonato);
        });

        btnCompartilharTime2.addEventListener("click", function() {
            compartilharNoTwitter(apelidos[partida.time2], partida.time1, partida.campeonato);
        });

        btnCompartilharAssistido.addEventListener("click", function() {
            compartilharNoTwitter('', '', partida.campeonato);
        });
    });

    // Função para compartilhar no Twitter
    function compartilharNoTwitter(timeVencedor, timePerdedor, campeonato) {
        var textoTweet;
        if (timeVencedor === '' && timePerdedor === '') {
            textoTweet = 'Acabei de assistir a uma partida no ' + campeonato + ' ⚽ @futeboltracker. Saiba mais em: https://l1nq.com/futeboltracker';
        } else {
            textoTweet = 'Acabei de assistir ao jogo entre ' + timeVencedor + ' x ' + timePerdedor + ' no ' + campeonato + '! Deu ' + timeVencedor + ' ⚽ @futeboltracker. Saiba mais em: https://l1nq.com/futeboltracker';
        }
        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(textoTweet), "_blank");
    }

    // Função para baixar a imagem
    function baixarImagem(url) {
        // Cria um link temporário
        var link = document.createElement('a');
        link.href = url;
        link.download = 'imagem_download.jpg';
        // Adiciona o link ao documento
        document.body.appendChild(link);
        // Simula o clique no link
        link.click();
        // Remove o link do documento
        document.body.removeChild(link);
    }
});
