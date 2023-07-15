<template>
  <div>
    <div class="box">
      <div class="nav">
        <div class="nav-div">
          <img class="nav-img1" src="@/assets/images/logo-tittle.png" />
          <img class="nav-img2" src="@/assets/images/EMCHub.png" />
          <Input class="nav-input" placeholder="Enter text">
          <Button slot="append">search</Button>
          </Input>
        </div>
        <ul class="detail">
          <li>
            <img @click="goCreate" class="detail-create" src="@/assets/images/Create.png" alt="" />
          </li>
          <li>
            <img class="detail-connect" src="@/assets/images/Connect.png" alt="" />
          </li>
          <li>
            <img class="detail-line" src="@/assets/images/Line1.png" alt="" />
          </li>

          <li>
            <Button @click="loginVisible = true" class="detail-button">Log in</Button>
          </li>
          <li style="position: relative;cursor: pointer;" @click="Information">
            <img src="@/assets/images/Ellipse6.png" class="nav-item nav-d" />
            <span class="detail-name">d</span>
          </li>
        </ul>
      </div>
    </div>
    <Card v-if="showInformation" class="box-information">
      <div class="box-sigle">
        <div class="box-name">
          <ul @click="goUser" style="cursor: pointer;">
            <li style="position: relative">
              <img src="@/assets/images/Ellipse6.png" class="nav-item nav-d" alt="" />
              <span class="detail-sigle-name">d</span>
            </li>
            <li><span class="box-Wave">WaveWSBS</span></li>
            <li>
              <img class="box-Vector" src="@/assets/images/Vector.png" alt="" />
            </li>
          </ul>
        </div>

        <div class="box-my">
          <ul>
            <li v-for="item in myList" :key="item.id">
              <div class="box-num">{{ item.num }}</div>
              <img class="box-img" :src="item.src" alt="" />
              <div class="box-tittle">{{ item.tittle }}</div>
            </li>
          </ul>
        </div>
        <div class="box-records">交易记录</div>
        <div class="box-logout">退出登陆</div>
      </div>
    </Card>

    <Modal :styles="{ top: '20vh' }" width="755px" class-name="vertical-center-modal" v-model="loginVisible" draggable
      :mask="true" :footer-hide="true">
      <div class="modal-div">
        <img class="modal-ing1" src="@/assets/images/logo-tittle.png" />
        <img class="modal-img2" src="@/assets/images/EMCHub.png" />
      </div>
      <div class="modal-div">
        <Form ref="ruleValidate" :model="userLoginInfo" label-position="top" :rules="ruleValidate">
          <FormItem label="UserLogInId" prop="UserLogInId">
            <Input v-model="userLoginInfo.custId"></Input>
          </FormItem>
          <FormItem label="AuthToken" prop="AuthToken">
            <Input v-model="userLoginInfo.bussData.authToken"></Input>
          </FormItem>
        </Form>
      </div>
      <div class="modal-button-bottom">
        <Button @click="getLogin">
          <img src="@/assets/images/logo-tittle.png" />
          <span>LOGIN</span>
        </Button>
      </div>
      <div class="modal-button-bottom">
        <Button @click="doReg">
          <img src="@/assets/images/default.png" />
          <span>New Registor</span>
        </Button>
      </div>
      <div class="modal-button-bottom">
        <Button @click="getLogin">
          <img src="@/assets/images/logo-tittle.png" />
          <span>IC-WAllET</span>
        </Button>
      </div>
    </Modal>

    <Modal :styles="{ top: '20vh' }" :body-style="bodystyle" width="755px" class-name="vertical-center-modal"
      v-model="regVisible" draggable :mask="true" :footer-hide="true">
      <div class="modal-div">
        <img class="modal-ing1" src="@/assets/images/logo-tittle.png" />
      </div>
      <div class="modal-div">
        <Form :model="userLoginInfo" label-position="top" :rules="ruleValidate">
          <FormItem label="loginId" prop="LogInId">
            <Input v-model="regInfoBussData.loginId"></Input>
          </FormItem>
          <FormItem label="email" prop="email">
            <Input v-model="regInfoBussData.email"></Input>
          </FormItem>
          <FormItem label="mobilePhone" prop="mobilePhone">
            <Input v-model="regInfoBussData.mobilePhone"></Input>
          </FormItem>
          <FormItem label="authToken" prop="authToken">
            <Input v-model="authInfoData.bussData.authToken"></Input>
          </FormItem>
        </Form>
      </div>

      <div class="modal-button-bottom">
        <Button @click="commitReg">
          <img src="@/assets/images/logo-tittle.png" />
          <span>commit</span>
        </Button>
      </div>

    </Modal>
  </div>
</template>

