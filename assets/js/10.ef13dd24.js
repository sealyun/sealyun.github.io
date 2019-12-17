(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{207:function(a,e,t){"use strict";t.r(e);var n=t(0),c=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"calico架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calico架构"}},[a._v("#")]),a._v(" calico架构")]),a._v(" "),t("h2",{attrs:{id:"安装常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装常见问题"}},[a._v("#")]),a._v(" 安装常见问题")]),a._v(" "),t("p",[a._v("calico无法启动：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Readiness probe failed: calico/node is not ready: felix is not ready: Get http://localhost:9099/readiness: dial tcp [::1]:9099: connect: connection refused \n")])])]),t("p",[a._v("很可能是网卡发现有问题，calico虚拟化时没找对网卡，calico会经常找docker0网桥，导致clusterIP不通从而calico node连不上etcd\n")]),a._v(" "),t("p",[a._v("解决办法：\n配置好/etc/hosts")]),a._v(" "),t("p",[a._v("或者修改网卡发现机制：\ncalico网卡发现：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('- name: IP_AUTODETECTION_METHOD\n              value: "interface=eth.*"   # 如果你的网卡不是eth开头，换成自己的，在yaml文件里修改\n')])])]),t("h2",{attrs:{id:"calico架构分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calico架构分析"}},[a._v("#")]),a._v(" calico架构分析")]),a._v(" "),t("h3",{attrs:{id:"组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[a._v("#")]),a._v(" 组件")]),a._v(" "),t("ul",[t("li",[a._v("Felix calico每个节点上跑的代理")]),a._v(" "),t("li",[a._v("Orchestrator plugin网络编排插件")]),a._v(" "),t("li",[a._v("etcd 存储配置数据")]),a._v(" "),t("li",[a._v("BIRD BGP客户端，分发路由信息")]),a._v(" "),t("li",[a._v("BGP Route Reflector(BIRD) 另一个可选方案，适合更大规模")])]),a._v(" "),t("h3",{attrs:{id:"felix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#felix"}},[a._v("#")]),a._v(" Felix")]),a._v(" "),t("p",[a._v("每个节点上的一个守护进程，负责编写路由和ACLs（访问控制列表）. 还有一些其它节点上需要设置的东西。\n主要包含：")]),a._v(" "),t("blockquote",[t("p",[a._v("网络接口管理")])]),a._v(" "),t("p",[a._v("把接口的一些信息告诉内核，让内核正确的处理这个接口的链路，特殊情况下，会去响应ARP请求，允许ip forwarding有等。\n接口发现，注销的功能等")]),a._v(" "),t("blockquote",[t("p",[a._v("路由管理")])]),a._v(" "),t("p",[a._v("在节点上把endpoints的路由配置到Linux kernel FIB(forwarding information base), 保障包正确的到达节点的endpoint上")]),a._v(" "),t("p",[a._v("我的理解endpoints是节点上的虚拟网卡")]),a._v(" "),t("blockquote",[t("p",[a._v("ACL管理 准入控制列表")])]),a._v(" "),t("p",[a._v("设置内核的ACL,保证只有合法的包才可以在链路上发送,保障安全。")]),a._v(" "),t("blockquote",[t("p",[a._v("状态报告")])]),a._v(" "),t("p",[a._v("把节点的网络状态信息写入etcd。")]),a._v(" "),t("h3",{attrs:{id:"编排插件-orchestrator-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编排插件-orchestrator-plugin"}},[a._v("#")]),a._v(" 编排插件 orchestrator Plugin")]),a._v(" "),t("p",[a._v("需要和别的编排调度平台结合时的插件，如Calico Neutron ML2 mechanism driver. 这样就可以把calico当成neutron的网络实现。")]),a._v(" "),t("blockquote",[t("p",[a._v("API 转化")])]),a._v(" "),t("p",[a._v("编排系统 kubernetes openstack等有自己的API，编排插件翻译成calico的数据模型存到calico的数据库中。")]),a._v(" "),t("blockquote",[t("p",[a._v("反馈")])]),a._v(" "),t("p",[a._v("把网络状态的一些信息反馈给上层的编排调度系统")]),a._v(" "),t("h3",{attrs:{id:"etcd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etcd"}},[a._v("#")]),a._v(" etcd")]),a._v(" "),t("p",[a._v("两个主要功能，存储数据与各组建之间的通信。")]),a._v(" "),t("p",[a._v("根据编排系统的不同，etcd可能是个主存储或者是个镜像存储，在openstack中就是一个镜像存储")]),a._v(" "),t("h3",{attrs:{id:"bgp-client-bird"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bgp-client-bird"}},[a._v("#")]),a._v(" BGP Client(BIRD)")]),a._v(" "),t("p",[a._v("读取Felix设置的内核路由状态，在数据中心分发状态。")]),a._v(" "),t("h3",{attrs:{id:"bgp-route-reflector-bird"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bgp-route-reflector-bird"}},[a._v("#")]),a._v(" BGP Route Reflector (BIRD)")]),a._v(" "),t("p",[a._v("大型部署，简单的BGP会有限制，每个BGP客户端之间都会相互连接，会以 N^2次方\n增长。拓扑也会变的复杂")]),a._v(" "),t("p",[a._v("reflector负责client之间的连接，防止它们需要两两相连。")]),a._v(" "),t("p",[a._v("为了冗余，可以部署多个reflectors, 它仅仅包含控制面，endpoint之间的数据不经过它们")]),a._v(" "),t("p",[a._v("路由广播")]),a._v(" "),t("h3",{attrs:{id:"calico-node容器剖析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calico-node容器剖析"}},[a._v("#")]),a._v(" calico-node容器剖析")]),a._v(" "),t("ul",[t("li",[a._v("Felix TODO")]),a._v(" "),t("li",[a._v("BIRD TODO")]),a._v(" "),t("li",[a._v("confd 通过监听etcd修改BGP配置 AS number, logging levels, IPAM信息等")])]),a._v(" "),t("h3",{attrs:{id:"数据流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据流"}},[a._v("#")]),a._v(" 数据流")]),a._v(" "),t("p",[a._v("主要靠三个东西：\n让内核响应ARP请求\n用route让endpoint(workload)互通\n用iptables进行安全隔离")]),a._v(" "),t("h3",{attrs:{id:"calico-kube-controllers-容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calico-kube-controllers-容器"}},[a._v("#")]),a._v(" calico/kube-controllers 容器")]),a._v(" "),t("p",[a._v("此容器里包含以下控制器：")]),a._v(" "),t("ul",[t("li",[a._v("policy controller: 监控网络策略 配置calico策略")]),a._v(" "),t("li",[a._v("profile controller: 监控namespaces和配置calico profiles")]),a._v(" "),t("li",[a._v("workloadendpoint controller: 监控pod标签的变化和更新calico workload endpoints")]),a._v(" "),t("li",[a._v("node controller: 监听k8s移除节点，和移除calico相关联的数据")])]),a._v(" "),t("h3",{attrs:{id:"配置calico-cni插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置calico-cni插件"}},[a._v("#")]),a._v(" 配置calico CNI插件")]),a._v(" "),t("p",[a._v("calico CNI最小化配置：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{\n    "name": "any_name",\n    "cniVersion": "0.1.0",\n    "type": "calico",\n    "ipam": {\n        "type": "calico-ipam"\n    }\n}\n')])])]),t("p",[a._v("如果calico-node容器自定义了一个NODENAME而不是 node的hostname CNI插件必须配置相同的node name")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{\n    "name": "any_name",\n    "nodename": "<NODENAME>",\n    "type": "calico",\n    "ipam": {\n        "type": "calico-ipam"\n    }\n}\n')])])]),t("p",[a._v("其它相关配置： datastore type, Etcd location")]),a._v(" "),t("blockquote",[t("p",[a._v("logging:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{\n    "name": "any_name",\n    "cniVersion": "0.1.0",\n    "type": "calico",\n    "log_level": "DEBUG",\n    "ipam": {\n        "type": "calico-ipam"\n    }\n}\n')])])]),t("blockquote",[t("p",[a._v("IPAM")])]),a._v(" "),t("p",[a._v("使用calico IPAM分配ip地址池")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{\n    "name": "any_name",\n    "cniVersion": "0.1.0",\n    "type": "calico",\n    "ipam": {\n        "type": "calico-ipam",\n        "assign_ipv4": "true",\n        "assign_ipv6": "true",\n        "ipv4_pools": ["10.0.0.0/24", "20.0.0.0/16"],\n        "ipv6_pools": ["2001:db8::1/120"]\n    }\n}\n')])])]),t("blockquote",[t("p",[a._v("kubernetes 配置")])]),a._v(" "),t("p",[a._v("calico需要访问kubernets api server,找到pod的标签，所以需要配置apiserver相关信息")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{\n    "name": "any_name",\n    "cniVersion": "0.1.0",\n    "type": "calico",\n    "kubernetes": {\n        "kubeconfig": "/path/to/kubeconfig"\n    },\n    "ipam": {\n        "type": "calico-ipam"\n    }\n}\n')])])]),t("blockquote",[t("p",[a._v("允许kubernetes networkpolicy")])]),a._v(" "),t("p",[a._v("设置了这个就必须运行calico/kube-controllers 把 policy,profile,workloadendpoint都设置成允许")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{\n    "name": "any_name",\n    "cniVersion": "0.1.0",\n    "type": "calico",\n    "policy": {\n      "type": "k8s"\n    },\n    "kubernetes": {\n        "kubeconfig": "/path/to/kubeconfig"\n    },\n    "ipam": {\n        "type": "calico-ipam"\n    }\n}\n')])])])])}),[],!1,null,null,null);e.default=c.exports}}]);