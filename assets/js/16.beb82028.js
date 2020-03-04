(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{208:function(t,e,n){"use strict";n.r(e);var a=n(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"containerd与kubernetes集成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#containerd与kubernetes集成"}},[t._v("#")]),t._v(" containerd与kubernetes集成")]),t._v(" "),n("h2",{attrs:{id:"概念介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概念介绍"}},[t._v("#")]),t._v(" 概念介绍")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("cri (Container runtime interface)")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("cri")]),t._v(" is a "),n("a",{attrs:{href:"https://containerd.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("containerd"),n("OutboundLink")],1),t._v(" plugin implementation of Kubernetes "),n("a",{attrs:{href:"https://github.com/kubernetes/kubernetes/blob/master/pkg/kubelet/apis/cri/runtime/v1alpha2/api.proto",target:"_blank",rel:"noopener noreferrer"}},[t._v("container runtime interface (CRI)"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("li",[t._v("cri是 kubernetes的容器运行时接口的容器插件实现。\n")]),t._v(" "),n("li",[n("img",{attrs:{src:"/cri.jpg",alt:"CRI"}})])])]),t._v(" "),n("li",[n("p",[t._v("containerd")]),t._v(" "),n("ul",[n("li",[t._v("containerd is an industry-standard container runtime with an emphasis on simplicity, robustness and portability.")]),t._v(" "),n("li",[t._v("containerd完全支持运行容器的的CRI运行时规范。")]),t._v(" "),n("li",[t._v("cri在containerd1.1以上的版本的原生插件。它内置于containerd并默认启用。")]),t._v(" "),n("li",[n("img",{attrs:{src:"/containerd.png",alt:"containerd"}})])])]),t._v(" "),n("li",[n("p",[t._v("cri-o")]),t._v(" "),n("ul",[n("li",[t._v("OCI-based implementation of Kubernetes Container Runtime Interface.")]),t._v(" "),n("li",[t._v("kubernetes为了兼容cri和oci孵化了项目cri-o。为了架设在cri和oci之间的一座桥梁。由此cri-o既兼容cri插件实现又兼容oci的容器运行时标准。")])])]),t._v(" "),n("li",[n("p",[t._v("oci (Open Container Initiative)")]),t._v(" "),n("ul",[n("li",[t._v("https://www.opencontainers.org/about/oci-scope-table")]),t._v(" "),n("li",[t._v("oci是由多家公司成立的项目,并由linux基金会进行管理,致力于container runtime 的标准的制定和runc的开发等工作。")])])]),t._v(" "),n("li",[n("p",[t._v("runc")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("runc")]),t._v(" is a CLI tool for spawning and running containers according to the OCI specification.")]),t._v(" "),n("li",[t._v("runc，是对于OCI标准的一个参考实现，是一个可以用于创建和运行容器的CLI(command-line interface)工具。")])]),t._v(" "),n("p",[n("img",{attrs:{src:"/kubelet.png",alt:""}})])])]),t._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),n("p",[t._v("由于docker嵌入了太多自身内容,为了减轻容器负担。此次选用containerd作为kubernetes的容器实现方案。本文将带大家讲述如何搭建一个集成了containerd的k8s集群。")]),t._v(" "),n("h2",{attrs:{id:"环境准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),n("p",[t._v("下载containerd二进制包。我这里已经编译并打包了好了，内含containerd、runc、crictl、ctr等。")]),t._v(" "),n("p",[t._v("下载链接：https://github.com/cuisongliu/containerd-dist/releases/download/v1.2.4/containerd-v1.2.4.tar.gz")]),t._v(" "),n("ul",[n("li",[t._v("runc版本：  1.0.1-dev")]),t._v(" "),n("li",[t._v("containerd版本： v1.2.4")])]),t._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),n("h3",{attrs:{id:"安装containerd"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装containerd"}},[t._v("#")]),t._v(" 安装containerd")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("解压二进制包并生成默认文件")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("tar -C /usr/local/bin -xzf containerd-v1.2.4.tar.gz\nchmod a+x /usr/local/bin/*\ncontainerd config default > /etc/containerd/config.toml\n")])])]),n("p",[t._v("生成的默认配置文件注意  "),n("code",[t._v("[grpc]")]),t._v(" 的 "),n("code",[t._v("address")]),t._v("  字段默认为 "),n("code",[t._v("/run/containerd/containerd.sock")])]),t._v(" "),n("p",[t._v("配置文件其他参数含义参照github地址： https://github.com/containerd/containerd/blob/master/docs/man/containerd-config.toml.5.md")])]),t._v(" "),n("li",[n("p",[t._v("在  "),n("code",[t._v("/etc/systemd/system")]),t._v(" 目录下编写文件  "),n("code",[t._v("containerd.service")]),t._v("内容如下")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("[Unit]\nDescription=containerd container runtime\nDocumentation=https://containerd.io\nAfter=network.target\n\n[Service]\nExecStartPre=/sbin/modprobe overlay\nExecStart=/usr/local/bin/containerd\nRestart=always\nRestartSec=5\nDelegate=yes\nKillMode=process\nOOMScoreAdjust=-999\nLimitNOFILE=1048576\n# Having non-zero Limit*s causes performance problems due to accounting overhead\n# in the kernel. We recommend using cgroups to do container-local accounting.\nLimitNPROC=infinity\nLimitCORE=infinity\n\n[Install]\nWantedBy=multi-user.target\n")])])])]),t._v(" "),n("li",[n("p",[t._v("启动containerd")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("systemctl enable containerd\nsystemctl restart containerd\nsystemctl status containerd\n")])])]),n("p",[t._v("看containerd启动状态如果是running就没有问题。下面我们测试拉取一下hub的镜像。")])]),t._v(" "),n("li",[n("p",[t._v("测试containerd")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("ctr images pull docker.io/library/nginx:alpine\n")])])]),n("p",[t._v("看到输出done，说明containerd运行一切正常。")])])]),t._v(" "),n("h3",{attrs:{id:"使用crictl连接containerd"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用crictl连接containerd"}},[t._v("#")]),t._v(" 使用crictl连接containerd")]),t._v(" "),n("p",[t._v("下一步我们使用crictl连接containerd。")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("修改crictl的配置文件,在  "),n("code",[t._v("/etc/crictl.yaml")]),t._v(" 写入以下内容：")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("runtime-endpoint: unix:///run/containerd/containerd.sock\nimage-endpoint: unix:///run/containerd/containerd.sock\ntimeout: 10\ndebug: false\n")])])]),n("p",[t._v("这里注意runtime-endpoint 和image-endpoint 必须与/etc/containerd/config.toml中配置保持一致。")])]),t._v(" "),n("li",[n("p",[t._v("验证一下cri插件是否可用")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("crictl  pull nginx:alpine\ncrictl  rmi  nginx:alpine\ncrictl  images\n")])])]),n("p",[t._v("其中   "),n("code",[t._v("crictl images")]),t._v("  会列出所有的cri容器镜像。")]),t._v(" "),n("p",[t._v("到此我们的cri + containerd已经完成整合了。下一步我们需要修改kubeadm配置进行安装。")])])]),t._v(" "),n("h3",{attrs:{id:"导入kubenetes离线镜像包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导入kubenetes离线镜像包"}},[t._v("#")]),t._v(" 导入kubenetes离线镜像包")]),t._v(" "),n("p",[t._v("这里我们就需要导入k8s的离线镜像包了。"),n("strong",[t._v("这里需要注意一下，kubernetes是调用的cri接口,所以导入时也需要从cri插件导入镜像。")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("cri导入镜像命令(cri导入镜像)：")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(" ctr cri load  images.tar\n")])])])]),t._v(" "),n("li",[n("p",[t._v("containerd导入镜像命令(containerd导入镜像)：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(" ctr images import images.tar \n")])])])])]),t._v(" "),n("h3",{attrs:{id:"修改kubelet配置和kubeadm安装时配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改kubelet配置和kubeadm安装时配置"}},[t._v("#")]),t._v(" 修改kubelet配置和kubeadm安装时配置")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("在 kubelet配置文件 10-kubeadm.conf 的"),n("code",[t._v("[Service]")]),t._v(" 结点加入以下配置：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('Environment="KUBELET_EXTRA_ARGS=--container-runtime=remote --runtime-request-timeout=15m --container-runtime-endpoint=unix:///run/containerd/containerd.sock"\n')])])])]),t._v(" "),n("li",[n("p",[t._v("在kubeadm配置文件 kubeadm.yaml 中加入")]),t._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kubeadm.k8s.io/v1beta1\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" InitConfiguration\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodeRegistration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("criSocket")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /run/containerd/containerd.sock\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" containerd\n")])])]),n("p",[t._v("到此containerd和kubernetes的集成就完成了。下面可以直接安装即可。")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);