<template>
  <div class="model-uploadFour">
    <div style="display: flex;flex-direction: row;justify-content: space-between">
      <div class="model-uploadFour-upload">
        <img src="@/assets/images/emc/Vector.png" />
<!--        <span>上传模型缩略图，不限尺寸</span>-->
      </div>
      <div class="model-uploadFour-right">
        <Form ref="formValidate"
              :model="formValidate"
              label-position="top"
              :rules="ruleValidate"
        >
          <FormItem label="帖子标签" prop="name">
            <Tag class="model-uploadFour-tag" closable>标签</Tag>
            <Tag class="model-uploadFour-tag" closable>标签</Tag>
            <Tag class="model-uploadFour-tag" closable>标签</Tag>
          </FormItem>
          <FormItem label="手动输入" prop="city">
            <Input style="width: 70%" v-model="formValidate.city"></Input>
            <Button class="model-uploadFour-but">添加</Button>
          </FormItem>
          <FormItem style="display: flex;flex-direction: row" label="搜索触发词" prop="city">
            <Input style="width: 230px;margin-left: 10px" v-model="formValidate.city"/>
          </FormItem>
        </Form>
      </div>
    </div>
    <span class="model-uploadFour-span">上传模型缩略图，不限尺寸</span>
    <span class="model-uploadFour-span-oldUpload">已上传</span>
    <div class="model-uploadFour-bottom">
      <div>
        <img class="model-uploadFour-img" src="@/assets/images/emc/image 9.png" />
        <Button class="model-uploadFour-img-but">删除</Button>
      </div>
      <div>
        <img class="model-uploadFour-img" src="@/assets/images/emc/image 9.png" />
        <Button class="model-uploadFour-img-but">删除</Button>
      </div>
      <div>
        <img class="model-uploadFour-img" src="@/assets/images/emc/image 9.png" />
        <Button class="model-uploadFour-img-but">删除</Button>
      </div>
      <div>
        <img class="model-uploadFour-img" src="@/assets/images/emc/image 9.png" />
        <Button class="model-uploadFour-img-but">删除</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "uploadFour.vue",
  data(){
    return{
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
}
</script>

<style scoped lang="scss">
.model-uploadFour {
  margin: 0 auto;
  width: 692px;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  margin-top: 40px;
}
.model-uploadFour-upload{
  width: 290px;
  height: 238px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.10);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img{
    width: 88px;
    height: 71px;
  }
}
.model-uploadFour-right{
  width: 48%;
  min-height: 100px;
  //background: red;
}
.model-uploadFour-span{
  color: #999;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: -42px;
}

/deep/ .ivu-form-item-error .ivu-input {
  border: 1px solid #BF61F9;
}

/deep/ .ivu-input {
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.10);
  height: 36px;
}

/deep/ .ivu-form-item-error-tip {
  color: #BF61F9;
}

/deep/ .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
  background: rgba(0, 0, 0, 0.10);
}

.model-uploadFour-tag{
  width: 60px;
  height: 36px;
  border-radius: 6px;
  background: #BF61F9;
  //color: #FFF;
  //font-family: Roboto;
  //font-size: 12px;
  //font-style: normal;
  //font-weight: 400;
  //line-height: 36px;
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
  color: #FFF;
}

.model-uploadFour-but{
  width: 80px;
  height: 36px;
  border-radius: 6px;
  background: #BF61F9;
  color: #FFF;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  float: right;
}
/deep/ .ivu-form-item-label{
  line-height: 36px;
}

.model-uploadFour-span-oldUpload{
  color: #333;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

.model-uploadFour-bottom{
  margin-bottom: 30px;
  display: flex;
  div{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.model-uploadFour-img{
  width: 93%;
  height: 265px;
}
.model-uploadFour-img-but{
  width: 70px;
  height: 36px;
  margin-top: 20px;
  border-radius: 6px;
  background: #BF61F9;
  color: #FFF;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
}


</style>
