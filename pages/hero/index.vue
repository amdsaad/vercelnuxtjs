<template>
  <div class="hero"></div>
</template>

<script>
export default {
  middleware: "auth",

  async created() {
    const hero = await this.$axios.$get(`/api/user/${this.$auth.user.email}`);

    console.log(hero);
  },

  async asyncData({ redirect, $axios, $auth }) {},
};
</script>

<style></style>
