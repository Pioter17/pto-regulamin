<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <div class="title__panel" style="">
      <div class="gradient"></div>
      <h1 class="title">
        {{ $t("downloadTitle") }}
      </h1>
    </div>
    <div class="store">
      <p>
        {{ $t("download") }}
      </p>
      <div class="images">
        <a
          href="https://play.google.com/store/apps/details?id=com.easytech.wc3&hl=pl"
          target="_blank"
        >
          <img
            src="/assets/images/google-store.png"
            class="store__link"
            alt="Google store link"
          />
        </a>
        <a
          href="https://apps.apple.com/pl/story/id1498472756?itscg=10000&itsct="
          target="_blank"
        >
          <img
            src="/assets/images/apple-store.png"
            class="store__link"
            alt="Apple store link"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.title__panel {
  background-image: url("https://www.forbes.com/advisor/wp-content/uploads/2023/01/pto_policy_examples_-_article_image.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  width: 100%;
  max-width: 1200px;
  height: 400px;
  margin-top: 100px;
  margin-bottom: 30px;
  position: relative;
}

.gradient {
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 100%;
  border-radius: 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
}

.store {
  background-color: white;
  border-radius: 20px;
  width: 100%;
  max-width: 1200px;
  font-size: 20px;
  padding: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 1300px) {
    flex-direction: row;
  }
}

.store__link {
  height: 80px;
  width: auto;

  @media (min-width: 450px) {
    height: 100px;
  }
}

.images {
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 800px) {
    flex-direction: row;
  }
}

h3 {
  margin: 20px;
}

.title {
  color: #fff;
  position: relative;
  margin: 20px;
  top: 100px;

  @media (min-width: 600px) {
    top: 200px;
  }

  @media (min-width: 1300px) {
    left: 10px;
    top: 200px;
    font-size: 50px;
  }
}

p {
  font-size: 30px;
  text-align: center;

  @media (min-width: 800px) {
    text-align: left;
  }
}
</style>