<script>
import storage from "@/plugins/storage.js";
import { logout } from "@/api/account.js";
import { LoginByPassWD, userRegOrigin, authTokenSet } from "@/api/login";


export default {
  name: "M-Header",
  created() {
  },

  data() {
    return {
      loginVisible: false,
      regVisible: false,
      userInfo: {}, // 用户信息
      userLoginInfo: {
        custId: "",
        bussData: {
          identityType: "",
          authToken: ""
        }
      },
      regInfo: {
        actionCode: 'register',

        bussData: {
          applRegInfo: ''
        }
      },
      regInfoBussData: {
        loginId: '',
        email: '',
        mobilePhone: '',
        nickName: '',
      },
      authInfoData: {
        actionCode: 'setToken',
        custId: '',
        bussData: {
          identityType: 'PASSWD',
          authToken: ''
        }
      },
      shoppingCart: [], // 购物车
      showInformation: false,
      hasLogin: false,
      ruleValidate: {
        UserLogInId: [
          { required: true, message: 'Please select the UserLogInId', trigger: 'blur' }
        ],
        AuthToken: [
          { required: true, message: 'Please select the AuthToken', trigger: 'blur' }
        ]
      },
      myList: [
        {
          id: 1,
          num: 12,
          src: require("@/assets/images/Book.png"),
          tittle: "我的创作",
        },
        {
          id: 2,
          num: 12,
          src: require("@/assets/images/Adduser.png"),
          tittle: "我的下载",
        },
        {
          id: 3,
          num: 12,
          src: require("@/assets/images/Target.png"),
          tittle: "我的粉丝",
        },
        {
          id: 4,
          num: 12,
          src: require("@/assets/images/Storage.png"),
          tittle: "我的关注",
        },
      ],
    };
  },
  computed: {
  },
  methods: {
    goCreate() {
      this.$router.push('/Create')
    },
    Information() {
      this.showInformation = !this.showInformation
    },
    goUser() {
      this.$router.push('PayDone');
    },
    getLogin() {
      LoginByPassWD(this.userLoginInfo).then(res => {
        if (res.loginStatus === 'true') {
          this.hasLogin = true;
          alert("Login Success@");
        } else {
          alert("Login fail");
        }

      });

    },
    doReg() {
      this.loginVisible = false;
      this.regVisible = true;

    },
    commitReg() {
      this.regInfo.bussData.applRegInfo = JSON.stringify(this.regInfoBussData);
      userRegOrigin(this.regInfo).then(res => {
        if (res.resultCode === 'SUCCESS') {
          this.userInfo.userId = res.bussData.custId;
          this.authInfoData.custId = res.bussData.custId;
          this.setAuthToken();
        } else {
          alert("Register fail,please retry");
        }
      })
    },
    setAuthToken() {
      authTokenSet(this.authInfoData).then(res => {
        if (res.resultCode === 'SUCCESS') {
          this.regVisible = false;
          this.loginVisible = false;
        } else {
          alert("Register success!");

          alert("Register fail,please retry");
        }
      })
    }


  },
};
</script>

<style scoped lang="scss">
.shopping-cart-detail,
.shopping-cart-text,
.shopping-cart-info,
.nav a,
.location,
.first,
.username,
.shopping-cart-null span {}

.box {
  width: 100%;
  font-size: 12px !important;
  border-bottom: 0.45px solid #dadce0;
  background: #fff;
  box-shadow: 0px 2px 20px 0px rgba(98, 56, 123, 0.06);
  //@include background_color($light_white_background_color);

  .box-information {
    width: 319px;
    height: 299px;
  }
}



.nav {
  margin: 0 auto;
  width: 1080px;
  display: flex;
  //background: #04ad11;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // border-bottom: 1px solid;

  .nav-div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .nav-img1 {
      width: 57px;
      height: 40px;
      //line-height: 80px;
    }

    .nav-img2 {
      width: 160px;
      height: 32px;
      margin-left: 11px;
    }

    p {
      padding-left: 15px;
      color: #6c2cfd;
      font-size: 32px;
      font-family: Nico Moji;
      font-style: normal;
      font-weight: 400;
      line-height: 32px;
    }

    .nav-input {
      position: relative;
      margin-left: 30px;
      width: 430px;
      height: 43px;
      flex-shrink: 0;

      /deep/ .ivu-input {
        border-radius: 26px 0 0 26px;
        height: 36px;
        background: #f3f3f3;

        &:focus {
          box-shadow: none;
        }
      }

      /deep/ .ivu-input-group-append {
        border-left: none;
        border: 0px;

        button {
          position: absolute;
          right: 0px;
          bottom: 13px;
          z-index: 99;
          width: 98px;
          height: 36px;
          border-radius: 26px;
          color: #fff;
          background: linear-gradient(90deg, #834ffc 0%, #e5aeff 100%);
          font-size: 14px;
          font-weight: 600;
          line-height: 1;
        }
      }
    }
  }
}

