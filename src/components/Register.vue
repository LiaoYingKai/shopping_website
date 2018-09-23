<template >
<div class="login">
  <div class="content">
    <div class="title">
      註冊 <span>登入</span>
    </div>
    <div class="account">
      <input type="text" placeholder="帳號" v-model="account">
      <p :class='{isHidden:confirmAccount}'>請輸入帳號</p>
    </div>
    <div class="password">
      <input type="password" placeholder="密碼" v-model="password">
    </div>
    <div class="againPassword">
      <input type="password" placeholder="確認密碼" v-model="againPassword">
      <p :class='{isHidden:confirmPassword}'>密碼輸入錯誤</p>
    </div>
    <div class="buttonGrop">
      <button type="button" class="cancel" @click="cancelRegistered">取消</button>
      <button type="button" class="sure" @click="addUserInfo">註冊</button>

    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password: '',
      againPassword: '',
      confirmPassword: true,
      confirmAccount: true
    }
  },
  methods: {
    cancelRegistered: function() {
      this.$store.commit('changeRegisteredState')
    },
    addUserInfo: function() {
      if (!this.account) {
        this.confirmAccount = false
        return
      }
      this.confirmAccount = true
      if (!this.againPassword || !this.password) {
        this.confirmPassword = false
        return
      }
      if (this.password !== this.againPassword) {
        this.confirmPassword = false
        return
      }
      this.$store.commit('registerUser', {
        account: this.account,
        password: this.password
      })
      this.account = ''
      this.password = ''
      this.againPassword = ''
      this.confirmPassword = true
      this.registeredSuccess()
      this.cancelRegistered()
    },
    registeredSuccess: function() {
      this.$notify({
        title: '註冊成功',
        type: 'success',
        duration: 1000
      })
    },
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
p {
    margin: 0;
    font-size: 16px;
    color: #ff5722;
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
    margin-bottom: 5px;
    width: 95%;
    border: 1px solid rgba(0,0,0,.14);
    font-size: 14px;
    padding: 10px;
    color: #222;
}
.password {
    input {
        margin-bottom: 23px;
    }
}
.buttonGrop {
    margin-top: 150px;
    text-align: right;
    .sure {
        @include buttonStyle(#ff5722,#fff,#ff6736);
    }
    .cancel {
        @include buttonStyle(#fff,#555,#f8f8f8);
    }
}
.isHidden {
    opacity: 0;
}
</style>
