<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Digi-safe Logo"
          class="shrink mr-2"
          contain
          src="@/assets/DS_logo.jpg"
          transition="scale-transition"
          width="40"
        />DIGI-SAFE
      </div>
    </v-app-bar>

    <v-main>
      <!-- <AccountCreation/>
      <Login/> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import AccountCreation from './components/AccountCreation';
// import Login from './components/Login';

export default {
  name: 'App',

  components: {
    // AccountCreation,
    // Login,
  },

  data: () => ({
    //
  }),
};
</script>
