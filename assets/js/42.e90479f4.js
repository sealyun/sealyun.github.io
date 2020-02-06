(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{239:function(e,n,a){"use strict";a.r(n);var t=a(0),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"kubeadm杂谈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubeadm杂谈"}},[e._v("#")]),e._v(" kubeadm杂谈")]),e._v(" "),a("h1",{attrs:{id:"kubeadm-1-13版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubeadm-1-13版本"}},[e._v("#")]),e._v(" kubeadm 1.13版本")]),e._v(" "),a("p",[e._v("此版本更新了不少东西，以前老的配置不再适用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('W1205 19:10:23.541054   58540 strict.go:54] error unmarshaling configuration schema.GroupVersionKind{Group:"kubeadm.k8s.io", Version:"v1beta1", Kind:"InitConfiguration"}: error unmarshaling JSON: while decoding JSON: json: unknown field\n\n')])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("your configuration file uses an old API spec: \"kubeadm.k8s.io/v1alpha2\". Please use kubeadm v1.12 instead and run 'kubeadm config migrate --old-config old.yaml --new-config new.yaml', which will write the new, similar spec using a newer API version.\n")])])]),a("p",[e._v("诸如此类茫茫多的报错")]),e._v(" "),a("p",[e._v("需要使用新的kubeadm配置如：")]),e._v(" "),a("p",[e._v("kubeadm.yaml:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('apiVersion: kubeadm.k8s.io/v1beta1\nkind: ClusterConfiguration\nnetworking:\n  podSubnet: 100.64.0.0/10\nkubernetesVersion: v1.13.0\n---\napiVersion: kubeproxy.config.k8s.io/v1alpha1\nkind: KubeProxyConfiguration\nmode: "ipvs"\n')])])]),a("p",[e._v("kubeadm init --config kubeadm.yaml 才行")]),e._v(" "),a("p",[e._v("可以用下面命令来查看默认配置长什么样,可以用--component-configs来查看具体哪个组件的配置：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubeadm config print init-defaults --component-configs KubeProxyConfiguration\n")])])]),a("p",[e._v("做HA时出现下面错误：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('W1210 20:41:04.485754  110121 strict.go:54] error unmarshaling configuration schema.GroupVersionKind{Group:"kubeadm.k8s.io", Version:"v1beta1", Kind:"ClusterConfiguration"}: error unmarshaling JSON: while decoding JSON: json: unknown field "apiServerCertSANs"\n')])])]),a("p",[e._v("配置需要改成：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('apiVersion: kubeproxy.config.k8s.io/v1alpha1\nkind: KubeProxyConfiguration\nmode: "ipvs"\n---\napiVersion: kubeadm.k8s.io/v1beta1\ncertificatesDir: /etc/kubernetes/pki\nclusterName: kubernetes\ncontrolPlaneEndpoint: ""\ncontrollerManager: {}\ndns:\n  type: CoreDNS\nimageRepository: k8s.gcr.io\nkind: ClusterConfiguration\nkubernetesVersion: v1.13.0\nnetworking:\n  dnsDomain: cluster.local\n  serviceSubnet: 10.96.0.0/12\n  podSubnet: 100.64.0.0/10\napiServer:\n        certSANs:\n        - 10.1.86.209\n        - 10.1.86.204\n        - node01\n        - 10.1.86.205\n        - node02\n        - 10.1.86.206\n        - node03\n        - 127.0.0.1\n        extraArgs:\n           etcd-cafile: /etc/kubernetes/pki/cfssl/ca.pem\n           etcd-certfile: /etc/kubernetes/pki/cfssl/client.pem\n           etcd-keyfile: /etc/kubernetes/pki/cfssl/client-key.pem\netcd:\n    external:\n        caFile: /etc/kubernetes/pki/cfssl/ca.pem\n        certFile: /etc/kubernetes/pki/cfssl/client.pem\n        keyFile: /etc/kubernetes/pki/cfssl/client-key.pem\n        endpoints:\n        - https://10.1.86.204:2379\n        - https://10.1.86.205:2379\n        - https://10.1.86.206:2379\n')])])])])}),[],!1,null,null,null);n.default=s.exports}}]);