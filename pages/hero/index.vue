<template>
  <div class="hero"></div>
</template>

<script>
export default {
  middleware: "auth",

  async created() {},

  async asyncData({ redirect, $axios, $auth }) {
    const hero = await $axios.$get(`/api/user/${$auth.user.email}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(hero);
  },
};
</script>

<style></style>
