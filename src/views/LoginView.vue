<template>

    <!-- Login Container -->
    <section class="login_container">

      <!-- Login Form -->
      <div class="login_form">

        <!-- title -->
        <div class="login_form_title">
          Login
        </div>

        <!-- body -->
        <Form class="login_form_body" :validation-schema="loginValidationSchema" v-slot="{ errors }" @submit="doLogin">

          <div class="floating_label">
            <font-awesome-icon class="login_input_icon" :icon="faUser"/>
            <Field class="login_input" :class="{'invalid_input':errors.username}" type="text" name="username" placeholder="username" autocomplete="off"/>
            <span class="login_input_label">username</span>
          </div>
          <div class="small_error mt-1 tracking-wide text-red-500">
              <small>{{ errors.username }}</small>
          </div>

          <div class="floating_label">
            <font-awesome-icon class="login_input_icon" :icon="faKey"/>
            <Field class="login_input" :class="{'invalid_input':errors.password}" type="password" name="password" placeholder="password" autocomplete="off"/>
            <span class="login_input_label">password</span>
          </div>
          <div class="small_error mt-1 tracking-wide text-red-500">
              <small>{{ errors.password }}</small>
          </div>

          <button class="login_submit_btn">
            Masuk
          </button>

          <center>
            <router-link to="/register" class="login_register_href">
              Registrasi
            </router-link>
          </center>

        </Form>

      </div>

    </section>

</template>

<script>
  import { FontAwesomeIcon }   from '@fortawesome/vue-fontawesome'
  import { faUser, faKey }     from '@fortawesome/free-solid-svg-icons'
  import { Field, Form }       from "vee-validate";
  import loginValidationSchema from '@/validations/loginValidationSchema'
  import { useStore } from 'vuex'

  export default {
      name: 'LoginView',
      components: {
        FontAwesomeIcon,
        Form,
        Field,
      },
      setup() {
        const store = useStore();

        /**
         * Do Login
         * ========
         */
          const doLogin = (event) => {
            const formLogin = new FormData(event.target); 

            for ( const key in event ) {
              formLogin.set(key, event[key])
            }

            store.dispatch("login/DO_LOGIN",formLogin);
        }

        return {
          faUser, faKey,
          loginValidationSchema,
          doLogin,
        }
      }
  }

</script>

<style lang="css" scoped>

.login_container {
  @apply w-full min-h-screen bg-gray-200 flex justify-center items-center px-8;
}

.login_form {
  @apply bg-docbot-green-200 w-full max-w-md rounded-lg;
}

.login_form_title {
  @apply text-gray-100 text-center text-4xl font-semibold pt-10 pb-10;
  font-family: 'Poppins', sans-serif;
}

.login_form_body {
  @apply px-8 pb-10;
}

.login_input_icon {
  @apply absolute right-4 text-lg text-gray-500 opacity-70;
}

.login_input {
  @apply w-full relative z-10 pl-4 pr-12 py-3 bg-transparent focus:outline-none placeholder-transparent border border-gray-100 rounded-md;
}

.small_error {
  @apply mb-10;
}

.login_input_label {
  @apply absolute -z-0 top-3 left-4 text-neutral-500 duration-300 opacity-80;
}

.login_submit_btn {
  @apply w-full py-3 mb-6 text-gray-600 focus:outline-none border border-4 border-gray-200 text-xl font-semibold rounded-full;
  font-family: 'Poppins', sans-serif;
}

.login_register_href {
  @apply underline text-gray-600;
}

.invalid_input {
  @apply border border-red-500;
}

</style>