<template>
  <div class="model-upload-three">
    <!--    <Upload class="model-upload-three-upload"-->
    <!--            ref="upload"-->
    <!--            :show-upload-list="false"-->
    <!--            :on-success="handleSuccess"-->
    <!--            :format="['jpg','jpeg','png']"-->
    <!--            :max-size="2048"-->
    <!--            :on-format-error="handleFormatError"-->
    <!--            :on-exceeded-size="handleMaxSize"-->
    <!--            multiple-->
    <!--            type="drag"-->
    <!--            action="#">-->
    <!--      <img src="@/assets/images/emc/Vector.png"/>-->
    <!--    </Upload>-->
    <!--    <Upload class="model-upload-three-upload"-->
    <!--            :before-upload="handleUpload"-->
    <!--            multiple-->
    <!--            type="drag"-->
    <!--            :format="['ckpt','pt','safetensors','bin','zip']"-->
    <!--            action="#">-->
    <!--      <img src="@/assets/images/emc/Vector.png"/>-->
    <!--    </Upload>-->
    <!--      :format="['ckpt','pt','safetensors','bin','jpt']"-->
    <Upload
      class="model-upload-three-upload"
      ref="upload"
      :show-upload-list="false"
      :on-success="handleSuccess"
      :max-size="10240"
      :format="['ckpt','pt','safetensors','bin','zip']"
      :on-format-error="handleFormatError"
      :on-exceeded-size="handleMaxSize"
      :before-upload="handleBeforeUpload"
      multiple
      type="drag"
      action="https://6006s04c14.zicp.fun:443/mrchaiemc/fileUpload.do">
      <img src="@/assets/images/emc/Vector.png"/>
    </Upload>
    <span class="model-upload-three-span">最多添加5个文件，支持ckpt、pt、safetensors、bin、zip文件</span>
    <span class="model-upload-three-oldUpload">已上传</span>
    <div class="model-upload-three-bottom">
      <div style="display: flex;flex-direction: row;justify-content: space-between">
        <span class="span-url">文件名称.zip</span>
        <Button class="but-del">删除</Button>
      </div>
      <div style="display: flex;flex-direction: row;justify-content: space-between;margin-top: 10px">
        <span class="span-url">文件名称.zip</span>
        <Button class="but-del">删除</Button>
      </div>
    </div>
    <div style="display: flex;flex-direction: row;justify-content: center">
      <Button class="upload-content-xia"
              @click="handleSubmit"
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
    </div>
  </div>
</template>

<script>
import {modelUpload} from "@/api/upload";

export default {
  name: "uploadTree.vue",
  data() {
    return {
      uploadAction: '',
      uid:null,
      fileIdList:[]
    }
  },
  props: {
    model_id:{type:String,require:true},
    currentSub: {type: Function, require: true},
    currentAdd: {type: Function, require: true},
  },
  methods: {
    handleSuccess (res, file) {
      console.log(file,555555555)
      this.fileIdList.push(file.response.bussData.file_link)
      this.$Message.success(`upload${file.response.resultCode}`)
    },
    handleFormatError (file) {
      this.$Message.error("非'ckpt'||'pt'||'safetensors'||'bin'||'zip'格式的文件，请重111新选择！");
      return false;
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
      if (suffix != '.ckpt' &&suffix != '.pt'&&suffix != '.safetensors'&&suffix != '.bin'&&suffix != '.zip') {
        this.$Message.error('非ckpt,pt,safetensors,zip格式的文件，请重新选择！');
        return false;
      }
    },
    handleSubmit() {
      // if(!this.fileId){
      //   return this.$Message.warning('upload please')
      // }
      // this.currentAdd(1)
      let modelDateil={
        // modelId:this.model_id
        modelId: "b20db117-e130-413a-ae92-059e49839cb9",
        version: "111",
        guideLink: null,
        paramsGuideLink: null,
        sampleCodeLink: null,
        downloadLink:'f7060ed7-dfef-490f-bed7-54c3f71ff615',
        // downloadLink:this.fileIdList,
      }
      let params = {
        bussData:{
          modeldateil:JSON.stringify(modelDateil)
        },
        userId: '111',
      }
      console.log(params,5555555)
      modelUpload(params).then(res => {
        console.log(res, 44444444)
          if (data['resultCode'] === 'SUCCESS') {
            this.currentAdd(1)
          }
      })
      this.currentAdd(1)
    },
    up(){
      this.currentSub(1)
    },
  }

}
</script>

<style scoped lang="scss">
.model-upload-three {
  margin: 0 auto;
  width: 692px;
  display: flex;
  flex-direction: column;
}

.model-upload-three-upload {
  width: 100%;
  height: 238px;
  margin-top: 40px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.10);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 88px;
    height: 71px;
  }
}

.model-upload-three-span {
  color: #999;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

.model-upload-three-oldUpload {
  color: #333;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: 20px;
}

.model-upload-three-bottom {
  margin-bottom: 30px;
}

.span-url {
  display: block;
  width: 613px;
  height: 36px;
  border-radius: 6px;
  background: #BF61F9;
  color: #FFF;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  padding-left: 10px;
}

.but-del {
  width: 70px;
  height: 36px;
  margin-left: 5px;
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
