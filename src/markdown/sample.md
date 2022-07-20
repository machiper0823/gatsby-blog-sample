---
title: "サンプルタイトル"
date: "2022-07-18T00:00:00.000Z"
slug: "sample01"
description: "サンプルタイトル　のdescriptionです。"
---

## マークダウンの記事の補足

このページはマークダウンのサンプルです。  
基本的なマークダウンのルールと同じく、例えば改行したい場合は、  
このように`/src/mardown/sample.md`の『例えば改行したい場合は、』の後に 2 つスペースを入れるなど基本的な作りは同じです。

内部的には、[remark.js](https://remark.js.org/)が使用されており、ルールは[こちら](https://github.com/remarkjs/remark-lint#rules)
になると思います。  
下記はよく使うマークダウン記法のメモです。

## 文体

| 文体       | 例                       |
| ---------- | ------------------------ |
| イタリック | _This is italic_         |
| 太字       | **これは太字の例**       |
| 取り消し線 | ~~取り消し線の例~~       |

## コード

```
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## 順番

### 箇条書き

- 箇条書き 1
- 箇条書き 2
  - 箇条書き 2-1

### 箇条書き（順番）

1. 結んで
2. 開いて
3. 手を打って

## リンク

[yahoo](https://www.yahoo.co.jp/)

[jsのアラート](<javascript:alert('こんにちわ')>)
