# 书源编写备忘录

## 书籍搜索 Source

常用字段：书名，作者，简介，封面，字数，状态，类型

### bookName 书名
### author 作者
### desc 简介

- `@dyn:a=content;check(!a,return nil);format('http://app-ios-cdn.jjwxc.net/iosapi/novelbasicinfo?novelId=%@',a)` 
- `@comb:@json:tags`

### coverUrl 封面

- `@dyn:u=ContentFormat.ToSingleText:content;check(!u, return nil); format('http://img22.aixdzs.com/%@', u)`

### statusText 状态

- `@regex:连载中 @=>连载`
- `@regex:已完结 @=>完结`

### typeText 类型
### wordCount 字数
### tags 标签
### lastUpdateDate 书籍更新时间
### helpId 辅助信息
### lastChapterTitle 最后章节标题

- `@regex:更新到: @=>`

### helpIdKey 书源名
### helpIdValue 辅助信息
### detailURL 书籍详情地址
### dirURL 章节目录地址
### heldId 辅助信息

## 书海配置

## 列表详情 Chapter

### 地址
- `@dyn:hid=source.helpId;format('http://api.aixdzs.com/content-ios/%@', hid);`

### lastUpdateDate 更新时间
### title 文章标题
### url 文章地址

- `@dyn:b=content;check(!b,return nil);format('http://app-ios-cdn.jjwxc.net/iosapi/chapterList?more=0&novelId=%@&whole=1',b)`

## 章节详情

### 地址


### content

- `@str:pos(请记住本书首发域).pos(名：booktxt.net。顶点小说手机版阅读网址：m.booktxt.net).mark(3).replace(@mark[0])`
- `(?s)感谢在.*期间.*营养液.*我会继续努力的！ @=>`

## 书籍详情

### 地址

- `@dyn:hid=source.helpId;format('http://api.aixdzs.com/book/%@', hid);`

### bookName 书名

### cover

- `@dyn:u=ContentFormat.ToSingleText:content;check(!u, return nil); format('http://img22.aixdzs.com/%@', u)`

### statusText 状态
### typeText 类型
### wordCount 字数
### tags 标签
### lastUpdateDate 书籍更新时间
### helpId 辅助信息
### lastChapterTitle 最后章节标题