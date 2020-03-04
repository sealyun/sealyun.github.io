(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{250:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"kubernetes-用户token教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-用户token教程"}},[e._v("#")]),e._v(" kubernetes 用户token教程")]),e._v(" "),a("h1",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),a("p",[e._v("kubernetes server account的token很容易获取，但是User的token非常麻烦，本文给出一个极简的User token生成方式，让用户可以一个http请求就能获取到。\n")]),e._v(" "),a("h2",{attrs:{id:"token主要用来干啥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token主要用来干啥"}},[e._v("#")]),e._v(" token主要用来干啥")]),e._v(" "),a("p",[e._v("官方dashboard登录时需要。 如果通过使用kubeconfig文件登录而文件中又没有token的话会失败，现在大部分文章都介绍使用service account的token来登录dashboard，能通，不过有问题：\n第一：绑定角色时要指定类型是service account:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apiVersion: rbac.authorization.k8s.io/v1beta1\nkind: ClusterRoleBinding\nmetadata:\n  name: kubernetes-dashboard\n  labels:\n    k8s-app: kubernetes-dashboard\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n- kind: ServiceAccount   # 这里不是User类型\n  name: kubernetes-dashboard\n  namespace: kube-system\n")])])]),a("p",[e._v('第二：要理解kubeconfig里是解析证书把CN作为用户名的，这时service account即便与CN一样那还是两个账户，绑定角色时还需要绑定两次，有点像把service account给"人"用, 所以把service account的token扔给某个开发人员去用往往不合适，service account token更多时候是给程序用的。')]),e._v(" "),a("p",[e._v("想直接调用https的，没有token就会：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[root@iZj6cegflzze2l7fpcqoerZ ssl]# curl https://172.31.12.61:6443/api/v1/namespaces/default/pods --insecure\n{\n  "kind": "Status",\n  "apiVersion": "v1",\n  "metadata": {\n\n  },\n  "status": "Failure",\n  "message": "pods is forbidden: User \\"system:anonymous\\" cannot list resource \\"pods\\" in API group \\"\\" in the namespace \\"default\\"",\n  "reason": "Forbidden",\n  "details": {\n    "kind": "pods"\n  },\n  "code": 403\n}\n')])])]),a("p",[e._v("因为没有任何认证信息，所以匿名（anonymous）用户没有任何权限")]),e._v(" "),a("p",[e._v("加了token是这样的：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[root@iZj6cegflzze2l7fpcqoerZ ssl]# curl -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkNnYzRPVEV5TlRVM0VnWm5hWFJvZFdJIn0.eyJpc3MiOiJodHRwczovL2RleC5leGFtcGxlLmNvbTo4MDgwIiwic3ViIjoiQ2djNE9URXlOVFUzRWdabmFYUm9kV0kiLCJhdWQiOiJleGFtcGxlLWFwcCIsImV4cCI6MTU1MTA5NzkwNiwiaWF0IjoxNTUwNzM3OTA2LCJlbWFpbCI6ImZodGpvYkBob3RtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJncm91cHMiOlsiZGV2Il0sIm5hbWUiOiJmYW51eCJ9.ZqKn461UW0aGtyjyqu2Dc5tiUzC-6eYLag542d3AvklUdZuw8i9XwyaUg_f1OAj0ZsEcOybOe9_PeGMaUYzU0OvlKPY-q2zbQVC-m6u6sQw6ZXx8pi0W8k4wQSJnMaOLddCfurlYufmr8kScDBQlnKapSR0F9mJzvpKkHD-XNshQKWhX3n03g7OfFgb4RuhLjKDNQnoGn7DfBNntibHlF9sPo0jC5JjqTZaGvoGmiRE4PAXwxA-RJifsWDNf_jW8lrDiY4NSO_3O081cia4N1GKht51q9W3eaNMvFDD9hje7abDdZoz9KPi2vc3zvgH7cNv0ExVHKaA0-dwAZgTx4g" -k https://172.31.12.61:6443/api/v1/namespaces/default/pods\n{\n  "kind": "Status",\n  "apiVersion": "v1",\n  "metadata": {\n\n  },\n  "status": "Failure",\n  "message": "pods is forbidden: User \\"https://dex.example.com:8080#fanux\\" cannot list resource \\"pods\\" in API group \\"\\" in the namespace \\"default\\"",\n  "reason": "Forbidden",\n  "details": {\n    "kind": "pods"\n  },\n  "code": 403\n}\n')])])]),a("p",[e._v("看，虽然还是403 但是已经有了用户信息，只要给该用户授权就可正常访问了，如何授权下文介绍")]),e._v(" "),a("h2",{attrs:{id:"token种类介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token种类介绍"}},[e._v("#")]),e._v(" token种类介绍")]),e._v(" "),a("p",[e._v("token的生成方式有很多，主要分成三种：")]),e._v(" "),a("ol",[a("li",[e._v("service account token 这个创建service account就有，存在secret里 获取比较简单，但是要区分好 "),a("a",{attrs:{href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#users-in-kubernetes",target:"_blank",rel:"noopener noreferrer"}},[e._v("User 和 service account区别"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("普通的token，这种token就是个普通的字符串，一般是自己写一个认证的web hook, k8s认证时调用这个hook 查询token是否有效，比较low")]),e._v(" "),a("li",[e._v("基于openid的jwt(josn web token) 这种token，认证中心把用户信息放在json里，用私钥加密，k8s拿到token后用公钥解密，只要解密成功token就是合法的而且能拿到用户信息，不需要再像认证中心请求")])]),e._v(" "),a("p",[e._v("基于openid的jwt是本文介绍的重点。")]),e._v(" "),a("p",[e._v("社区用的比较多的就是"),a("a",{attrs:{href:"https://github.com/coreos/dex",target:"_blank",rel:"noopener noreferrer"}},[e._v("dex"),a("OutboundLink")],1),e._v(",是一个比较完整的实现，但是对于不熟悉该技术的朋友来说还是有点门槛的，容易绕进去。 而且还存在一些使用不方便的问题。\n如依赖复杂，首先得需要一个真正的用户管理程序，如ldap 或者一个auth2服务端，这还可以接受，关键是认证时可能需要依赖浏览器进行跳转授权，这在十分多的场景里就变的十分尴尬，就比如我们的场景压根没有\n界面，这样生成token就成了一个大问题。  其次集成到别的系统中时往往用户已经登录过了，所以需要一个二次授权的过程才能拿到token，依赖过重导致系统难以设计。\n然而如果不是集成到别的系统中，比如从0开发一个完成的PaaS平台那使用dex还是一个完美的方案。")]),e._v(" "),a("p",[e._v("所以我们实现了一个简单粗暴的方案，完全解放了这个过程, 只care最核心的东西。")]),e._v(" "),a("h1",{attrs:{id:"sealyun-fist介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sealyun-fist介绍"}},[e._v("#")]),e._v(" sealyun fist介绍")]),e._v(" "),a("p",[e._v("我们想要啥?")]),e._v(" "),a("p",[e._v("input:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "User": "fanux",\n    "Group": ["sealyun", "develop"]\n}\n')])])]),a("p",[e._v("output:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("eyJhbGciOiJSUzI1NiIsImtpZCI6IkNnYzRPVEV5TlRVM0VnWm5hWFJvZFdJIn0.eyJpc3MiOiJodHRwczovL2RleC5leGFtcGxlLmNvbTo4MDgwIiwic3ViIjoiQ2djNE9URXlOVFUzRWdabmFYUm9kV0kiLCJhdWQiOiJleGFtcGxlLWFwcCIsImV4cCI6MTU1MTA5NzkwNiwiaWF0IjoxNTUwNzM3OTA2LCJlbWFpbCI6ImZodGpvYkBob3RtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJncm91cHMiOlsiZGV2Il0sIm5hbWUiOiJmYW51eCJ9.ZqKn461UW0aGtyjyqu2Dc5tiUzC-6eYLag542d3AvklUdZuw8i9XwyaUg_f1OAj0ZsEcOybOe9_PeGMaUYzU0OvlKPY-q2zbQVC-m6u6sQw6ZXx8pi0W8k4wQSJnMaOLddCfurlYufmr8kScDBQlnKapSR0F9mJzvpKkHD-XNshQKWhX3n03g7OfFgb4RuhLjKDNQnoGn7DfBNntibHlF9sPo0jC5JjqTZaGvoGmiRE4PAXwxA-RJifsWDNf_jW8lrDiY4NSO_3O081cia4N1GKht51q9W3eaNMvFDD9hje7abDdZoz9KPi2vc3zvgH7cNv0ExVHKaA0-dwAZgTx4g\n")])])]),a("p",[e._v("结束,多简单，别整那么多没用的。")]),e._v(" "),a("p",[e._v("所以为了实现上面的功能，我们开发了 "),a("a",{attrs:{href:"https://github.com/fanux/fist",target:"_blank",rel:"noopener noreferrer"}},[e._v("fist"),a("OutboundLink")],1),e._v(", fist的auth模块把dex里最核心的token生成功能以及jwt功能实现了。")]),e._v(" "),a("h1",{attrs:{id:"sealyun-fist-auth-使用教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sealyun-fist-auth-使用教程"}},[e._v("#")]),e._v(" sealyun fist/auth 使用教程")]),e._v(" "),a("h2",{attrs:{id:"安装部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装部署"}},[e._v("#")]),e._v(" 安装部署")]),e._v(" "),a("blockquote",[a("p",[e._v("生成证书")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# mkdir /etc/kubernetes/pki/fist\n# cd /etc/kubernetes/pki/fist\n# sh gencert.sh # 脚本内容内代码\n")])])]),a("blockquote",[a("p",[e._v("启动fist auth模块")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl create -f deploy/fist-auth.yaml\n")])])]),a("blockquote",[a("p",[e._v("修改k8s apiserver启动参数")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vim /etc/kubernetes/manifests/kube-apiserver.yaml\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  - command:\n    - kube-apiserver\n    - --oidc-issuer-url=https://fist.sealyun.svc.cluster.local:8080\n    - --oidc-client-id=example-app\n    - --oidc-ca-file=/etc/kubernetes/pki/fist/ca.pem\n    - --oidc-username-claim=name\n    - --oidc-groups-claim=groups\n")])])]),a("h2",{attrs:{id:"获取及使用-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取及使用-token"}},[e._v("#")]),e._v(" 获取及使用 token")]),e._v(" "),a("blockquote",[a("p",[e._v("获取token")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl https://fist.sealyun.svc.cluster.local:8080/token?user=fanux&group=sealyun,develop --cacert ca.pem\n")])])]),a("blockquote",[a("p",[e._v("使用token")])]),e._v(" "),a("p",[e._v("直接curl加bare token 见上文")]),e._v(" "),a("p",[e._v("加入到kubeconfig中:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl config set-credentials --token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkNnYzRPVEV5TlRVM0VnWm5hWFJvZFdJIn0.eyJpc3MiOiJodHRwczovL2RleC5leGFtcGxlLmNvbTo4MDgwIiwic3ViIjoiQ2djNE9URXlOVFUzRWdabmFYUm9kV0kiLCJhdWQiOiJleGFtcGxlLWFwcCIsImV4cCI6MTU1MTEwMDI5MywiaWF0IjoxNTUwNzQwMjkzLCJlbWFpbCI6ImZodGpvYkBob3RtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJncm91cHMiOlsiZGV2Il0sIm5hbWUiOiJmYW51eCJ9.OAK4oIYqJszm1EACYW2neXTo738RW9kXFOIN5bOT4Z2CeKAvYqyOVKCWZf04xX45jwT78mATR3uas2YvRooDXlvxaD3K43ls4KBSG-Ofp-ynqlcVTpD3sUDqyux2iieNv4N6IyCv11smrU0lIlkrQC6oyxzTGae1FrJVGc5rHNsIRZHp2WrQvw83uLn_elHgUfSlsOq0cPtVONaAQWMAMi2DX-y5GCNpn1CDvudGJihqsTciPx7bj0AOXyiOznWhV186Ybk-Rgqn8h0eBaQhFMyNpwVt6oIP5pvJQs0uoODeRv6P3I3-AjKyuCllh9KDtlCVvSP4WtMUTfHQN4BigQ  kubernetes-admin\n")])])]),a("p",[e._v("然后.kube/config 文件里的 user.client-certifacate-data 和 client-key-data就可以删了，再执行kubectl会：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[root@iZj6cegflzze2l7fpcqoerZ ~]# kubectl get pod\nError from server (Forbidden): pods is forbidden: User "https://dex.example.com:8080#fanux" cannot list resource "pods" in API group "" in the namespace "default"\n')])])]),a("p",[e._v("说明新用户成功了")]),e._v(" "),a("blockquote",[a("p",[e._v("授权")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[root@iZj6cegflzze2l7fpcqoerZ ~]# cat rolebind.yaml\nkind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: read-secrets-global\nsubjects:\n- kind: User\n  name: "https://dex.example.com:8080#fanux" # Name is case sensitive\n  apiGroup: rbac.authorization.k8s.io\nroleRef:\n  kind: ClusterRole\n  name: cluster-admin  # 超级用户给他\n  apiGroup: rbac.authorization.k8s.io\n')])])]),a("p",[e._v("创建个role binding即可：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@iZj6cegflzze2l7fpcqoerZ ~]# kubectl  --kubeconfig /etc/kubernetes/admin.conf create  -f rolebind.yaml # 用管理员的kubeconfig\nclusterrolebinding.rbac.authorization.k8s.io/read-secrets-global created\n[root@iZj6cegflzze2l7fpcqoerZ ~]# kubectl get pod # 有权限访问pod了\nNo resources found.\n")])])]),a("h1",{attrs:{id:"原理介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理介绍"}},[e._v("#")]),e._v(" 原理介绍")]),e._v(" "),a("h2",{attrs:{id:"jwt原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt原理"}},[e._v("#")]),e._v(" jwt原理")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                       https://fist.sealyun.cluster.local:8080\nk8s                                             jwt server\n |   /.well-known/openid-configuration             |\n |------------------------------------------------\x3e|  k8s通过此url发现一些信息，最重要的就是用于校验token公钥的地址\n |   discover info                                 |\n |<------------------------------------------------|\n |     /keys                                       |\n |------------------------------------------------\x3e|  上一步拿到地址，这一步获取到公钥\n |     public keys                                 |\n |<------------------------------------------------|\n |                                                 |\n")])])]),a("p",[e._v("discoer info 是个json:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n"issuer": "https://accounts.google.com",\n"authorization_endpoint": "https://accounts.google.com/o/oauth2/v2/auth",\n"token_endpoint": "https://oauth2.googleapis.com/token",\n"userinfo_endpoint": "https://openidconnect.googleapis.com/v1/userinfo",\n"revocation_endpoint": "https://oauth2.googleapis.com/revoke",\n"jwks_uri": "https://www.googleapis.com/oauth2/v3/certs",\n"response_types_supported": [\n"code",\n"token",\n"id_token",\n"code token",\n"code id_token",\n"token id_token",\n"code token id_token",\n"none"\n],\n...\n')])])]),a("p",[e._v("public keys也是个json 类似：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n"keys": [\n{\n"e": "AQAB",\n"kty": "RSA",\n"alg": "RS256",\n"n": "3MdFK4pXPvehMipDL_COfqn6o9soHgSaq_V1o8U_5gTZ-j9DxO9PV7BVncXBgHFctnp3JQ1QTDF7txeHeuLOS4KziRw5r4ohaj2WoOTqXh7lqVMR2YDAcBK46asS177NpkQ1CqHIsy3kNfqhXLwTaKfdlwdA_XUfRbKORWbq0kDxV35egx35nHl5qJ6aP6fcpsnnPvHf7KWO0zkdvwuR-IX79HjqUAEg5UERd5FK4y06PRbxuXHjAgVhHu_sk4reNXNp1HRuTYtQ26DFbVaIjsWb8-nQC8-7FkTjlw9FteAwLVGOm9sTLFp73jAf0pWLh7sJ02pBxZKjsxLO1Lvg7w",\n"use": "sig",\n"kid": "7c309e3a1c1999cb0404ab7125ee40b7cdbcaf7d"\n},\n{\n"alg": "RS256",\n"n": "2K7epoJWl_B68lRUi1txaa0kEuIK4WHiHpi1yC4kPyu48d046yLlrwuvbQMbog2YTOZdVoG1D4zlWKHuVY00O80U1ocFmBl3fKVrUMakvHru0C0mAcEUQo7ItyEX7rpOVYtxlrVk6G8PY4EK61EB-Xe35P0zb2AMZn7Tvm9-tLcccqYlrYBO4SWOwd5uBSqc_WcNJXgnQ-9sYEZ0JUMhKZelEMrpX72hslmduiz-LMsXCnbS7jDGcUuSjHXVLM9tb1SQynx5Xz9xyGeN4rQLnFIKvgwpiqnvLpbMo6grhJwrz67d1X6MwpKtAcqZ2V2v4rQsjbblNH7GzF8ZsfOaqw",\n"use": "sig",\n"kid": "7d680d8c70d44e947133cbd499ebc1a61c3d5abc",\n"e": "AQAB",\n"kty": "RSA"\n}\n]\n}\n')])])]),a("p",[e._v("所以fist只需要实现这两个url 和 用私钥匙加密用户信息生成token即可。")]),e._v(" "),a("p",[e._v("创建密钥对:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\tkey, err := rsa.GenerateKey(rand.Reader, 2048)\n\tif err != nil {\n\t\tlog.Fatalf("gen rsa key: %v", err)\n\t}\n\tpriv = jose.JSONWebKey{\n\t\tKey:       key,\n\t\tKeyID:     "Cgc4OTEyNTU3EgZnaXRodWI",\n\t\tAlgorithm: "RS256",\n\t\tUse:       "sig",\n\t}\n\tpub = jose.JSONWebKey{\n\t\tKey:       key.Public(),\n\t\tKeyID:     "Cgc4OTEyNTU3EgZnaXRodWI",\n\t\tAlgorithm: "RS256",\n\t\tUse:       "sig",\n\t}\n')])])]),a("p",[e._v("私钥加密：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\ttok := idTokenClaims{\n\t\tIssuer:        "https://dex.example.com:8080",\n\t\tSubject:       "Cgc4OTEyNTU3EgZnaXRodWI",\n\t\tAudience:      "example-app",\n\t\tExpiry:        time.Now().Add(time.Hour * 100).Unix(),\n\t\tIssuedAt:      time.Now().Unix(),\n\t\tEmail:         "fhtjob@hotmail.com",\n\t\tEmailVerified: &ev,\n\t\tGroups:        []string{"dev"},\n\t\tName:          "fanux",\n\t}\n\n\tpayload, err := json.Marshal(&tok)\n\tif err != nil {\n\t\treturn\n\t}\n\n\tvar idToken string\n\tif idToken, err = signPayload(&Priv, signingAlg, payload); err != nil {\n\t\treturn\n\n')])])]),a("h1",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("p",[e._v("fist核心代码已经可用，不过为了更方便使用还需要进一步梳理，敬请期待。 鉴权仅是其其中一个功能，fist定位是一个极简的k8s管理平台。")]),e._v(" "),a("p",[e._v("探讨可加QQ群：98488045")])])}),[],!1,null,null,null);t.default=s.exports}}]);