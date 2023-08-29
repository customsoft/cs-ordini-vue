<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title">Benvenuto su cs-ordini</h1>
            <p class="card-text">
              Benvenuto nell'applicazione per la gestione degli Ordini professionali. <br />
              Qui potrai gestire gli ordini in modo efficace ed efficiente.
            </p>
            <router-link to="/login" class="btn btn-primary">Accedi</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
};
</script>

<style scoped>
/* Stile personalizzato per la pagina Home */
</style>
