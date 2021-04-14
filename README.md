# react 源码调试

## 目录结构
app：create-react-app 创建的项目，方便进行调试

build：react构建的文件，cjs文件下为构建后的未压缩的包，可以修改进行调试，但是没有热更新。一般不会修改，主要是用于梳理逻辑，常见是在浏览器中了解调用栈、打断点

packages：react 源码包，所有函数具体实现看这里

## 运行
1. 创建软链接
进入`build/modules/react`和`build/modules/react-dom`，执行`yarn link`
注意之前有没有创建过，不能创建同名的。

2. 链接软链
进入`app目录`，执行`yarn link react react-dom`来，`app项目`下`react`和`react-dom`的包就链接到了`build目录`下的文件

3. 运行项目
进入`app目录`，执行`yarn start`