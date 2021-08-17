import{r as n,a as s,p as i,o as a,c as e,b as t,d as l,e as p,f as o,g as h}from"./vendor.00808a25.js";!function(){const n=document.createElement("link").relList;if(!(n&&n.supports&&n.supports("modulepreload"))){for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver((n=>{for(const i of n)if("childList"===i.type)for(const n of i.addedNodes)"LINK"===n.tagName&&"modulepreload"===n.rel&&s(n)})).observe(document,{childList:!0,subtree:!0})}function s(n){if(n.ep)return;n.ep=!0;const s=function(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),"use-credentials"===n.crossorigin?s.credentials="include":"anonymous"===n.crossorigin?s.credentials="omit":s.credentials="same-origin",s}(n);fetch(n.href,s)}}();var c={props:{collectionName:String},setup(){const a=n(0),e=s({title:"Vue 3 Guide"});let t='\n    /*\n    * 面试官你好，我是Edit，广东惠州人\n    * 为您精心准备一份不一样的简历来介绍自己\n    * 首先准备一些样式\n    */\n   /* 先给所有效果加个过度 */\n    *{\n        transition: all .8s;\n        margin: 0;\n        padding: 0;\n    }\n    /* 稍等，在容器上添加点样式 */\n    #codeEdit{\n        color: #fff;\n        background: #1E1E1E;\n        height: 100vh;\n        overflow: scroll;\n        flex: 0 0 500px;\n        padding-left: 10px;\n    }\n    #resume{\n        box-shadow: -1px 4px 9px 3px rgba(0, 0, 0, .15);\n    }\n    /* 我需要一点代码高亮 */\n    pre#codeEdit{\n        color: #CE9e78;\n    }\n    .token.selector{\n        color: rgb(230, 155, 43);\n    }\n    .token.comment{\n        color: #6A9955;\n        font-size: 14px;\n    }\n    .token.property{\n        color: #60C8FE;\n    }\n    .token.function {\n        color: #DD4A68;\n    }\n    /* 接下来请欣赏我的个人简历吧 */\n    /* 代码和效果分为左右 */\n    .container {\n      display: flex;\n    }\n    .icon {\n    width: 24px;\n    height: 24px;\n    vertical-align: -0.15em;\n    fill: currentColor;\n    overflow: hidden;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\na {\n    padding: 5px;\n    text-decoration: none;\n    color: #888;\n}\n\na:hover {\n    color: #333;\n}\n\n.highlight {\n    color: #FF5700;\n    border-radius: 5px;\n    background: #efefef;\n}\n\nbody {\n    color: #333;\n    font-family: "Palatino Linotype", "Book Antiqua", Palatino;\n    font-size: 1em;\n    background: rgb(195, 188, 178);\n}\n\n.layout {\n    display: flex;\n    flex-wrap: wrap;\n    background: #fff;\n    max-width: 960px;\n    margin: 0 auto;\n}\n\n/* header */\nheader {\n    background: rgb(64, 64, 65);\n    width: 100%;\n    text-align: center;\n    padding-top: 80px;\n    padding-bottom: 30px;\n    position: relative;\n}\n\nheader .resume-link {\n    display: none;\n}\n\nheader>h1 {\n    color: #fff;\n}\n\nheader>p {\n    color: #999;\n    padding-top: 10px;\n    font-size: 20px;\n}\n\n/* aside */\naside {\n    background: #FFF;\n    max-width: 300px;\n    border-right: 2px solid #ccc;\n    position: relative;\n    margin-bottom: 30px;\n}\n\naside .avader {\n    text-align: center;\n    position: absolute;\n    top: -110px;\n    width: 100%;\n}\n\naside .avader>img {\n    width: 220px;\n    height: 220px;\n    border-radius: 50%;\n    background: cornflowerblue;\n}\n\naside section {\n    margin: 30px 15px 0px 45px;\n    padding-bottom: 30px;\n}\n\naside section:not(:last-of-type) {\n    border-bottom: 1.5px solid #ccc;\n}\n\nsection h2 {\n    margin-bottom: 20px;\n    color: #2397DF;\n}\n\nsection .item {\n    font-size: 14px;\n    color: #666;\n}\n\n.line {\n    margin-top: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.line .item {\n    display: flex;\n    width: 48%;\n    border-right: 1rpx slid #ccc;\n\n}\n.school .item {\n    width: 100%;\n}\n\n.personal .item span:last-child::before {\n    content: \'：\';\n    padding-right: 5px;\n}\n\n.skills .item {\n    display: flex;\n    flex-direction: column;\n    padding-top: 8px;\n}\n\n.skills .item .keyword {\n    font-size: 13px;\n    text-indent: 26px;\n    padding-bottom: 5px;\n}\n\n.skills .item .rule {\n    flex: 1;\n    height: 4px;\n    background: #eee;\n}\n\n.skills h3 {\n    margin-top: 15px;\n}\n\n.skills .item i {\n    display: block;\n    width: 20px;\n    height: 4px;\n    background-color: #000;\n}\naside .contact {\n    padding-bottom: 0;\n}\n\n.contact .item {\n    display: flex;\n    align-items: center;\n    padding: 2.5px 0;\n}\n\n.contact .item span {\n    padding-left: 10px;\n}\n\n.more .item {\n    display: flex;\n    align-items: center;\n    padding: 3px 0;\n    font-size: 16px;\n}\n\n.more .item .icon {\n    width: 32px;\n    height: 32px;\n}\n\n/* main */\nmain {\n    background: #fff;\n    flex: 1;\n    min-height: calc(100vh - 172px);\n}\n\nmain section:not(:last-of-type) {\n    margin: 30px 40px 30px 30px;\n}\n\nmain .line {\n    margin: 0px 70px 0px 35px;\n    border: .75px solid #ccc;\n}\n\nmain section:last-of-type {\n    margin: 30px 25px 30px 30px;\n}\n\nmain .experience {\n    margin: 0px -5px;\n    padding-bottom: 20px;\n}\n\nmain section p {\n    padding-bottom: 3px;\n}\n\nmain section .item:not(:last-of-type) {\n    padding-bottom: 20px;\n}\n\nmain section .item h3 {\n    overflow: hidden;\n    color: #333;\n    font-size: 1.17em;\n}\n\nsection .item .time {\n    float: right;\n    margin-right: 30px;\n}\nsection .item .company {\n    float: left;\n}\nmain section .item img {\n    margin-top: 5px;\n    width: 100%;\n    border: 1px solid #ddd;\n    border-style: dashed;\n    border-radius: 5px;\n}\n\nmain section .item ul {\n    padding-top: 10px;\n    list-style: none;\n}\n\nfooter {\n    background: rgb(64, 64, 65);\n    text-align: center;\n    width: 100%;\n}\n.item li {\n    margin-top: 10px;\n}\n.duty {\n    text-indent: 28px;\n}\n.moreItem {\n    margin-top: 25px;\n}\n.icon {\n    width: 25px;\n    height: 25px;\n    vertical-align: -0.15em;\n    fill: currentColor;\n    overflow: hidden;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\na {\n    padding: 5px;\n    text-decoration: none;\n    color: #888;\n}\n\na:hover {\n    color: #333;\n}\n\n.highlight {\n    color: #FF5700;\n    border-radius: 5px;\n    background: #efefef;\n}\n\nbody {\n    color: #333;\n    font-family: "Palatino Linotype", "Book Antiqua", Palatino;\n    font-size: 1em;\n    background: rgb(195, 188, 178);\n}\n\n.layout {\n    background: #fff;\n    width: 100vw;\n}\n\n/* header */\nheader {\n    background: rgb(64, 64, 65);\n    width: 100%;\n    text-align: center;\n    padding-top: 60px;\n    padding-bottom: 125px;\n    position: relative;\n}\n\nheader .resume-link {\n    display: none;\n}\n\nheader>h1 {\n    color: #fff;\n}\n\nheader>p {\n    color: #999;\n    padding-top: 8px;\n    font-size: 18px;\n}\n\n/* aside */\naside {\n    background: #FFF;\n    width: 100%;\n    position: relative;\n    padding-top: 60px;\n}\n\naside .avader {\n    text-align: center;\n    position: absolute;\n    top: -110px;\n    width: 100%;\n    padding-top: 5px;\n}\n\naside .avader>img {\n    width: 180px;\n    height: 180px;\n    border-radius: 50%;\n    background: cornflowerblue;\n}\n\naside section {\n    margin: 20px;\n    padding-bottom: 15px;\n}\n\nsection h2 {\n    padding-bottom: 10px;\n    color: #2397DF;\n}\n\nsection .item {\n    font-size: 14px;\n    color: #666;\n}\n\n.personal .item span:first-child {\n    width: 80px;\n    display: inline-block;\n}\n\n.personal .item span:last-child::before {\n    content: \'：\';\n    padding-right: 18px;\n}\n\n.skills .item {\n    padding-top: 8px;\n}\n\n.skills .item .keyword {\n    padding-bottom: 5px;\n}\n\n.skills .item .rule {\n    height: 4px;\n    background: #eee;\n}\n\n.skills .item i {\n    display: block;\n    width: 20px;\n    height: 4px;\n    background-color: #000;\n}\n\n.contact .item {\n    display: flex;\n    align-items: center;\n    padding: 2.5px 0;\n}\n\n.contact .item span {\n    padding-left: 10px;\n}\n\n.more .item {\n    display: flex;\n    align-items: center;\n    padding: 3px 0;\n    font-size: 16px;\n}\n\n.more .item .icon {\n    width: 32px;\n    height: 32px;\n}\n\n/* main */\nmain {\n    background: #fff;\n    min-height: calc(100vh - 172px);\n}\n\nmain section {\n    margin: 20px;\n    padding-bottom: 15px;\n}\n\nmain .line {\n    display: none;\n}\n\nmain section p {\n    padding-bottom: 3px;\n}\n\nmain section .item h3 {\n    color: #333;\n    font-size: 16px;\n    padding-top: 5px;\n}\n\nmain section .item img {\n    margin-top: 5px;\n    width: 100%;\n    height: 100%;\n    border: 1px solid #ddd;\n    border-style: dashed;\n    border-radius: 5px;\n}\n\nmain section .item ul {\n    padding-top: 10px;\n    padding-left: 10px;\n    list-style: none;\n}\n\nfooter {\n    background: rgb(64, 64, 65);\n    text-align: center;\n    width: 100%;\n}\nbody {\n    background: transparent;\n}\n\n.layout {\n    width: 100vw;\n}\n\n/* header */\n\nheader .resume-link {\n    position: absolute;\n    left: 10px;\n    top: 10px;\n    display: block;\n}\n\nmain .item img {\n    display: none;\n}\n',l=0,p=document.createElement("style");document.head.appendChild(p);let o=setInterval((()=>{l<t.length?(document.querySelector("#codeEdit").innerHTML=i.highlight(t.slice(0,l),i.languages.css),l++,document.querySelector("#codeEdit").scrollTop=99999,p.innerHTML=t.slice(0,l)):clearInterval(o)}),10);return document.createElement("style"),{readersNumber:a,book:e}}};const d={class:"container"},r=[t('<pre id="codeEdit"></pre><div id="page" class="layout"><header><h1>周 小 富</h1><p>应聘 Web 前端开发</p></header><aside><section><div class="personal"><h2>基本信息</h2><div class="line"><div class="item"><span>年龄</span><span>25</span></div><div class="item"><span>学历</span><span>本科</span></div></div><div class="line"><div class="item"><span>英语</span><span>CET-4</span></div><div class="item"><span>毕业时间</span><span>2018.7</span></div></div><div class="line school"><div class="item"><span>毕业院校</span><span>湖南科技大学</span></div></div></div></section><section><div class="skills"><h2>相关技能</h2><h3>前端基础</h3><div class="item"><p class="keyword"> 熟练 DIV + CSS 的<span class="highlight">页面布局</span>，能根据设计图<span class="highlight">像素级</span>完成页面制作 </p><p class="keyword"> 熟悉 HTML 5 及<span class="highlight">语义化</span>，掌握 CSS 3 <span class="highlight">动画、过渡效果</span>等常用技术 </p></div><div class="item"><p class="keyword"> 有 <span class="highlight">扎实</span>的原生 JavaScript 基础，熟练会使用<span class="highlight"> ES6+ </span>常用规范， 掌握重要概念如: <span class="highlight">原型、</span> <span class="highlight">闭包、</span><span class="highlight">作用域链、</span> <span class="highlight">面向对象、</span><span class="highlight">异步流程控制</span>等 </p><p class="keyword"> 熟悉 <span class="highlight"> Axios </span>相关知识,了解 <span class="highlight"> HTTP协议</span>, 能熟悉运用<span class="highlight"> Promise </span>优化项目中的各种异步逻辑 </p></div><h3>前端JS框架</h3><div class="item"><p class="keyword"> 熟悉 <span class="highlight">Vue.js</span> 框架, <span class="highlight">理解</span>重要概念如: 生命周期、异步更新、性能优化、数据驱动思想等。 能熟练使用 Vue.js/ <span class="highlight">Vue-router/ Vuex/ Vue-cli </span> 全家桶进行项目开发, 能就项目中常用页面进行 <span class="highlight">抽离封装 </span>成基本模板 </p><p class="keyword"> 熟悉 <span class="highlight"> uni-app </span> 框架,<span class="highlight">掌握</span>重要概念如: <span class="highlight">条件编译</span> 、<span class="highlight">生命周期</span> 、<span class="highlight">页面通讯</span> 等。 </p></div><h3>前端UI框架</h3><div class="item"><p class="keyword"> 能熟练使用 <span class="highlight">ElementUI</span> 组件库完成<span class="highlight">web</span>业务组件开发, 并能配合需求进行一定程度的<span class="highlight">二次封装</span></p><p class="keyword"> 能熟练使用 <span class="highlight"> uView </span> UI库进行<span class="highlight">移动端多端</span>开发, 并能<span class="highlight">从零</span>开始封装项目<span class="highlight">基础组件</span></p></div><h3>前端模块化</h3><div class="item"><p class="keyword">了解 <span class="highlight"> CommonJS / ES6-Modules </span> 等常见的模块化规范</p></div><h3>前端自动化构建工具</h3><div class="item"><p class="keyword"> 在项目中使用过 <span class="highlight"> Webpack/ Vue-cli </span> 等打包工具,了解前端工程化构建流程 </p><p class="keyword"> 熟悉 <span class="highlight">Babel</span> 的使用方法,能配合打包工具实现代码、 资源的编译处理 </p></div><h3>前端JS工具</h3><div class="item"><p class="keyword"> 熟悉 <span class="highlight"> ECharts/ Ucharts.js/ Cropper.js </span> 等js工具的使用, 能够运用其进行实际项目的开发 </p><p class="keyword"> 能熟练使用 <span class="highlight"> vue-i18n </span> 对项目进行 <span class="highlight">国际化</span> 语言配置 </p></div><h3>前端CSS工具</h3><div class="item"><p class="keyword">熟悉 <span class="highlight">Less/ Sass/ Scss</span> 等CSS预处理工具</p></div><h3>其他</h3><div class="item"><p class="keyword"> 熟悉PC与移动端的<span class="highlight"> 开发及适配 </span>, 熟悉 <span class="highlight">微信小程序/ 钉钉小程序的开发</span></p><p class="keyword"> 熟悉 <span class="highlight">版本管理</span> 工具Git, 能熟练使用 <span class="highlight">Gerrit</span> 代码审核工具 </p><p class="keyword">熟悉 <span class="highlight">MarkDown</span> 语法,能用其编写技术文档</p><p class="keyword"> 熟悉 <span class="highlight">LocalStorage/ SessionStorage/ Cookies</span> 等存储技术 </p></div></div></section><section><div class="contact"><h2>联系方式</h2><div class="item"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-phone"></use></svg><span>18673246436</span></div><div class="item"><svg class="icon" aria-hidden="true" style="fill:red;"><use xlink:href="#icon-wechat"></use></svg><span>ZXF960116</span></div><div class="item"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-mail"></use></svg><span>1126417652@qq.com</span></div><div class="item"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-location"></use></svg><span>上海</span></div></div></section></aside><main><section><h2>工作经历</h2><div class="item"><h3><span class="company">上海擎朗智能科技有限公司</span><span class="time">2019.04 至今 中级web前端开发</span></h3><ul><li>1、<span class="highlight">独立</span> 负责公司小程序项目 <span class="highlight">环境搭建</span></li><li> 2、<span class="highlight">独立</span> 设计和开发项目 <span class="highlight">可重用</span> 业务组件 </li><li>3、优化web端项目, 使页面加载 <span class="highlight">速度提升</span> 150%</li><li>4、负责项目 <span class="highlight">进度管理</span>, 使项目如期上线</li><li>5、负责 <span class="highlight">新人培训</span>, 帮助新人了解项目基础工具的使用方法</li><li>6、前端技术分享, <span class="highlight">提升</span> 团队技术水平</li></ul></div><div class="item"><h3><span class="company">飞榴（上海）信息科技有限公司</span><span class="time">2018.07 - 2019.03 web前端开发</span></h3><ul><li>1、参与公司艾笃项目的业务开发</li><li>2、与产品经理和视觉设计工程师 <span class="highlight">紧密沟通</span> ,改善页面UI和交互方式</li><li>3、设计和开发项目 <span class="highlight">可重用</span> 业务组件</li><li> 4、技术分享, <span class="highlight">巩固</span> 自身前端基础知识, 同时 <span class="highlight">提升</span> 团队技术水平 </li></ul></div></section><div class="line"></div><section><h2>项目经历</h2><div class="item"><h3>擎朗小管家 / 掌上后台</h3><ul><li><strong>技术栈：uni-app/ Vuex/ Ucharts/ WebSocket/ Vue CLI3/ Axios-miniprogram/ ES-Lint/ ES6</strong></li><li></li><li><strong>项目介绍：</strong> 擎朗小管家 是基于 uni-app 框架实现的连接公司管理后台和机器人的一款微信小程序。 主要解决了客户对机器人进行个性化配置困难、 对机器人运行状况不了解等问题, 并大大降低了公司技术支持、售后服务等人力成本开销。 客户可以直接在小程序上个性化配置机器人、 远程控制机器人 查看机器人运营数据报表等。 掌上后台 则是面向公司内部员工、 继承了 擎朗小管家 部分功能的钉钉内部应用。 员工在钉钉上可以无感登录、 对接公司内部管理后台权限, 可以在地图Tab页上查看附近机器人及其所属门店详情, 大大提高了员工巡店等办公效率。 </li><li><strong>项目职责: </strong><p class="duty"><span class="highlight">独立完成</span> 擎朗小管家 / 掌上后台项目的 <span class="highlight">搭建及开发</span> 工作 </p><p class="duty"><span class="highlight">独立完成</span> 录音组件、 动态电量组件、 动态联网状态组件 等组件的<span class="highlight">设计及开发</span></p><p class="duty"><span class="highlight">独立完成</span> 自定义导航栏情况下常用页面的<span class="highlight">模板封装</span></p></li><li><strong>技术要点: </strong>两个项目均使用 <span class="highlight">Vue CLI + uni-app</span> 搭建项目环境; 使用 <span class="highlight">uView UI </span> 作页面布局及 <span class="highlight">交互</span> ; 使用 <span class="highlight">uCharts.js</span> 实现机器人数据统计报表; 使用 <span class="highlight"> WebSocket </span> 实现实时的消息管理及机器人控制; 使用 <span class="highlight"> Axios-miniprogram </span> 获取数据,实现 <span class="highlight">异步加载</span>; 掌上后台 使用 <span class="highlight">map</span> 组件实现地图功能。 </li></ul><h3 class="moreItem">艾笃管理后台 / 艾笃商家管理后台</h3><ul><li><strong>技术栈：Vue2.0+/ Vue Router/ Cropper.js/ WebSocket/ Vue CLI3/ Axios/ ES6/ Npm/ Sass/ ES-Lint</strong></li><li><strong>项目介绍：</strong>基于 Vue全家桶 实现的电商后台管理系统，分内部版和商家版, 主要满足公司内部和入驻商家对艾笃APP的日常管理需求。 </li><li><strong>项目职责: </strong><p class="duty">参与艾笃管理后台的项目搭建</p><p class="duty">参与基于 Vue-router 路由守卫实现的 <span class="highlight">角色权限</span> 管理</p><p class="duty"><span class="highlight">独立完成</span> 基于 Element UI 组件和 Cropper.js插件 实现的 图片裁剪、上传图片至ali-oss 等功能组件的 <span class="highlight">二次封装</span></p><p class="duty"><span class="highlight">独立完成</span> 基于 Element UI 组件 实现的 列表页、详情页、编辑页 等常用页面的 <span class="highlight">模板封装</span></p><p class="duty"><span class="highlight">独立完成</span> 项目中 商品管理、订单管理、内容营销、推荐管理、店铺管理、供应商管理、采购管理、用户管理、权限管理、运营管理、消息管理模块等模块的开发 </p></li><li><strong>技术要点: </strong>项目使用 <span class="highlight">Vue CLI</span> 搭建项目环境; 使用 <span class="highlight"> Vuex </span> 做状态管理; 使用 <span class="highlight">Element UI </span> 作页面布局及 <span class="highlight">交互</span> ; 使用 Sass 作 <span class="highlight"> CSS 预处理</span> ; 通过 Vue Router 实现路由的跳转、 <span class="highlight">权限验证</span> 等; 使用 <span class="highlight"> WebSocket </span> 实现实时的消息管理; 使用 <span class="highlight"> Axios </span> 获取数据,实现 <span class="highlight">异步加载</span>; 使用 <span class="highlight"> ali-oss </span> 储存图片及文件; 使用 <span class="highlight"> Cropper.js </span> 做图片裁剪处理。 </li></ul></div></section></main></div>',2)];c.render=function(n,s,i,t,l,p){return a(),e("div",d,r)};var g=l({name:"App",components:{HelloWorld:c}});g.render=function(n,s,i,e,t,l){const h=p("HelloWorld");return a(),o(h,{collectionName:"are you ok"})},h(g).mount("#app");
