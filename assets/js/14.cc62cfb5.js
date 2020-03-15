(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{215:function(t,s,a){"use strict";a.r(s);var e=a(17),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"设计原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计原理"}},[t._v("#")]),t._v(" 设计原理")]),t._v(" "),a("h2",{attrs:{id:"执行流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行流程"}},[t._v("#")]),t._v(" 执行流程")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("通过sftp或者wget把离线安装包拷贝到目标机器上（masters和nodes）")])]),t._v(" "),a("li",[a("p",[t._v("在master0上执行kubeadm init")])]),t._v(" "),a("li",[a("p",[t._v("在其它master上执行kubeadm join 并设置控制面，这个过程会在其它master上起etcd并与master0的etcd组成集群，并启动控制组建（apiserver controller等）")])]),t._v(" "),a("li",[a("p",[t._v("join node节点，会在node上配置ipvs规则，配置/etc/hosts等")]),t._v(" "),a("p",[t._v("有个细节是所有对apiserver进行访问都是通过域名，因为master上连接自己就行，node需要通过虚拟ip链接多个master，这个每个节点的kubelet与kube-proxy访问apiserver的地址是不一样的，而kubeadm又只能在配置文件中指定一个地址，所以使用一个域名但是每个节点解析不同。")])])]),t._v(" "),a("p",[t._v("使用域名的好处还有就是IP地址发生变化时仅需要修改解析即可。")]),t._v(" "),a("h2",{attrs:{id:"本地内核负载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地内核负载"}},[t._v("#")]),t._v(" 本地内核负载")]),t._v(" "),a("p",[t._v("通过这样的方式实现每个node上通过本地内核负载均衡访问masters：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  +----------+                       +---------------+  virturl server: 127.0.0.1:6443\n  | mater0   |<----------------------| ipvs nodes    |    real servers:\n  +----------+                      |+---------------+            10.103.97.200:6443\n                                    |                             10.103.97.201:6443\n  +----------+                      |                             10.103.97.202:6443\n  | mater1   |<---------------------+\n  +----------+                      |\n                                    |\n  +----------+                      |\n  | mater2   |<---------------------+\n  +----------+\n")])])]),a("p",[t._v("在node上起了一个lvscare的static pod去守护这个 ipvs, 一旦apiserver不可访问了，会自动清理掉所有node上对应的ipvs规则， master恢复正常时添加回来。")]),t._v(" "),a("p",[t._v("所以在你的node上加了三个东西，可以直观的看到：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/kubernetes/manifests   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这下面增加了lvscare的static pod")]),t._v("\nipvsadm -Ln                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以看到创建的ipvs规则")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/hosts                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 增加了虚拟IP的地址解析")]),t._v("\n")])])]),a("h2",{attrs:{id:"定制kubeadm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定制kubeadm"}},[t._v("#")]),t._v(" 定制kubeadm")]),t._v(" "),a("p",[t._v("对kubeadm改动非常少，主要是证书时间延长和join命令的扩展,主要讲讲join命令的改造：")]),t._v(" "),a("p",[t._v("首先join命令增加--master参数用于指定master地址列表")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("flagSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("StringSliceVar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("locallb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LVScare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Masters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"master"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A list of ha masters, --master 192.168.0.2:6443  --master 192.168.0.2:6443  --master 192.168.0.2:6443"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这样就可以拿到master地址列表去做ipvs了")]),t._v(" "),a("p",[t._v("如果不是控制节点且不是单master，那么就创建一条ipvs规则,控制节点上不需要创建，连自己的apiserver即可：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cfg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ControlPlane "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is not a control plan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("locallb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LVScare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Masters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        locallb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateLocalLB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),a("p",[t._v("然后再去创建lvscare static pod去守护ipvs:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("locallb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LVScare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Masters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    locallb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("LVScareStaticPodToDisk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/kubernetes/manifests"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("所以哪怕你不使用sealos，也可以直接用定制过的kubeadm去装集群，只是麻烦一些：")]),t._v(" "),a("h4",{attrs:{id:"kubeadm配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubeadm配置文件"}},[t._v("#")]),t._v(" kubeadm配置文件")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kubeadm.k8s.io/v1beta1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ClusterConfiguration\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kubernetesVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1.14.0\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("controlPlaneEndpoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apiserver.cluster.local:6443"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# apiserver DNS name")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("certSANs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 127.0.0.1\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" apiserver.cluster.local\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 172.20.241.205\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 172.20.241.206\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 172.20.241.207\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 172.20.241.208\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 10.103.97.1          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# virturl ip")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kubeproxy.config.k8s.io/v1alpha1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" KubeProxyConfiguration\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ipvs"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ipvs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("excludeCIDRs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.103.97.1/32"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意不加这个kube-proxy会清理你的规则")]),t._v("\n")])])]),a("h4",{attrs:{id:"master0-10-103-97-100-上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master0-10-103-97-100-上"}},[t._v("#")]),t._v(" master0 10.103.97.100 上")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.103.97.100 apiserver.cluster.local"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /etc/hosts "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解析的是master0的地址")]),t._v("\nkubeadm init --config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("kubeadm-config.yaml --experimental-upload-certs  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ~/.kube "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" /etc/kubernetes/admin.conf ~/.kube/config\nkubectl apply -f https://docs.projectcalico.org/v3.6/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml\n")])])]),a("h4",{attrs:{id:"master1-10-103-97-101-上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master1-10-103-97-101-上"}},[t._v("#")]),t._v(" master1 10.103.97.101 上")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.103.97.100 apiserver.cluster.local"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /etc/hosts "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#解析的是master0的地址,为了能正常join进去")]),t._v("\nkubeadm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.103")]),t._v(".97.100:6443 --token 9vr73a.a8uxyaju799qwdjv "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --discovery-token-ca-cert-hash sha256:7c2e69131a36ae2a042a339b33381c6d0d43887e2de83720eff5359e26aec866 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --experimental-control-plane "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --certificate-key f8902e114ef118304e561c3ecd4d0b543adc226b7a07f675f56564185ffe0c07 \n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s/10.103.97.100/10.103.97.101/g"')]),t._v(" -i /etc/hosts  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解析再换成自己的地址，否则就都依赖master0的伪高可用了")]),t._v("\n")])])]),a("h4",{attrs:{id:"master2-10-103-97-102-上，同master1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master2-10-103-97-102-上，同master1"}},[t._v("#")]),t._v(" master2 10.103.97.102 上，同master1")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.103.97.100 apiserver.cluster.local"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /etc/hosts\nkubeadm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.103")]),t._v(".97.100:6443 --token 9vr73a.a8uxyaju799qwdjv "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --discovery-token-ca-cert-hash sha256:7c2e69131a36ae2a042a339b33381c6d0d43887e2de83720eff5359e26aec866 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --experimental-control-plane "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --certificate-key f8902e114ef118304e561c3ecd4d0b543adc226b7a07f675f56564185ffe0c07  \n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s/10.103.97.100/10.103.97.101/g"')]),t._v(" -i /etc/hosts\n")])])]),a("h4",{attrs:{id:"nodes-上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodes-上"}},[t._v("#")]),t._v(" nodes 上")]),t._v(" "),a("p",[t._v("join时加上--master指定master地址列表")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.103.97.1 apiserver.cluster.local"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /etc/hosts   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 需要解析成虚拟ip")]),t._v("\nkubeadm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.103")]),t._v(".97.1:6443 --token 9vr73a.a8uxyaju799qwdjv "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.103")]),t._v(".97.100:6443 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.103")]),t._v(".97.101:6443 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.103")]),t._v(".97.102:6443 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --discovery-token-ca-cert-hash sha256:7c2e69131a36ae2a042a339b33381c6d0d43887e2de83720eff5359e26aec866\n")])])]),a("h2",{attrs:{id:"离线包结构分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#离线包结构分析"}},[t._v("#")]),t._v(" 离线包结构分析")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n├── bin  # 指定版本的bin文件，只需要这三个，其它组件跑容器里\n│   ├── kubeadm\n│   ├── kubectl\n│   └── kubelet\n├── conf\n│   ├── 10-kubeadm.conf  # 这个文件新版本没用到，我在shell里直接生成，这样可以检测cgroup driver\n│   ├── kubeadm.yaml # kubeadm的配置文件\n│   ├── kubelet.service  # kubelet systemd配置文件\n├── images  # 所有镜像包\n│   └── images.tar\n└── shell\n    ├── init.sh  # 初始化脚本\n    └── master.sh # 运行master脚本\n")])])]),a("p",[t._v("init.sh脚本中拷贝bin文件到$PATH下面，配置systemd，关闭swap防火墙等，然后导入集群所需要的镜像。")]),t._v(" "),a("p",[t._v("master.sh主要执行了kubeadm init")]),t._v(" "),a("p",[t._v("conf下面有有我需要的如kubeadm的配置文件，calico yaml文件等等")]),t._v(" "),a("p",[t._v("sealos会会调用二者。 所以大部分兼容不同版本都可以微调脚本做到。")])])}),[],!1,null,null,null);s.default=n.exports}}]);