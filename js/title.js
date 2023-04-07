//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '404 Not Found';   // 👀不要走嘛~
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '哈哈哈被骗了吧';    // 🐖欢迎你回来～
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});