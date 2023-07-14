<template>
  <div>
    <BaseHeader></BaseHeader>
    <div class="pay-done">
      <div class="pay-user">
        <div class="pay-one">
          <img src="@/assets/images/Ellipse6.png" alt="" class="nav-d" />
          <span class="detail-name">d</span>
        </div>
        <div class="pay-two">
          <div class="pay-name">用户昵称</div>
          <div class="pay-fans">
            <span>粉丝23</span>
            <span>关注23</span>
          </div>
        </div>
      </div>

      <div class="pay-tabs">
        <Tabs value="name1">
          <TabPane label="我的发布" name="name1">
            <div class="model-card">
              <Row :gutter="16">
                <Col
                  class="model-card-col"
                  v-for="message in messages"
                  :key="message.id"
                  v-bind:title="message.title"
                  v-bind:desc="message.desc"
                >
                  <div class="model-card-item">
                    <img class="model-img" :src="message.src" />
                    <div class="model-card-shadow">
                      <div class="model-card-content">
                        <div>
                          <div>{{ message.desc }}</div>
                          <div>{{ message.time }}</div>
                        </div>
                        <div>
                          <div class="model-card-square">3</div>
                          <div>{{ message.num }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane label="下载记录" name="name2"> <div class="model-card">
              <Row :gutter="16">
                <Col
                  class="model-card-col"
                  v-for="message in messages"
                  :key="message.id"
                  v-bind:title="message.title"
                  v-bind:desc="message.desc"
                >
                  <div class="model-card-item">
                    <img class="model-img" :src="message.src" />
                    <div class="model-card-shadow">
                      <div class="model-card-content">
                        <div>
                          <div>{{ message.desc }}</div>
                          <div>{{ message.time }}</div>
                        </div>
                        <div>
                          <div class="model-card-square">3</div>
                          <div>{{ message.num }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div></TabPane>
          <TabPane label="点赞" name="name3"> <div class="model-card">
              <Row :gutter="16">
                <Col
                  class="model-card-col"
                  v-for="message in messages"
                  :key="message.id"
                  v-bind:title="message.title"
                  v-bind:desc="message.desc"
                >
                  <div class="model-card-item">
                    <img class="model-img" :src="message.src" />
                    <div class="model-card-shadow">
                      <div class="model-card-content">
                        <div>
                          <div>{{ message.desc }}</div>
                          <div>{{ message.time }}</div>
                        </div>
                        <div>
                          <div class="model-card-square">3</div>
                          <div>{{ message.num }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div></TabPane>
          <TabPane label="我的创作" name="name4"> <div class="model-card">
              <Row :gutter="16">
                <Col
                  class="model-card-col"
                  v-for="message in messages"
                  :key="message.id"
                  v-bind:title="message.title"
                  v-bind:desc="message.desc"
                >
                  <div class="model-card-item" @click="goDetail">
                    <img class="model-img" :src="message.src"  />
                    <div class="model-card-shadow">
                      <div class="model-card-content">
                        <div>
                          <div>{{ message.desc }}</div>
                          <div>{{ message.time }}</div>
                        </div>
                        <div>
                          <div class="model-card-square">3</div>
                          <div>{{ message.num }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div></TabPane>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PayDone",
  data() {
    return {
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
  methods:{
    goDetail(){
      this.$router.push('CreateDetail')
    }
  }
};
</script>

<style scoped lang='scss'>
.pay-done {
  width: 1080px;
  height: 500px;
  // background-color: aqua;
  margin: 0 auto;
  background: #fff;

  .pay-user {
    margin-top: 30px;
    width: 750px;
    height: 61px;
     //background-color: pink;
    display: flex;
    flex-direction: row;
    .pay-one {
      position: relative;
      margin-right: 16px;
    }
    .pay-two {
      width: 120px;

      .pay-name {
        color: #555;
        font-family: Roboto;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
      }
      .pay-fans {
        margin-top: 20px;
        color: #555;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;

        span:first-child {
          margin-right: 41px;
        }
      }
    }
    .pay-btn {
      width: 98px;
      height: 36px;
      flex-shrink: 0;
      border-radius: 26px;
      margin-left: 442px;
      margin-top: 26px;
      background: linear-gradient(90deg, #834ffc 0%, #e5aeff 100%);
      color: #fff;
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
    }

    .nav-d {
      // border-left: 1px solid #ccc;
      width: 61px;
      height: 61px;
    }

    .detail-name {
      position: absolute;
      left: 23px;
      color: #fff;
      font-size: 24px;
      line-height: 58px;
    }
  }
}

.pay-tabs {
  margin-top: 30px;
}

.model-card {
  width: 100%;
  height: 357px;

  .model-card-col {
    width: 20%;
  }
}
.model-card-item {
  position: relative;
  height: 357.136px;
  // background: #04ad11;
  cursor: pointer;
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
</style>
