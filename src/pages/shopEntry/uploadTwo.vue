<template>
  <div class="upload-first-content">
    <Form ref="formValidateTwo"
          :model="formValidate"
          label-position="top"
          :rules="ruleValidate"
    >
      <FormItem label="版本编号" prop="version">
        <Input v-model="formValidate.version"></Input>
      </FormItem>
      <FormItem label="基础类型" prop="city">
        <Select v-model="formValidate.city">
        </Select>
      </FormItem>
      <FormItem label="搜索触发词" prop="version">
        <Tag closable class="model-uploadFirst-tag">触发词</Tag>
        <Tag closable class="model-uploadFirst-tag">触发词</Tag>
        <Tag closable class="model-uploadFirst-tag">触发词</Tag>
        <Input v-model="formValidate.version"/>
      </FormItem>
      <FormItem label='版本说明' prop="desc">
        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 5,maxRows: 10}"
        ></Input>
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
import {modModelDetailInfo} from "@/api/upload";

export default {
  name: "uploadTwo",
  data() {
    return {
      agreeShow: false, // 控制点击
      formValidate: {
        version: "",
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
      },
      ruleValidate: {
        version: [
          {required: true, message: 'The version cannot be empty', trigger: 'blur'}
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
    currentAdd: {type: Function, require: true},
    currentSub: {type: Function, require: true},
    model_id: {type: String, require: true},
    twoParams:{type:Object,require:true}
  },
  created() {
    if(this.twoParams){
      console.log(this.twoParams)
      alert(1111)
    }
  },
  methods: {
    handleSubmit(name) {
      let modelDetail = {
        // modelId: "77b35362-8914-420b-8648-51c221857d5d",
        modelId: this.model_id,
        version: "0.01",
        downloadLink: "https://github.com/yangsenessa/mrchai/tree/emchubV0.0.1",
        guideLink: "https://github.com/yangsenessa/mrchai/tree/emchubV0.0.1",
        paramsGuideLink: "https://github.com/yangsenessa/mrchai/tree/emchubV0.0.1",
        sampleCodeLink: "https://github.com/yangsenessa/mrchai/tree/emchubV0.0.1",
        invokeGuide: "NOTICE:LET ME KNOW before you put this model on commercial usage. My twitter account:@eagelaxis :) Contact me if needed.Discord Account:Eagelaxis#7818Version Choosing Advice:V2f,V3,Coda and V3.5 are recommended,especially CODA for first-time users.Hard to tell how many models used to merge.Check the example images to recognize this model's art styleFor more example images, just take a look at https://pixai.art",
        negativePromts: "1 corneo_power, bedroom, cute face, detailed body, detailed face, (sharp_teeth:0.8), +_+, pink panties, kids panties, home white t-shirt <lyco:GoodHands-beta2:1.0>",
        positivePromts: "blurry, ugly, bad anatomy, extra limbs, undersaturated, low resolution, disfigured, deformations, out of frame, amputee, bad proportions, extra limb, missing limbs, distortion, floating limbs, out of frame, poorly drawn face, poorly drawn hands, text, malformed, missing fingers, cropped, wrong colour of clothes, wrong fingers",
        commonParams: "Steps: 85, Size: 576x1024, Seed: 3172589486, Model: darkSushiMixMix_225D, Sampler: DPM++ SDE Karras, CFG scale: 8, Model hash: cca17b08da, Variation seed: 741382554, Variation seed strength: 0.15",
      }
      let params = {
        "custId": "1111",
        "bussData": {
          modelDetail: JSON.stringify(modelDetail)
        }
      }
      this.$refs[name].validate((valid) => {
        if (valid) {
          modModelDetailInfo(params).then(res => {
            if (res.resultCode === 'SUCCESS') {
              this.currentAdd(1)
              this.$emit('uploadTwoModalParams',params)
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
