(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{246:function(e,n,r){"use strict";r.r(n);var t=r(0),l=Object(t.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"golang基于protobuf的rpc使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#golang基于protobuf的rpc使用"}},[e._v("#")]),e._v(" golang基于protobuf的rpc使用")]),e._v(" "),r("p",[e._v("基本安装什么的在此不再赘述，不知道的看"),r("a",{attrs:{href:"http://www.grpc.io/docs/quickstart/go.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"proto文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proto文件"}},[e._v("#")]),e._v(" proto文件")]),e._v(" "),r("p",[e._v("cat helloworld.proto\n")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('syntax = "proto3";\n\noption java_multiple_files = true;\noption java_package = "io.grpc.examples.helloworld";\noption java_outer_classname = "HelloWorldProto";\n\npackage helloworld;\n\n// The greeting service definition.\nservice Greeter {\n  // Sends a greeting\n  rpc SayHello (HelloRequest) returns (HelloReply) {}\n}\n\n// The request message containing the user\'s name.\nmessage HelloRequest {\n  string name = 1;\n}\n\n// The response message containing the greetings\nmessage HelloReply {\n  string message = 1;\n}\n')])])]),r("p",[e._v("那几个生成java代码的定义就无视了，关键看service\n定义了一个接口，然后定义了两条消息，分别是请求和回复的消息格式。")]),e._v(" "),r("p",[e._v("用一条命令就可以生成一个helloworld.pb.go文件")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ protoc -I helloworld/ helloworld/helloworld.proto --go_out=plugins=grpc:helloworld\n")])])]),r("p",[e._v("来看看这个文件里有啥：")]),e._v(" "),r("p",[e._v("首先生成了请求和回复的结构体，提供一些方法可以调用")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('// The request message containing the user\'s name.\ntype HelloRequest struct {\n    Name string `protobuf:"bytes,1,opt,name=name" json:"name,omitempty"`\n}\n\nfunc (m *HelloRequest) Reset()                    { *m = HelloRequest{} }\nfunc (m *HelloRequest) String() string            { return proto.CompactTextString(m) }\nfunc (*HelloRequest) ProtoMessage()               {}\nfunc (*HelloRequest) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }\n\n// The response message containing the greetings\ntype HelloReply struct {\n    Message string `protobuf:"bytes,1,opt,name=message" json:"message,omitempty"`\n}\n')])])]),r("p",[e._v("重要的：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('type GreeterClient interface {\n    // Sends a greeting\n    SayHello(ctx context.Context, in *HelloRequest, opts ...grpc.CallOption) (*HelloReply, error)\n}\n\ntype greeterClient struct {\n    cc *grpc.ClientConn\n}\n\nfunc NewGreeterClient(cc *grpc.ClientConn) GreeterClient {\n    return &greeterClient{cc}\n}\n\nfunc (c *greeterClient) SayHello(ctx context.Context, in *HelloRequest, opts ...grpc.CallOption) (*HelloReply, error) {\n    out := new(HelloReply)\n    err := grpc.Invoke(ctx, "/helloworld.Greeter/SayHello", in, out, c.cc, opts...)\n    if err != nil {\n        return nil, err\n    }\n    return out, nil\n}\n')])])]),r("p",[e._v("可以看到客户端的代码都生成了，我们直接调用NewGreeterClient就能SayHello了，非常方便。")]),e._v(" "),r("p",[e._v("再看服务端：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("type GreeterServer interface {\n    // Sends a greeting\n    SayHello(context.Context, *HelloRequest) (*HelloReply, error)\n}\n\nfunc RegisterGreeterServer(s *grpc.Server, srv GreeterServer) {\n    s.RegisterService(&_Greeter_serviceDesc, srv)\n}\n")])])]),r("p",[e._v("所以我们只需要实现SayHello方法，然后将Server注册进去即可。")]),e._v(" "),r("h3",{attrs:{id:"服务端代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务端代码"}},[e._v("#")]),e._v(" 服务端代码")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('package main\n\nimport (\n    "log"\n    "net"\n\n    "golang.org/x/net/context"\n    "google.golang.org/grpc"\n    pb "google.golang.org/grpc/examples/helloworld/helloworld"\n    "google.golang.org/grpc/reflection"\n)\n\nconst (\n    port = ":50051"\n)\n\n// server is used to implement helloworld.GreeterServer.\ntype server struct{}\n\n// SayHello implements helloworld.GreeterServer\nfunc (s *server) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {\n    return &pb.HelloReply{Message: "Hello " + in.Name}, nil\n}\n\nfunc main() {\n    lis, err := net.Listen("tcp", port)\n    if err != nil {\n        log.Fatalf("failed to listen: %v", err)\n    }\n    s := grpc.NewServer()\n    pb.RegisterGreeterServer(s, &server{})\n    // Register reflection service on gRPC server.\n    reflection.Register(s)\n    if err := s.Serve(lis); err != nil {\n        log.Fatalf("failed to serve: %v", err)\n    }\n}\n')])])]),r("p",[e._v("可以看到 s.Serve接受一个net.Lister参数，所以通过什么连接来启动rpc由我们来定。可以是tcp或者unix socket\n我们自定义的server实现了SayHello具体干什么，然后注册到grpc服务里，最后与创建的监听链接关联起来")]),e._v(" "),r("h3",{attrs:{id:"客户端代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#客户端代码"}},[e._v("#")]),e._v(" 客户端代码")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('package main\n\nimport (\n    "log"\n    "os"\n\n    "golang.org/x/net/context"\n    "google.golang.org/grpc"\n    pb "google.golang.org/grpc/examples/helloworld/helloworld"\n)\n\nconst (\n    address     = "localhost:50051"\n    defaultName = "world"\n)\n\nfunc main() {\n    // Set up a connection to the server.\n    conn, err := grpc.Dial(address, grpc.WithInsecure())\n    if err != nil {\n        log.Fatalf("did not connect: %v", err)\n    }\n    defer conn.Close()\n    c := pb.NewGreeterClient(conn)\n\n    // Contact the server and print out its response.\n    name := defaultName\n    if len(os.Args) > 1 {\n        name = os.Args[1]\n    }\n    r, err := c.SayHello(context.Background(), &pb.HelloRequest{Name: name})\n    if err != nil {\n        log.Fatalf("could not greet: %v", err)\n    }\n    log.Printf("Greeting: %s", r.Message)\n}\n')])])]),r("p",[e._v("客户端就简单了，首先与服务建立连接，然后New出client，直接调用生成好的方法即可。")]),e._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),r("p",[e._v("使用grpc在服务端进行进程间通信非常方便，生成代码的功能可以减少很多工作量，而且proto的解析速度和json解析不是一个数量级的. 在一些高性能的场景还是优先考虑proto吧。")]),e._v(" "),r("p",[e._v("在看docker源码时是需要知道这个的")])])}),[],!1,null,null,null);n.default=l.exports}}]);