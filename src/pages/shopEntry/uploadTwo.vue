<template>
  <div class="upload-first-content">
    <Form ref="formValidateTwo"
          :model="formValidateTwo"
          label-position="top"
          :rules="ruleValidateTwo"
    >
      <FormItem label="version code" prop="version">
        <Input v-model="formValidateTwo.version"></Input>
      </FormItem>
      <FormItem label="downloadLink" prop="downloadLink">
        <Input v-model="formValidateTwo.downloadLink"></Input>
      </FormItem>
      <FormItem label="guideLink" prop="guideLink">
        <Input v-model="formValidateTwo.guideLink"></Input>
      </FormItem>
      <FormItem label="paramsGuideLink" prop="paramsGuideLink">
        <Input v-model="formValidateTwo.paramsGuideLink"></Input>
      </FormItem>
      <FormItem label="sampleCodeLink" prop="sampleCodeLink">
        <Input v-model="formValidateTwo.sampleCodeLink"></Input>
      </FormItem>
      <FormItem label="invokeGuide" prop="invokeGuide">
        <Input v-model="formValidateTwo.invokeGuide" type="textarea"></Input>
      </FormItem>
      <FormItem label="positivePromts" prop="positivePromts">
        <Input v-model="formValidateTwo.positivePromts" type="textarea"></Input>
      </FormItem>
      <FormItem label="negativePromts" prop="negativePromts">
        <Input v-model="formValidateTwo.negativePromts" type="textarea"></Input>
      </FormItem>
      <FormItem label="commonParams" prop="commonParams">
        <Input v-model="formValidateTwo.commonParams" type="textarea"></Input>
      </FormItem>

      <FormItem style="display: flex;flex-direction: row;justify-content: center">
        <Button class="upload-content-xia"
                @click="handleSubmit('formValidateTwo')"
        >下一步
        </Button
        >
        <Button
          class="upload-content-xia"
          style="margin-left: 30px"
          @click="up"
        >上一步
        </Button
        >
      </FormItem>
    </Form>
  </div>
</template>

<script>
import {addModelDetailInfo} from "@/api/modelinfo";

export default {
  name: "uploadTwo",
  data() {
    return {
      agreeShow: false, // 控制点击
      formValidateTwo: {
        modelId: this.model_id,
        version: '',
        downloadLink: '',
        guideLink: '',
        paramsGuideLink: '',
        sampleCodeLink: '',
        invokeGuide: '',
        negativePromts: '',
        positivePromts: '',
        commonParams: ''
      },
      ruleValidateTwo: {
        version: [
          {required: true, message: 'The version cannot be empty', trigger: 'blur'}
        ],
        downloadLink: [
          {required: true, message: 'Mailbox cannot be downloadLink', trigger: 'blur'},
        ],
        guideLink: [
          {required: true, message: 'Please select the guideLink', trigger: 'change'}
        ],
        paramsGuideLink: [
          {required: true, message: 'Please select paramsGuideLink', trigger: 'change'}
        ],
        sampleCodeLink: [
          {required: true, min: 1, message: 'Choose at least one sampleCodeLink', trigger: 'change'},
        ],
        invokeGuide: [
          {required: true,  message: 'Please select the invokeGuide', trigger: 'change'}
        ],
        positivePromts: [
          {required: true, message: 'Please select time', trigger: 'change'}
        ],
        commonParams: [
          {required: true, message: 'Please enter a commonParams', trigger: 'blur'},
        ]
      }
    }
  },
  props: {
    currentAdd: {type: Function, require: true},
    currentSub: {type: Function, require: true},
    model_id: {type: String, require: true}
  },
  methods: {
    handleSubmit(name) {
      let modelDetail = {
        // modelId: "77b35362-8914-420b-8648-51c221857d5d",
        modelId: this.model_id,
        version: this.formValidateTwo.version,
        downloadLink: this.formValidateTwo.downloadLink,
        guideLink: this.formValidateTwo.guideLink,
        paramsGuideLink:this.formValidateTwo.paramsGuideLink,
        sampleCodeLink: this.formValidateTwo.sampleCodeLink,
        invokeGuide: this.formValidateTwo.invokeGuide,
        negativePromts: this.formValidateTwo.negativePromts,
        positivePromts: this.formValidateTwo.positivePromts,
        commonParams: this.formValidateTwo.commonParams
      }
      let params = {
        "bussData": {
          modelDetail: JSON.stringify(modelDetail)
        }
      }
      this.$refs[name].validate((valid) => {
        if (valid) {
          addModelDetailInfo(params).then(res => {
            if (res.resultCode === 'SUCCESS') {
              this.currentAdd(1)
            }
          })
        }
      })

      this.currentAdd(1)
    },
    up() {
      this.currentSub(1)
    },
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

.model-use-daGou {
  width: 29px;
  height: 28px;
  border: 1px solid rgba(0, 0, 0, 0.10) !important;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.10);
}

.model-zi {
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

.model-button {
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
.model-lei-bie {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.model-tag {
  background: #04ad11;
}

.model-uploadFirst-tag {
  border-radius: 6px;
  background: #BF61F9;
  width: 80px;
  height: 36px;
  line-height: 36px;
  flex-shrink: 0;
}

.upload-content-xia {
  width: 120px;
  height: 36px;
  border-radius: 6px;
  background: linear-gradient(90deg, #834ffc 0%, #e5aeff 100%);
}
</style>
