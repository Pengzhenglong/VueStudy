module.exports = {
  configureWebpack: {
    devServer: {
      // mock接口编写的地方
      // 每次做更改这个配置文件的时候，都必须重新启动项目才会生效
      before(app) {
        //  用户信息池
        let userpoor = [
          { username: "peng", password: "123456" },
          { username: "Peng", password: "123456" },
        ];
        // 注册接口
        app.get("/api/register", (req, res) => {
          const { username, password } = req.query; //req.query包含在路由中每个查询字符串参数属性的对象。如果没有，默认为{}
          const userlength = userpoor.filter((v) => v.username == username)
            .length;
          if (userlength > 0) {
            res.json({
              success: false,
              message: "用户已存在",
            });
          } else {
            res.json({
              success: true,
              message: "注册成功",
            });
          }
        });
        // 登录接口
        let tokenkey = "peng";
        app.get("/api/login", (req, res) => {
          const { username, password } = req.query;
          if (
            (username == "peng" && password == "123456") ||
            (username == "Peng" && password == "123456")
          ) {
            res.json({
              code: 0,
              message: "登录成功",
              token:
                tokenkey +
                "-" +
                username +
                "-" +
                (new Date().getTime() + 60 * 60 * 1000),
            });
          } else {
            res.json({
              code: 1,
              message: "账号或密码错误",
            });
          }
        });
      },
    },
  },
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"],
      },
    },
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true,
    },
  },
};
