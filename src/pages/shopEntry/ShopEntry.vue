<template>
  <div class="upload">
    <div class="upload-content">
      <div class="upload-content-item">
        <img v-if="current >= 0" src="@/assets/images/emc/Ellipse 8.png"/>
        <span>EDIT MODEL BASE INFO</span>
      </div>
      <div class="upload-content-item">
        <img v-if="current >= 1" src="@/assets/images/emc/Ellipse 8.png"/>
        <img v-else src="@/assets/images/emc/Ellipse8.png"/>
        <span>EDIT MODEL DETAIL</span>
      </div>
      <div class="upload-content-item">
        <img v-if="current >= 2" src="@/assets/images/emc/Ellipse 8.png"/>
        <img v-else src="@/assets/images/emc/Ellipse8.png"/>
        <span>UPLOAD MODEL</span>
      </div>
      <div class="upload-content-item">
        <img v-if="current >= 3" src="@/assets/images/emc/Ellipse 8.png"/>
        <img v-else src="@/assets/images/emc/Ellipse8.png"/>
        <span>PUBLISH MODEL</span>
      </div>
      <!--      <Button style="margin-top:16px" type="primary" @click="next">Next step</Button>-->
    </div>
    <uploadFirst
      v-if="current === 0"
      :currentAdd="currentAdd"
      @uploadFirstModelId="uploadFirstModelId"
      @uploadFirstModelParams="uploadFirstModelParams"
      :firstParams="firstParams"
    />
    <uploadTwo v-if="current === 1"
               :model_id="model_id"
               :twoParams="twoParams"
               @uploadTwoModalParams="uploadTwoModalParams"
               :currentSub="currentSub"
               :currentAdd="currentAdd"
    />
    <uploadTree v-if="current === 2"
                :currentSub="currentSub"
                :currentAdd="currentAdd"
                :model_id="model_id"
    />
    <uploadFour v-if="current === 3"
                :currentSub="currentSub"
                :model_id="model_id"
    />
  </div>
</template>
<script>
import uploadFirst from "@/pages/shopEntry/uploadFirst";
import uploadTwo from "@/pages/shopEntry/uploadTwo";
import uploadTree from "@/pages/shopEntry/uploadTree";
import uploadFour from "@/pages/shopEntry/uploadFour";
import {addNewModel, modModelDetailInfo} from "@/api/upload.js";

export default {
  data() {
    return {
      current: 0,
      model_id: null,
      firstParams:null,
      twoParams:null
    };
  },
  components: {
    uploadFirst,
    uploadTwo,
    uploadTree,
    uploadFour,
  },
  methods: {
    uploadFirstModelParams(val){
      this.firstParams=val
    },
    // 第二步保存的值
    uploadTwoModalParams(val){
      this.twoParams=val
    },
    uploadFirstModelId(id) {
      console.log(id,'id')
      this.model_id = id
    },
    currentAdd(num) {
      this.current += num
    },
    currentSub(num) {
      this.current -= num
    },
  }
  ,
  mounted() {
  }
  ,
}
;
</script>
<style lang="scss" scoped>
.upload {
  background: #fff;
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
  background: linear-gradient(90deg, #834ffc 0%, #e5aeff 100%);
}
</style>
