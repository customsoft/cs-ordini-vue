<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link to="/" class="navbar-brand">cs-ordini</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><router-link to="/dashboard" class="nav-link">Bacheca</router-link> </li>
            <li class="nav-item"><router-link to="/config" class="nav-link">Config</router-link> </li>
            <li class="nav-item"><router-link to="/logs" class="nav-link">Logs</router-link></li>
            <li class="nav-item"><router-link to="/maintenance" class="nav-link">Manutenzione</router-link> </li>
            <li class="nav-item"><router-link to="/statistics" class="nav-link">Statistiche</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
/* Stile di Bootstrap Italia per l'intestazione */
.header {
  margin-bottom: 30px;
}
</style>
