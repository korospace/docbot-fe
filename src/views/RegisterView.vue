<template>

    <!-- Registrasi Container -->
    <section class="registrasi_container">

      <!-- Registrasi Form -->
      <div class="registrasi_form">

        <!-- title -->
        <div class="registrasi_form_title">
          Registrasi
        </div>

        <!-- body -->
        <Form class="registrasi_form_body" :validation-schema="registerValidationSchema" v-slot="{ errors }" @submit="doRegister">

          <div class="floating_label">
            <font-awesome-icon class="registrasi_input_icon" :icon="faAt"/>
            <Field class="registrasi_input" :class="{'invalid_input':errors.email}" type="email" name="email" placeholder="email" autocomplete="off"/>
            <span class="registrasi_input_label">email</span>
          </div>
          <div class="small_error mt-1 tracking-wide text-red-500">
              <small>{{ errors.email }}</small>
          </div>

          <div class="floating_label">
            <font-awesome-icon class="registrasi_input_icon" :icon="faUser"/>
            <Field class="registrasi_input" :class="{'invalid_input':errors.username}" type="text" name="username" placeholder="username" autocomplete="off"/>
            <span class="registrasi_input_label">username</span>
          </div>
          <div class="small_error mt-1 tracking-wide text-red-500">
              <small>{{ errors.username }}</small>
          </div>

          <div class="floating_label">
            <font-awesome-icon class="registrasi_input_icon" :icon="faKey"/>
            <Field class="registrasi_input" :class="{'invalid_input':errors.password}" type="password" name="password" placeholder="password" autocomplete="off"/>
            <span class="registrasi_input_label">password</span>
          </div>
          <div class="small_error mt-1 tracking-wide text-red-500">
              <small>{{ errors.password }}</small>
          </div>

          <div class="floating_label">
            <font-awesome-icon class="registrasi_input_icon" :icon="faIdCard"/>
            <Field class="registrasi_input" :class="{'invalid_input':errors.full_name}" type="text" name="full_name" placeholder="nama lengkap" autocomplete="off"/>
            <span class="registrasi_input_label">nama lengkap</span>
          </div>
          <div class="small_error mt-1 tracking-wide text-red-500">
              <small>{{ errors.full_name }}</small>
          </div>

          <div class="floating_label">
            <font-awesome-icon class="registrasi_input_icon" :icon="faCalendar"/>
            <Field class="registrasi_input_date" :class="{'invalid_input':errors.birthdate}" type="date" name="birthdate" placeholder="tanggal lahir" autocomplete="off"/>
          </div>
          <div class="small_error mt-1 tracking-wide text-red-500">
              <small>{{ errors.birthdate }}</small>
          </div>

          <div class="select_with_icon" :class="{'invalid_input':errors.gender}">
            <font-awesome-icon class="registrasi_input_icon" :icon="faPersonHalfDress"/>
            <Field as="select" name="gender" style="-webkit-appearance: none;">
              <option value="">-- jenis kelamin --</option>
              <option value="laki-laki">laki-laki</option>
              <option value="perempuan">perempuan</option>
            </Field>
          </div>
          <div class="small_error mt-1 tracking-wide text-red-500">
              <small>{{ errors.gender }}</small>
          </div>

          <button class="registrasi_submit_btn">
            Daftar
          </button>

          <center>
            <router-link to="/login" class="registrasi_login_href">
              Login
            </router-link>
          </center>

        </Form>

      </div>

    </section>

</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faIdCard, faAt, faCalendar, faPersonHalfDress, faUser, faKey } from '@fortawesome/free-solid-svg-icons'
  import { Field, Form }          from "vee-validate";
  import registerValidationSchema from '@/validations/registerValidationSchema'

  // import { computed } from 'vue';
  import { useStore } from 'vuex'

  export default {
      name: 'RegisterView',
      components: {
        FontAwesomeIcon,
        Form,
        Field,
      },
      setup() {
        const store = useStore();

        /**
         * Do Register
         * ========
         */
          const doRegister = (event) => {
            const formRegister = new FormData(event.target); 

            for ( const key in event ) {
              formRegister.set(key, event[key])
            }

            store.dispatch("register/DO_REGISTER",formRegister);
        }

        return {
          faIdCard, faAt, faCalendar, faPersonHalfDress, faUser, faKey,
          registerValidationSchema,
          doRegister,
        }
      }
  }

</script>

<style lang="css" scoped>

::-webkit-calendar-picker-indicator {
    opacity: 0;
}

.registrasi_container {
  @apply w-full min-h-screen bg-gray-200 flex justify-center items-center px-8;
}

.registrasi_form {
  @apply bg-docbot-green-200 w-full max-w-md rounded-lg;
}

.registrasi_form_title {
  @apply text-gray-100 text-center text-4xl font-semibold pt-10 pb-10;
  font-family: 'Poppins', sans-serif;
}

.registrasi_form_body {
  @apply px-8 pb-10;
}

.registrasi_input_icon {
  @apply absolute right-4 bg-gray-100 text-lg text-gray-600 opacity-70;
}

.registrasi_input {
  @apply w-full relative z-10 pl-4 pr-12 py-3 bg-transparent focus:outline-none placeholder-transparent border border-gray-100 rounded-md;
}

.small_error {
  @apply mb-10;
}

.registrasi_input_date {
  @apply w-full relative z-10 pl-4 pr-4 py-3 bg-transparent focus:outline-none placeholder-transparent border border-gray-100 rounded-md;
}

.registrasi_input_label {
  @apply absolute -z-0 top-3 left-4 text-neutral-500 duration-300 opacity-80;
}

.registrasi_submit_btn {
  @apply w-full py-3 mb-6 text-gray-600 border border-4 border-gray-200 text-xl font-semibold rounded-full;
  font-family: 'Poppins', sans-serif;
}

.registrasi_login_href {
  @apply underline text-gray-600;
}

.invalid_input {
  @apply border border-red-500;
}

</style>