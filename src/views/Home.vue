<template>
  <div class="home">
    <AccountCreation/>
  </div>
</template>

<script>
// @ is an alias to /src
import AccountCreation from '@/components/AccountCreation.vue'

export default {
  name: 'Home',
  components: {
    AccountCreation
  }
}
</script>
