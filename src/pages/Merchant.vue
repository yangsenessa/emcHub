<template>
  <div class="model-form">
    <BaseHeader/>
    <div class="model-content">
      <ul class="model-waterfall">
        <li>
          <img
            class="model-Recommended"
            src="@/assets/images/Recommended.png"
            alt=""
          />
        </li>
         <li>
          <Button slot="append" class="check" @click="goSubject">全部</Button>
        </li>
        <li>
          <Button slot="append">Checkpoint</Button>
        </li>
        <li>
          <Button slot="append">Lora</Button>
        </li>
        <li>
          <Button slot="append">ControInet</Button>
        </li>
        <li>
          <Button slot="append">其他</Button>
        </li>
      </ul>

      <div class="masonry">
        <img
          class="uploadItem"
          :key="10086"
          src="@/assets/images/upload.png"
          alt=""
          @click="goUpload"
        />
        <div class="item" :key="i.id" v-for="i in data">
          <img :src="i.img" />
          <div class="masonry-shadow">
            <div class="masonry-name">Mechanical fish</div>
            <div class="masonry-flex">
              <div class="masonry-img">
                <img
                  class="masonry-ell"
                  src="@/assets/images/Ellipse6.png"
                  alt=""
                />
                <span>WaveWSBS</span>
              </div>
              <div class="masonry-num">
                <span>
                  <img class="Vector1" src="@/assets/images/Vector1.png" alt="">
                  99</span>
                <span>
                  <img class="Vector2" src="@/assets/images/Vector2.png" alt="">
                  99</span>
              </div>
            </div>
          </div>
          <!-- <span class="title">{{ i.value }}</span> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from "@/components/indexDecorate/data.json";

export default {
  name: "modelForm",
  data() {
    return {
      data,
      messages: [
        {
          id: "1",
          title: "yiyiyi",
          desc: "阿萨德",
          time: "最近更新:20230704",
          num: 1342,
          src: "https://www.bugela.com/cjpic/frombd/0/253/2650769822/1477358335.jpg",
        },
        {
          id: "2",
          title: "ererer",
          desc: "阿萨德",
          time: "最近更新:20230704",
          num: 1342,
          src: "https://www.bugela.com/cjpic/frombd/0/253/2650769822/1477358335.jpg",
        },
        {
          id: "3",
          title: "sansansan",
          desc: "阿萨德",
          time: "最近更新:20230704",
          num: 1342,
          src: "https://www.bugela.com/cjpic/frombd/0/253/2650769822/1477358335.jpg",
        },
        {
          id: "4",
          title: "sisisi",
          desc: "阿萨德",
          time: "最近更新:20230704",
          num: 1342,
          src: "https://www.bugela.com/cjpic/frombd/0/253/2650769822/1477358335.jpg",
        },
        {
          id: "5",
          title: "sisisi",
          desc: "阿萨德",
          time: "最近更新:20230704",
          num: 1342,
          src: "https://www.bugela.com/cjpic/frombd/0/253/2650769822/1477358335.jpg",
        },
      ],
    };
  },
  methods: {
    shopEntry() {
      this.$router.push("goodsList");
    },
    goUpload() {
      this.$router.push("shopEntry");
    },
    goSubject(){
       this.$router.push("Merchant");
    }
  },
};
</script>
<style lang="scss" scoped>
.model-content {
  margin: 0 auto;
  width: 1080px;
  height: 100%;
  background: #fff;
}

// .model-title {
//   margin-top: 20px;
//   color: #333333;
//   font-size: 24px;
//   font-family: Montserrat;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 24px;
// }
.model-form {
  height: 100%;
}

.model-thematic {
  margin-top: 40px;
  margin-bottom: 10px;
  width: 210px;
  height: 24px;
}

.model-card {
  width: 1080px;
  height: 357px;

  .model-card-col {
    width: 20%;
  }
}

.model-card-item {
  position: relative;
  height: 357.136px;
  // background: #04ad11;
  .model-img {
    width: 100%;
    height: 100%;
  }

  .model-card-shadow {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 62px;
    background-color: black;
    opacity: 0.6;

    .model-card-content {
      height: 70%;
      width: 85%;
      font-size: 14px;
      color: #fff;
      // background-color: aqua;
      margin: 10px 20px 10px 10px;
      display: flex;
      justify-content: space-between;

      .model-card-square {
        text-align: center;
      }
    }
  }
}
.model-card-item:hover {
  padding: 1px;
}

.model-waterfall {
  font-family: Roboto;
  margin-top: 35px;
  margin-bottom: 35px;
  width: 800px;
  height: 36px;

  li {
    float: left;
    line-height: 36px;
  }

  li:first-child {
    line-height: 50px;
  }

  li:nth-child(2) {
    margin-left: 49px;

    .ivu-btn,
    .ivu-btn:active,
    .ivu-btn:focus {
      background: #333;
      color: #fff;
    }
  }


  li:nth-child(3) {
    margin: 0 16px;
  }

  li:nth-child(4) {
    margin-right: 16px;
  }
  li:nth-child(5) {
    margin-right: 16px;
  }

  .model-Recommended {
    width: 273px;
    height: 24px;
  }
}

.masonry {
  column-count: 5;
  column-gap: 10px;
  // padding: 10px;
  .uploadItem {
    width: 100%;
    height: 164px;
  }
  .masonry-shadow {
    width: 100%;
    height: 75px;
    flex-shrink: 0;
    border-radius: 0px 0px 6px 6px;
    background-color: black;
    opacity: 0.6;
    position: absolute;
    bottom: 0;
    left: 0;
    .masonry-name {
      margin-top: 10px;
      margin-left: 16px;
      color: #fff;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    .masonry-img {
      margin-top: 15px;
      margin-left: 16px;
      span {
        color: #f7f7f7;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
      }
    }
    .masonry-ell {
      width: 20px;
      height: 20px;
      margin-right: 4px;
    }
  }
  .masonry-flex {
    display: flex;
    justify-content: space-between;
  }
  .masonry-num {
    line-height: 45px;
    color: #f7f7f7;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    margin: 5px;

    span:first-child {
      margin-right: 12px;
    }

    .Vector1 {
      width: 11px;
      height: 9px;
    }
    .Vector2 {
      width: 9px;
      height: 8px;
    }
  }

  .item {
    position: relative;
    border: 1px solid #999;
    margin-bottom: 10px;
    break-inside: avoid;
    img {
      width: 100%;
      vertical-align: middle;
    }
    .title {
      display: block;
      margin-left: 5px;
    }
  }
}
</style>
