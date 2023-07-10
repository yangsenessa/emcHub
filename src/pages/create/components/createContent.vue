<template>
  <div>
    <div class="create-content">
      <img class="create-content-img1" src="@/assets/images/logo-tittle.png"/>
      <img class="create-content-img2" src="@/assets/images/EMCHub.png"/>
      <span class="create-content-time">2023.12.30 10:30:66</span>
    </div>
    <div class="create-content-con">
      <span>未来世界的古怪而异想天开的图像，采用韦斯·安德森 (Wes Anderson) 标志性的对称风格设计，具有高饱和度的色彩。这个世界充满了奇幻和不寻常的建筑，高耸的尖顶和球状的圆顶涂上了明亮的粉红色、绿色和蓝色。建筑物对称布局，在繁华的大都市中营造出一种秩序感和平衡感。天空中充满了飞艇和会飞的汽车，以一种壮观的、迷宫般的模式移动。由 AI 驱动的光滑白色机器人在运送包裹周围盘旋，而由塑料制成的巨大发光海洋生物则在天空中缓慢漂浮。这个乌托邦的色彩丰富而饱和，柔和的粉红色和蓝色与鲜艳的绿色和黄色形成鲜明对比。一切都经过精心安排，一排排整齐的建筑和有序的空中交通就是明证。总的来说，这张照片抓住了韦斯·安德森 (Wes Anderson) 风格的精髓，包括对称和明亮、古怪的设计元素。它是对未来世界的俏皮和异想天开的表现，在那里一切皆有可能，天空是极限。</span>
      <div class="create-content-con-img">
        <img src="@/assets/images/emc/image 9.png" class="goods-detail-img"/>
        <img src="@/assets/images/emc/image 9.png" class="goods-detail-img"/>
      </div>
    </div>
    <div class="create-content">
      <img class="create-content-img1" src="@/assets/images/logo-tittle.png"/>
      <img class="create-content-img2" src="@/assets/images/EMCHub.png"/>
      <span class="create-content-time">2023.12.30 10:30:66</span>
    </div>
    <div class="create-content-shen">
      生成中
    </div>
    <div class="create-content-bottom">
       <Input maxlength="2000" show-word-limit />
      <Button>翻译</Button>
      <Button>发送</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "createContent",
  methods:{
    // goCreateDetail(){
    //   this.$router.push('/CreateDetail')
    // }
  }
}
</script>

<style scoped lang="scss">

.create-content {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  height: 40px;
  //justify-content: center;
  align-items: center;
}

.create-content-img1 {
  width: 57px;
  height: 40px;
  flex-shrink: 0;
}

.create-content-img2 {
  width: 180px;
  height: 32px;
  margin-left: 10px;
}

.create-content-time {
  color: #333;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-left: 20px;
}

.create-content-con {
  //padding: 57px 15px 70px 0;
  padding: 15px 70px 0px 57px;

  span {
    color: #333;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }

}

.create-content-con-img {
  margin-top: 10px;
  display: flex;
  flex-direction: row;

  img {
    width: 221.078px;
    height: 294.771px;
    flex-shrink: 0;
    border-radius: 6px;
    padding-right: 10px;
    //background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  }
}
.create-content-shen{
  padding: 15px 70px 0px 57px;
  min-height: 200px;
}

.create-content-bottom{
  height: 71px;
  border-radius: 6px;
  background: #EEE;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  button{
    width: 98px;
    height: 36px;
    border-radius: 26px;
    background: linear-gradient(90deg, #834FFC 0%, #E5AEFF 100%);
  }

}
/deep/ .ivu-input{
  height: 71px;
  background-color: #EEE;
}
/deep/ .ivu-input-word-count{
  background: #EEE;
  color: #333;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  //line-height: 24px;
}


</style>
