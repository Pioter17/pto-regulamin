<template>
  <v-app id="inspire" style="background-color: antiquewhite">
    <v-app-bar dense class="d-flex align-center justify-center pa-6">
      <v-container class="d-flex align-center justify-center" style="gap: 20px">
        <a href="/store">
          <img
            style="width: 120px; height: 120px"
            src="https://emojings.com/wp-content/uploads/2020/03/1-5-12.png"
            alt=""
          />
        </a>
        <h1>Polskie Towarzystwo O</h1>
        <NuxtLink class="nav__button" to="/terms">Regulamin</NuxtLink>
        <NuxtLink class="nav__button" to="/policy"
          >Polityka prywatności</NuxtLink
        >
        <v-select :items="langs" v-model="value"></v-select>
      </v-container>
    </v-app-bar>

    <v-container>
      <NuxtPage />
    </v-container>
  </v-app>
</template>

<script setup>
const langs = ref(["pl", "en"]);
const value = ref("pl");
</script>

<style>
.nav__button {
  background-color: rgb(233, 225, 220);
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 16px;
  padding: 16px;
  color: rgb(0, 0, 0);
  text-decoration: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.nav__button:hover {
  text-decoration: none;
  color: white;
  background-color: rgb(69, 65, 62);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}
</style>
