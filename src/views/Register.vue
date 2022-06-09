<template>
  <!-- //注册表单的代码 -->
  <div class="register">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm1">
         
          <el-form-item prop="user1">
              <el-input type="text" placeholder="用户名" required="required" v-model="ruleForm.user1" prefix-icon="el-icon-user-solid"></el-input>
          </el-form-item>
          <el-row type="flex" justify="space-around" :span="24" :gutter="6">
              <el-col :span="10">
                    <el-form-item prop="pass1">
                        <el-input class="phone-input" placeholder="手机号/邮箱" v-model="ruleForm.pass1" prefix-icon="el-icon-mobile-phone"></el-input>
                    </el-form-item>
              </el-col>
              <el-col :span="14">
                <!-- v-show 指令根据表达式的真假来显示元素和隐藏，是响应式的 -->
                      <el-form-item prop="code" class="phone" v-show="yzmshow">
                        <el-row type="flex" justify="space-around" :span="24" :gutter="6">
                          <el-col :span="14">
                              <el-input v-model="ruleForm.code" size="medium" placeholder="验证码" :minlength="6" :maxlength="6"></el-input>
                          </el-col>
                          <el-col :span="10">
                              <el-button type="primary" @click="getCode()" size="mini" class="code-btn" :disabled="!show">
                                  <span v-show="show">发送验证码</span>
                                  <span v-show="!show" class="count">{{ count }} s</span>
                              </el-button>
                          </el-col>
                        </el-row>
                      </el-form-item>
              </el-col>
          </el-row>
          <el-form-item prop="pass">
               <el-input type="password" placeholder="请输入密码" v-model="ruleForm.pass" prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
               <el-input type="password" placeholder="请再次输入密码" v-model="ruleForm.checkPass" prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
          <el-form-item class="btn-form">
            <div class="button1">
               <el-row type="flex" justify="space-around" :span="24" :gutter="10">
                      <el-col :span="12">
                          <el-button class="login-button" type="primary" @click="submitForm('ruleForm')">注册</el-button>
                      </el-col>
                      <el-col :span="12">
                          <el-button @click="resetForm('ruleForm')" class="reset-button">重置</el-button>
                      </el-col>
                </el-row>
            </div>

          </el-form-item>
      </el-form>
  </div>
     
</template>
<script>
export default {
        // script中data()的代码
      data() {
          var validateUser1 = async (rule, value, callback) => {
              if (value === '') {
                 callback(new Error('请输入用户名'))
              } 
              else {
                if (value) {
                const res = await request.post('/api/user/checkUsernameExist', {
                   username: this.ruleForm.user1
                })
                console.log(res)
                if (res.data.code === 20000) {
                   callback()
                } 
                else {
                   return callback(new Error('该用户名已经被注册'))
                }
                }
              }
          }
          var validatePass1 = async (rule, value, callback) => {
              if (value === '') {
                callback(new Error('手机号或者邮箱不能为空'))
              } 
              else {
                  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
                    // eslint-disable-next-line no-useless-escape
                  const reg2 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                  if ((reg.test(value) || reg2.test(value))) {
                      this.yzmshow = true
                      callback()
                  } 
                  else {
                      callback(new Error('请输入正确的手机号或者邮箱'))
                  }
              }
          }
          var validatePass = (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请输入密码'))
              } 
              else {
                  if (this.ruleForm.checkPass !== '') {
                     this.$refs.ruleForm.validateField('checkPass')
                  }
                  callback()
              }
          }
          var validateCode = (rule, value, callback) => {
              if (value === '') {
               callback(new Error('请输入验证码'))
              } 
              else {
                if (this.ruleForm.code.length === 6) {
                  callback()
                } 
                else {
                  callback(new Error('验证码不正确'))
                }
              }
          }
          var validatePass2 = (rule, value, callback) => {
              if (value === '') {
                 callback(new Error('请再次输入密码'))
              } 
              else if (value !== this.ruleForm.pass) {
                 callback(new Error('两次输入密码不一致!'))
              } 
              else {
                 callback()
              }
          }
          return {
              activeIndex: '2',
              loginForm: {
                  mobile: '',
                  code: '',
                  zheCode: ''
              },
              show: true,
              count: '',
              timer: null,
              yzmshow: false,
              ruleForm: {
                  user1: '',
                  pass1: '',
                  pass: '',
                  checkPass: '',
                  zhecode: '',
                  mobile: '',
                  phoneCode: '',
                  emailCode: '',
                  code: ''
              },
              rules: {
                  code: [{
                      required: true,
                      validator: validateCode,
                      trigger: 'blur'
                    },
                    {
                      min: 6,
                      max: 6,
                      message: '长度为6',
                      trigger: 'blur'
                    }
                  ],
                  user1: [{
                      required: true,
                      validator: validateUser1,
                      trigger: 'blur'
                  }],
                      pass1: [{
                      required: true,
                      validator: validatePass1,
                      trigger: 'blur'
                  }],
                  // 密码
                  pass: [{
                      required: true,
                      validator: validatePass,
                      trigger: 'blur'
                  },
                  {
                      min: 6,
                      message: '长度在不少于6个字符',
                      trigger: 'blur'
                  }
                  ],
                  // 校验密码
                  checkPass: [{
                      required: true,
                      validator: validatePass2,
                      trigger: 'blur'
                  },
                  {
                      min: 6,
                      message: '长度在不少于6个字符',
                      trigger: 'blur'
                  }
                  ]
              }
          }
      },
      methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      //重置
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
}
</script>
<style>
.demo-ruleForm1{
  margin-top: -30px;
  padding:10px;
}
.button1{
  margin-top: 0px;
  padding: 10px;
}
.login-button{
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  font-size: 17px !important;
}
.reset-button{
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  font-size: 17px !important;
}
.code-btn{
  width: 100%;
}
/* .el-input{
  font-size: 16px !important;
} */
</style>