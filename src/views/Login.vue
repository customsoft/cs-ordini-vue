<template>
  <div class="login-container">
    <div id="login-form" class="login-form-lg shadow mx-auto">
      <h2 class="h3">Accedi all'area riservata con:</h2>

      <ul class="nav nav-tabs flex-column flex-sm-row flex-sm-nowrap">
        <li class="nav-item text-sm-center">
          <a
            href="#tab-spid"
            class="nav-link h-100 active"
            data-toggle="tab"
            aria-controls="tab-spid"
            aria-expanded="false"
            ><i class="fas fa-user-circle mr-2"></i>SPID</a
          >
        </li>
        <li class="nav-item text-sm-center">
          <a
            href="#tab-cie"
            class="nav-link h-100"
            data-toggle="tab"
            aria-controls="tab-cie"
            aria-expanded="false"
            ><i class="fas fa-address-card mr-2"></i>CIE</a
          >
        </li>
        <li class="nav-item text-sm-center">
          <a
            href="#tab-cns"
            class="nav-link h-100"
            data-toggle="tab"
            aria-controls="tab-cns"
            aria-expanded="false"
            ><i class="fas fa-credit-card mr-2"></i>CNS</a
          >
        </li>
        <li class="nav-item text-sm-center">
          <a
            href="#tab-form"
            class="nav-link h-100"
            data-toggle="tab"
            aria-controls="tab-form"
            aria-expanded="true"
            >Credenziali</a
          >
        </li>
      </ul>

      <div class="tab-content">
        <div id="tab-form" class="tab-pane fade">
          <h3 class="sr-only">Accedi con credenziali</h3>
          <ul class="nav nav-tabs-reverse flex-nowrap" role="tablist">
            <li class="nav-item text-center flex-fill">
              <a
                class="nav-link h-100 active"
                href="#tab-fo-ent"
                data-toggle="tab"
                aria-controls="tab-fo-ent"
                aria-expanded="true"
                >Fisconline / Entratel</a
              >
            </li>
            <li class="nav-item text-center flex-fill">
              <a
                class="nav-link h-100"
                href="#tab-sister"
                data-toggle="tab"
                aria-controls="tab-sister"
                aria-expanded="false"
                >SISTER</a
              >
            </li>
          </ul>
          <div class="tab-content tab-content-reverse px-0">
            <div
              id="tab-fo-ent"
              class="tab-pane px-md-0 pb-0 fade active show"
              role="tabpanel"
            >
              <form
                action="/Login?realm=/csordini&amp;service=pin"
                method="post"
                novalidate=""
              >
                <input type="hidden" name="goto" value="" />
                <input type="hidden" name="gotoOnFail" value="" />
                <input type="hidden" name="SunQueryParamsString" value="" />
                <input type="hidden" name="encoded" value="false" />
                <input type="hidden" name="gx_charset" value="UTF-8" />
                <input type="hidden" name="newpost" value="true" />
                <h4 class="sr-only">
                  Accedi con credenziali Fisconline / Entratel
                </h4>
                <div class="form-group">
                  <label for="username-fo-ent"
                    >Codice fiscale / Nome utente:</label
                  >
                  <div class="input-group input-group-lg">
                    <input
                      type="text"
                      id="username-fo-ent"
                      name="IDToken1"
                      class="form-control form-control-lg"
                      autocomplete="off"
                      required=""
                      autofocus=""
                    />
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="top"
                        data-html="true"
                        data-content="<strong>Fisconline</strong>: inserisci il Codice fiscale<br /><strong>Entratel</strong>: inserisci il Nome utente (T...)"
                        data-original-title=""
                        title=""
                      >
                        <i class="fa fa-question-circle"></i
                        ><span class="sr-only"
                          >Help sul campo Codice fiscale / Nome utente</span
                        >
                      </button>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-7">
                    <div class="form-group">
                      <label for="password-fo-ent">Password:</label>
                      <div class="input-group input-group-lg">
                        <input
                          type="password"
                          id="password-fo-ent"
                          name="IDToken2"
                          class="form-control"
                        />
                        <div class="input-group-append" aria-hidden="true">
                          <button
                            type="button"
                            class="btn btn-default btn-show-hide"
                            title="Mostra password"
                          >
                            <i class="fas fa-eye"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-5">
                    <div class="form-group">
                      <label for="pin-fo-ent">Codice PIN:</label>
                      <div class="input-group input-group-lg">
                        <input
                          type="password"
                          id="pin-fo-ent"
                          name="IDToken3"
                          class="form-control"
                        />
                        <div class="input-group-append" aria-hidden="true">
                          <button
                            type="button"
                            class="btn btn-default btn-show-hide"
                            title="Mostra password"
                          >
                            <i class="fas fa-eye"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="alert alert-info d-none d-md-flex" role="alert">
                  <p class="alert-content">
                    Dal 1 ottobre 2021 è possibile accedere alla propria area
                    riservata solo con le credenziali Spid (Sistema pubblico di
                    identità digitale), Cie (Carta di identità elettronica) o
                    Cns (Carta nazionale dei servizi). <br />
                    Nessun cambiamento invece per professionisti ed imprese, per
                    approfondimenti visita la pagina
                    <a
                      href="https://www.csordini.customsoft.it/come-accedere-servizi-online"
                      >"Accesso ai servizi"</a
                    >.
                  </p>
                </div>

                <div class="mx-md-5 px-md-5">
                  <button type="submit" class="btn btn-lg btn-block btn-accedi">
                    <i class="fas fa-sign-in-alt mr-2"></i>ACCEDI
                  </button>
                </div>

                <div class="row justify-content-between mt-3">
                  <div class="col-auto">
                    <a
                      href="https://telematici.csordini.gov.it/Main/Registrati.jsp"
                      >Non sei ancora registrato?</a
                    >
                  </div>
                  <div class="col-auto">
                    <a
                      href="https://telematici.csordini.gov.it/Main/reccred.jsp"
                      >Hai smarrito il pincode o le credenziali?</a
                    >
                  </div>
                </div>
              </form>
            </div>
            <div id="tab-sister" class="tab-pane px-md-5 pb-0 fade">
              <form
                action="/sam/UI/Login?realm=/csordini&amp;service=sister"
                method="post"
                novalidate=""
              >
                <input type="hidden" name="goto" value="" />
                <input type="hidden" name="gotoOnFail" value="" />
                <input type="hidden" name="SunQueryParamsString" value="" />
                <input type="hidden" name="encoded" value="false" />
                <input type="hidden" name="gx_charset" value="UTF-8" />
                <input type="hidden" name="newpost" value="true" />
                <h4 class="sr-only">Accedi con credenziali SISTER</h4>
                <div class="form-group mx-md-5">
                  <label for="username-sister">Codice fiscale:</label>
                  <input
                    type="text"
                    id="username-sister"
                    name="IDToken1"
                    class="form-control form-control-lg"
                    autocomplete="off"
                    required=""
                    autofocus=""
                  />
                </div>
                <div class="form-group mx-md-5">
                  <label for="password-sister">Password:</label>
                  <div class="input-group input-group-lg">
                    <input
                      type="password"
                      id="password-sister"
                      name="IDToken2"
                      class="form-control"
                    />
                    <div class="input-group-append" aria-hidden="true">
                      <button
                        type="button"
                        class="btn btn-default btn-show-hide"
                        title="Mostra password"
                      >
                        <i class="fas fa-eye"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="mx-md-5">
                  <!-- Messaggio di errore da valorizzare e visualizzare in caso di autenticazione fallita -->
                  <!--<div id="login-msg" class="alert alert-danger d-flex" role="alert" tabindex="0">
			                                    <p class="alert-content">Messaggio di autenticazione fallita.</p>
			                                </div>-->

                  <button type="submit" class="btn btn-lg btn-block btn-accedi">
                    <i class="fas fa-sign-in-alt mr-2"></i>ACCEDI
                  </button>
                </div>

                <a
                  class="mt-3 mx-md-5"
                  href="https://www.csordini.gov.it/portale/adesione-ai-servizi-sister"
                  >Non sei ancora registrato?</a
                >
                <a
                  class="mt-3 mx-md-5"
                  href="https://sister.csordini.gov.it/MainAL/SceltaServizioAccesso.do?tipo=R"
                  >Hai dimenticato la password?</a
                >
              </form>
            </div>
          </div>
        </div>
        <div id="tab-cns" class="tab-pane fade" role="tabpanel">
          <h3 class="sr-only">Accedi con CNS</h3>
          <form
            action="https://cns.csordini.gov.it/pi"
            method="post"
            novalidate=""
          >
            <p>
              La <strong>Carta Nazionale dei Servizi (CNS)</strong> è una smart
              card che contiene un "certificato digitale" di autenticazione
              personale, utile per accedere ai servizi online della Pubblica
              Amministrazione.
            </p>
            <div class="mt-5 mx-md-5 px-md-5">
              <button
                id="btn-accedi"
                type="submit"
                class="btn btn-lg btn-block"
              >
                <i class="fas fa-sign-in-alt mr-2"></i>Accedi con CNS
              </button>
            </div>
          </form>
        </div>

        <!--INIZIO CIE -->

        <div id="tab-cie" class="tab-pane fade" role="tabpanel">
          <h3 class="sr-only">Accedi con CIE</h3>

          <p>
            La <strong>Carta di Identità Elettronica (CIE)</strong> è il
            documento personale che attesta l'identità del cittadino.
            <br />Dotata di microprocessore, oltre a comprovare l'identità
            personale, permette l'accesso ai servizi digitali della Pubblica
            Amministrazione.
          </p>
          <div class="text-center mt-5">
            <button
              id="btn-accedi"
              type="submit"
              class="btn p-0 border-0"
              onclick="location.href='https://sp.csordini.customsofts.it/rp/cie/sel'"
            >
              <img
                class="img-fluid"
                src="/assets/img/Entra_con_CIE.png"
                alt=""
              />
              <span class="sr-only">Entra con CIE</span>
            </button>
          </div>
        </div>

        <!-- FINE CIE -->

        <div id="tab-spid" class="tab-pane fade active show">
          <h3 class="sr-only">Accedi con SPID</h3>
          <p>
            SPID, il <strong>Sistema Pubblico di Identità Digitale</strong>, è
            il sistema di accesso che consente di utilizzare, con un'identità
            digitale unica, i servizi online della Pubblica Amministrazione e
            dei privati accreditati. Se sei già in possesso di un'identità
            digitale, accedi con le credenziali del tuo gestore. Se non hai
            ancora un'identità digitale, richiedila ad uno dei gestori.
          </p>

          <div class="row align-items-center">
            <div class="col-12 col-md-6">
              <ul class="list-link px-1">
                <li class="mb-1">
                  <a href="https://www.spid.gov.it"
                    >Maggiori informazioni su SPID</a
                  >
                </li>
                <li class="mb-1">
                  <a href="https://www.spid.gov.it/richiedi-spid"
                    >Non hai SPID?</a
                  >
                </li>
                <li class="mb-1">
                  <a href="https://www.spid.gov.it/serve-aiuto">Serve aiuto?</a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-6 text-center">
              <!-- AGID - SPID IDP BUTTON MEDIUM "ENTRA CON SPID" * begin * -->
              <a
                href="#"
                class="italia-it-button italia-it-button-size-m button-spid"
                spid-idp-button="#spid-idp-button-medium-get"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="italia-it-button-icon"
                  ><img
                    src="/assets/img/spid-ico-circle-bb.svg"
                    onerror="this.src='img/spid-ico-circle-bb.png'; this.onerror=null;"
                    alt=""
                /></span>
                <span class="italia-it-button-text">Entra con SPID</span>
              </a>
              <div
                id="spid-idp-button-medium-get"
                class="spid-idp-button spid-idp-button-tip spid-idp-button-relative"
              >
                <ul
                  id="spid-idp-list-medium-root-get"
                  class="spid-idp-button-menu"
                  aria-labelledby="spid-idp"
                >
                  <li class="spid-idp-button-link" data-idp="infocertid">
                    <a href="https://sp.csordini.customsofts.it/rp/infocert/sel"
                      ><span class="spid-sr-only">Infocert ID</span
                      ><img
                        src="assets/img/spid-idp-infocertid.svg"
                        onerror="this.src='img/spid-idp-infocertid.png'; this.onerror=null;"
                        alt="Infocert ID"
                    /></a>
                  </li>
                  <li class="spid-idp-button-link" data-idp="lepidaid">
                    <a href="https://sp.csordini.customsofts.it/rp/lepida/sel"
                      ><span class="spid-sr-only">Lepida ID</span
                      ><img
                        src="assets/img/spid-idp-lepidaid.svg"
                        onerror="this.src='img/spid-idp-lepidaid.png'; this.onerror=null;"
                        alt="Lepida ID"
                    /></a>
                  </li>
                  <li class="spid-idp-button-link" data-idp="etnaid">
                    <a href="https://sp.csordini.customsofts.it/rp/etna/sel"
                      ><span class="spid-sr-only">Etna ID </span
                      ><img
                        src="assets/img/spid-idp-etnaid.svg"
                        onerror="this1.src='img/spid-idp-etnaid.png'; this.onerror=null;"
                        alt="Etna ID"
                    /></a>
                  </li>
                  <li class="spid-idp-button-link" data-idp="intesaid">
                    <a href="https://sp.csordini.customsofts.it/rp/intesa/sel"
                      ><span class="spid-sr-only">Intesa ID</span
                      ><img
                        src="assets/img/spid-idp-intesaid.svg"
                        onerror="this.src='img/spid-idp-intesaid.png'; this.onerror=null;"
                        alt="Intesa ID"
                    /></a>
                  </li>
                  <li class="spid-idp-button-link" data-idp="posteid">
                    <a href="https://sp.csordini.customsofts.it/rp/poste/sel"
                      ><span class="spid-sr-only">Poste ID</span
                      ><img
                        src="assets/img/spid-idp-posteid.svg"
                        onerror="this.src='img/spid-idp-posteid.png'; this.onerror=null;"
                        alt="Poste ID"
                    /></a>
                  </li>
                  <li class="spid-idp-button-link" data-idp="arubaid">
                    <a href="https://sp.csordini.customsofts.it/rp/aruba/sel"
                      ><span class="spid-sr-only">Aruba ID</span
                      ><img
                        src="assets/img/spid-idp-arubaid.svg"
                        onerror="this.src='img/spid-idp-arubaid.png'; this.onerror=null;"
                        alt="Aruba ID"
                    /></a>
                  </li>
                  <li class="spid-idp-button-link" data-idp="namirialid">
                    <a href="https://sp.csordini.customsofts.it/rp/namirial/sel"
                      ><span class="spid-sr-only">Namirial ID</span
                      ><img
                        src="assets/img/spid-idp-namirialid.svg"
                        onerror="this.src='img/spid-idp-namirialid.png'; this.onerror=null;"
                        alt="Namirial ID"
                    /></a>
                  </li>
                  <li class="spid-idp-button-link" data-idp="sielteid">
                    <a href="https://sp.csordini.customsofts.it/rp/sielte/sel"
                      ><span class="spid-sr-only">Sielte ID</span
                      ><img
                        src="assets/img/spid-idp-sielteid.svg"
                        onerror="this.src='img/spid-idp-sielteid.png'; this.onerror=null;"
                        alt="Sielte ID"
                    /></a>
                  </li>
                  <li class="spid-idp-button-link" data-idp="timid">
                    <a href="https://sp.csordini.customsofts.it/rp/titt/sel"
                      ><span class="spid-sr-only">Tim ID</span
                      ><img
                        src="assets/img/spid-idp-timid.svg"
                        onerror="this.src='img/spid-idp-timid.png'; this.onerror=null;"
                        alt="Tim ID"
                    /></a>
                  </li>
                  <li class="spid-idp-button-link" data-idp="spiditalia">
                    <a href="https://sp.csordini.customsofts.it/rp/register/sel"
                      ><span class="spid-sr-only">SPIDItalia Register.it</span
                      ><img
                        src="assets/img/spid-idp-spiditalia.svg"
                        onerror="this.src='img/spid-idp-spiditalia.png'; this.onerror=null;"
                        alt="SpidItalia"
                    /></a>
                  </li>
                  <li class="spid-idp-button-link" data-idp="teamsystem">
                    <a
                      href="https://sp.csordini.customsofts.it/rp/teamsystem/sel"
                      ><span class="spid-sr-only">TeamSystem ID </span
                      ><img
                        src="assets/img/spid-idp-teamsystemid.svg"
                        onerror="this1.src='img/spid-idp-teamsystemid.png'; this.onerror=null;"
                        alt="TeamSystem ID"
                    /></a>
                  </li>
                  <li class="spid-idp-button-link" data-idp="infocamereid">
                    <a
                      href="https://sp.csordini.customsofts.it/rp/infocamere/sel"
                      ><span class="spid-sr-only">Infocamere ID </span
                      ><img
                        src="assets/img/spid-idp-infocamereid.svg"
                        onerror="this1.src='img/spid-idp-infocamereid.png'; this.onerror=null;"
                        alt="Infocamere ID"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img
            id="spid-agid"
            class="img-fluid mx-auto"
            src="/assets/img/spid-agid-logo-lb.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // head: {
  //   script: [
  //     {
  //       src: "/dist/spid-button.min.js", // Imposta il percorso corretto al tuo script
  //       type: "text/javascript",
  //     },
  //   ],
  // },
  data() {
    return {
      username: "",
      password: "",
      spid: "",
    };
  },
  // mounted() {
  //   /* eslint - disable indent */
  //   document.addEventListener("DOMContentLoaded", function () {
  //     SPID.init({
  //       //lang: 'it',
  //       selector: "#spid-button", // opzionale
  //       method: "POST", // opzionale
  //       url: "/Login/{{idp}}",
  //       fieldName: "idp",
  //       supported: [
  //         "https://identity.sieltecloud.it",
  //         "https://loginspid.aruba.it",
  //         "https://identity.infocert.it",
  //         "https://login.id.tim.it/affwebservices/public/saml2sso",
  //         "https://idp.namirialtsp.com/idp",
  //         "https://spid.register.it",
  //         "https://id.lepida.it/idp/shibboleth",
  //         "https://spid.teamsystem.com/idp",
  //       ],
  //       protocol: "SAML",
  //       size: "medium",
  //       colorScheme: "positive",
  //       cornerStyle: "rounded",
  //     });
  //   });

  //   /* eslint - enable indent */
  // },
  methods: {
    login() {
      // Esegui la logica di autenticazione qui
      if (this.spid && (this.username || this.password)) {
        // Effettua l'autenticazione con SPID e/o CIE
      } else if (this.username && this.password) {
        // Effettua l'autenticazione con nome utente e password
      } else {
        // Mostra un messaggio di errore
        alert("Inserisci le credenziali corrette");
      }
    },
    loginWithSPID(idp) {
      // Esegui la logica di autenticazione con SPID usando l'IdP specifico
      alert(`Effettua l'autenticazione con SPID tramite ${idp}`);
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 50%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  padding: 8px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
