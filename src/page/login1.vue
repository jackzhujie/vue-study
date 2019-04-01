<!--登录页-->
<template>
    <div class="login1">
        <img src="/src/assets/login/logo.png" alt="" class="logo">
        <div class="main-content">
            <div class="left-content">
                <div class="chart-content">
                    <!--<div class="earth"></div>-->
                    <div id="canvas-frame"></div>
                    <!--<div class="circle">-->
                    <!--</div>-->
                    <!--<div class="circle" style="border: 0;">-->
                        <!--<div class="mask maskL"></div>-->
                        <!--<div class="mask maskR"></div>-->
                        <!--<div class="box-list">-->
                            <!--<div class="box-item" v-for="(item,index) in itemArr" :key="index" :style="{opacity:item.isShow ? 1 : 0}" v-text="item.text"></div>-->
                        <!--</div>-->
                    <!--</div>-->
                    <div class="bottom-box"></div>
                </div>
            </div>
            <div class="right-content">

            <!-- 登陆/账号登陆 -->
                <div class="login_con" v-show="passNum">
                    <div :class="activeName==1?'codeC':'loginC'" @click="changeLogin"></div>
                    <div class="tip">
                        {{loginType}}
                    </div>
                    <!-- 扫码界面 -->
                    <div class="login_type" v-show="activeName == 0">
                        <!-- 扫码展示 -->
                        <div class="please-code" v-show="sancCode">
                            <div class="qrCode"></div>
                            <p class="code_login">
                                <img class="img" src="../../assets/code_tip.png" alt="">
                                扫码登陆慧云
                            </p>
                            <p class="code-title" @click="scanCode">请使用慧云APP扫一扫</p>
                        </div>
                        <!-- 扫码成功展示 -->
                        <div class="success-code" v-if="successCode">
                            <div class="success-code"></div>
                            <p class="code_login">扫码成功</p>
                            <p class="code-title" @click="scanCode">请在手机慧云中点击登陆</p>
                        </div>
                        <!-- 加载失败展示 -->
                        <!-- <div class="loser-code">
                            <p class="connect">请链接网络</p>
                            <div class="qrCode" v-loading="loading"></div>
                            <div class="new-btn">
                                <el-button class="loser-btn" @click="goNew">刷 新</el-button>
                            </div>
                            <p class="code-title" @click="scanCode">请使用慧云APP扫一扫</p>
                        </div> -->
                    </div>
                    <!-- 账号登录界面 -->
                    <div class="login_type" v-if="activeName === '1'">
                        <div class="title">
                            <p class="title-z">Hi</p>
                            <p class="title-b">欢迎回来</p>
                        </div>
                        <el-form class="elForm" label-position="top"  :model="ruleForm"  ref="ruleForm" style="width:100%">
                            <el-form-item class="user-name">
                                <el-input placeholder="用户名" ref="name" @input="checkUserName" v-model="ruleForm.userName"  style="width:100%;margin-top:24px;"></el-input>
                                <i class="nav-icon icon-customerManage"></i>
                            </el-form-item>
                            <el-form-item class="pass-word">
                                <el-input type="password"  placeholder="密码" @input="checkPassword" v-model="ruleForm.userPassword" style="width:100%;margin-top:8px;"></el-input>
                                <i class="nav-icon icon-saleManage"></i>
                            </el-form-item>
                            <el-button class="btn btnv" type="primary" :disabled="isCheckMap.userName || isCheckMap.password">登陆</el-button>
                            <el-row  class="elRow"  :gutter='20'>
                                <el-col :span='24'><span @click="goPassword">忘记密码</span></el-col>
                            </el-row>
                        </el-form>
                    </div>
                </div>
                <!-- 忘记密码界面展示 -->
                <div class="login_password" v-show="!passNum">
                    <div class="header-btn">
                        <ul class="list">
                            <li class="list-item" v-for="(item,index) in tabArr" :key="index" :class="{active:index == num}" @click="goBtn(index)">{{item}}</li>
                        </ul>
                        <div class="border"></div>
                    </div>
                    <!-- 手机找回 -->
                    <div class="show-error">{{errorMsg}}</div>
                    <div class="content" v-show="num == 0">
                        <el-form class="elForm" label-position="top"  :model="ruleForm"  ref="ruleForm" style="width:100%">
                            <el-row v-show="formTow">
                                <el-form-item class="user-name">
                                    <el-input placeholder="请输入手机号码" @input="checkPhone" v-model="ruleForm.phone"  style="width:100%;"></el-input>
                                </el-form-item>
                                <el-form-item class="pass-word">
                                    <el-input name="code123" v-model="ruleForm.code" @input="checkCode" placeholder="请输入短信验证码" style="width:198px;margin-top:16px;"></el-input>
                                    <button class="obtain" :disabled="isCheckMap.phone">获取验证码</button>
                                </el-form-item>
                                <div id="slide"></div>
                                <p class="side">向右拖动滑块填充拼图</p>
                                <el-button class="btn btnv" type="primary" style="margin-top:40px;" :disabled="isCheckMap.phone || isCheckMap.code" @click="resetPass">下一步</el-button>
                                <el-row  class="elRow"  :gutter='20'>
                                    <el-col :span='24'><span class="return-login" @click="goCode">返回登录</span></el-col>
                                </el-row>
                            </el-row>
                            <!-- 重置密码 -->
                            <el-row v-show="!formTow">
                                <el-form-item class="pass-word">
                                    <el-input type="password"  placeholder="请输入新密码"  v-model="ruleForm.userPassword" style="width:100%;margin-top:16px;"></el-input>
                                </el-form-item>
                                <el-form-item class="pass-word">
                                    <el-input type="password"  placeholder="再次确认新密码"  v-model="ruleForm.userPassword" style="width:100%;margin-top:16px;"></el-input>
                                </el-form-item>
                                <el-button class="btn btnv" type="primary" style="margin-top:40px;">确认重置</el-button>
                                <el-row  class="elRow" :gutter='20'>
                                    <el-col :span='24'><span class="return-login" @click="goOne">返回上一步</span></el-col>
                                </el-row>
                            </el-row>
                        </el-form>
                    </div>
                    <!-- 邮箱找回 -->
                    <div class="content content-code" v-show="num == 1">
                        <el-form class="elForm" label-position="top"  ref="ruleForm" style="width:100%">
                            <el-form-item class="user-name">
                                <el-input placeholder="请输入邮箱" ref="name" style="width:100%;"></el-input>
                            </el-form-item>
                            <el-button class="btn btnv" type="primary" style="margin-top:40px;">发送验证</el-button>
                            <el-row  class="elRow"  :gutter='20'>
                                <el-col :span='24'><span class="return-login" @click="goCode">返回登录</span></el-col>
                            </el-row>
                        </el-form>
                    </div>
                    <!-- 重置密码成功界面 -->
                    <!-- <div class="reset-pass">
                        <img src="../../assets/sucess-copy.png" alt="" style="display: block;margin: 0 auto">
                        <p class="pass-title">重置成功</p>
                        <el-row  class="elRow"  :gutter='20'>
                            <el-col :span='24'>3秒后自动跳转<span class="return-login">重新登录</span>!</el-col>
                        </el-row>
                    </div> -->
                </div>
                <div class="icp">
                    <el-row  class="elTow"  :gutter='20'>
                        <el-col :span='24'>用户登陆慧云默认同意<router-link to="">《慧云用户协议》</router-link></el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    //获取item-box的left和top，来设置它的显示与隐藏
    import * as THREE from "../../../static/file/three.min";

    function getTopLeft(){
        let arr = []
        const [...domeArr] = document.getElementsByClassName('box-item')
        domeArr.forEach(row =>{
            arr.push({left:row.offsetLeft,top:row.offsetTop})
        })
        return arr
    }
    //定时器
    let timeid;
    // 渲染器
    let renderer, width, height;

    function initThree() {
        width = document.getElementById('canvas-frame').clientWidth;
        height = document.getElementById('canvas-frame').clientHeight;
        renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            canvas: renderer
        });
        renderer.setSize(width, height);
        document.getElementById('canvas-frame').appendChild(renderer.domElement);
        renderer.setClearColor(0x000000, 0);
    }

    // 相机
    let camera;

    function initCamera() {
        // 透视相机 视角越大，看到的场景越大，那么中间的物体相对于整个场景来说，就越小了
        camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
        camera.position.x = -500;
        camera.position.y = 500;
        camera.position.z = -500;
        camera.lookAt({x: 0, y: 0, z: 0});
    }

    // 场景
    let scene;

    function initScene() {
        scene = new THREE.Scene();
    }

    // 光源
    let light;

    function initLight() {

        // A light source positioned directly above the scene, with color fading from the sky color to the ground color.
        // 位于场景正上方的光源，颜色从天空颜色渐变为地面颜色。
        //  var light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
        // scene.add(light);

        // 环境光
        light = new THREE.AmbientLight(0xFFFFFF);
        light.position.set(100, 100, 200);
        scene.add(light);

        // 平行光
        // 位置不同，方向光作用于物体的面也不同，看到的物体各个面的颜色也不一样
        // light = new THREE.DirectionalLight(0xffffbb, 1);
        // light.position.set(-1, 1, 1);
        // scene.add(light);
    }

    // 地球
    let earthMesh;

    function initEarth() {
        const earthGeo = new THREE.SphereGeometry(330, 100, 100);
        const earthMater = new THREE.MeshPhongMaterial({
            map: new THREE.TextureLoader().load('/src/assets/login/earth.jpg'),
            side: THREE.DoubleSide
        });
        earthMesh = new THREE.Mesh(earthGeo, earthMater);
        scene.add(earthMesh);
    }


    function threeStart() {
        initThree();
        initCamera();
        initScene();
        initLight();
        initEarth();

        renderer.clear();
        animate();
    }

    function animate() {
        // 地球自转
        earthMesh.rotation.y += 0.005;


        renderer.render(scene, camera);
        requestAnimationFrame(animate);

    }


    export default {
        name: "login1",
        data() {
            return {
                codeText:[
                    {code:401,text:'邮箱验证，跳到重置的界面!'},
                    {code:402,text:'超时！'},
                    {code:403,text:'校验不通过！'}
                ],
                activeName:'1',
                num:"0",
                sancCode:true,
                successCode:false,
                newImg:false,
                loading:false,
                passNum:false,
                formTow:true,
                errorMsg:'',
                isCheckMap:{
                    phone:true,
                    code:true,
                    userName:true,
                    password:true
                },
                tabArr:["手机找回","邮箱找回"],
                ruleForm:{
                    userName:'',
                    userPassword:'',
                }
            }
        },
        methods: {
            checkPhone(){
                if(!this.ruleForm.phone){
                    this.errorMsg = '手机号不可为空！'
                    this.isCheckMap.phone = true
                    return false
                }else {
                    const TEL_REGEXP = /^1\d{10}$/;
                    if(!TEL_REGEXP.test(this.ruleForm.phone)){
                        this.errorMsg = '手机号格式不正确！'
                        this.isCheckMap.phone = true
                        return false
                    }else {
                        this.errorMsg = ''
                        this.isCheckMap.phone = false
                        return true
                    }
                }
            },
            checkUserName(){
                if(!this.ruleForm.userName){
                    this.errorMsg = '用户名不可为空！'
                    this.isCheckMap.userName = true
                    return false
                }else {
                    this.errorMsg = ''
                    this.isCheckMap.userName = false
                    return true
                }
            },
            checkPassword(){
                if(!this.ruleForm.userPassword){
                    this.errorMsg = '密码不可为空！'
                    this.isCheckMap.password = true
                    return false
                }else {
                    this.errorMsg = ''
                    this.isCheckMap.password = false
                    return true
                }
            },
            checkCode(){
                if(!this.ruleForm.code){
                    this.errorMsg = '验证码不可为空！'
                    this.isCheckMap.code = true
                    return false
                }else {
                    this.errorMsg = ''
                    this.isCheckMap.code = false
                    return true
                }
            },
            // 账号登陆/密码登陆切换事件
            changeLogin(){
                this.activeName = this.activeName ==='0' ? '1' : '0';
            },
            // 扫码成功
            scanCode(){
                this.successCode = true
                this.sancCode = false
            },
            // 点击刷新加载图片
            goNew(){
                this.loading = true
            },
            // 忘记密码事件
            goPassword(){
                this.passNum = false
            },
            goBtn(index){
                this.num = index;
            },
            // 返回登陆
            goCode(){
                this.passNum = true
            },
            // 重置密码下一步
            resetPass(){
                this.formTow = false
            },
            // 返回上一步
            goOne(){
                this.formTow = true
            },
            initCap(){
                //滑动验证码
                initNECaptcha({
                    captchaId: 'd30fac24db2cbbbe86f0f66df2452ad0',
                    element: '#slide',
                    mode: 'float',
                    width: 320,
                    onReady: function (instance) {
                        // 验证码一切准备就绪，此时可正常使用验证码的相关功能
                    },
                    onVerify: function (err, data) {
                        // 当验证失败时，内部会自动refresh方法，无需手动再调用一次
                        /**
                         * 第一个参数是err（Error的实例），验证失败才有err对象
                         * 第二个参数是data对象，验证成功后的相关信息，data数据结构为key-value，如下：
                         * {
                         *   validate: 'xxxxx' // 二次验证信息
                         * }
                         */
                        // 点击登录按钮后可调用服务端接口，以下为伪代码，仅作示例用
                        // ajax('/login', {
                        //     captchaId: '从易盾申请的captchaId',
                        //     username: $('#username').val(),
                        //     password: $('#password').val(),
                        //     validate: data.validate
                        // }, function onsuccess (data) {
                        //     // 登录成功后，相关处理逻辑
                        // })
                    }
                }, function onload (instance) {
                    console.log(instance,'12')
                    // 初始化成功
                }, function onerror (err) {
                    console.log(err,'122')
                    // 验证码初始化失败处理逻辑，例如：提示用户点击按钮重新初始化
                })
            }
        },
        computed:{
            loginType(){
                return this.activeName == 0?'账号登录':'扫码登录';
            }
        },
        mounted() {
            this.initCap()

            var renderer, camera, scene;//渲染器，相加，场景
            var Earth, satellites = [];//地球，卫星（数组）

            function initThree() {
                var dom = document.getElementById("canvas-frame");
                const clientWidth = 700,clientHeight = 500
                scene = new THREE.Scene();
                camera = new THREE.PerspectiveCamera(20, clientWidth / clientHeight, 1, 1000);
                camera.position.set(0, 0, 400);//设置相机位置
                renderer = new THREE.WebGLRenderer({
                    alpha: true,
                    antialias: true
                });
                renderer.setSize(clientWidth, clientHeight);//设置窗口尺寸
                dom.appendChild(renderer.domElement);

                const sunTexture = THREE.ImageUtils.loadTexture('/src/assets/login/earth.jpg', {}, function () {
                    renderer.render(scene, camera);
                });

                //地球
                Earth = new THREE.Mesh(new THREE.SphereGeometry(70, 30, 30), new THREE.MeshBasicMaterial({
                    map: sunTexture
                })); //材质设定

                const satellite = new THREE.Sprite(new THREE.SpriteMaterial({
                    map: new THREE.CanvasTexture(generateSprite('196,233,255')),
                    blending: THREE.AdditiveBlending
                }));
                satellite.scale.x = satellite.scale.y = satellite.scale.z = 60;
                scene.add(satellite);//添加发光,让地球有发光的样式
                scene.add(Earth);

                //添加卫星
                for(let i = 0 ; i < 8 ;i++){
                    satellites.push(initSatellite(15, 88, {x: -Math.PI * 0.45, y: Math.PI * 0.1, z: Math.PI * 0.25 * i}, -0.031, scene,i + 1));
                }
                // satellites.push(initSatellite(5, 48, {x: -Math.PI * 0.45, y: Math.PI * 0.15, z: 1.5}, -0.031, scene));
                // satellites.push(initSatellite(5, 48, {x: -Math.PI * 0.45, y: Math.PI * 0.15, z: 2.5}, -0.031, scene));

                render();

            }


            /**
             * 返回一个卫星和轨道的组合体
             * @param satelliteSize 卫星的大小
             * @param satelliteRadius 卫星的旋转半径
             * @param rotation 组合体的x,y,z三个方向的旋转角度
             * @param speed 卫星运动速度
             * @param scene 场景
             * @param path 图片路径
             * @returns {{satellite: THREE.Mesh, speed: *}} 卫星组合对象;速度
             */
            const initSatellite = function (satelliteSize, satelliteRadius, rotation, speed, scene , path) {

                const track = new THREE.Mesh(new THREE.RingGeometry(satelliteRadius, satelliteRadius + 1.15, 5000, 1), new THREE.MeshBasicMaterial({color:0xff0EA9FF}));
                console.log(track,'tack')
                const centerMesh = new THREE.Mesh(new THREE.SphereGeometry(1, 1, 1), new THREE.MeshLambertMaterial()); //材质设定
                const satellite = new THREE.Sprite(new THREE.SpriteMaterial({
                    map: THREE.ImageUtils.loadTexture('/src/assets/login/flag' + path + '.png'),
                    blending: THREE.AdditiveBlending
                }));
                satellite.scale.x = satellite.scale.y = satellite.scale.z = satelliteSize;
                satellite.position.set(satelliteRadius, 0, 0);

                let pivotPoint = new THREE.Object3D();
                pivotPoint.add(track);
                pivotPoint.add(satellite);
                centerMesh.add(pivotPoint);
                centerMesh.rotation.set(rotation.x, rotation.y, rotation.z);
                scene.add(centerMesh);
                return {satellite: centerMesh, speed: speed};
            };

            /**
             * 实现发光星星
             * @param color 颜色的r,g和b值,比如：“123,123,123”;
             * @returns {Element} 返回canvas对象
             */
            const generateSprite = function (color) {
                let canvas = document.createElement('canvas');
                canvas.width = 16;
                canvas.height = 16;
                const context = canvas.getContext('2d');
                const gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
                gradient.addColorStop(0, 'rgba(' + color + ',1)');
                gradient.addColorStop(0.2, 'rgba(' + color + ',1)');
                gradient.addColorStop(0.4, 'rgba(' + color + ',.6)');
                gradient.addColorStop(1, 'rgba(0,0,0,0)');
                context.fillStyle = gradient;
                context.fillRect(0, 0, canvas.width, canvas.height);
                return canvas
            };


            function render() {
                renderer.render(scene, camera);
                Earth.rotation.y += 0.01;
                for (let i = 0; i < satellites.length; i++) {
                    satellites[i].satellite.rotation.z -= satellites[i].speed;
                }
                requestAnimationFrame(render);
            }



            // initThree()
            // threeStart()
        },
        created: function () {
        }
    }
