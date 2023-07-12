<template>
  <div class="upload">
    <div class="upload-content">
      <div class="upload-content-item">
        <img v-if="current>=0" src="@/assets/images/emc/Ellipse 8.png"/>
        <span>编辑模板信息</span>
      </div>
      <div class="upload-content-item">
        <img v-if="current>=1" src="@/assets/images/emc/Ellipse 8.png"/>
        <img v-else src="@/assets/images/emc/Ellipse8.png"/>
        <span>编辑版本信息</span>
      </div>
      <div class="upload-content-item">
        <img v-if="current>=2" src="@/assets/images/emc/Ellipse 8.png"/>
        <img v-else src="@/assets/images/emc/Ellipse8.png"/>
        <span>上传模型</span>
      </div>
      <div class="upload-content-item">
        <img v-if="current>=3" src="@/assets/images/emc/Ellipse 8.png"/>
        <img v-else src="@/assets/images/emc/Ellipse8.png"/>
        <span>发布模型</span>
      </div>
      <!--      <Button style="margin-top:16px" type="primary" @click="next">Next step</Button>-->
    </div>
    <uploadFirst v-if="current===0"/>
    <uploadTwo v-if="current===1"/>
    <uploadTree v-if="current===2"/>
    <uploadFour v-if="current===3"/>
    <div class="upload-content-but">
      <Button class="upload-content-xia" v-if="current!==3" @click="next">下一步</Button>
      <Button class="upload-content-xia"
              @click="up"
              v-if="current!==0"
              style="margin-left: 30px">上一步
      </Button>
    </div>
  </div>
</template>
<script>
import uploadFirst from "@/pages/shopEntry/uploadFirst";
import uploadTwo from "@/pages/shopEntry/uploadTwo";
import uploadTree from "@/pages/shopEntry/uploadTree";
import uploadFour from "@/pages/shopEntry/uploadFour";
import {modelUpload} from "@/api/upload";

export default {
  data() {
    return {
      current: 0,
      file: ''
    }
  },
  components: {
    uploadFirst,
    uploadTwo,
    uploadTree,
    uploadFour
  },
  methods: {
    getFile(file) {
      this.file = file
      console.log(file, 'file')
    },
    next() {
      if (this.current == 3) {
        this.current = 0;
      } else {
        this.current += 1;
      }
    },
    up() {
      if (this.current == 0) {
        this.current = 3;
      } else {
        this.current -= 1;
      }

  },
  mounted() {
  },
};
</script>
<style lang="scss" scoped>
.upload {
  background: #FFF;
}

.upload-content {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}

.upload-content-item {
  width: 25%;
  height: 66px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;

  img {
    width: 66px;
    height: 100%;
    background: white;
    border-radius: 50%;
  }

  span {
    margin-left: 20px;
    color: #333;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
}

.upload-content-but {
  //width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.upload-content-xia {
  width: 120px;
  height: 36px;
  border-radius: 6px;
  background: linear-gradient(90deg, #834FFC 0%, #E5AEFF 100%);
}
</style>
