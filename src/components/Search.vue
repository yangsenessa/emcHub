<template>
  <div>
    <div class="container">
    </div>
  </div>
</template>

<script>
import storage from '@/plugins/storage.js'
import {hotWords} from '@/api/goods.js'
export default {
  name: 'search',
  props: {
  },
  data () {
    return {
    };
  },
  methods: {
    // selectTags (item) { // 选择热门标签
    //   this.searchData = item;
    //   this.search();
    // },
    search () { // 全平台搜索商品
      const url = this.$route.path;
      // if(url === '/goodsList'){
      if(Object.is(url,'/goodsList')){
        this.$emit('search', this.searchData)
      }else{
        this.$router.push({
          path: '/goodsList',
          query: { keyword: this.searchData }
        });
      }
    },
    searchStore () { // 店铺搜索商品
      this.$emit('search', this.searchData)
    }
  },
  computed: {
  },
  created () {
    this.searchData = this.$route.query.keyword
  }
};
</script>
<style scoped lang="scss">
.container {
  margin: 30px auto;
  width: 460px;
  position: relative;
  span{
    display: block;
    text-align: center;
    width: 100%;
    font-size: 30px;
    line-height: 30px;
  }
}
.search {
  margin: 10px 0px 5px 0;
  /deep/ .ivu-input.ivu-input-large {
    border: 2px solid $theme_color;
    font-size: 12px;
    height: 34px;
    &:focus {
      box-shadow: none;
    }
  }
  /deep/ .ivu-input-group-append {
    border: 1px solid $theme_color;
    border-left: none;
    height: 30px;
    background-color: $theme_color;
    color: #ffffff;
    button {
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
    }
  }
}
.store-search{
  width:55.6px;
  padding: 0 9px;
  border-radius: 0;
  border-radius: 3px;
  &:nth-child(2){
    width:55px;
    margin-left: -2px;
    border-radius: 3px;
  }
}
.btn-div{
  position: relative;
  height: 0px;
  top: -38px;
  left: 352px;
}
</style>
