<template>
  <div class="create">
    <div class="create-left">
      <img alt="" src="https://www.bugela.com/cjpic/frombd/0/253/2650769822/1477358335.jpg"/>
    </div>

    <div class="create-right">
      <Button class="create-right-upload">
        <span>更新</span>
        <br/>
        <span>对该图进行重新描绘在生成</span>
      </Button>

      <div class="create-right-save">
        <Button>发布模型</Button>
        <Button>保存模型</Button>
      </div>
      <Form style="margin-top: 20px" :model="formItem" :label-width="62">
        <FormItem label='节点信息'>
          <Input v-model="formItem.input"></Input>
        </FormItem>
        <FormItem label="模型">
          <Input v-model="formItem.select">
          </Input>
        </FormItem>
        <FormItem label="生成时间">
          <Input>
          </Input>
        </FormItem>
        <FormItem label="哈希信息">
          <Input/>
        </FormItem>
        <FormItem label="图片大小">
          <Input>
          </Input>
        </FormItem>
      </Form>
      <span class="create-right-ti">输入提示词</span>
      <br/>
      <span class="create-right-con">未来世界的古怪而异想天开的图像，采用韦斯·安德森 (Wes Anderson) 标志性的对称风格设计，具有高饱和度的色彩。这个世界充满了奇幻和不寻常的建筑，高耸的尖顶和球状的圆顶涂上了明亮的粉红色、绿色和蓝色。建筑物对称布局，在繁华的大都市中营造出一种秩序感和平衡感。天空中充满了飞艇和会飞的汽车，以一种壮观的、迷宫般的模式移动。由 AI 驱动的光滑白色机器人在运送包裹周围盘旋，而由塑料制成的巨大发光海洋生物则在天空中缓慢漂浮。这个乌托邦的色彩丰富而饱和，柔和的粉红色和蓝色与鲜艳的绿色和黄色形成鲜明对比。一切都经过精心安排，一排排整齐的建筑和有序的空中交通就是明证。总的来说，这张照片抓住了韦斯·安德森 (Wes Anderson) 风格的精髓，包括对称和明亮、古怪的设计元素。它是对未来世界的俏皮和异想天开的表现，在那里一切皆有可能，天空是极限。</span>
      <br/>
      <br/>
      <span style="margin-top: 20px" class="create-right-ti">
模型标签
      </span>
      <br/>
      <span class="create-right-con">
        印,绘画,漫画,素描,糟糕的解剖结构，糟糕的手，丑陋，重复，残缺不全，多余的手指，变异的手，画得不好的手，突变，糟糕的解剖结构，额外的四肢，克隆的脸，毁容，毛比例，畸形的四肢、缺失的手臂、多余的手臂、多余的腿、融合的手指、过多的手指
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateDetail",
  data() {
    return {
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.create {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

}

.create-left {
  width: 63%;
  height: 93vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
    height: 90%;
    flex-shrink: 0;
    background: #1c2438;
  }

}

.create-right {
  width: 35%;
  padding: 20px;
  background: #EEE;
  margin-top: 20px;
}

.create-right-upload {
  width: 98%;
  margin: 10px auto;
  height: 52px;
  flex-shrink: 0;
  border-radius: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #834FFC 0%, #E5AEFF 100%);

  span {
    color: #FFF;
    text-align: center;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
}

.create-right-save {
  display: flex;
  width: 88%;
  margin: 10px auto;
  flex-direction: row;
  justify-content: space-between;

  button {
    width: 45%;
    height: 35px;
    flex-shrink: 0;
    border-radius: 26px;
    color: #FFF;
    text-align: center;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    background: linear-gradient(90deg, #834FFC 0%, #E5AEFF 100%);
  }
}

.create-right-ti {
  color: #333;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

.create-right-con {
  color: #333;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}
</style>
