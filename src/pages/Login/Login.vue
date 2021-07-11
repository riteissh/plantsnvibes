<template>
  <div class="auth-page">
    <b-container>
      <h5 class="auth-logo text-success">
        <i class="fa fa-circle text-success"></i>
        Plants N Vibes
        <i class="fa fa-circle text-success"></i>
      </h5>
      <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Dashboard</h3>" customHeader>
        <p class="widget-auth-info">
            Use your email to sign in.
        </p>
        <form class="mt" @submit.prevent="login">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{errorMessage}}
          </b-alert>
          <div class="form-group">
            <input class="form-control no-border" ref="email" required type="email" name="email" placeholder="Email" v-model="form.email" />
          </div>
          <div class="form-group">
            <input class="form-control no-border" ref="password" required type="password" name="password" placeholder="Password" v-model="form.password" />
          </div>
          <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse">Login</b-button>
          <!--<p class="widget-auth-info">or sign in with</p>
          <div class="social-buttons">
            <b-button variant="primary" class="social-button mb-2">
              <i class="social-icon social-google"></i>
              <p class="social-text">GOOGLE</p>
            </b-button>
            <b-button variant="success" class="social-button">
              <i class="social-icon social-microsoft"></i>
              <p class="social-text">MICROSOFT</p>
            </b-button>
          </div>-->
        </form>
        <p class="widget-auth-info">
          Login not allowed for external users
        </p>
        <!--<router-link class="d-block text-center" to="login">Create an Account</router-link>-->
      </Widget>
    </b-container>
    <footer class="auth-footer">
      © Plants N Vibes 2021 - <a href="https://plantsnvibes.com" rel="nofollow noopener noreferrer" target="_blank">PlantsnVibes</a>
    </footer>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import firebase from "firebase";
import { mapGetters } from "vuex";

export default {
  name: 'LoginPage',
  components: { Widget, 
  ...mapGetters({
      user: "user" }),
    user () {
      return this.$store.getters.user
    }
  
      },
  data() {
    return {
      errorMessage: null,
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      /*const email = this.$refs.email.value;
      const password = this.$refs.password.value;

      if (email.length !== 0 && password.length !== 0) {
        window.localStorage.setItem('authenticated', true);
        this.$router.push('/app/dashboard');
      }*/
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.replace({ name: "AnalyticsPage" });
        })
        .catch(err => {
          this.errorMessage = err.message;
        });
    },
    onLoad() {
      console.log(this.$store.getters.user)
    if(this.$store.getters.user.loggedIn === true) {
      this.$router.push('/app/dashboard');
    }
    }
  },
  mounted: function(){
    this.$nextTick(this.onLoad)
  },
  created() {
    /*if (window.localStorage.getItem('authenticated') === 'true') {
      this.$router.push('/app/main/analytics');
    }*/
    

  },
};
</script>
