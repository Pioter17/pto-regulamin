<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <div class="title__panel" style="">
      <div class="gradient"></div>
      <h1 class="title">Regulamin</h1>
    </div>
    <div class="store">
      <a href="https://play.google.com/store/apps/details?id=com.easytech.wc3&hl=pl">
        <img src="/assets/images/google-store.png" class="store__link" alt="Google store link">
        </a>
        <a href="">

          <img src="/assets/images/apple-store.png" class="store__link" alt="Apple store link">
          </a>
    </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title__panel {
  background-image: url("https://www.forbes.com/advisor/wp-content/uploads/2023/01/pto_policy_examples_-_article_image.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  width: 1500px;
  height: 500px;
  margin-top: 150px;
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
  width: 1500px;
  height: 200px;
  font-size: 20px;
  padding: 10px;
  padding-bottom: 20px;
}

.store__link {
  height: 150px;
  width: auto;
}

h3 {
  margin: 20px;
}

.title {
  color: #fff;
  position: relative;
  top: 400px;
  left: 50px;
  font-size: 50px;
}
</style>

