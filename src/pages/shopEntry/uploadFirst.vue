<template>
  <div class="upload-first-content">
    <Form ref="formValidateFirst"
          :model="formValidate"
          label-position="top"
          :rules="ruleValidate"
    >
      <FormItem label="ModelName" prop="ModelName">
        <Input v-model="formValidate.modelName"></Input>
      </FormItem>
      <FormItem label="ModelSubName" prop="ModelSubName">
        <Input v-model="formValidate.modelSubName">
        </Input>
      </FormItem>
      <FormItem   label="Tag" prop="cateGory2">
        <Button closable class="model-uploadFirst-tag"
             @click="()=>this.formValidate.cateGory2+='PERSON'+ ','"
        >PERSON</Button>
        <Button closable class="model-uploadFirst-tag"
                @click="()=>this.formValidate.cateGory2+='WEDDING'+ ','"
        >WEDDING</Button>
        <Button closable class="model-uploadFirst-tag"
                @click="()=>this.formValidate.cateGory2+='WOMEN'+ ','"
        >WOMEN</Button>
        <Button closable class="model-uploadFirst-tag"
                @click="()=>this.formValidate.cateGory2+='PHOTOREALISTIC'+ ','"
        >PHOTOREALISTIC</Button>
        <Button closable class="model-uploadFirst-tag"
                @click="()=>this.formValidate.cateGory2+='HIGHLY DETAILED'+ ','"
        >HIGHLY DETAILED</Button>
       <!--<Select v-model="formValidate.cateGory2"  clearable>
          <Option v-for="item in categoryList"
                  :value="item.value"
                  :key="item.value">{{ item.label }}</Option>
        </Select>--> 
        <FormItem label="ModelSubName" prop="ModelSubName">
        <Input v-model="formValidate.cateGory2">
        </Input>
      </FormItem>
      </FormItem>
      <FormItem   label="Category" prop="cateGory1">
        <template v-for="item in labelList">
          <Button class="model-uploadFirst-tag"
                  @click='labelClick(item.value)'
          >{{item.label}}
          </Button>
        </template>
        <Select v-model="formValidate.cateGory1"  clearable>
          <Option v-for="item in labelList"
                  :value="item.value"
                  :key="item.value">{{ item.label }}</Option>
        </Select>
      </FormItem>
      <FormItem label='Model.describe' prop="ModelDescribe">
        <Input v-model="formValidate.ModelDescribe" type="textarea" :autosize="{minRows: 5,maxRows: 10}"
               ></Input>
      </FormItem>
      <FormItem label="How to use" prop="ModelUse">
        <RadioGroup v-model="formValidate.ModelUse" vertical>
          <Radio label="public to eveyone">
            <span>public to eveyone</span>
          </Radio>
          <Radio label="share with principle">
            <span>share with principle</span>
          </Radio>
        </RadioGroup>

<!--        <div v-for="(item,index) in modelUseDetail" :key="index">-->
<!--          <div style="display: flex;flex-direction: row">-->
<!--            <div class="model-use-daGou"-->
<!--                 @click="getAgreeShow()"-->
<!--                 :class="agreeShow ? 'tick' : ' '"-->
<!--            ></div>-->
<!--            <span class="model-zi">{{item}}</span>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div style="display: flex;flex-direction: row">-->
<!--          <div class="model-use-daGou"-->
<!--            @click="getAgreeShow()"-->
<!--            :class="agreeShow ? 'tick' : ' '"-->
<!--          ></div>-->
<!--          <span class="model-zi">使用时注册出处</span>-->
<!--        </div>-->
<!--        <div style="display: flex;flex-direction: row;margin-top: 10px">-->
<!--          <div class="model-use-daGou"-->
<!--               @click="getAgreeShow()"-->
<!--               :class="agreeShow ? 'tick' : ' '"-->
<!--          ></div>-->
<!--          <span class="model-zi">共享此模型的文件</span>-->
<!--        </div>-->
<!--      </FormItem>-->
      <FormItem style="text-align: center">
        <Button  class="upload-content-xia"
                 @click="handleSubmit('formValidateFirst')">Next</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import {addModelBaseInfo} from "@/api/modelinfo";
