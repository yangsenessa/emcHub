<template>
  <div class="works-card">
<!--    <Row justify="center" align="bottom">-->
<!--      <Col span="4">-->
<!--      </Col>-->
<!--      <Col span="4"><p style="height: 80px;background: #4d9cf1">col-4</p></Col>-->
<!--      <Col span="4"><p style="height: 60px;background: #4d9cf1">col-4</p></Col>-->
<!--      <Col span="4"><p style="height: 60px;background: #4d9cf1">col-4</p></Col>-->
<!--      <Col span="4"><p style="height: 80px;background: #4d9cf1">col-4</p></Col>-->
<!--      <Col span="4"><p style="height: 100px;background: #4d9cf1">col-4</p></Col>-->
<!--    </Row>-->
    <!--    <div id="content">-->
    <!-- 使用组件 -->
    <!--      <vue-waterfall-easy>111111</vue-waterfall-easy>-->
    <!--    </div>-->
  </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";

export default {
  name: "index.vue",
  components: {
    vueWaterfallEasy
  }
}
</script>

<style scoped lang="scss">
.works-card {
  width: 1200px;
  margin: 0 auto;

  .works-card-item {
    height: 300px;
    background: #2b85e4;
    border-radius: 20px;
  }
}
</style>
