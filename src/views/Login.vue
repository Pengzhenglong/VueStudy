<template>
  <div>
    <img
      class="header"
      src="https://browser9.qhimg.com/bdm/1000_618_80/t019fd908f724f51900.jpg"
      alt=""
    />
    <cube-form
      :model="model"
      :schema="schema"
      @submit="submitHandler"
    ></cube-form>
  </div>
</template>

<script>
export default {
  // name: 'Login',
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
      schema: {
        fields: [
          // 用户名配置
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名",
            },

            rules: {
              // 校验规则
              required: true,
              type: "string",
              min: 3,
              max: 15,
            },
            trigger: "blur",
            messages: {
              require: "用户名不能为空",
              min: "用户名不能小于3个字",
              max: "用户名不能大于15个字 ",
            },
          },
          // 登录配置
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入密码",
              type: "password",
              eye: {
                open: false,
              },
            },
            rules: {
              required: true,
            },
            trigger: "blur",
          },
          {
            type: "submit",
            label: "登录",
          },
        ],
      },
    };
  },
  methods: {
    async submitHandler(e) {
      e.preventDefault();
      try {
        const result = await this.$http.get("/api/login", {
          params: this.model,
        });
        if (result.code == '0') {
          this.$store.commit('settoken', result.token)
          window.localStorage.setItem('token', result.token)
          //判断路由是否带参，带参就去到重定向参数地址，否则就去首页
          if (this.$route.query.redirect) {
            this.$router.replace({ path: this.$route.query.redirect })
          } else {
            this.$router.replace({ path: '/botnav/index' })
          }
        } else {
          alert(result.messages)
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.header {
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
}
</style>
