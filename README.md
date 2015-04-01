# js-format
---
    简化js中拼接字符串过程，忘掉那该死的加号吧！ fuck ‘+’

### install 安装:
---

```
    node下:
    npm install js-format --save
```

### usage 使用:
---

    >1. %s,%d,%f 格式

```
    var str = '%s, hello world!';
    str = format(str, ["wlh"]);

    will echo:
    wlh, hello world!
```

    >2. :placeholder 格式

```
    var str = ":user, hello world!, it's a good day! come here at :time";
    var obj = {user: "wlh", time: "下午12点"};
    str = format(str, obj);

    will echo:
    wlh, hello world!, it's a good day! come here at 下午12点
```

### test

```
    mocha
```