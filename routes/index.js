var express = require('express');
var router = express.Router();

//商城主页
router.get('/', function(req, res, next) {
  res.render('index');
});

//搜索
router.get('/seek', function(req, res, next) {
  res.render('seek');
});


//搜索商品页面1
router.get('/seek1', function(req, res, next) {
  res.render('seek1');
});

//搜索商品页面2
router.get('/seek2', function(req, res, next) {
  res.render('seek2');
});


//商品详情
router.get('/commodityNews', function(req, res, next) {
  res.render('commodityNews');
});

//购物车
router.get('/shoppingCar', function(req, res, next) {
  res.render('shoppingCar');
});
//购物车编辑
router.get('/shoppingCar2', function(req, res, next) {
  res.render('shoppingCar2');
});

//收藏
router.get('/collect', function(req, res, next) {
  res.render('collect');
});


//待付款
router.get('/waitingPaying', function(req, res, next) {
  res.render('waitingPaying');
});

//待发货
router.get('/waitingSendout', function(req, res, next) {
  res.render('waitingSendout');
});

//待收货
router.get('/waitingReceiving', function(req, res, next) {
  res.render('waitingReceiving');
});

//待评价
router.get('/waitingEvaluate', function(req, res, next) {
  res.render('waitingEvaluate');
});

//商品订单
router.get('/commodityIndent', function(req, res, next) {
  res.render('commodityIndent');
});

//个人资料
router.get('/privateData', function(req, res, next) {
  res.render('privateData');
});

//会员中心
router.get('/memberCenter', function(req, res, next) {
  res.render('memberCenter');
});

//消息
router.get('/news', function(req, res, next) {
  res.render('news');
});

//修改昵称
router.get('/modifyName', function(req, res, next) {
  res.render('modifyName');
});

//修改性别
router.get('/modifyGender', function(req, res, next) {
  res.render('modifyGender');
});

//地址
router.get('/address', function(req, res, next) {
  res.render('address');
});

//新增地址
router.get('/addAddress', function(req, res, next) {
  res.render('addAddress');
});

//编辑地址
router.get('/editAddress', function(req, res, next) {
  res.render('editAddress');
});

//选择地址
router.get('/choiceAddress', function(req, res, next) {
  res.render('choiceAddress');
});



module.exports = router;
