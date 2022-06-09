<template>
<div class="login">
    <div class="login_form">
      <!-- <p>MARVEL</p> -->
        <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="false"
        style="color: white; height: 300px; width: 100%;caret-color: transparent;">
          <!-- 登录组件 -->
          <!-- label选项卡标题 name与选项卡绑定值value对应的标识符，表示选项卡别名-->
          <el-tab-pane label="登录" name="first" >
                <!-- label-width表单域标签的的宽度 -->
                <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-position="left"
                label-width="5px"
                hide-required-asterisk="true"
                class="demo-ruleForm"
                >
                <el-row type="flex" justify="space-around" :span="24">
                  <el-col :span="24">
                    <!--prop：表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的-->
                       <el-form-item prop="user" size="medium">
                        <el-input
                        type="text"
                        placeholder="请输入手机号或者邮箱号"
                        required="required"
                        v-model="ruleForm.user"
                        prefix-icon="el-icon-user-solid"
                        size="big"
                        ></el-input>
                      </el-form-item>
                  </el-col>
                </el-row>
                <el-row type="flex" justify="space-around" :span="24">
                  <el-col :span="24">
                     <el-form-item prop="pass">
                          <el-input
                          type="password"
                          placeholder="请输入密码"
                          prefix-icon="el-icon-lock"
                          v-model="ruleForm.pass"
                          v-on:keydown.enter="onKeydownEnter" 
                          @keydown.enter="toSubmitForm('ruleForm')" 
                          size="big"
                          ></el-input>
                      </el-form-item>
                  </el-col>
                </el-row>
               
                <el-form-item>
                  <div class="button">
                    <el-row type="flex" justify="space-around" :span="24" :gutter="10">
                      <el-col :span="12">
                          <el-button class="login-button" type="primary" @click="submitForm('ruleForm')">登录</el-button>
                      </el-col>
                      <el-col :span="12">
                          <el-button @click="resetForm('ruleForm')" class="reset-button">重置</el-button>
                      </el-col>
                    </el-row>
                  </div>
                      
                </el-form-item>
              </el-form>
           </el-tab-pane>
            <!-- //注册组件 -->
           <el-tab-pane label="注册" name="second">
              <div><Register style="padding:40px 10px 0px 5px" /></div>
           </el-tab-pane>
      </el-tabs>
    </div>
  </div>

</template>
<script>
import Register from "./Register.vue"
export default {
      components:{
        Register,
      },
    //script的代码
// 两个验证，验证密码不能为空，验证，手机号或者邮箱是否符合要求
      data() {
          var validatePass = (rule, value, callback) => {
            if (value === ''){
              callback(new Error('请输入密码'))
            } 
            else {
              callback()
            }
          }
          var validateUser = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('手机号或者邮箱不能为空'))
            } 
            else {
              const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
              // eslint-disable-next-line no-useless-escape
              const reg2 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
              if ((reg.test(value) || reg2.test(value))) {
                callback()
              } 
              else {
                callback(new Error('请输入正确的手机号或者邮箱'))
              }
            }
          }
        return {
          // 获取url地址后面的参数
          urlQuery: '',
          //指定当前选中第一个标签页，设为1
          activeIndex: '1',
          activeName: 'first',
          ruleForm: {
            pass: '',
            user: ''
          },
         
          //表单验证规则
          rules: {
            user: [{ required: true, validator: validateUser, trigger: 'blur' }],
            pass: [{ required: true, validator: validatePass, trigger: 'blur' }]
          }
        }
      },
     methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
  
    }
}
</script>

<style>
.login {
  width: 100vw;
  /* vh该元素能保证元素无论是否有内容，高度都等于屏幕高度 */
  height: 100vh;
  background-image: url("../assets/炫酷流星.gif");
  background-size: 100% 100%;
  background-position: center center;
  overflow: auto;
  position: relative;
  }
  /* 登录注册框 */
.login_form {
    width: 450px;
    height: 400px;
    position: absolute;
    left: 75%;
    top: 45%;
    margin-left: -200px;
    margin-top: -170px;
    padding: 20px;
    background: rgb(102, 103, 112);
    border-radius: 19px;
    box-shadow: 0 0 10px #ddd;
  }
  /*  el-tabs 的选项卡字体大小样式无效的问题解决办法   去掉“scoped”即可重写字体大小*/
.el-tabs__item {
    font-size: 24px !important;
  }
/* 表单框 */
.demo-ruleForm{
  padding: 20px;
  margin-top: 30px;
}
.button{
  margin-top: 20px;
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
.el-input{
  font-size: 16px !important;
}
.btns {
      display: flex;
      justify-content: flex-end;
      
    }


</style>
