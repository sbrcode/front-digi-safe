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

      <v-spacer/>

      <v-btn href="/login" >
        Already Have An Account ?
      </v-btn>

    </v-app-bar>

    <v-main>
        <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data: () => ({
    //
  }),
};
</script>
