(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{211:function(t,s,e){"use strict";e.r(s);var a=e(17),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"项目地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目地址"}},[t._v("#")]),t._v(" 项目地址")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/fanux/sealos",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://gh-card.dev/repos/fanux/sealos.svg",alt:"fanux/sealos - GitHub"}}),e("OutboundLink")],1)]),t._v(" "),e("h1",{attrs:{id:"快速开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),e("blockquote",[e("p",[t._v("环境信息")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("主机名")]),t._v(" "),e("th",[t._v("IP地址")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("master0")]),t._v(" "),e("td",[t._v("192.168.0.2")])]),t._v(" "),e("tr",[e("td",[t._v("master1")]),t._v(" "),e("td",[t._v("192.168.0.3")])]),t._v(" "),e("tr",[e("td",[t._v("master2")]),t._v(" "),e("td",[t._v("192.168.0.4")])]),t._v(" "),e("tr",[e("td",[t._v("node0")]),t._v(" "),e("td",[t._v("192.168.0.5")])])])]),t._v(" "),e("p",[t._v("服务器密码：123456")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("kubernetes高可用安装教程")]),t._v(" "),e("p",[t._v("只需要准备好服务器，在任意一台服务器上执行下面命令即可")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载并安装sealos, sealos是个golang的二进制工具，直接下载拷贝到bin目录即可")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/fanux/sealos/releases/download/v3.0.1/sealos "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x sealos "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" sealos /usr/bin \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装一个三master的kubernetes集群")]),t._v("\nsealos init --passwd "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t--master "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.2  --master "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.3  --master "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.4  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t--node "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.5 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t--pkg-url https://sealyun.oss-cn-beijing.aliyuncs.com/413bd3624b2fb9e466601594b4f72072-1.17.0/kube1.17.0.tar.gz "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t--version v1.17.0\n")])])]),e("blockquote",[e("p",[t._v("参数含义")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数名")]),t._v(" "),e("th",[t._v("含义")]),t._v(" "),e("th",[t._v("示例")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("passwd")]),t._v(" "),e("td",[t._v("服务器密码")]),t._v(" "),e("td",[t._v("123456")])]),t._v(" "),e("tr",[e("td",[t._v("master")]),t._v(" "),e("td",[t._v("k8s master节点IP地址")]),t._v(" "),e("td",[t._v("192.168.0.2")])]),t._v(" "),e("tr",[e("td",[t._v("node")]),t._v(" "),e("td",[t._v("k8s node节点IP地址")]),t._v(" "),e("td",[t._v("192.168.0.3")])]),t._v(" "),e("tr",[e("td",[t._v("pkg-url")]),t._v(" "),e("td",[t._v("离线资源包地址，支持下载到本地，或者一个远程地址")]),t._v(" "),e("td",[t._v("/root/kube1.16.0.tar.gz")])]),t._v(" "),e("tr",[e("td",[t._v("version")]),t._v(" "),e("td",[e("a",{attrs:{href:"http://store.lameleg.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("资源包"),e("OutboundLink")],1),t._v("对应的版本")]),t._v(" "),e("td",[t._v("v1.16.0")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("系统支持：centos7.2以上 ubuntu16.04以上 内核推荐4.14以上")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/fanux/sealos",target:"_blank",rel:"noopener noreferrer"}},[t._v("github 求star"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"http://store.lameleg.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("其它版本资源包"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);