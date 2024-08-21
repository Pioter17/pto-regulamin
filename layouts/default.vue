<template>
  <v-app id="inspire" style="background-color: antiquewhite">
    <v-app-bar
      dense
      class="d-flex align-center justify-center pr-16"
      height="100"
    >
      <div class="top__bar" style="gap: 20px">
        <div class="first">
          <a href="/store">
            <img class="icon" src="../assets/images/emoji.png" alt="" />
          </a>
          <h1>Polskie Towarzystwo O</h1>
        </div>
        <div class="second">
          <NuxtLink class="nav__button" to="/terms">
            {{ $t("terms") }}</NuxtLink
          >
          <NuxtLink class="nav__button" to="/">
            {{ $t("policy.title") }}</NuxtLink
          >
          <div class="select__wrapper">
            <v-select
              :items="langs"
              hide-details
              v-model="value"
              variant="solo"
            ></v-select>
          </div>
        </div>
      </div>
    </v-app-bar>

    <v-container>
      <NuxtPage />
    </v-container>
  </v-app>
</template>

<script setup>
import { watch } from "vue";
const { locale, setLocale } = useI18n();
const langs = ref(["pl", "en"]);
const value = ref("pl");

watch(value, (newValue) => {
  setLocale(newValue);
});
</script>

<style scoped>
.select__wrapper {
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
}

.top__bar {
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
}

header {
  padding-right: 0;
}

.v-app-bar {
  padding-right: 0;
}

.first {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;

  @media (min-width: 1000px) {
    width: 50%;
    max-width: 500px;
  }
}

h1 {
  font-size: 20px;
}

.second {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (min-width: 1000px) {
    width: 50%;
    max-width: 500px;
  }
}

.icon {
  width: 60px;
  height: 60px;
}

.nav__button {
  background-color: rgb(233, 225, 220);
  font-size: 14px;
  width: 110px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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

  @media (min-width: 600px) {
    font-size: 18px;
    width: 130px;
    height: 50px;
    padding: 10px;
  }
}

.nav__button:hover {
  text-decoration: none;
  color: white;
  background-color: rgb(69, 65, 62);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}

.v-input__details {
  grid-area: auto;
}
</style>
