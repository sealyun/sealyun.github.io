(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{213:function(s,t,a){"use strict";a.r(t);var e=a(17),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"快速开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[s._v("#")]),s._v(" 快速开始")]),s._v(" "),a("blockquote",[a("p",[s._v("环境信息")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("主机名")]),s._v(" "),a("th",[s._v("IP地址")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("master0")]),s._v(" "),a("td",[s._v("192.168.0.2")])]),s._v(" "),a("tr",[a("td",[s._v("master1")]),s._v(" "),a("td",[s._v("192.168.0.3")])]),s._v(" "),a("tr",[a("td",[s._v("master2")]),s._v(" "),a("td",[s._v("192.168.0.4")])]),s._v(" "),a("tr",[a("td",[s._v("node0")]),s._v(" "),a("td",[s._v("192.168.0.5")])])])]),s._v(" "),a("p",[s._v("服务器密码：123456")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("kubernetes高可用安装教程")]),s._v(" "),a("p",[s._v("只需要准备好服务器，在任意一台服务器上执行下面命令即可")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载并安装sealos, sealos是个golang的二进制工具，直接下载拷贝到bin目录即可, release页面也可下载")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -c https://sealyun.oss-cn-beijing.aliyuncs.com/latest/sealos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x sealos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" sealos /usr/bin \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载离线资源包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -c https://sealyun.oss-cn-beijing.aliyuncs.com/d551b0b9e67e0416d0f9dce870a16665-1.18.0/kube1.18.0.tar.gz \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装一个三master的kubernetes集群")]),s._v("\nsealos init --passwd "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t--master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.2  --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.3  --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.4  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t--node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t--pkg-url /root/kube1.18.0.tar.gz "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t--version v1.18.0\n")])])]),a("blockquote",[a("p",[s._v("参数含义")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参数名")]),s._v(" "),a("th",[s._v("含义")]),s._v(" "),a("th",[s._v("示例")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("passwd")]),s._v(" "),a("td",[s._v("服务器密码")]),s._v(" "),a("td",[s._v("123456")])]),s._v(" "),a("tr",[a("td",[s._v("master")]),s._v(" "),a("td",[s._v("k8s master节点IP地址")]),s._v(" "),a("td",[s._v("192.168.0.2")])]),s._v(" "),a("tr",[a("td",[s._v("node")]),s._v(" "),a("td",[s._v("k8s node节点IP地址")]),s._v(" "),a("td",[s._v("192.168.0.3")])]),s._v(" "),a("tr",[a("td",[s._v("pkg-url")]),s._v(" "),a("td",[s._v("离线资源包地址，支持下载到本地，或者一个远程地址")]),s._v(" "),a("td",[s._v("/root/kube1.16.0.tar.gz")])]),s._v(" "),a("tr",[a("td",[s._v("version")]),s._v(" "),a("td",[a("a",{attrs:{href:"http://store.lameleg.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("资源包"),a("OutboundLink")],1),s._v("对应的版本")]),s._v(" "),a("td",[s._v("v1.16.0")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("增加master")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("sealos "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6 --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.7\nsealos "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6-192.168.0.9  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者多个连续IP")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("增加node")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("sealos "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6 --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.7\nsealos "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6-192.168.0.9  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者多个连续IP")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("删除指定master节点")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("sealos clean --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6 --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.7\nsealos clean --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6-192.168.0.9  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者多个连续IP")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("删除指定node节点")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("sealos clean --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6 --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.7\nsealos clean --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6-192.168.0.9  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者多个连续IP")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("清理集群")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("sealos clean\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("系统支持：centos7.2以上 ubuntu16.04以上 内核推荐4.14以上")]),s._v(" "),a("p",[s._v("推荐配置：centos7.4")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意事项")]),s._v(" "),a("ol",[a("li",[s._v("必须同步所有服务器时间")]),s._v(" "),a("li",[s._v("所有服务器主机名不能重复")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);