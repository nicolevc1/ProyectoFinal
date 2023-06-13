window.onload = () => {
  let loading = document.getElementById("container-loader");
  setTimeout(() => {
    loading.style.display = "none";
  }, 6000);
};

setTimeout(cambiaMensaje, 5000);
function cambiaMensaje() {
  document.getElementById("loading-message").innerText = "Listo";
}
