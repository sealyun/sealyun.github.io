(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{210:function(e,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"使用kubebuilder开发crd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用kubebuilder开发crd"}},[e._v("#")]),e._v(" 使用kubebuilder开发CRD")]),e._v(" "),a("p",[e._v("扩展kubernetes两个最常用最需要掌握的东西：自定义资源CRD 和 adminsion webhook, 本文教你如何十分钟掌握CRD开发.")]),e._v(" "),a("p",[e._v("kubernetes允许用户自定义自己的资源对象，就如同deployment statefulset一样，这个应用非常广泛，比如prometheus opterator就自定义Prometheus对象，再加上一个自定义的controller监听到kubectl create Prometheus时就去创建Pod组成一个pormetheus集群。rook等等同理。")]),e._v(" "),a("p",[e._v("我需要用kubernetes调度虚拟机，所以这里自定义一个 VirtualMachine 类型\n")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/CRD.png",alt:""}})]),e._v(" "),a("h1",{attrs:{id:"kubebuilder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubebuilder"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://github.com/kubernetes-sigs/kubebuilder",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubebuilder"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("kubebuilder能帮我们节省大量工作，让开发CRD和adminsion webhook变得异常简单。")]),e._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),a("p",[e._v("通过源码安装：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/kubernetes-sigs/kubebuilder\ncd kubebuilder\nmake build\ncp bin/kubebuilder $GOPATH/bin\n")])])]),a("p",[e._v("或者下载二进制：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("os=$(go env GOOS)\narch=$(go env GOARCH)\n\n# download kubebuilder and extract it to tmp\ncurl -sL https://go.kubebuilder.io/dl/2.0.0-beta.0/${os}/${arch} | tar -xz -C /tmp/\n\n# move to a long-term location and put it on your path\n# (you'll need to set the KUBEBUILDER_ASSETS env var if you put it somewhere else)\nsudo mv /tmp/kubebuilder_2.0.0-beta.0_${os}_${arch} /usr/local/kubebuilder\nexport PATH=$PATH:/usr/local/kubebuilder/bin\n")])])]),a("p",[e._v("还需要装下"),a("a",{attrs:{href:"https://github.com/kubernetes-sigs/kustomize",target:"_blank",rel:"noopener noreferrer"}},[e._v("kustomize"),a("OutboundLink")],1),e._v(" 这可是个渲染yaml的神器，让helm颤抖。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("go install sigs.k8s.io/kustomize/v3/cmd/kustomize\n")])])]),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("p",[e._v("注意你得先有个kubernetes集群，"),a("a",{attrs:{href:"https://github.com/fanux/sealos",target:"_blank",rel:"noopener noreferrer"}},[e._v("一步安装走你"),a("OutboundLink")],1)]),e._v(" "),a("blockquote",[a("p",[e._v("创建CRD")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('kubebuilder init --domain sealyun.com --license apache2 --owner "fanux"\nkubebuilder create api --group infra --version v1 --kind VirtulMachine\n')])])]),a("blockquote",[a("p",[e._v("安装CRD并启动controller")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("make install # 安装CRD\nmake run # 启动controller\n")])])]),a("p",[e._v("然后我们就可以看到创建的CRD了")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# kubectl get crd\nNAME                                           AGE\nvirtulmachines.infra.sealyun.com                  52m\n")])])]),a("p",[e._v("来创建一个虚拟机：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# kubectl apply -f config/samples/\n# kubectl get virtulmachines.infra.sealyun.com \nNAME                   AGE\nvirtulmachine-sample   49m\n")])])]),a("p",[e._v("看一眼yaml文件：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# cat config/samples/infra_v1_virtulmachine.yaml \napiVersion: infra.sealyun.com/v1\nkind: VirtulMachine\nmetadata:\n  name: virtulmachine-sample\nspec:\n  # Add fields here\n  foo: bar\n")])])]),a("p",[e._v("这里仅仅是把yaml存到etcd里了，我们controller监听到创建事件时啥事也没干。")]),e._v(" "),a("blockquote",[a("p",[e._v("把controller部署到集群中")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("make docker-build docker-push IMG=fanux/infra-controller\nmake deploy\n")])])]),a("p",[e._v("我是连的远端的kubenetes, make docker-build时test过不去，没有etcd的bin文件，所以先把test关了。")]),e._v(" "),a("p",[e._v("修改Makefile:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# docker-build: test\ndocker-build: \n")])])]),a("p",[e._v("Dockerfile里的"),a("code",[e._v("gcr.io/distroless/static:latest")]),e._v(" 这个镜像你也可能拉不下来，随意改改就行，我改成了"),a("code",[e._v("golang:1.12.7")])]),e._v(" "),a("p",[e._v("也有可能构建时有些代码拉不下来，启用一下go mod vendor 把依赖打包进去")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("go mod vendor\n如果你本地有些代码拉不下来，可以用proxy:\n")])])]),a("p",[e._v("export GOPROXY=https://goproxy.io")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),a("p",[e._v("再改下Dockerfile, 注释掉download：")]),e._v(" "),a("p",[e._v("修改后：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# Build the manager binary\nFROM golang:1.12.7 as builder\n\nWORKDIR /go/src/github.com/fanux/sealvm\n# Copy the Go Modules manifests\nCOPY . . \n\n# Build\nRUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o manager main.go\n\n# Use distroless as minimal base image to package the manager binary\n# Refer to https://github.com/GoogleContainerTools/distroless for more details\n# FROM gcr.io/distroless/static:latest\nFROM golang:1.12.7\nWORKDIR /\nCOPY --from=builder /go/src/github.com/fanux/sealvm/manager .\nENTRYPOINT ["/manager"]\n')])])]),a("p",[a("code",[e._v("make deploy")]),e._v(" 时报错： "),a("code",[e._v("Error: json: cannot unmarshal string into Go struct field Kustomization.patches of type types.Patch")])]),e._v(" "),a("p",[e._v("把 "),a("code",[e._v("config/default/kustomization.yaml")]),e._v(" 中的 "),a("code",[e._v("patches:")]),e._v(" 改成 "),a("code",[e._v("patchesStrategicMerge:")]),e._v(" 即可")]),e._v(" "),a("p",[a("code",[e._v("kustomize build config/default")]),e._v(" 这个命令就渲染出了controller的yaml文件，可以体验下")]),e._v(" "),a("p",[e._v("看 你的controller已经跑起来了：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get deploy -n sealvm-system\nNAME                        DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE\nsealvm-controller-manager   1         1         1            0           3m\nkubectl get svc -n sealvm-system\nNAME                                        TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE\nsealvm-controller-manager-metrics-service   ClusterIP   10.98.71.199   <none>        8443/TCP   4m\n")])])]),a("h2",{attrs:{id:"开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发"}},[e._v("#")]),e._v(" 开发")]),e._v(" "),a("h3",{attrs:{id:"增加对象数据参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加对象数据参数"}},[e._v("#")]),e._v(" 增加对象数据参数")]),e._v(" "),a("p",[e._v("看下config/samples下面的yaml文件：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apiVersion: infra.sealyun.com/v1\nkind: VirtulMachine\nmetadata:\n  name: virtulmachine-sample\nspec:\n  # Add fields here\n  foo: bar\n")])])]),a("p",[e._v("这里参数里有"),a("code",[e._v("foo:bar")]),e._v("， 那我们来加个虚拟CPU，内存信息：")]),e._v(" "),a("p",[e._v("直接"),a("code",[e._v("api/v1/virtulmachine_types.go")]),e._v("即可")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// VirtulMachineSpec defines the desired state of VirtulMachine\n// 在这里加信息\ntype VirtulMachineSpec struct {\n\t// INSERT ADDITIONAL SPEC FIELDS - desired state of cluster\n\t// Important: Run "make" to regenerate code after modifying this file\n\tCPU    string `json:"cpu"`   // 这是我增加的\n\tMemory string `json:"memory"`\n}\n\n// VirtulMachineStatus defines the observed state of VirtulMachine\n// 在这里加状态信息，比如虚拟机是启动状态，停止状态啥的\ntype VirtulMachineStatus struct {\n\t// INSERT ADDITIONAL STATUS FIELD - define observed state of cluster\n\t// Important: Run "make" to regenerate code after modifying this file\n}\n')])])]),a("p",[e._v("然后make一下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("make && make install && make run\n")])])]),a("p",[e._v("这时再去渲染一下controller的yaml就会发现CRD中已经带上CPU和内存信息了：")]),e._v(" "),a("p",[a("code",[e._v("kustomize build config/default")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("properties:\n  cpu:\n    description: 'INSERT ADDITIONAL SPEC FIELDS - desired state of cluster\n      Important: Run \"make\" to regenerate code after modifying this file'\n    type: string\n  memory:\n    type: string\n")])])]),a("p",[e._v("修改一下yaml:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('apiVersion: infra.sealyun.com/v1\nkind: VirtulMachine\nmetadata:\n  name: virtulmachine-sample\nspec:\n  cpu: "1"\n  memory: "2G"\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# kubectl apply -f config/samples \nvirtulmachine.infra.sealyun.com "virtulmachine-sample" configured\n# kubectl get virtulmachines.infra.sealyun.com virtulmachine-sample -o yaml \napiVersion: infra.sealyun.com/v1\nkind: VirtulMachine\nmetadata:\n  annotations:\n    kubectl.kubernetes.io/last-applied-configuration: |\n      {"apiVersion":"infra.sealyun.com/v1","kind":"VirtulMachine","metadata":{"annotations":{},"name":"virtulmachine-sample","namespace":"default"},"spec":{"cpu":"1","memory":"2G"}}\n  creationTimestamp: 2019-07-26T08:47:34Z\n  generation: 2\n  name: virtulmachine-sample\n  namespace: default\n  resourceVersion: "14811698"\n  selfLink: /apis/infra.sealyun.com/v1/namespaces/default/virtulmachines/virtulmachine-sample\n  uid: 030e2b9a-af82-11e9-b63e-5254bc16e436\nspec:      # 新的CRD已生效\n  cpu: "1"\n  memory: 2G \n')])])]),a("p",[e._v("Status 同理，就不再赘述了，比如我把status里加一个Create, 表示controller要去创建虚拟机了(主要一些控制层面的逻辑)，创建完了把状态改成Running")]),e._v(" "),a("h3",{attrs:{id:"reconcile-唯一需要实现的接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reconcile-唯一需要实现的接口"}},[e._v("#")]),e._v(" Reconcile 唯一需要实现的接口")]),e._v(" "),a("p",[e._v("controller把轮训与事件监听都封装在这一个接口里了.你不需要关心怎么事件监听的.")]),e._v(" "),a("h4",{attrs:{id:"获取虚拟机信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取虚拟机信息"}},[e._v("#")]),e._v(" 获取虚拟机信息")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('func (r *VirtulMachineReconciler) Reconcile(req ctrl.Request) (ctrl.Result, error) {\n\tctx = context.Background()\n\t_ = r.Log.WithValues("virtulmachine", req.NamespacedName)\n\n\tvm := &v1.VirtulMachine{}\n\tif err := r.Get(ctx, req.NamespacedName, vm); err != nil { # 获取VM信息\n\t\tlog.Error(err, "unable to fetch vm")\n\t} else {\n        fmt.Println(vm.Spec.CPU, vm.Spec.Memory) # 打印CPU内存信息\n\t}\n\n\treturn ctrl.Result{}, nil\n}\n')])])]),a("p",[a("code",[e._v("make && make install && make run")]),e._v("这个时候去创建一个虚拟机"),a("code",[e._v("kubectl apply -f config/samples")]),e._v(",日志里就会输出CPU内存了. List接口同理，我就不赘述了")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("r.List(ctx, &vms, client.InNamespace(req.Namespace), client.MatchingField(vmkey, req.Name))\n")])])]),a("h4",{attrs:{id:"更新状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新状态"}},[e._v("#")]),e._v(" 更新状态")]),e._v(" "),a("p",[e._v("在status结构体中加入状态字段：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('type VirtulMachineStatus struct {\n\tStatus string `json:"status"`\n}\n')])])]),a("p",[e._v("controller里去更新状态：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('vm.Status.Status = "Running"\nif err := r.Status().Update(ctx, vm); err != nil {\n\tlog.Error(err, "unable to update vm status")\n}\n')])])]),a("p",[e._v("如果出现:"),a("code",[e._v("the server could not find the requested resource")]),e._v(" 这个错误，那么在CRD结构体上需要加个注释 "),a("code",[e._v("// +kubebuilder:subresource:status")]),e._v("：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// +kubebuilder:subresource:status\n// +kubebuilder:object:root=true\n\ntype VirtulMachine struct {\n\tmetav1.TypeMeta   `json:",inline"`\n\tmetav1.ObjectMeta `json:"metadata,omitempty"`\n\n\tSpec   VirtulMachineSpec   `json:"spec,omitempty"`\n\tStatus VirtulMachineStatus `json:"status,omitempty"`\n}\n')])])]),a("p",[e._v("这样就好了")]),e._v(" "),a("p",[e._v("编译启动后再去apply发现状态已经变成running：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# kubectl get virtulmachines.infra.sealyun.com virtulmachine-sample -o yaml\n...\nstatus:\n  status: Running \n")])])]),a("h4",{attrs:{id:"删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[e._v("#")]),e._v(" 删除")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('time.Sleep(time.Second * 10)\nif err := r.Delete(ctx, vm); err != nil {\n\tlog.Error(err, "unable to delete vm ", "vm", vm)\n}\n')])])]),a("p",[e._v("10s之后我们将GET不到")]),e._v(" "),a("h3",{attrs:{id:"删除回收器-finalizers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除回收器-finalizers"}},[e._v("#")]),e._v(" 删除回收器 Finalizers")]),e._v(" "),a("p",[e._v("如果不使用Finalizers，kubectl delete 时直接就删了etcd数据，controller再想去拿CRD时已经拿不到了：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ERRO[0029] VirtulMachine.infra.sealyun.com "virtulmachine-sample" not foundunable to fetch vm  source="virtulmachine_controller.go:48"\n')])])]),a("p",[e._v("所以在创建时我们需要给CRD加上Finalizer:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('vm.ObjectMeta.Finalizers = append(vm.ObjectMeta.Finalizers, "virtulmachine.infra.sealyun.com")\n')])])]),a("p",[e._v("然后删除时就只会给CRD打上一个删除时间戳，供我们做后续处理, 处理完了我们删除掉Finalizers：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("如果 DeleteionTimestamp不存在\n    如果没有Finalizers\n        加上Finalizers,并更新CRD\n要不然，说明是要被删除的\n    如果存在Finalizers，删除Finalizers,并更新CRD\n")])])]),a("p",[e._v("看个完整的代码示例：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("if cronJob.ObjectMeta.DeletionTimestamp.IsZero() {\n        if !containsString(cronJob.ObjectMeta.Finalizers, myFinalizerName) {\n            cronJob.ObjectMeta.Finalizers = append(cronJob.ObjectMeta.Finalizers, myFinalizerName)\n            if err := r.Update(context.Background(), cronJob); err != nil {\n                return ctrl.Result{}, err\n            }\n        }\n    } else {\n        if containsString(cronJob.ObjectMeta.Finalizers, myFinalizerName) {\n            if err := r.deleteExternalResources(cronJob); err != nil {\n                return ctrl.Result{}, err\n            }\n\n            cronJob.ObjectMeta.Finalizers = removeString(cronJob.ObjectMeta.Finalizers, myFinalizerName)\n            if err := r.Update(context.Background(), cronJob); err != nil {\n                return ctrl.Result{}, err\n            }\n        }\n    }\n")])])]),a("h3",{attrs:{id:"失败重试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#失败重试"}},[e._v("#")]),e._v(" 失败重试")]),e._v(" "),a("p",[e._v("假设我们A依赖B而B又后创建，那么在处理A CRD时直接返回失败即可，这样很快会重试")]),e._v(" "),a("h3",{attrs:{id:"webhook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webhook"}},[e._v("#")]),e._v(" webhook")]),e._v(" "),a("p",[e._v("kuberentes有三种webhook,admission webhook, authorization webhook and CRD conversion webhook.")]),e._v(" "),a("p",[e._v("这里比如我们要给CRD设置一些默认值，又或者是用户创建时少填了一些参数，那么我们得禁止创建等等这些事。")]),e._v(" "),a("p",[e._v("使用webhook也非常的简单，只需给定义的结构体实现 "),a("code",[e._v("Defaulter")]),e._v(" 和 "),a("code",[e._v("Validator")]),e._v("接口即可.")]),e._v(" "),a("h4",{attrs:{id:"其它接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它接口"}},[e._v("#")]),e._v(" 其它接口")]),e._v(" "),a("p",[e._v("Reconcile结构体聚合了Client接口，所以client的所有方法都是可以直接调用，大部分是对CRD object的相关操作")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("type Client interface {\n\tReader\n\tWriter\n\tStatusClient\n}\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Reader knows how to read and list Kubernetes objects.\ntype Reader interface {\n\t// Get retrieves an obj for the given object key from the Kubernetes Cluster.\n\t// obj must be a struct pointer so that obj can be updated with the response\n\t// returned by the Server.\n\tGet(ctx context.Context, key ObjectKey, obj runtime.Object) error\n\n\t// List retrieves list of objects for a given namespace and list options. On a\n\t// successful call, Items field in the list will be populated with the\n\t// result returned from the server.\n\tList(ctx context.Context, list runtime.Object, opts ...ListOptionFunc) error\n}\n\n// Writer knows how to create, delete, and update Kubernetes objects.\ntype Writer interface {\n\t// Create saves the object obj in the Kubernetes cluster.\n\tCreate(ctx context.Context, obj runtime.Object, opts ...CreateOptionFunc) error\n\n\t// Delete deletes the given obj from Kubernetes cluster.\n\tDelete(ctx context.Context, obj runtime.Object, opts ...DeleteOptionFunc) error\n\n\t// Update updates the given obj in the Kubernetes cluster. obj must be a\n\t// struct pointer so that obj can be updated with the content returned by the Server.\n\tUpdate(ctx context.Context, obj runtime.Object, opts ...UpdateOptionFunc) error\n\n\t// Patch patches the given obj in the Kubernetes cluster. obj must be a\n\t// struct pointer so that obj can be updated with the content returned by the Server.\n\tPatch(ctx context.Context, obj runtime.Object, patch Patch, opts ...PatchOptionFunc) error\n}\n\n// StatusClient knows how to create a client which can update status subresource\n// for kubernetes objects.\ntype StatusClient interface {\n\tStatus() StatusWriter\n}\n")])])]),a("p",[e._v("探讨可加QQ群：98488045")])])}),[],!1,null,null,null);t.default=r.exports}}]);