<template>
  <div class="container">
    <BaseHeader></BaseHeader>
    <model-form></model-form>
  </div>
</template>

<script>
import Search from '@/components/Search';
import ModelForm from '@/components/indexDecorate/ModelForm';
import storage from "@/plugins/storage";
export default {
  name: 'Index',
  mounted () {
    this.getIndexData();
    let that = this;
    if(storage.getItem('userInfo')){
      this.getAutoCoup()
    }
  },
  data () {
    return {
      autoCoupList:[],
      showCpmodel:false,
      modelForm: { list: [] }, // 楼层装修数据
      topAdvert: {}, // 顶部广告
    };
  },
  // created(){

  // },
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
