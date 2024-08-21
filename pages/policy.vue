<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <div class="title__panel" style="">
      <div class="gradient"></div>
      <h1 class="title">
        {{ $t("policy.title") }}
      </h1>
    </div>
    <div class="policy">
      <ol>
        <li>
          {{ $t("policy.1") }}
        </li>
        <li>
          {{ $t("policy.2") }}
        </li>
        <li>
          {{ $t("policy.3") }}
        </li>
        <li>
          {{ $t("policy.4") }}
        </li>
        <li>
          {{ $t("policy.5") }}
        </li>
        <li>
          {{ $t("policy.6") }}
        </li>
        <li>
          {{ $t("policy.7") }}
          <a href="mailto:kontakt@vectio.pl">
            {{ $t("mail") }}
          </a>
        </li>
      </ol>
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
  height: 500px;
  margin-top: 200px;
  margin-bottom: 30px;
  position: relative;
}
.policy {
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  font-size: 16px;
  padding: 30px;

  @media (min-width: 800px) {
    padding: 50px;
    font-size: 20px;
  }
}

.gradient {
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 100%;
  border-radius: 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
}

ol {
  margin-left: 10px;
  text-align: justify;
}

.title {
  color: #fff;
  position: relative;
  top: 400px;
  left: 50px;
  font-size: 50px;
}
</style>