/deep/ .ivu-input-group-append {
  padding: 0 !important;
}

.nav ul {
  list-style: none;
  height: 36px;
  margin-top: 22px;
  margin-bottom: 22px;

  .detail-create {
    width: 56px;
    height: 16px;
  }

  .detail-connect {
    width: 69px;
    height: 16px;
  }

  .detail-line {
    width: 2px;
    height: 30px;
  }
}

.nav li {
  float: left;
  font-size: 12px;
  line-height: 36px;
  font-weight: bold;
}

.nav li:first-child {
  margin-right: 32px;
}

.nav li:nth-child(3) {
  margin-left: 25px;
  margin-right: 25px;
}

.nav-item {
  cursor: pointer;
  color: #6c2cfd;
  font-size: 16px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}

.nav-d {
  // border-left: 1px solid #ccc;
  width: 36px;
  height: 36px;
}

.detail-name {
  position: absolute;
  left: 13px;
  color: #fff;
  font-size: 16px;
}

.box-information {
  position: absolute;
  top: 87px;
  right: 7.3%;
  width: 319px;
  height: 299px;
  z-index: 99999;
}

.box-sigle {
  margin: 15px 9px 9px 5px;
  width: 276px;
  height: 240px;

  // background: #e5aeff;
  .box-name {
    height: 36px;
    width: 100%;

    .detail-sigle-name {
      position: absolute;
      left: 13px;
      top: 6px;
      color: #fff;
      font-size: 16px;
    }
  }

  li {
    float: left;
  }

  li:nth-child(2) {
    margin: 13px 5px 0 12px;
  }

  .box-Wave {
    color: #555;
    font-size: 18px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
  }

  .box-Vector {
    margin-top: 13px;
    width: 6px;
    height: 14px;
  }

  .box-my {
    margin: 30px 10px 27px 0px;
    height: 72px;
    width: 100%;

    // background: #dadce0;
    li {
      width: 48px;
      height: 72px;
    }

    li:nth-child(2) {
      margin: 0 28px;
    }

    li:nth-child(3) {
      margin-right: 28px;
    }

    .box-num {
      text-align: center;
      font-size: 16px;
    }

    .box-img {
      margin-left: 6px;
      width: 39px;
      height: 39px;
    }

    .box-tittle {
      text-align: center;
      font-size: 12px;
    }
  }

  .box-records {
    height: 36px;
    margin-bottom: 15px;
    // background: aqua;
    border-radius: 26px;
    font-size: 12px;
    color: #fff;
    line-height: 37px;
    padding-left: 23px;
    background: linear-gradient(90deg,
        rgba(131, 79, 252, 0.8) 0%,
        rgba(229, 174, 255, 0.8) 100%);
  }

  .box-logout {
    height: 36px;
    border-radius: 26px;
    font-size: 12px;
    color: #fff;
    line-height: 37px;
    padding-left: 23px;
    background: linear-gradient(90deg,
        rgba(131, 79, 252, 0.5) 0%,
        rgba(229, 174, 255, 0.5) 100%);
  }
}

.nav-frame {
  width: 20px;
  height: 20px;
}

.detail-button {
  margin-top: -5px;
  width: 110px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 6px;
  background: linear-gradient(90deg, #834FFC 0%, #E5AEFF 100%);
  color: #FFF;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
}


/deep/ .ivu-modal-close {
  display: none;
}

.vertical-center-modal {
  width: 755px;
  height: 800px;
  flex-shrink: 0;
  border-radius: 6px;

}

.bodystyle {
  height: 800px;
  overflow: hidden;
  overflowY: scroll;
}

.modal-div {
  display: flex;
  flex-direction: row;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-top: 92px;

  .modal-ing1 {
    width: 57px;
    height: 40px;
    flex-shrink: 0;
  }

  .modal-img2 {
    margin-left: 10px;
    width: 160px;
    height: 32px;
  }
}

.modal-button-bottom {
  text-align: center;
  margin-bottom: 92px;
  margin-top: 60px;

  button {
    width: 656px;
    height: 30px;
    border-radius: 14px;
    position: relative;
    background: linear-gradient(90deg, #834FFC 0%, #E5AEFF 100%);

    img {
      width: 30px;
      height: 30px;
      position: absolute;
      top: calc(50% - 15px);
      left: 189px;
    }

    span {
      color: #FFF;
      font-family: Montserrat;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      position: absolute;
      top: calc(50% - 18px);
      left: 240px;
    }
  }
}
</style>
