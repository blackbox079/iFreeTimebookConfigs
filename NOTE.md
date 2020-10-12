# 爱阅书香书源编写备忘录

## 信息处理

### 字符和正则

- `@str:pos(请记住本书首发域).pos(名：booktxt.net。顶点小说手机版阅读网址：m.booktxt.net).mark(3).replace(@mark[0])`

### @comb

- `@comb:@json:tags`

### @dyn

当前小配置中添加新的处理：

- `@dyn:a=content;check(!a,return nil);format('http://app-ios-cdn.jjwxc.net/iosapi/novelbasicinfo?novelId=%@',a)` 
- `@dyn:b=content;check(!b,return nil);format('http://app-ios-cdn.jjwxc.net/iosapi/chapterList?more=0&novelId=%@&whole=1',b)`

从别的小配置中引用：
- `@dyn:u=ContentFormat.ToSingleText:content;check(!u, return nil); format('http://img22.aixdzs.com/%@', u)`
- `@dyn:hid=source.helpId;format('http://api.aixdzs.com/content-ios/%@', hid);`
- `@dyn:u=chapter.url;format('http://api.aixdzs.com/chapter/%@', u);`

## 净化规则

- `(?s)感谢在.*期间.*营养液.*我会继续努力的！ @=>`


## 附录

### 字段名

#### 书籍搜索 Source

- bookName 书名
- author 作者
- desc 简介
- coverUrl 封面
- statusText 状态
- typeText 类型
- wordCount 字数
- tags 标签
- lastUpdateDate 书籍更新时间
- helpId 辅助信息
- lastChapterTitle 最后章节标题
- helpIdKey 书源名
- helpIdValue 辅助信息

来源信息
- detailURL 书籍详情地址
- dirURL 章节目录地址
- heldId 辅助信息

#### 书海配置

#### 列表详情 Chapter

- lastUpdateDate 更新时间
- title 文章标题
- url 文章地址

#### 章节详情

#### 书籍详情