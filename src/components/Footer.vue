<template>
  <footer class="it-footer">
    <div class="it-footer-main">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h4>Indirizzo</h4>
            <p>Via Roma, 123 - Città</p>
          </div>
          <div class="col-md-3">
            <h4>Contatti</h4>
            <p>
              Email: info@example.com<br />
              Telefono: 123-456789
            </p>
          </div>
          <div class="col-md-3">
            <h4>Social</h4>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#"><i class="icon-facebook"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><i class="icon-twitter"></i></a>
              </li>
              <!-- Aggiungi altri link ai tuoi social media -->
            </ul>
          </div>
          <div class="col-md-2">
            <p>
              <img
                style="width: 100%; margin: 20px"
                src="/assets/img/logo_colorato.png"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="it-footer-small-prints clearfix">
      <div class="container">
        <h3 class="no_toc">Note legali</h3>
        <ul
          class="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row"
        >
          <li class="list-inline-item"><a href="#">Privacy policy</a></li>
          <li class="list-inline-item"><a href="#">Cookie policy</a></li>
          <li class="list-inline-item"><a href="#">Termini e condizioni</a></li>
          <!-- Aggiungi altri link alle note legali -->
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
/* Stile di Bootstrap Italia per il piè di pagina */
/* Personalizza ulteriormente lo stile se necessario */
</style>
