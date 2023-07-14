<template>
  <div class="container">
    <BaseHeader></BaseHeader>
    <model-form></model-form>
  </div>
</template>

<script>
import Search from '@/components/Search';
import ModelForm from '@/components/indexDecorate/ModelForm';
export default {
  name: 'Index',
  mounted () {
  },
  methods: {



    },
  components: {
    Search,
    ModelForm,
  }
};
</script>

<style scoped lang="scss">
 @import '../assets/styles/coupon.scss';
.container {
  @include sub_background_color($light_background_color);
}
</style>
<style>
.hover-search {
  width: 100%;
  height: 60px;
  transform: translateY(-200px);
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 9999;
  box-shadow:0 0 10px 2px rgb(90 90 90 / 60%);
  transition: 0.35s;
}
.show {
  transform: translateY(0);
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  top: 0;
}
</style>
