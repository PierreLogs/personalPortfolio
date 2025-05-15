//Archivo principal
//Función para el modo oscuro
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Detectar modo preferido al cargar la página
  const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  body.classList.add(savedTheme === "dark" ? "dark-mode" : "light-mode");

  // Alternar tema manualmente
  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      localStorage.setItem("theme", "light"); // Guardar preferencia
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
  });
});

// Función para enviar un correo electrónico
document.getElementById("email-btn").addEventListener("click", function () {
  window.location.href =
    "mailto:lpierre.dev@gmail.com?subject=Consulta&body=Hola, me gustaría saber más sobre tu trabajo.";
});

// Función para descarar el CV en formato PDF
document.getElementById("downloadCV").addEventListener("click", function () {
  const userConfirm = confirm("¿Seguro que deseas descargar el CV?");
  if (userConfirm) {
    const link = document.createElement("a");
    link.href = "cv.pdf";
    link.download = "Mi_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});
