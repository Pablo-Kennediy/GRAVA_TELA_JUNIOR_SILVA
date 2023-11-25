function startRecording() {
    // Obtenha o elemento do vídeo.
    const video = document.getElementById("recording");

    // Inicie a gravação do vídeo.
    video.record(15000);
}

function stopRecording() {
    // Obtenha o elemento do vídeo.
    const video = document.getElementById("recording");

    // Pare a gravação do vídeo.
    video.pause();
}

function startRecording() {
    // Obtenha o elemento do vídeo.
    const video = document.getElementById("recording");

    // Inicie a gravação do vídeo quando o botão for clicado.
    document.getElementById("record-button").addEventListener("click", startRecording);

    // Inicie a gravação do vídeo quando o usuário pressionar a tecla F9.
    document.addEventListener("keydown", function (event) {
        if (event.keyCode === 123) {
            startRecording();
        }
    });
}

function stopRecording() {
    // Obtenha o elemento do vídeo.
    const video = document.getElementById("recording");

    // Pare a gravação do vídeo quando o botão for clicado.
    document.getElementById("record-button").addEventListener("click", stopRecording);

    // Pare a gravação do vídeo quando o usuário pressionar a tecla P.
    document.addEventListener("keydown", function (event) {
        if (event.keyCode === 80) {
            stopRecording();
        }
        function saveRecording() {
            // Obtenha o elemento do vídeo.
            const video = document.getElementById("recording");

            // Obtenha o arquivo de vídeo gravado.
            const blob = video.getBlob();

            // Crie um novo arquivo com o nome "video-{timestamp}.mp4".
            const filename = `video-${new Date().getTime()}.mp4`;
            const file = new File([blob], filename);

            // Salve o arquivo na pasta "Meus Documentos".
            file.save(`${document.getElementById("Documentos").value}/${filename}`);
        }
    }

