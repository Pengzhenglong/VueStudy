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
        })
        // 首页轮播图数据接口
        app.get('/api/banner',(req,res)=>{
          res.json({
          data:[{
            url: 'https://pengzhenglong.github.io/',
            image: 'https://doge.zzzmh.cn/wallpaper/origin/c8bfcd9f880411ebb6edd017c2d2eca2.jpg/thumbs?auth_key=1623987723-5C41345168856649-0-54ae67b7131193558e561d7f76389b20'
          },
          {
            url: 'https://pengzhenglong.github.io/',
            image: 'https://doge.zzzmh.cn/wallpaper/origin/c5398839880411ebb6edd017c2d2eca2.jpg/thumbs?auth_key=1623987723-8E7A43FB18F2287F-0-e6e19ae39f3cffdf620d96254ede8cc8'
          },
          {
            url: 'https://pengzhenglong.github.io/',
            image: 'https://seikim.com/i/2021/06/20/h2qs6s.jpg'
          }]
        })
      }),
      app.get('/api/rollinglist',(req,res)=>{
        res.json({
          data:[
            [
              {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://seikim.com/i/2021/06/20/h2qs6s.jpg',
                  label:'分类一'
              },
                 {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://seikim.com/i/2021/06/20/h2qs6s.jpg',
                  label:'分类一'
              },
                 {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://seikim.com/i/2021/06/20/h2qs6s.jpg',
                  label:'分类一'
              },
                 {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://seikim.com/i/2021/06/20/h2qs6s.jpg',
                  label:'分类一'
              },
                 {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://seikim.com/i/2021/06/20/h2qs6s.jpg',
                  label:'分类一'
              },
                 {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://seikim.com/i/2021/06/20/h2qs6s.jpg',
                  label:'分类一'
              },
                 {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://seikim.com/i/2021/06/20/h2qs6s.jpg',
                  label:'分类一'
              },
                 {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://seikim.com/i/2021/06/20/h2qs6s.jpg',
                  label:'分类一'
              },
                 {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://seikim.com/i/2021/06/20/h2qs6s.jpg',
                  label:'分类一'
              },
                 {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://seikim.com/i/2021/06/20/h2qs6s.jpg',
                  label:'分类一'
              },
            ],
            [
              {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://doge.zzzmh.cn/wallpaper/origin/c8bfcd9f880411ebb6edd017c2d2eca2.jpg/thumbs?auth_key=1623987723-5C41345168856649-0-54ae67b7131193558e561d7f76389b20',
                  label:'分类一'
              },
               {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://doge.zzzmh.cn/wallpaper/origin/c8bfcd9f880411ebb6edd017c2d2eca2.jpg/thumbs?auth_key=1623987723-5C41345168856649-0-54ae67b7131193558e561d7f76389b20',
                  label:'分类一'
              },
              {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://doge.zzzmh.cn/wallpaper/origin/c8bfcd9f880411ebb6edd017c2d2eca2.jpg/thumbs?auth_key=1623987723-5C41345168856649-0-54ae67b7131193558e561d7f76389b20',
                  label:'分类一'
              },
              {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://doge.zzzmh.cn/wallpaper/origin/c8bfcd9f880411ebb6edd017c2d2eca2.jpg/thumbs?auth_key=1623987723-5C41345168856649-0-54ae67b7131193558e561d7f76389b20',
                  label:'分类一'
              },
              {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://doge.zzzmh.cn/wallpaper/origin/c8bfcd9f880411ebb6edd017c2d2eca2.jpg/thumbs?auth_key=1623987723-5C41345168856649-0-54ae67b7131193558e561d7f76389b20',
                  label:'分类一'
              },
              {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://doge.zzzmh.cn/wallpaper/origin/c8bfcd9f880411ebb6edd017c2d2eca2.jpg/thumbs?auth_key=1623987723-5C41345168856649-0-54ae67b7131193558e561d7f76389b20',
                  label:'分类一'
              },
              {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://doge.zzzmh.cn/wallpaper/origin/c8bfcd9f880411ebb6edd017c2d2eca2.jpg/thumbs?auth_key=1623987723-5C41345168856649-0-54ae67b7131193558e561d7f76389b20',
                  label:'分类一'
              },
              {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://doge.zzzmh.cn/wallpaper/origin/c8bfcd9f880411ebb6edd017c2d2eca2.jpg/thumbs?auth_key=1623987723-5C41345168856649-0-54ae67b7131193558e561d7f76389b20',
                  label:'分类一'
              },
              {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://doge.zzzmh.cn/wallpaper/origin/c8bfcd9f880411ebb6edd017c2d2eca2.jpg/thumbs?auth_key=1623987723-5C41345168856649-0-54ae67b7131193558e561d7f76389b20',
                  label:'分类一'
              },
              {
                  url: 'https://pengzhenglong.github.io/',
                  image: 'https://doge.zzzmh.cn/wallpaper/origin/c8bfcd9f880411ebb6edd017c2d2eca2.jpg/thumbs?auth_key=1623987723-5C41345168856649-0-54ae67b7131193558e561d7f76389b20',
                  label:'分类一'
              },
            ],
          ]
        })
      }),
      //获取分类页的分类接口
      app.get('/api/classify',(req,res)=>{
        switch(req.query.type){
            case '0':
            res.json({
                data:[
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                      {
                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                        label:'华为'
                    },
                      {
                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                        label:'荣耀'
                    },
                      {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                      {
                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                        label:'华为'
                    },
                      {
                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                        label:'荣耀'
                    },
                      {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                      {
                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                        label:'华为'
                    },
                      {
                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                        label:'荣耀'
                    },
                      {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                      {
                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                        label:'华为'
                    },
                      {
                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                        label:'荣耀'
                    },
                      {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                      {
                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                        label:'华为'
                    },
                      {
                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                        label:'荣耀'
                    },
                      {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    
                ]
            });
            break;
            case '1':
            res.json({
                data: [
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                ]
            });
            break;
            case '2':
            res.json({
                data: [
                    {
                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                        label:'华为'
                    },
                    {
                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                        label:'华为'
                    },
                    {
                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                        label:'华为'
                    },
                    {
                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                        label:'华为'
                    }
                ]
            });
            break;
            case '3':
            res.json({
                data: [
                    {
                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                        label:'荣耀'
                    },
                    {
                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                        label:'荣耀'
                    },
                    {
                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                        label:'荣耀'
                    },
                    {
                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                        label:'荣耀'
                    },
                ]
            });
            break;
            case '4':
            res.json({
                data: [
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                ]
            });
            break;
            case '5':
            res.json({
                data: [
                    {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                ]
            });
            break;
            case '6':
            res.json({
                data: [
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                ]
            });
            break;
        }
    })

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
