var express = require('express');
var router = express.Router();

//商城主页
router.get('/', function(req, res, next) {
  res.render('index');
});

//搜索
router.get('/ss', function(req, res, next) {
  res.render('ss');
});

//分类
router.get('/fl', function(req, res, next) {
  res.render('fl');
});

//搜索商品页面1
router.get('/ss1', function(req, res, next) {
  res.render('ss1');
});

//搜索商品页面2
router.get('/ss2', function(req, res, next) {
  res.render('ss2');
});


//购买详情
router.get('/spxq', function(req, res, next) {
  res.render('spxq');
});

//购物车
router.get('/gwc', function(req, res, next) {
  res.render('gwc');
});
//购物车编辑
router.get('/gwcbj', function(req, res, next) {
  res.render('gwcbj');
});

//收藏
router.get('/sc', function(req, res, next) {
  res.render('sc');
});






//待付款
router.get('/dfk', function(req, res, next) {
  res.render('dfk');
});

//待发货
router.get('/dfh', function(req, res, next) {
  res.render('dfh');
});

//待收货
router.get('/dsh', function(req, res, next) {
  res.render('dsh');
});

//待评价
router.get('/dpj', function(req, res, next) {
  res.render('dpj');
});

//商品订单
router.get('/spdd', function(req, res, next) {
  res.render('spdd');
});







//地址
router.get('/dz', function(req, res, next) {
  res.render('dz');
});



//个人资料
router.get('/grzl', function(req, res, next) {
  res.render('grzl');
});



//会员中心
router.get('/hy', function(req, res, next) {
  res.render('hy');
});



//消息
router.get('/xx', function(req, res, next) {
  res.render('xx');
});

module.exports = router;
