(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{227:function(e,t,a){"use strict";a.r(t);var n=a(0),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cni-小精灵-genie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cni-小精灵-genie"}},[e._v("#")]),e._v(" CNI 小精灵 genie")]),e._v(" "),a("p",[e._v("想同时使用多个CNI? 想往容器里塞多张网卡？试试这款CNI插件 "),a("a",{attrs:{href:"https://github.com/cni-genie/CNI-Genie",target:"_blank",rel:"noopener noreferrer"}},[e._v("CNI-Genie"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("genie可以引用CNI插件，包含默认CNI插件如（bridge macvlan ipvlan loopback）第三方插件如 calico,romana,weave-net")]),e._v(" "),a("p",[e._v("或者一些专用CNI插件如SR-IOV,DPDK等，可以调用在宿主机上的任意CNI插件.")]),e._v(" "),a("p",[e._v("甚至可以让容器一让网卡通过calico分配，另一张网卡走flannel走。")]),e._v(" "),a("h2",{attrs:{id:"为什么要有genie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有genie"}},[e._v("#")]),e._v(" 为什么要有genie")]),e._v(" "),a("h3",{attrs:{id:"多网卡与cni任意选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多网卡与cni任意选择"}},[e._v("#")]),e._v(" 多网卡与CNI任意选择")]),e._v(" "),a("p",[e._v("现在，在node节点上运行的kubelet最多只连接一个CNI插件，即Canal或Romana或Weave。CNI-Genie可以在运行时选用在该特定节点上运行的任何现有CNI插件。")]),e._v(" "),a("p",[e._v("当前Kubernetes无法做到这一点的原因是，当您启动kubelet时，您需要将cni-plugin详细信息作为“kubelet”进程的一部分传递。在这种情况下，您只需选择一个现有的CNI插件，并将其传递给kubelet。如果我们想让某些pod使用Canal网络和其他一组pod来使用weave网络怎么办？这在Kubernetes目前是不可能的。对于任何多网络支持，我们需要对Kubernetes进行更改，这会导致向后兼容性问题。")]),e._v(" "),a("p",[e._v("因此，CNI-Genie“多个CNI插件”功能旨在解决此问题，而无更改及Kubernetes代码")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/cni-genie/CNI-Genie/raw/master/docs/multiple-cni-plugins/what-cni-genie.png",alt:""}})]),e._v(" "),a("ul",[a("li",[e._v("用户可能不同场景对网络需求不同，如我们的一个场景，有些用户需要pod漂移保持ip不变，这样我们让其走ovn网络，有些云原生应用不关心地址变动就走calico")]),e._v(" "),a("li",[e._v("访问的网络不同，如一个业务处理业务走的是业务网（千兆），把数据存储到大数据平台走的存储网（25G），这样给容器同时分配两张网卡")]),e._v(" "),a("li",[e._v("不同的CNI插件在端口映射，NAT，隧道，中断主机端口/接口的需求方面是不同的")])]),e._v(" "),a("p",[e._v("如下：")]),e._v(" "),a("blockquote",[a("p",[e._v("控制面数据面网卡分离")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/cni-genie/CNI-Genie/blob/master/docs/multiple-ips/multi-interface.PNG",alt:""}})]),e._v(" "),a("blockquote",[a("p",[e._v("高速网络与低速分离")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/cni-genie/CNI-Genie/raw/master/docs/multiple-ips/multi-interface.PNG",alt:""}})]),e._v(" "),a("blockquote",[a("p",[e._v("流媒体控制流与数据流分离")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/cni-genie/CNI-Genie/raw/master/docs/multiple-ips/multi-interface.PNG",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"network-attachment-definitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-attachment-definitions"}},[e._v("#")]),e._v(" Network Attachment Definitions")]),e._v(" "),a("p",[e._v("NetworkAttachmentDefinition 是一个用户可指定网络配置的CRD,然后pod选用该CRD. 这块一般人我不告诉他。")]),e._v(" "),a("h3",{attrs:{id:"smart-cni"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smart-cni"}},[e._v("#")]),e._v(" Smart CNI")]),e._v(" "),a("p",[e._v("根据用户关注的性能指标自动选择CNI,例如占用率，子网数量，延迟，带宽这些“KPI” 去选择CNI")]),e._v(" "),a("h3",{attrs:{id:"网络隔离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络隔离"}},[e._v("#")]),e._v(" 网络隔离")]),e._v(" "),a("p",[e._v("为租户提供专用的“物理”网络\n在共享的“物理”网络上为不同租户隔离的“逻辑”网络")]),e._v(" "),a("h3",{attrs:{id:"网络级acl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络级acl"}},[e._v("#")]),e._v(" 网络级ACL")]),e._v(" "),a("p",[e._v("用于网络级ACL的CNI-Genie网络策略引擎")]),e._v(" "),a("h3",{attrs:{id:"针对给定workload在不同（物理或逻辑）网络之间进行实时切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针对给定workload在不同（物理或逻辑）网络之间进行实时切换"}},[e._v("#")]),e._v(" 针对给定workload在不同（物理或逻辑）网络之间进行实时切换")]),e._v(" "),a("p",[e._v("价格最小化：随着网络价格的变化，将工作负载动态切换到更便宜的网络\n最大化网络利用率：在阈值时动态地将工作负载切换到较不拥挤的网络")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/cni-genie/CNI-Genie/raw/master/docs/network-switching.PNG",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"使用介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用介绍"}},[e._v("#")]),e._v(" 使用介绍")]),e._v(" "),a("p",[e._v("安装略")]),e._v(" "),a("p",[e._v("下面针对几个主要功能对genie进行介绍：")]),e._v(" "),a("h3",{attrs:{id:"多网卡与cni选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多网卡与cni选择"}},[e._v("#")]),e._v(" 多网卡与CNI选择")]),e._v(" "),a("p",[e._v("选择不同的CNI只需要在pod中加一个annotations即可")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-canal-master\n  labels:\n    app: web\n  annotations:\n    cni: "canal"\nspec:\n  containers:\n    - name: key-value-store\n      image: nginx:latest\n      imagePullPolicy: IfNotPresent\n      ports:\n        - containerPort: 6379\n')])])]),a("p",[a("img",{attrs:{src:"https://github.com/cni-genie/CNI-Genie/raw/master/docs/CNIGenieDetailedWorkflow.png",alt:""}})]),e._v(" "),a("p",[e._v("上图最重要的就是4，5，6三个步骤：")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("kubelet调用CNI Genie")]),e._v(" "),a("li",[e._v("CNI Genie调用apiserver根据pod名查询pod annotations")]),e._v(" "),a("li",[e._v("genie去调用真正的CNI")]),e._v(" "),a("li",[e._v("返回结果给kubelet")]),e._v(" "),a("li",[e._v("返回网络信息给apiserver写入etcd")])]),e._v(" "),a("p",[e._v("多网卡不同CNI：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  annotations:\n    cni: "weave,canal"\n')])])]),a("p",[e._v("kubectl get pod只会显示一个ip, describe能看到两张网卡的ip：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('annotations:     \n    cni: canal,weave\n    multi-ip-preferences: \'{"multi_entry":2,"ips":{"":{},"ip1":{"ip":"10.244.0.201","interface":"eth0"},"ip2":{"ip":"10.32.0.4","interface":"eth1"}}}\'                                    \n')])])]),a("p",[e._v("进容器也可以看到两张网卡了：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen \n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00                             \n    inet 127.0.0.1/8 scope host lo                                                   \n       valid_lft forever preferred_lft forever                                      \n    inet6 ::1/128 scope host                                                       \n       valid_lft forever preferred_lft forever                                    \n3: eth0@if49589: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1400 qdisc noqueue state UP group default   \n    link/ether 7e:99:f7:87:81:c6 brd ff:ff:ff:ff:ff:ff                                            \n    inet 10.244.0.201/32 scope global eth0                                                       \n       valid_lft forever preferred_lft forever                                                  \n    inet6 fe80::7c99:f7ff:fe87:81c6/64 scope link                                              \n       valid_lft forever preferred_lft forever                                                \n49590: eth1@if49591: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1376 qdisc noqueue state UP group default  \n    link/ether 36:b0:8c:f0:9f:58 brd ff:ff:ff:ff:ff:ff                                               \n    inet 10.32.0.4/12 scope global eth1                                                             \n       valid_lft forever preferred_lft forever                                                     \n    inet6 fe80::34b0:8cff:fef0:9f58/64 scope link                                                 \n       valid_lft forever preferred_lft forever \n")])])]),a("h3",{attrs:{id:"通过crd定义网卡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过crd定义网卡"}},[e._v("#")]),e._v(" 通过CRD定义网卡")]),e._v(" "),a("p",[e._v("定义一个NAD(NetworkAttachmentDefinition)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('apiVersion: "k8s.cni.cncf.io/v1"\nkind: NetworkAttachmentDefinition\nmetadata:\n  name: weavenet\nspec:\n  config: \'{\n    "cniVersion": "0.3.0",\n    "plugins": [\n        {\n            "name": "weave",\n            "type": "weave-net",\n            "hairpinMode": true\n        },\n        {\n            "type": "portmap",\n            "capabilities": {"portMappings": true},\n            "snat": true\n        }\n    ]\n}\n\'\n')])])]),a("p",[e._v("pod使用该NAD,还可指定默认插件，没写annotation就走默认CNI")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-netattachdef-flannel-weave\n  annotations:\n    k8s.v1.cni.cncf.io/networks: flannel@eth1, network/weavenet@eth5\nspec:\n  containers:\n    - name: key-value-store\n      image: nginx:latest\n      imagePullPolicy: IfNotPresent\n      ports:\n        - containerPort: 80\n")])])]),a("h3",{attrs:{id:"智能cni选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#智能cni选择"}},[e._v("#")]),e._v(" 智能CNI选择")]),e._v(" "),a("p",[e._v("CNI-Genie可以与cAdvisor交互，收集每个容器的网络使用信息,以决定网络走哪个CNI")]),e._v(" "),a("p",[e._v("支持以下KPI：")]),e._v(" "),a("ul",[a("li",[e._v("网络延迟")]),e._v(" "),a("li",[e._v("网络带宽")]),e._v(" "),a("li",[e._v("端到端响应时间")]),e._v(" "),a("li",[e._v("使用的IP地址百分比，即（使用的IP地址数）/（IP地址总数）")]),e._v(" "),a("li",[e._v("入住率")]),e._v(" "),a("li",[e._v("用户填写问卷以查找用例优化的CNI插件")])]),e._v(" "),a("p",[e._v("使用时直接不指定CNI即可")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-smart-pick\n  labels:\n    app: web\n  annotations:\n    cni: ""\n')])])]),a("p",[e._v("你可以把一个CNI的流量打满，那么新创建的pod就会自动选择别的CNI")]),e._v(" "),a("h3",{attrs:{id:"从指定ip地址池内分配地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从指定ip地址池内分配地址"}},[e._v("#")]),e._v(" 从指定IP地址池内分配地址")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('apiVersion: alpha.network.k8s.io/v1\nkind: Logicalnetwork\nmetadata:\n  name: net1\n  namespace: default\nspec:\n  physicalNet: "phynet1"\n  sub_subnet: "10.32.0.0/24"\n')])])]),a("p",[e._v("pod 使用时用 networks字段指定即可")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-single-network-pod\n  labels:\n    app: web\n  annotations:\n    cni: ""\n    networks: net1\n')])])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("p",[e._v("genie在很多复杂网络场景还是非常有作用的，我们主要用其来管理虚拟机网络，以达到虚拟机与容器在同一个平台上运行")]),e._v(" "),a("p",[e._v("探讨可加QQ群：98488045")])])}),[],!1,null,null,null);t.default=i.exports}}]);