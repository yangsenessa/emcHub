<template>
  <div class="create">
    <div class="create-left">
      <span @click="tabClick">文本创作</span>
      <span @click="tabClickTwo" style="margin-left: 20px">图生图</span>
      <createContent v-if="tab==='first'"/>
      <div v-if="tab==='two'" class="create-upload">
        <div class="create-upload-div">
          <img  src="@/assets/images/emc/Vector.png" />
        </div>
      </div>
    </div>
    <div class="create-right">
      <Form :model="formItem" :label-width="60">
        <FormItem label="模式">
          <Select v-model="formItem.input"></Select>
        </FormItem>
        <FormItem label="模型">
          <Select v-model="formItem.select">
          </Select>
        </FormItem>
        <FormItem label="风格">
          <Select>
          </Select>
        </FormItem>
        <FormItem label="基础设置">
          <div class="basic-sz">
            <div class="basic-sz-top">
              <span>
                图片宽度
                </span>
              <p>
                75
              </p>
              <span>px</span>
            </div>
            <div class="basic-sz-top">
              <span>
                图片高度
                </span>
              <p>
                75
              </p>
              <span>px</span>
            </div>
          </div>
        </FormItem>
        <FormItem label="节点选择">
          <Select>
          </Select>
        </FormItem>
      </Form>
      <div class="create-right-bottom">
        <Button @click="goSeeNode">查看节点视图</Button>
      </div>

    </div>
  </div>
</template>

<script>
import createContent from "@/pages/create/components/createContent";
export default {
  name: "Create",
  components: {
    createContent,
  },
  data() {
    return {
      tab:'first',
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
    };
  },
  mounted() {
    // this.init();
  },
  methods: {
    tabClick(){
      this.tab='first'
    },
    tabClickTwo(){
      this.tab='two'
    },
    goSeeNode(){
      this.$router.push('/nodeSee')
    }

  },
};
</script>

<style scoped lang="scss">
.create {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 43px;
}

.create-left {
  width: 70.5%;
  //height: 93vh;
  span {
    color: #555;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
}

.create-right {
  max-height: 920px;
  width: 29.5%;
  flex-shrink: 0;
  border-radius: 6px;
  background: #EEE;
  padding: 0px 10px 0px 10px;
}

/deep/ .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
  //height: 36px;
  //flex-shrink: 0;
  border-radius: 6px;
  background: #FFF;
}

.basic-sz {
  //width: 344px;
  height: 123px;
  border-radius: 6px;
  background: #FFF;
  flex-shrink: 0;
}
.basic-sz-top{
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  p{
    width: 20%;
    text-align: center;
    background: #EEE;
  }
  span{
    text-align: center;
    width:40%;
  }
}
.create-right-bottom{
  display: flex;
  flex-direction: row-reverse;
  button{
    width: 117px;
    height: 35px;
    border-radius: 26px;
    background: linear-gradient(90deg, #834FFC 0%, #E5AEFF 100%);
  }
}
.create-upload{
  width: 100%;
  height: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.create-upload-div{
  width: 692px;
  height: 440px;
  flex-shrink: 0;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 88px;
    height: 71px;
  }
}



</style>
