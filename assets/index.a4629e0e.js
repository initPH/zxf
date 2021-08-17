import{r as n,a as s,p as l,o as i,c as e,b as t,d as a,e as c,f as h,g as o,h as p}from"./vendor.01a73633.js";!function(){const n=document.createElement("link").relList;if(!(n&&n.supports&&n.supports("modulepreload"))){for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver((n=>{for(const l of n)if("childList"===l.type)for(const n of l.addedNodes)"LINK"===n.tagName&&"modulepreload"===n.rel&&s(n)})).observe(document,{childList:!0,subtree:!0})}function s(n){if(n.ep)return;n.ep=!0;const s=function(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),"use-credentials"===n.crossorigin?s.credentials="include":"anonymous"===n.crossorigin?s.credentials="omit":s.credentials="same-origin",s}(n);fetch(n.href,s)}}();var r={props:{collectionName:String},mounted(){function n(n){let s=document.getElementById(n);return function(n,...l){let i="";for(let s=0;s<n.length;s++)s<n.length-1?i+=`${n[s]}<span class="highlight">${l[s]}</span>`:i+=n[s];let e=document.createElement("p");e.className="intent",e.innerHTML=i,s&&s.appendChild(e)}}const s=n("frontBase");s`熟练使用${"div+css"}页面布局, ${"flex"}布局,
    了解${"css盒子模型"},根据设计图${"高度还原"}`,s`有扎实的原生javascript基础,熟练使用es6以上常用规范,掌握重要概念如:
    ${"原型"}、${"闭包"}、${"作用域链"}、${"Promise"}、${"async await"}、${"js循环机制"}等`,s`了解${"http"}协议,浏览器常用储存的几种方式`;const l=n("jsFramework");l`三年${"vue"}框架的使用经验,
    熟悉vue的${"vue全家桶"}的使用,了解${"mvvm"}原理、熟悉vue${"生命周期"}、${"组件间通信"}
    、了解${"webpack"}的配置,能够${"独立"}从零进行开发。`,l`一年${"uniapp"}框架的使用,熟悉uniapp自带的api,
    如${"uni.request"}、${"uni.navigateTo"}以及${"页面生命周期"}、熟悉微信小程序的发布流程`;n("uiFramework")`熟练使用${"ElementUI"}的各个组件,修改ElementUI的${"主题"},并且能根据需求二次封装,
    了解${"vant、iview"}等ui框架。了解uni-app生态的框架${"uview"}`;n("jsTool")`熟练使用${"echarts"}进行各种图表的绘制,了解${"antv"}。`;const i=n("otherInfo");i`熟练使用${"nginx"}部署项目,了解${"nodeJs"},有用过${"express"}框架对请求进行转发,了解${"pm2"},使用pm2对nodejs项目进行部署`,i`了解${"electron"},曾用electron开发过一个pc端人脸识别就餐的软件`,i`了解${"python"},偶尔在项目中利用${"python"}对excel的数据进行操作,
    获得页面展示需要的数据,早期也用python的${"flask"}框架写过页面和${"接口"}`},setup(){const i=n(0),e=s({title:"Vue 3 Guide"});let t='\n    /*\n    * 面试官你好，我是Ph,重庆潼南人\n    * 为您精心准备一份不一样的简历来介绍自己\n    * 首先准备一些样式\n    */\n   /* 先给所有效果加个过度 */\n    *{\n        transition: all .8s;\n        margin: 0;\n        padding: 0;\n    }\n    \n    /* 稍等，在容器上添加点样式 */\n    .container {\n      background: #fff;\n    }\n    #codeEdit{\n        color: #fff;\n        background: #1E1E1E;\n        height: 100vh;\n        overflow: scroll;\n        width: 500px;\n        padding-left: 10px;\n        position: fixed;\n        left: 0\n    }\n    #resume{\n        box-shadow: -1px 4px 9px 3px rgba(0, 0, 0, .15);\n    }\n    /* 我需要一点代码高亮 */\n    pre#codeEdit{\n        color: #CE9e78;\n    }\n    .token.selector{\n        color: rgb(230, 155, 43);\n    }\n    .token.comment{\n        color: #6A9955;\n        font-size: 14px;\n    }\n    .token.property{\n        color: #60C8FE;\n    }\n    .token.function {\n        color: #DD4A68;\n    }\n    /* 接下来请欣赏我的个人简历吧 */\n    .wrapper {\n      padding-left: 520px;\n      display: block !important;\n    }\n    hr {\n      color: #ccc;\n      margin: 20px 0;\n    }\n    .intent {\n      text-indent: 2em;\n      line-height: 1.5;\n      word-break: break-all;\n      text-align: justify;\n    }\n\n    /* 每一块title的颜色 */\n    .block-title {\n      color: #2397DF;\n      padding-bottom: 20px;\n    }\n    /* 二级title */\n    .block-sub-title {\n      padding-bottom: 10px;\n    }\n\n    /* 高亮 */\n    .highlight {\n      color: #FF5700;\n      border-radius: 5px;\n      background: #efefef;\n    }\n\n    .flex-between {\n      display: flex;\n      justify-content: space-between;\n    }\n\n\n\n\n    body {\n      /* color: #333; */\n      color: rgb(102,102,102);\n      font-family: "Palatino Linotype", "Book Antiqua", Palatino;\n      background: rgb(195, 188, 178);\n    }\n\n    .wrapper {\n      width: 960px;\n      margin: 0 auto;\n      background: #fff;\n      overflow: hidden;\n      min-height: 100vh;\n    }\n\n    .header {\n      background: rgb(64, 64, 65);\n      width: 100%;\n      text-align: center;\n      padding: 30px 0;\n      position: relative;\n      color: #fff;\n    }\n\n    .apply-position {\n      color: #999;\n      padding-top: 10px;\n    }\n\n    /* 整体左右留个位置 */\n    .main-container {\n      padding: 20px 0;\n      display: flex;\n      border: 1px solid #aaa;\n    }\n\n    .content-aside {\n      width: 300px;\n      flex-shrink: 0;\n      padding: 0 20px;\n      box-sizing: border-box;\n      border-right: 2px solid #ccc;\n      padding-bottom: 9999px;\n      margin-bottom: -9999px;\n    }\n\n    .base-info-items {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n    }\n\n    .base-info-items .base-info-item {\n      flex-basis: 50%;\n      line-height: 1.5;\n    }\n    .base-info-item:last-child {\n      flex-basis: 100%;\n    }\n\n    .contact-ways {\n      margin-top: 15px;\n    }\n\n    .contact-way {\n      display: flex;\n      line-height: 1.8;\n    }\n\n    .phone,.wechat,.email,.address {\n      margin-left: 10px;\n    }\n\n\n    /* 主要中间的内容 */\n    .main-content {\n      padding: 0 30px;\n      flex-grow: 1;\n    }\n\n    .job-detail {\n      margin: 20px 0;\n      line-height: 1.8;\n    }\n\n    .project-detail {\n      line-height: 1.8;\n      margin-bottom: 20px;\n      text-align: justify;\n    }\n\n\n    .project-dutys {\n      margin: 5px 0;\n    }\n    .project-dutys p{\n      line-height: 1.8;\n    }\n\n    @media print {\n      body {\n        background: transparent;\n      }\n    }\n',a=0,c=document.createElement("style");document.head.appendChild(c);let h=setInterval((()=>{a<t.length?(document.querySelector("#codeEdit").innerHTML=l.highlight(t.slice(0,a),l.languages.css),a++,document.querySelector("#codeEdit").scrollTop=99999,c.innerHTML=t.slice(0,a)):clearInterval(h)}),10);return document.createElement("style"),{readersNumber:i,book:e}}};const d={class:"container"},g=[t("pre",{id:"codeEdit"},null,-1),t("div",{class:"wrapper",style:{display:"none"}},[t("header",{class:"header"},[t("h1",null,"彭    浩"),t("h2",{class:"apply-position"},"web前端开发")]),t("div",{class:"main-container"},[t("aside",{class:"content-aside"},[t("section",null,[t("h2",{class:"block-title"},"基本信息"),t("div",{class:"base-info-items"},[t("div",{class:"base-info-item"},"年龄：25"),t("div",{class:"base-info-item"},"学历：本科"),t("div",{class:"base-info-item"},"英语：CET-4"),t("div",{class:"base-info-item"},"毕业时间：2018.6"),t("div",{class:"base-info-item"},"毕业院校：重庆邮电大学")])]),t("hr"),t("section",null,[t("h2",{class:"block-title"},"相关技能"),t("h3",{class:"block-sub-title"},"前端基础"),t("div",{id:"frontBase"}),t("br"),t("h3",{class:"block-sub-title"},"前端JS框架"),t("div",{id:"jsFramework"}),t("br"),t("h3",{class:"block-sub-title"},"前端UI框架"),t("div",{id:"uiFramework"}),t("br"),t("h3",{class:"block-sub-title"},"前端JS工具"),t("div",{id:"jsTool"}),t("br"),t("h3",{class:"block-sub-title"},"其他"),t("div",{id:"otherInfo"})]),t("hr"),t("section",null,[t("h2",{class:"block-title"},"联系方式"),t("div",{class:"contact-ways"},[t("div",{class:"contact-way"},[t("svg",{t:"1618318768017",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1149",width:"24",height:"24"},[t("path",{d:"M725.681633 902.791837c-38.661224 0-82.02449-7.314286-127.477551-21.420408-109.191837-33.959184-216.816327-105.012245-303.020409-200.09796C166.138776 538.644898 104.489796 396.538776 116.506122 270.106122c3.657143-31.346939 13.583673-71.053061 60.604082-102.922449 36.04898-29.257143 77.322449-45.97551 109.714286-45.453061 33.959184 0.522449 45.453061 12.538776 80.457143 63.216327 53.812245 74.187755 57.469388 110.759184 55.379591 131.657143-3.657143 34.481633-22.465306 49.632653-39.706122 63.216326-4.179592 3.134694-8.359184 6.791837-12.016326 9.926531-20.897959 26.644898-46.497959 63.738776 63.216326 177.110204 93.518367 89.861224 144.195918 100.832653 165.616327 99.265306 16.718367-1.044898 22.987755-9.926531 25.6-13.061225l0.522449-0.522448c35.004082-49.110204 46.497959-61.126531 79.934693-66.351021 32.391837-5.22449 49.110204 5.22449 118.07347 48.587755 62.171429 39.183673 90.906122 65.306122 84.636735 106.579592-2.089796 44.930612-36.571429 106.057143-75.232654 133.746939-26.644898 18.285714-63.738776 27.689796-107.624489 27.689796z",fill:"#16C4AF","p-id":"1150"})]),t("div",{class:"phone"},"15802381801")]),t("div",{class:"contact-way"},[t("svg",{t:"1618318961314",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2027",width:"24",height:"24"},[t("path",{d:"M683.058 364.695c11 0 22 1.016 32.943 1.976C686.564 230.064 538.896 128 370.681 128c-188.104 0.66-342.237 127.793-342.237 289.226 0 93.068 51.379 169.827 136.725 229.256L130.72 748.43l119.796-59.368c42.918 8.395 77.37 16.79 119.742 16.79 11 0 21.46-0.48 31.914-1.442a259.168 259.168 0 0 1-10.455-71.358c0.485-148.002 128.744-268.297 291.403-268.297l-0.06-0.06z m-184.113-91.992c25.99 0 42.913 16.79 42.913 42.575 0 25.188-16.923 42.579-42.913 42.579-25.45 0-51.38-16.85-51.38-42.58 0-25.784 25.93-42.574 51.38-42.574z m-239.544 85.154c-25.384 0-51.374-16.85-51.374-42.58 0-25.784 25.99-42.574 51.374-42.574 25.45 0 42.918 16.79 42.918 42.575 0 25.188-16.924 42.579-42.918 42.579z m736.155 271.655c0-135.647-136.725-246.527-290.983-246.527-162.655 0-290.918 110.88-290.918 246.527 0 136.128 128.263 246.587 290.918 246.587 33.972 0 68.423-8.395 102.818-16.85l93.809 50.973-25.93-84.677c68.907-51.93 120.286-119.815 120.286-196.033z m-385.275-42.58c-16.923 0-34.452-16.79-34.452-34.179 0-16.79 17.529-34.18 34.452-34.18 25.99 0 42.918 16.85 42.918 34.18 0 17.39-16.928 34.18-42.918 34.18z m188.165 0c-16.984 0-33.972-16.79-33.972-34.179 0-16.79 16.927-34.18 33.972-34.18 25.93 0 42.913 16.85 42.913 34.18 0 17.39-16.983 34.18-42.913 34.18z",fill:"#09BB07","p-id":"2028"})]),t("div",{class:"wechat"},"ph11567")]),t("div",{class:"contact-way"},[t("svg",{t:"1618319003673",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2862",width:"24",height:"24"},[t("path",{d:"M751.1 685.9H294.2c-23.7 0-43.2-19.4-43.2-43.2V364.1c0-23.7 19.4-43.2 43.2-43.2h456.9c23.7 0 43.2 19.4 43.2 43.2v278.6c0 23.8-19.4 43.2-43.2 43.2z",fill:"#FEE632","p-id":"2863"}),t("path",{d:"M124.37 756.852l279.65-253.71 27.952 30.81-279.65 253.709zM618.435 532.05l28.712-30.101 252.971 241.294-28.712 30.101z",fill:"#231815","p-id":"2864"}),t("path",{d:"M526.8 636.9h-1.5c-17.8-0.4-34.6-7.6-47.4-20.4l-0.4-0.4-347.1-367 30.2-28.6 346.9 366.8c5.1 5 11.8 7.9 18.7 8 6.5 0.1 12.5-2.1 17-6.5l327-365.7 31 27.7-327.8 366.7-0.4 0.5c-12.3 12.2-28.6 18.9-46.2 18.9z",fill:"#231815","p-id":"2865"}),t("path",{d:"M841.4 823.7H173.1c-48 0-87-39-87-87V286.9c0-48 39-87 87-87h668.3c48 0 87 39 87 87v449.9c0 47.9-39 86.9-87 86.9zM173.1 241.5c-25 0-45.4 20.4-45.4 45.4v449.9c0 25 20.4 45.4 45.4 45.4h668.3c25 0 45.4-20.4 45.4-45.4V286.9c0-25-20.4-45.4-45.4-45.4H173.1z",fill:"#231815","p-id":"2866"})]),t("div",{class:"email"},"949898050@qq.com")]),t("div",{class:"contact-way"},[t("svg",{t:"1618319088031",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4485",width:"24",height:"24"},[t("path",{d:"M833.536 667.136h-256l74.24-106.496c2.048-3.072 5.12-5.632 8.704-7.68 74.752-40.448 121.344-118.272 121.344-203.776 0-127.488-102.912-230.912-229.376-230.912S322.56 222.208 322.56 349.696c0 84.992 46.592 163.328 121.344 203.776 3.584 2.048 6.656 4.608 8.704 7.68l74.24 106.496H315.392l-178.688 250.368h857.6l-160.768-250.88z",fill:"#17E6A1","p-id":"4486"}),t("path",{d:"M377.344 593.408l113.664 161.792c7.68 11.264 23.04 13.824 33.792 6.144 2.048-1.536 4.096-3.584 6.144-6.144l113.664-161.792c86.016-48.128 138.752-138.752 138.752-237.568 0-150.016-122.368-272.384-272.384-272.384S238.592 205.312 238.592 355.84c0 98.816 52.736 188.928 138.752 237.568z m133.632-461.312c123.392 0 223.744 100.352 223.744 223.744 0 82.432-45.056 158.208-118.272 197.12-3.584 2.048-6.144 4.608-8.192 7.68l-97.28 137.728-97.28-137.728c-2.048-3.072-5.12-5.632-8.192-7.68-72.704-38.912-118.272-114.688-118.272-197.12 0-123.392 100.352-223.744 223.744-223.744z m0 345.6c68.096 0 123.392-55.296 123.392-123.392s-55.296-123.392-123.392-123.392S387.584 286.72 387.584 354.816c0 67.584 55.296 122.88 123.392 122.88z m0-197.632c40.96 0 74.24 33.28 74.24 74.24s-33.28 74.24-74.24 74.24-74.24-33.28-74.24-74.24c0-40.448 33.28-74.24 74.24-74.24z m471.552 649.216c-4.096 7.68-12.288 11.264-21.504 11.264H60.416c-8.704 0-16.896-3.584-21.504-11.264-4.096-7.68-4.096-16.384 0.512-24.064l147.456-242.176c4.608-7.168 12.288-12.8 20.992-12.8H358.4c13.312 0 24.576 11.264 24.576 24.576s-10.752 24.576-24.576 24.576H221.696l-117.76 191.488h813.568l-117.248-191.488h-136.704c-13.312 0-24.576-11.264-24.576-24.576s10.752-24.576 24.576-24.576H814.08c8.704 0 16.384 6.144 20.992 13.312l147.456 241.152c4.096 7.168 4.608 16.896 0 24.576z",fill:"#272636","p-id":"4487"})]),t("div",{class:"address"},"成都-武侯区")])])])]),t("main",{class:"main-content"},[t("div",{class:"job-exp"},[t("h2",{class:"block-title"},"工作经历"),t("div",{class:"flex-between"},[t("h4",null,"重庆云崛浩数有限公司"),t("h4",null,"前端开发"),t("h4",null,"2019.02 - 2021.03")]),t("div",{class:"job-detail"},[t("div",null,[a(" 1、"),t("span",{class:"highlight"},"前端组长"),a("，负责公司网页、小程序的"),t("span",{class:"highlight"},"开发、部署"),a("与"),t("span",{class:"highlight"},"维护")]),t("div",null,[a("2、开发设计可重用的业务"),t("span",{class:"highlight"},"组件")]),t("div",null,[a("3、负责公司"),t("span",{class:"highlight"},"新人的指导"),a(",帮助新人了解项目和开发过程")]),t("div",null,[a("4、负责公司项目前端的"),t("span",{class:"highlight"},"进度管理"),a(",使项目如期进行")]),t("div",null,[a("5、"),t("span",{class:"highlight"},"改造"),a("老项目,项目由node部署改为nginx部署")]),t("div",null,"6、前端技术分享, 提升团队技术水平")]),t("div",{class:"flex-between"},[t("h4",null,"广东信通通信有限公司"),t("h4",null,"前端开发"),t("h4",null,"2018.03 - 2019.01")]),t("div",{class:"job-detail"},[t("div",null,[a(" 1、参与公司生产指挥平台项目的"),t("span",{class:"highlight"},"开发"),a(",地图与周围模块的"),t("span",{class:"highlight"},"交互")]),t("div",null,[a("2、与客户沟通获取展示数据,与后端交流"),t("span",{class:"highlight"},"请求数据"),a("进行展示")]),t("div",null,[a("3、与产品经理和视觉设计工程师,"),t("span",{class:"highlight"},"紧密沟通"),a(" ,改善页面UI和交互方式")]),t("div",null,"4、负责公司项目配套的硬件的安装")]),t("hr")]),t("div",{class:"project-exp"},[t("h2",{class:"block-title"},"项目经历"),t("div",{class:"project-detail"},[t("h3",null,"国资监管系统(国资委端、企业端)"),t("h4",{class:"tech-stack"},"技术栈：vue全家桶 / ElementUI / jsencript / nodejs / request / express"),t("div",null,[t("b",null,"项目介绍"),a("：基于vue开发的子企业与主企业之间日常工作的管理系统。主企业下发任务,子企业填报任务,提交数据。通知通报、政策法规的下发与查看。 ")]),t("div",null,[t("b",null,"项目职责")]),t("div",{class:"project-dutys"},[t("p",{class:"intent"},[a(" 参与系统两个端项目的搭建,"),t("span",{class:"highlight"},"请求的封装"),a(",与后端讨论,更好的"),t("span",{class:"highlight"},"实现需求")]),t("p",{class:"intent"},[t("span",{class:"highlight"},"登录模块、角色权限模块"),a("的开发,以及登录之后获取菜单,"),t("span",{class:"highlight"},"递归"),a("渲染菜单组件开发。 ")]),t("p",{class:"intent"},[t("span",{class:"highlight"},"独立完成"),a(" 基于 Element UI 组件 实现的 列表页、详情页、编辑页 等常用页面的 "),t("span",{class:"highlight"},"模板封装")]),t("p",{class:"intent"},[a(" 负责项目后续bug的修改,需求的变更与"),t("span",{class:"highlight"},"需求确认"),a(",负责项目的"),t("span",{class:"highlight"},"远程部署"),a("和本地测试环境的部署,以及项目的"),t("span",{class:"highlight"},"进度监管")])]),t("div",null,[t("b",null,"技术要点"),a("：项目使用 "),t("span",{class:"highlight"},"Vue CLI2"),a(" 搭建项目环境; 使用 "),t("span",{class:"highlight"},"Vuex"),a(" 做状态管理; 使用 "),t("span",{class:"highlight"},"Element UI"),a(" 作页面布局及 交互 ; 使用 Less 作 CSS 预处理 ; 通过 "),t("span",{class:"highlight"},"Vue Router"),a("实现路由的跳转、"),t("span",{class:"highlight"},"axios"),a("进行请求、权限验证等;使用"),t("span",{class:"highlight"},"jsencript"),a("登录加密,使用"),t("span",{class:"highlight"},"nodejs,express,request"),a("进行请求的转发和部署 ")])]),t("div",{class:"project-detail"},[t("h3",null,"国资委大数据展示平台"),t("h4",{class:"tech-stack"},"技术栈：vue全家桶 /flex布局 / echarts / wordCloud / nodejs / request / express"),t("div",null,[t("b",null,"项目介绍"),a("：基于vue、echarts、flex布局开发的数据展示平台,对国资委企业端上传提交的数据进行统计展示、通过wordcloud词云分析舆情的情况,对接第三方接口,获取企业的工商信息进行展示 ")]),t("div",null,[t("b",null,"项目职责")]),t("div",{class:"project-dutys"},[t("p",{class:"intent"},[t("span",{class:"highlight"},"独立完成"),a("项目的搭建和初始化")]),t("p",{class:"intent"},[a("各种图表如柱状图、折线图、饼图的"),t("span",{class:"highlight"},"组件封装")]),t("p",{class:"intent"},[a("使用"),t("span",{class:"highlight"},"关系图"),a(",展示企业之间对应的关系")]),t("p",{class:"intent"},[a(" 负责项目后续bug的修改,需求的变更与"),t("span",{class:"highlight"},"需求确认"),a(",负责项目的"),t("span",{class:"highlight"},"远程部署"),a("和本地测试环境的部署,以及项目的"),t("span",{class:"highlight"},"进度监管")])]),t("div",null,[t("b",null,"技术要点"),a("：使用"),t("span",{class:"highlight"},"vue-cli3"),a("进行项目的构建,使用"),t("span",{class:"highlight"},"flex"),a("布局,"),t("span",{class:"highlight"},"echarts"),a("实现柱状图、折线图、雷达图、关系图、地图、树状图等等, 页面使用"),t("span",{class:"highlight"},"rem"),a("为单位,当窗口大小改变时,结合"),t("span",{class:"highlight"},"防抖"),a("函数,实时设置rem的大小,做到实时适应窗口 ")])]),t("div",{class:"project-detail"},[t("h3",null,"鲜芸巷微信小程序"),t("h4",{class:"tech-stack"},"技术栈：uniapp / flex布局 / uview / uni.request / 微信小程序"),t("div",null,[t("b",null,"项目介绍"),a("：基于uniapp开发的在线的社区团购小程序,包含商品浏览、选购、提货扫描、购物车、订单、定位、优惠券、直播、在线支付等功能 ")]),t("div",null,[t("b",null,"项目职责")]),t("div",{class:"project-dutys"},[t("p",{class:"intent"},"负责小程序的上线,更新"),t("p",{class:"intent"},[a(" 负责小程序"),t("span",{class:"highlight"},"首页"),a(",商品浏览页面的开发,商品item组件的开发 ")]),t("p",{class:"intent"},[a(" 负责优惠券"),t("span",{class:"highlight"},"组件"),a("的开发,使用微信自带的"),t("span",{class:"highlight"},"直播"),a("插件直播 ")]),t("p",{class:"intent"},[a(" 负责"),t("span",{class:"highlight"},"购物车"),a("的开发,订单页面的价格"),t("span",{class:"highlight"},"自动计算"),a("、"),t("span",{class:"highlight"},"微信支付")])]),t("div",null,[t("b",null,"技术要点"),a("：使用"),t("span",{class:"highlight"},"hbuilderX"),a("创建的uniapp项目,用到vuex管理当前角色,使用"),t("span",{class:"highlight"},"uview"),a("UI框架布局和交互,对"),t("span",{class:"highlight"},"uni.request"),a(" 进行请求封装,"),t("span",{class:"highlight"},"uni.chooseImage"),a("选择图片或拍照,"),t("span",{class:"highlight"},"uni.getLocation"),a("获取定位,使用"),t("span",{class:"highlight"},"live-player-plugin"),a("插件进行直播等功能 ")])])]),t("hr"),t("div",{class:"opensource-project"},[t("h2",{class:"block-title"},"开源项目"),t("div",{class:"project-detail"},[t("h3",null,"ph小说阅读器"),t("h4",{class:"tech-stack"},"技术栈：uniapp / flex布局 / uni.request / 网页分析"),t("div",null,[t("b",null,"项目介绍"),a("：利用爬虫的思想，使用uniapp开发的纯前端的安卓小说阅读器，无广告，有阅读记录、搜索、搜索记录、换源、目录、主题切换、字体大小设置等功能。 ")]),t("div",null,[t("b",null,"项目职责")]),t("div",{class:"project-dutys"},[t("p",{class:"intent"},"独立设计与开发"),t("p",{class:"intent"},[a("使用uniapp自带的"),t("span",{class:"highlight"},"uni.request"),a("请求在线网站的数据")]),t("p",{class:"intent"},[a("使用"),t("span",{class:"highlight"},"cheerio"),a("匹配到小说内容，剔除广告")]),t("p",{class:"intent"},[t("span",{class:"highlight"},"纯前端，无服务器"),a("。历史阅读、历史搜索等数据都存在本地。 ")])]),t("div",null,[t("b",null,"技术要点"),a("：使用uniapp开发的安卓软件，"),t("span",{class:"highlight"},"安卓打包"),a(", "),t("span",{class:"highlight"},"换源"),a("搜索，并且根据不同的源储存"),t("span",{class:"highlight"},"阅读记录"),a("以便"),t("span",{class:"highlight"},"继续阅读"),a("，"),t("span",{class:"highlight"},"分析目标网站"),a("的数据请求，"),t("span",{class:"highlight"},"爬取"),a("网页的数据。 下拉刷新、"),t("span",{class:"highlight"},"scroll-view"),a("的刷新等 ")]),t("div",null,[t("b",null,"github地址"),a("：https://github.com/initPH/novelReader")])])])])])],-1)];r.render=function(n,s,l,t,a,c){return i(),e("div",d,g)};var u=c({name:"App",components:{HelloWorld:r}});u.render=function(n,s,l,e,t,a){const c=h("HelloWorld");return i(),o(c,{collectionName:"are you ok"})},p(u).mount("#app");