</script>

<style lang="scss" scoped>
    #canvas-frame {
        border: none;
        cursor: pointer;
        width: 700px;
        height: 500px;
        z-index: 1;
        background-color: transparent;
    }

    @keyframes animationX {
        0% {
            left: 0;
        }
        100% {
            left: 709px;
        }
    }

    @keyframes animationY {
        0% {
            top: 0;
        }
        100% {
            top: 207px;
        }
    }

    @keyframes loop {
        0% {
            transform: rotateY(0)
        }
        100% {
            transform: rotateY(-360deg)
        }
    }

    .login1 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 60px 100px 80px 76px;
        box-sizing: border-box;
        background-color: #0A0E22;
        overflow: hidden;
        .logo {
            width: 160px;
            height: 50px;
            position: absolute;
        }
    }

    .main-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        .left-content {
            flex: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            .chart-content {
                height: 553px;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2;
                position: relative;
                .circle {
                    width: 707px;
                    border-radius: 50%;
                    position: absolute;
                    top: 27%;
                    height: 205px;
                    z-index: 2;
                    transform: rotateZ(7deg);
                    border: 1px solid #0EA9FF;
                    .mask{
                        width: 50px;
                        height: 50px;
                        position: absolute;
                        z-index: 5;
                        background-color: red;
                    }
                    .maskL{
                        left: 63px;
                        top: 18px;
                    }
                    .maskR{
                        right: 61px;
                        top:10px;
                    }
                }
                .earth {
                    width: 503px;
                    height: 510px;
                    z-index: 1;
                    background-size: contain;
                    background: url('/src/assets/login/earth.png') repeat-x 0 0;;
                }
                .bottom-box {
                    width: 1239px;
                    height: 285px;
                    position: absolute;
                    background-image: url("/src/assets/login/circle-bottom.png");
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    bottom: -191px;
                }
                .box-list {
                    left: 350px;
                    top: 10px;
                    .box-item {
                        position: absolute;
                        left: 0;
                        width: 54px;
                        height: 54px;
                        margin-left: -27px;
                        margin-top: -27px;
                        color: #0EA9FF;
                        border-radius: 50%;
                        line-height: 54px;
                        text-align: center;
                        background-color: #0A0E22;
                        font-size: 16px;
                        display: inline-block;
                        border: 1px solid #0EA9FF;
                    }
                    .box-item:nth-child(1) {
                        animation: animationX 10s cubic-bezier(0.36, 0, 0.64, 1) -5s infinite alternate-reverse,
                        animationY 10s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
                    }
                    .box-item:nth-child(2) {
                        animation: animationX 10s cubic-bezier(0.36, 0, 0.64, 1) -2s infinite alternate-reverse,
                        animationY 10s cubic-bezier(0.36, 0, 0.64, 1) 3s infinite alternate;
                    }
                    .box-item:nth-child(3) {
                        animation: animationX 10s cubic-bezier(0.36, 0, 0.64, 1) 1s infinite alternate-reverse,
                        animationY 10s cubic-bezier(0.36, 0, 0.64, 1) 6s infinite alternate;
                    }
                    .box-item:nth-child(4) {
                        animation: animationX 10s cubic-bezier(0.36, 0, 0.64, 1) 4s infinite alternate-reverse,
                        animationY 10s cubic-bezier(0.36, 0, 0.64, 1) 9s infinite alternate;
                    }
                }
            }
        }
        .right-content {
            flex: 0 0 404px;
            height: 539px;
            box-sizing: border-box;
            background-color: #242E47;
            position: relative;
            .icp{
                .elTow{
                    font-size: 12px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(175,175,175,.5);
                    position: absolute;
                    left: 94px;
                    bottom: 16px;
                    a{
                        color:rgba(175,175,175,.5);
                        // text-decoration: underline;
                    }
                }
            }
            .login_con{
                padding: 110px 49px 0 49px;
                .tip{
                    width: 62px;
                    height: 24px;
                    padding-right: 8px;
                    position: absolute;
                    right: 56px;
                    top: 7px;
                    font-size:8px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color: #76c5f7;
                    text-align: center;
                    line-height: 24px;
                    background: url(../../assets/bubble-img.png) center center no-repeat;
                    background-size:100% 100%;
                }
                .codeC,
                .loginC{
                    cursor: pointer;
                    position: absolute;
                    right: 9px;
                    top: 7px;
                    width: 40px;
                    height: 40px;
                    background: url(../../assets/code-img.png) center center no-repeat;
                }
                .loginC{
                    background-image: url(../../assets/computer-img.png);
                    width:30px;
                    height: 30px;
                    background-size:100% 100%;
                }
                .login_type{
                    .please-code,.success-code,.loser-code{
                        .code-title{
                            margin-top: 20px;
                            font-size: 12px;
                            text-align: center;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(175,175,175,.5);
                        }
                        .qrCode{
                            width: 180px;
                            height: 180px;
                            margin: 26px auto 0 auto;
                            background:rgba(255,255,255,1);
                            border-radius:4px;
                            padding: 10px;
                            box-sizing: border-box;
                        }
                        .success-code{
                            width: 128px;
                            height: 128px;
                            margin: 78px auto 0 auto;
                            background:rgba(255,255,255,1);
                            border-radius:4px;
                            padding: 10px;
                            box-sizing: border-box;
                        }
                        .new-btn{
                            text-align: center;
                            margin-top: 31px;
                            .loser-btn{
                                width:75px;
                                height:26px;
                                border-radius:4px;
                                border:1px solid rgba(255,255,255,1);
                                background: #242E47;
                                font-size: 14px;
                                color: #fff;
                                line-height: 0px;
                            }
                        }
                        .connect{
                            font-size:12px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(255,255,255,.8);
                            position: absolute;
                            top: 104px;
                            left: 42%;
                        }
                        .code_login{
                            .img{
                                display: inline-block;
                                width: 18px;
                                height: 18px;
                                vertical-align: -2px;
                            }
                            text-align: center;
                            line-height: 30px;
                            height: 30px;
                            width: 100%;
                            margin: 0 auto;
                            margin-top: 27px;
                            color: #FFFFFF;
                            font-size: 20px;
                        }
                    }
                    .title{
                        .title-z{
                            margin-bottom: 8px;
                        }
                        .title-z,.title-b{
                            height: 36px;
                            font-size:36px;
                            font-family:PingFangSC-Light;
                            font-weight:300;
                            color:rgba(255,255,255,1);
                            line-height:34px;
                        }
                    }
                }
                .elForm{
                    .elRow{
                        text-align: center;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        margin-top: 32px;
                        font-size: 14px;
                        span{
                            color:rgba(231,231,231,.5);
                            cursor: pointer;
                        }
                    }
                    .user-name{
                        position: relative;
                        .icon-customerManage{
                            position: absolute;
                            left: 16px;
                            top: 36px;
                        }
                        .icon-customerManage:before{
                            color:rgba(215,215,215,1);
                        }
                    }
                    .pass-word{
                        position: relative;
                        .icon-saleManage{
                            position: absolute;
                            left: 16px;
                            top: 20px;
                        }
                        .icon-saleManage:before{
                            color:rgba(215,215,215,1);
                        }
                    }
                    .btn{
                        width: 100%;
                        height: 40px;
                        margin-top:16px;
                        color:rgba(255,255,255,.5);
                        border: none;
                        font-size: 18px;
                        background:rgba(100,135,167,1);
                        border-radius:4px;
                    }
                }
            }
            .login_password{
                .show-error{
                    position: absolute;
                    top: 112px;
                    left: 44px;
                    color: #F56C6C;
                    font-size: 16px;
                }
                .reset-pass{
                    padding: 154px 132px 0 132px;
                    .pass-title{
                        margin-top: 30px;
                        font-size:22px;
                        color:rgba(255,255,255,.8);
                        text-align: center;
                    }
                    .elRow{
                        text-align: center;
                        margin-top: 24px;
                        color:rgba(175,175,175,1);
                        font-size: 12px;
                        span{
                            color: #1880DE;
                        }
                    }
                }
                .header-btn{
                    position: relative;
                    .border{
                        width:1px;
                        height:24px;
                        background:rgba(255,255,255,.3);
                        display:inline-block;
                        content:'';
                        position:absolute;
                        top:20px;
                        left:202px
                    }
                    .list{
                        height: 60px;
                        border-bottom:1px solid rgba(255,255,255,.3);
                        .list-item{
                            padding: 18px 0 15px 0;
                            box-sizing: border-box;
                            float: left;
                            font-size:20px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(255,255,255,.3);
                            cursor: pointer;
                        }
                        .active{
                            border-bottom: 2px solid #1880DE;
                            color: #FFFFFF;
                        }
                        .list-item:nth-child(1){
                            margin-left: 60px;
                        }
                        .list-item:nth-child(2){
                            float: right;
                            margin-right: 60px;
                        }
                    }
                }
                .content{
                    padding: 80px 48px 0 48px;
                    .elForm{
                        .pass-word{
                            .obtain{
                                float: right;
                                margin-top: 16px;
                                text-align: center;
                                width: 100px;
                                height: 40px;
                                line-height: 40px;
                                font-size: 16px;
                                background:rgba(255,255,255,1);
                                border-radius:4px;
                                color:#D1D1D1;
                                cursor: pointer;
                                border: 0;
                            }
                        }
                        .slide{
                            font-size:14px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(102,102,102,.6);
                            width: 100%;
                            text-align: center;
                            margin-top: 16px;
                            line-height: 35px;
                            height:35px;
                            background:#fff;
                            border-radius:4px;
                        }
                        .btn{
                            width: 100%;
                            height: 40px;
                            margin-top:16px;
                            color:rgba(255,255,255,.5);
                            border: none;
                            font-size: 18px;
                            background:rgba(100,135,167,1);
                            border-radius:4px;
                        }
                        .elRow{
                            margin-top: 16px;
                            text-align: center;
                            .return-login{
                                cursor: pointer;
                                font-size:12px;
                                font-family:PingFangSC-Regular;
                                font-weight:400;
                                color:rgba(255,255,255,.6);
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<style lang="scss">
.login1{
    .login_con{
        .el-input__inner {
            padding-left:56px;
        }
    }

    .el-input__inner {
        height: 40px;
        line-height: 40px;
        border-radius: 3px;
        color: #333333;
        font-size:16px;
    }
}

</style>

