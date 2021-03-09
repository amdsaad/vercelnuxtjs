<template>
  <div class="profile">
    <div class="profile-wraper">
      <div class="profile-nav">
        <button>My Information</button>
        <button>Bookings</button>
      </div>
      <div class="my-info" v-if="show_my_info">
        <form>
          <div class="input-group">
            <label for="family_name">Family Name</label>

            <input
              type="text"
              name="family_name"
              placeholder="family name"
              v-model="user.family_name"
            />
          </div>
          <div class="input-group">
            <label for="given_name">Given Name</label>
            <input
              type="text"
              name="given_name"
              placeholder="given name"
              v-model="user.given_name"
            />
          </div>
          <div class="input-group">
            <label for="email">Given Name</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              v-model="user.email"
            />
          </div>
          <div class="picture">
            <img :src="user.picture" alt="" />
          </div>
          <button>Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show_my_info: true,
      show_bookings: false,
    };
  },
  async asyncData({ $auth, redirect, $axios }) {
    const user = $auth.user;
    if (!user) {
      redirect(302, "/");
    } else {
      //   //find user in database
      //   const user_in_db = await $axios.$get("http://icanhazip.com");

      // add user to database

      const add_user_to_db = await $axios.$post("/api/user", {
        family_name: user.family_name,
        given_name: user.given_name,
        email: user.email,
        nickname: user.nickname,
        picture: user.picture,
      });

      console.log(add_user_to_db);

      return { user };
    }
  },
};
</script>

<style>
@import url("~/assets/scss/style.css");
</style>
