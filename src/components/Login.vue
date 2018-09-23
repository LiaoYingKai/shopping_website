<template >
<div class="login">
  <div class="content">
    <div class="title">
      登入 <span>註冊</span>
    </div>
    <div class="account">
      <input type="text" placeholder="帳號" v-model="account">
    </div>
    <div class="password">
      <input type="password" placeholder="密碼" v-model="password">
    </div>
    <div class="userHelp">
      忘記密碼？
    </div>
    <div class="buttonGrop">
      <button type="button" class="cancel" @click="cancelLogin">取消</button>
      <button type="button" class="sure" @click="inputLogin">確定</button>

    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    cancelLogin: function() {
      this.$store.commit('changeLoginState')
    },
    inputLogin: function() {
      let userArray = this.$store.getters.loginState
      let user = userArray.filter(item => {
        if ((item.account === this.account) && (item.password === this.password)) {
          return item
        }
      })
      console.log(user)
      this.cancelLogin()
    }
  }
}
</script>

<style lang="scss" scoped="">
@import 'mixin';
.login {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content {
    width: 500px;
    margin: 0 auto;
    background-color: #fff;
    padding: 30px;
    box-sizing: border-box;
}
.title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    font-size: 20px;
    span {
        font-size: 16px;
        font-weight: 500;
        color: #ff5722;
        cursor: pointer;
    }
}
input {
    margin-bottom: 15px;
    width: 95%;
    border: 1px solid rgba(0,0,0,.14);
    font-size: 14px;
    padding: 10px;
    color: #222;
}
.userHelp {
    text-align: right;
    color: #ff5722;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 150px;
}
.buttonGrop {
    text-align: right;
    .sure {
        @include buttonStyle(#ff5722,#fff,#ff6736);
    }
    .cancel {
        @include buttonStyle(#fff,#555,#f8f8f8);
    }
}
</style>
