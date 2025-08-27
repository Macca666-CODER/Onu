document.addEventListener("DOMContentLoaded", () => {
    const btnGabi = document.getElementById("gabi");
    const btnDescargar = document.getElementById("descargar");
    const fileLink = document.getElementById("fileLink");

    // Botón divertido
    btnGabi.addEventListener("click", () => {
        alert("💙 La queremos y la amamos 🙏 denos el 100 por la página pliss 😎");
    });

    // Botón de descarga
    btnDescargar.addEventListener("click", () => {
        if (fileLink) {
            fileLink.click();
        } else {
            alert("No se encontró el archivo. Asegúrate de que 'Onu Maximo aguirre y valeria.docx' esté en la misma carpeta que el index.html");
        }
    });
});
