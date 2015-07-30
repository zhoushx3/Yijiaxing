<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
	//首页
  public function index(){
  	layout(false);
  	$this->display();
  }
  //从心出发
  public function fromHeart(){
  	$this->display();
  }
  //阅读推荐
  public function read(){
  	$this->display();
  }
  //关于益家人
  public function aboutUs(){
		$this->display();
  }
  //常见问题 
  public function problem(){
		$this->display();
  }
  //开发团队 
  public function studio(){
		$this->display();
  }
}