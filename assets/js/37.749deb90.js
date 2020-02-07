(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{261:function(e,n,t){"use strict";t.r(n);var r=t(0),i=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"kubernetes开发指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes开发指南"}},[e._v("#")]),e._v(" kubernetes开发指南")]),e._v(" "),t("h2",{attrs:{id:"官方例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#官方例子"}},[e._v("#")]),e._v(" 官方例子")]),e._v(" "),t("p",[e._v("大部分使用方式调用clientgo即可，我增加一些clientgo事例里没有的一些技巧")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/kubernetes/client-go/tree/master/examples",target:"_blank",rel:"noopener noreferrer"}},[e._v("clientgo 事例地址"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"初始化客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化客户端"}},[e._v("#")]),e._v(" 初始化客户端")]),e._v(" "),t("p",[e._v("这里给了两种初始化kubernetes客户端的方式，一种根据kubeconfig文件的路径，官方有，比较简单")]),e._v(" "),t("p",[e._v("另一种就是根据kubeconfig内容的字符串去初始化一个客户端，这种方式应用场景是比如我们把很多的kubeconfig文件存在了数据库中（多租户时）\n")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('package client\n\nimport (\n\t"fmt"\n\n\t"github.com/Sirupsen/logrus"\n\n\t"git.xfyun.cn/container/genesis/modules/authentication"\n\t"git.xfyun.cn/container/genesis/utils"\n\n\t"k8s.io/client-go/kubernetes"\n\t"k8s.io/client-go/tools/clientcmd"\n)\n\n//KubeClientFromKubeconfigPath is\nfunc KubeClientFromKubeconfigPath(path string) (clientSet *kubernetes.Clientset, err error) {\n\n\tcfg, err := clientcmd.BuildConfigFromFlags("", path)\n\tif err != nil {\n\t\treturn nil, fmt.Errorf("new kube config error: %s", err)\n\t}\n\n\tif clientSet, err = kubernetes.NewForConfig(cfg); err != nil {\n\t\treturn nil, fmt.Errorf("new kube config error: %s", err)\n\t}\n\treturn clientSet, nil\n}\n\n//KubeClientFromKubeconfigStringBody is\nfunc KubeClientFromKubeconfigStringBody(body string) (*kubernetes.Clientset, error) {\n\tb, err := utils.Base64Decode(body)\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\n\tlogrus.Debugf("Fetch kubeconfig string: %s", string(b))\n\tclientConfig, err := clientcmd.NewClientConfigFromBytes(b)\n\tif err != nil {\n\t\treturn nil, fmt.Errorf("new client config from body error: %s", err)\n\t}\n\tcfg, err := clientConfig.ClientConfig()\n\tif err != nil {\n\t\treturn nil, fmt.Errorf("new kube config from body error: %s", err)\n\t}\n\n\tclientSet, err := kubernetes.NewForConfig(cfg)\n\tif err != nil {\n\t\treturn nil, fmt.Errorf("new kube config from body error: %s", err)\n\t}\n\treturn clientSet, nil\n}\n')])])]),t("h2",{attrs:{id:"yaml文件解析技巧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yaml文件解析技巧"}},[e._v("#")]),e._v(" yaml文件解析技巧")]),e._v(" "),t("p",[e._v("yaml文件中的---进行切分时很多一些yaml库没法解析，需要自己进行切分，当然k8s源码里已经有了对应实现，我们拿来用即可")]),e._v(" "),t("p",[e._v("编写一个回调函数进行处理，拿到的就是切分好的json了")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('package utils\n\nimport (\n\t"bytes"\n\t"fmt"\n\t"io"\n\n\t"k8s.io/apimachinery/pkg/runtime"\n\t"k8s.io/apimachinery/pkg/util/yaml"\n)\n\nvar bs = []byte(`\nkind: Namespace\nmetadata:\n   name: test\n---\n\nkind: bbb\nname: aaa`)\n\n/* Out put\n{"kind":"Namespace","metadata":{"name":"test"}}\n{"kind":"bbb","name":"aaa"}\n*/\nfunc example() {\n\treader := bytes.NewReader(bs)\n\text := runtime.RawExtension{}\n\td := yaml.NewYAMLOrJSONDecoder(reader, 4096)\n\tfor {\n\t\tif err := d.Decode(&ext); err != nil {\n\t\t\tif err == io.EOF {\n\t\t\t\treturn\n\t\t\t}\n\t\t\treturn\n\t\t}\n\t\tfmt.Println(string(ext.Raw))\n\t}\n}\n\n//YamlCallback is\ntype YamlCallback func([]byte) error\n\n//YamlHandler is\nfunc YamlHandler(rawBytes []byte, fn YamlCallback) (err error) {\n\treader := bytes.NewReader(rawBytes)\n\text := runtime.RawExtension{}\n\td := yaml.NewYAMLOrJSONDecoder(reader, 4096)\n\tfor {\n\t\tif err = d.Decode(&ext); err != nil {\n\t\t\tif err == io.EOF {\n\t\t\t\treturn nil\n\t\t\t}\n\t\t\treturn fmt.Errorf("decode yaml json failed: %v", err)\n\t\t}\n\t\t//Raw is already to json\n\t\tif err = fn(ext.Raw); err != nil {\n\t\t\treturn fmt.Errorf("handler yaml callback fn failed: %v", err)\n\t\t}\n\t}\n}\n\n')])])]),t("h2",{attrs:{id:"监听service事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监听service事件"}},[e._v("#")]),e._v(" 监听service事件")]),e._v(" "),t("p",[e._v("出自kube-proxy源码")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// informers "k8s.io/kubernetes/pkg/client/informers/informers_generated/internalversion"\n\n// 先根据client获取个informer工厂\ninformerFactory := informers.NewSharedInformerFactory(s.Client, s.ConfigSyncPeriod)\n\n// 生产个service的informer，同样可以监听别的对象\nserviceInformer=informerFactory.Core().InternalVersion().Services()\n\n/*\n\tAddFunc    func(obj interface{})\n\tUpdateFunc func(oldObj, newObj interface{})\n\tDeleteFunc func(obj interface{})\n*/\nserviceInformer.Informer().AddEventHandlerWithResyncPeriod(\n\tcache.ResourceEventHandlerFuncs{\n\t\tAddFunc:    result.handleAddService, // 你自己的回调函数\n\t\tUpdateFunc: result.handleUpdateService,\n\t\tDeleteFunc: result.handleDeleteService,\n\t},\n\tresyncPeriod,\n)\ninformerFactory.Start(wait.NeverStop) // 开始监听\n')])])])])}),[],!1,null,null,null);n.default=i.exports}}]);