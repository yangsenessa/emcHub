<template>
  <div class="model-uploadFour">
    <div style="display: flex;flex-direction: row;justify-content: space-between">
      <Upload
        class="model-uploadFour-upload"
        ref="upload"
        :show-upload-list="false"
        :on-success="handleSuccess"
        :max-size="10240"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        multiple
        type="drag"
        action="https://6006s04c14.zicp.fun:443/mrchaiemc/fileUpload.do">
        <img src="@/assets/images/emc/Vector.png"/>
        <!--        <span>上传模型缩略图，不限尺寸</span>-->
      </Upload>
      <div class="model-uploadFour-right">
        <Form ref="formValidateFour"
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
          <FormItem style="display: flex;flex-direction: row" label="搜索触发词" prop="ticps">
            <Select style="width: 230px;margin-left: 10px" v-model="formValidate.ticps"/>
          </FormItem>
        </Form>
      </div>
    </div>
    <span class="model-uploadFour-span">上传模型缩略图，不限尺寸</span>
    <span class="model-uploadFour-span-oldUpload">已上传</span>
    <div class="model-uploadFour-bottom">
      <div>
        <img class="model-uploadFour-img" src="@/assets/images/emc/image 9.png"/>
        <Button class="model-uploadFour-img-but">删除</Button>
      </div>
      <div>
        <img class="model-uploadFour-img" src="@/assets/images/emc/image 9.png"/>
        <Button class="model-uploadFour-img-but">删除</Button>
      </div>
      <div>
        <img class="model-uploadFour-img" src="@/assets/images/emc/image 9.png"/>
        <Button class="model-uploadFour-img-but">删除</Button>
      </div>
      <div>
        <img class="model-uploadFour-img" src="@/assets/images/emc/image 9.png"/>
        <Button class="model-uploadFour-img-but">删除</Button>
      </div>
    </div>
    <div style="text-align: center">
      <Button class="upload-content-xia" @click="up">上一步</Button>
      <Button @click="handleAdd">发布</Button>
    </div>
  </div>
</template>

<script>
import {addNewModel} from "@/api/upload";

export default {
  name: "uploadFour.vue",
  data() {
    return {
      fileIdList:[],
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
  props: {
    currentSub: {type: Function, require: true},
    model_id:{type:String,require: true}
  },
  methods: {
    handleSuccess (res, file) {
      this.fileIdList.push(file.response.bussData.file_link)
      console.log(this.fileIdList,66666666666)
      this.$Message.success(`upload${file.response.resultCode}`)
    },
    handleFormatError (file) {
      // this.$Message.error("非'ckpt'||'pt'||'safetensors'||'bin'||'zip'格式的文件，请重新选择！");
      // return false;
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: 'Exceeding file size limit',
        desc: 'File  ' + file.name + ' is too large, no more than 10M.'
      });
    },
    handleBeforeUpload (file) {
      let fileName = file.name;
      let suffix = fileName.substr(fileName.lastIndexOf('.'));
      console.log(suffix,44444444444)
      // if (suffix != '.ckpt' &&'.pt'&&'.safetensors'&&'.bin'&&'.zip') {
      //   this.$Message.error('非ckpt,pt,safetensors,zip格式的文件，请重新选择！');
      //   return false;
      // }
    },
    up() {
      this.currentSub(1)
    },
    handleAdd() {
      let modelInfo = {
        // modelId:this.model_id,
        modelId: "0099243d-a166-4c9c-a0a4-e36ec9672de2",
      }
      let  modelCover= {
        tips: null,
        coveriImgList:JSON.stringify(this.fileIdList)
      }
      // coverImgList:"http://36.155.7.134:9000/emcbucket/2023/07/14/%5B1689349213013%5Dphoto01.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230714%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230714T154013Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=e71c37bf2559d6358aa344947a6a8d400a0924870a2836bbf68d00ad6ea41135"}
      let params = {
        custId: "1111",
        bussData: {
          modelInfo:JSON.stringify(modelInfo),
          modelCover:JSON.stringify(modelCover)
        }
      }
      addNewModel(params).then(res => {
        console.log(res)
      })
    }
  }
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

.model-uploadFour-upload {
  width: 290px;
  height: 238px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.10);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 88px;
    height: 71px;
  }
}

.model-uploadFour-right {
  width: 48%;
  min-height: 100px;
  //background: red;
}

.model-uploadFour-span {
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

.model-uploadFour-tag {
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

/deep/ .ivu-tag-text {
  color: #FFF;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
}

/deep/ .ivu-tag .ivu-icon-ios-close {
  color: #FFF;
}

.model-uploadFour-but {
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

/deep/ .ivu-form-item-label {
  line-height: 36px;
}

.model-uploadFour-span-oldUpload {
  color: #333;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

.model-uploadFour-bottom {
  margin-bottom: 30px;
  display: flex;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.model-uploadFour-img {
  width: 93%;
  height: 265px;
}

.model-uploadFour-img-but {
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

.upload-content-xia {
  width: 120px;
  height: 36px;
  border-radius: 6px;
  background: linear-gradient(90deg, #834ffc 0%, #e5aeff 100%);
}
</style>