export default {
  name: "uploadFirst",
  data() {
    return {
      modelUseDetail:['1','2'],
      agreeShow: false, // 控制点击
      agreeShowTwo:true,
      formValidate: {
        modelName: '',
        modelSubName: '',
        cateGory2: '',
        cateGory1:'',
        modelDescribe:''
      },
      vertical: 'apple',
      formValidate: {
        modelName:[
          {required: true, message: 'Please input the ModelName', trigger: 'blur'}
        ],
        modelSubName:[
          {required: true, message: 'Please input the ModelSubName', trigger: 'blur'}
        ],
        cateGory2: [
          {required: true, message: 'Please input the cateGory', trigger: 'change'}
        ],
        cateGory1: [
          {required: true, message: 'Please input the Label', trigger: 'change'}
        ],
      },
      categoryList:[
        {value:'PERSON',label:'PERSON'},
        {value:'WEDDING',label:'WEDDING'},
        {value:'WOMEN',label:'WOMEN'},
        {value:'PHOTOREALISTIC',label:'PHOTOREALISTIC'},
        {value:'HIGHLY DETAILED',label:'HIGHLY DETAILED'}

      ],
      labelList:[
        {value:'CHECKPOINT',label:'Checkpoint'},
        {value:'LORA',label:'Lora'},
        {value:'CONTROLNET',label:'Controlnet'},
        {value:'OTHER',label:'Other'},
      ]
    }
  },
  props:{
    firstParams:{type:Object,require: true},
    currentAdd: {type: Function, require: true},
  },
  watch:{
  },
  created() {
    if(this.firstParams){
      this.formValidate=JSON.parse(this.firstParams.bussData.modelInfo)
    }
  },
  methods: {
    handleSubmit(name){
      // this.$emit("uploadFirstModelId", "12345");
      // let modelInfo = {
      //   modelName: "myfirst model",
      //   modelSubName: "myfirst model sub name",
      //   category1: "LORA"
      // }
      this.$refs[name].validate(async(valid) => {
        if (valid) {
          let params = {
            bussData: {
              // modelInfo: JSON.stringify(modelInfo)
              modelInfo: JSON.stringify(this.formValidate)
            },
          };
          const data = await addModelBaseInfo(params);
          if (data['resultCode'] === 'SUCCESS') {
            this.$emit("uploadFirstModelId", data.bussData.model_id);
            this.$emit('uploadFirstModelParams',params)
            this.currentAdd(1)
          }else {
            this.$Message.error(res['resultCode'])
          }
        }
      })
    },
    labelClick(value){
      this.formValidate.cateGory1=value
    },
    getAgreeShowTwo(){
      this.agreeShowTwo = !this.agreeShowTwo;
    },
    getAgreeShow() {
      this.agreeShow = !this.agreeShow; // 控制点击
    },
  }
}
</script>

<style scoped lang="scss">
.upload-first-content {
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
  height: 40px;
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
  background: #4d9cf1;
  position: absolute;
  //display: inline-block;
  width: 20px;
  height: 12px;
  border-width: 0 0 2px 2px;
  //overflow: hidden;
  //border-color: #2A343D;
  border-style: solid;
  -webkit-transform: rotate(-50deg);
  transform: rotate(-50deg);
  left: 4px;
  top: 4px;
}

// 第二个钩子
.model-use-daGou1 {
  width: 29px;
  height: 28px;
  border: 1px solid rgba(0, 0, 0, 0.10) !important;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.10);
}
.tick1::after {
  content: " ";
  position: absolute;
  display: inline-block;
  background: #4d9cf1;
  width: 20px;
  height: 12px;
  border-width: 0 0 2px 2px;
  overflow: hidden;
  border-color: #2A343D;
  border-style: solid;
  -webkit-transform: rotate(-50deg);
  transform: rotate(-50deg);
  left: 4px;
  top: 20px;
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
}
.model-uploadFirst-tag{
  border-radius: 6px;
  background: #BF61F9;
  width: 140px;
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

.upload-content-xia {
  width: 120px;
  height: 36px;
  border-radius: 6px;
  background: linear-gradient(90deg, #834ffc 0%, #e5aeff 100%);
}
/deep/ .ivu-radio-inner{
  border-radius: 0px;
  width: 20px;
  height: 20px;
  //background: #FFF;
}
/deep/ .ivu-radio-checked .ivu-radio-inner{
  border-color: #834ffc;
}
/deep/.ivu-radio-inner:after{
   background-color:inherit;
}
/deep/ .ivu-radio-inner::after{
  content: " ";
  position: absolute;
  display: inline-block;
  width: 15px;
//background-color: rgba(165, 42, 42, 0);
  background-color: inherit;
  height: 15px;
  border-width: 0 0 2px 2px;
  overflow: hidden;
  border-color: #834ffc;
  border-style: solid;
  -webkit-transform: rotate(-50deg);
  transform: rotate(-50deg);
}


// 下拉框专用
/deep/ .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value{
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.10);
}

/deep/ .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value{
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.10);
 }

</style>
