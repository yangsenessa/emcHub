<template>
  <div class="model-upload-three">
    <Upload class="model-upload-three-upload" action="//jsonplaceholder.typicode.com/posts/">
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
  </div>
</template>

<script>
export default {
  name: "uploadTree.vue"
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
.model-upload-three-bottom{
  margin-bottom: 30px;
}
.span-url{
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
.but-del{
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
</style>
