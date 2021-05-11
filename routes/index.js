var express = require('express');
var router = express.Router();

//商城主页
router.get('/', function(req, res, next) {
  res.render('index');
});
//订单详情
router.get('/ddxq', function(req, res, next) {
  res.render('ddxq');
});
//地址
router.get('/dz', function(req, res, next) {
  res.render('dz');
});
//分类
router.get('/fl', function(req, res, next) {
  res.render('fl');
});
//购买详情
router.get('/gmxq', function(req, res, next) {
  res.render('gmxq');
});
//个人资料
router.get('/grzl', function(req, res, next) {
  res.render('grzl');
});
//购物车
router.get('/gwc', function(req, res, next) {
  res.render('gwc');
});
//会员中心
router.get('/hy', function(req, res, next) {
  res.render('hy');
});
//收藏
router.get('/sc', function(req, res, next) {
  res.render('sc');
});
//搜索
router.get('/ss', function(req, res, next) {
  res.render('ss');
});
//搜索商品页面1
router.get('/ss1', function(req, res, next) {
  res.render('ss1');
});
//搜索商品页面2
router.get('/ss2', function(req, res, next) {
  res.render('ss2');
});
//消息
router.get('/xx', function(req, res, next) {
  res.render('xx');
});

module.exports = router;
