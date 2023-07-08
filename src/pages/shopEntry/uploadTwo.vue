<template>
  <div class="upload-first-content">
    <Form ref="formValidate"
          :model="formValidate"
          label-position="top"
          :rules="ruleValidate"
    >
      <FormItem label="版本编号" prop="name">
        <Input v-model="formValidate.name"></Input>
      </FormItem>
      <FormItem label="基础类型" prop="city">
        <Select v-model="formValidate.city">
        </Select>
      </FormItem>
      <FormItem  label="搜索触发词" prop="city">
        <Input v-model="formValidate.city"/>
        <!--        <div>-->
        <!--          <Tag class="model-tag" type="border" closable>标签</Tag>-->
        <!--          <Tag type="border" closable>标签</Tag>-->
        <!--          <Tag type="border" closable>标签</Tag>-->
        <!--        </div>-->
      </FormItem>
      <FormItem label='版本说明' prop="desc">
        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 5,maxRows: 10}"
               ></Input>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: "uploadTwo",
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
.model-use-gou {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: row;
}
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
</style>
