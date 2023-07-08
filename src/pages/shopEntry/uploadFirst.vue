<template>
  <div class="upload-first-content">
    <Form ref="formValidate"
          :model="formValidate"
          label-position="top"
          :rules="ruleValidate"
    >
      <FormItem label="模型名称" prop="name">
        <Input v-model="formValidate.name"></Input>
      </FormItem>
      <FormItem label="类型" prop="city">
        <Select v-model="formValidate.city">
        </Select>
      </FormItem>
      <FormItem   label="类别" prop="city">
        <Tag closable class="model-uploadFirst-tag">标签一</Tag>
        <Tag closable class="model-uploadFirst-tag">标签二</Tag>
        <Tag closable class="model-uploadFirst-tag">标签二</Tag>
        <Select style="width: 62%;margin-left: 10px" v-model="formValidate.city"></Select>
      </FormItem>
      <FormItem label='关于你模型的描述' prop="desc">
        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 5,maxRows: 10}"
               placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="关于模型的使用" prop="gender">
        <div style="display: flex;flex-direction: row">
          <div class="model-use-daGou"
            @click="getAgreeShow()"
            :class="agreeShow ? 'tick' : ' '"
          ></div>
          <span class="model-zi">使用时注册出处</span>
        </div>
        <div style="display: flex;flex-direction: row;margin-top: 10px">
          <div class="model-use-daGou"
               @click="getAgreeShow()"
               :class="agreeShow ? 'tick' : ' '"
          ></div>
          <span class="model-zi">共享此模型的文件</span>
        </div>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: "uploadFirst",
  data() {
    return {
      agreeShow: false, // 控制点击
      formValidate: {
        name: '',
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
      },
      ruleValidate: {
        name: [
          {required: true, message: 'The name cannot be empty', trigger: 'blur'}
        ],
        mail: [
          {required: true, message: 'Mailbox cannot be empty', trigger: 'blur'},
          {type: 'email', message: 'Incorrect email format', trigger: 'blur'}
        ],
        city: [
          {required: true, message: 'Please select the city', trigger: 'change'}
        ],
        gender: [
          {required: true, message: 'Please select gender', trigger: 'change'}
        ],
        interest: [
          {required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change'},
          {type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change'}
        ],
        date: [
          {required: true, type: 'date', message: 'Please select the date', trigger: 'change'}
        ],
        time: [
          {required: true, type: 'string', message: 'Please select time', trigger: 'change'}
        ],
        desc: [
          {required: true, message: 'Please enter a personal introduction', trigger: 'blur'},
          {type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    getAgreeShow() {
      this.agreeShow = !this.agreeShow; // 控制点击
    },
  }
}
</script>

<style scoped lang="scss">
.upload-first-content {
  //background: #4d9cf1;
  width: 692px;
  margin: 0 auto;
  margin-top: 40px;
}
/deep/ .ivu-form-item-error .ivu-input {
  border: 1px solid #BF61F9;
}

/deep/ .ivu-input {
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.10);
  height: 47px;
}

/deep/ .ivu-form-item-error-tip {
  color: #BF61F9;
}

/deep/ .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
  background: rgba(0, 0, 0, 0.10);
}

// 第一个勾
.model-use-daGou{
  width: 29px;
  height: 28px;
  border: 1px solid rgba(0, 0, 0, 0.10) !important;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.10);
}
.model-zi{
  color: #333;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  margin-left: 10px;
}

// 打勾的那个勾
.tick::after {
  content: " ";
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 12px;
  border-width: 0 0 2px 2px;
  overflow: hidden;
  border-color: #2A343D;
  border-style: solid;
  -webkit-transform: rotate(-50deg);
  transform: rotate(-50deg);
  left: 4px;
  top: 4px;
}

// 第二个钩子
.model-use-gou1 {
  position: absolute;
  top: 60px;
  left: 20px;
  display: flex;
  flex-direction: row;
}
.model-bottom {
  width: 100%;
  margin: 100px auto;
  display: flex;
  justify-content: center;
}
.model-button{
  width: 120px;
  height: 36px;
  border-radius: 6px;
  background: linear-gradient(90deg, #834FFC 0%, #E5AEFF 100%);
  color: #FFF;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
}

//类别
.model-lei-bie{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.model-tag{
  background: #04ad11;
}
.model-uploadFirst-tag{
  border-radius: 6px;
  background: #BF61F9;
  width: 80px;
  height: 36px;
  flex-shrink: 0;

}
/deep/ .ivu-tag-text{
  color: #FFF;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
}
/deep/ .ivu-tag .ivu-icon-ios-close{
  color:  #FFF;
}
</style>
