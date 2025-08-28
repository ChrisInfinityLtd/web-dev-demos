# HTML

HTML 已经发展到第五代标准，即 HTML 5。后面的示例都以 HTML 5 为基准。

这是一个 HTML 页面的例子（Vue3 示例项目的起始页）

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="stylesheet" href="/theme.css" />
    <title>Vue App</title>
</head>

<body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
</body>

</html>

```



## 基本语法

```html
<Tag Attribute="Value">
    Content
</Tag>

<Self-Closing-Tag />

<!-- 注释 -->
```

标签和属性不区分大小写，但是一般我们都用小写。值区分大小写。

## 元素和标签

标签：
```
<a></a>  <p></p>  <div></div>  <ul></ul>  <section></section>  <br /> ....
```

这里面 `<a>`, `<p>` 是**开始标签**，`</a>`, `</p>` 是**结束标签**，这种需要配对的是普通标签。`<br />` 是**自闭合标签**。

普通标签可以包含内容，自闭合标签不能包含内容。

注释只能在标签之间，不能给属性加注释。

元素：由标签创建的页面对象。

虽然 HTML5 不严格要求自闭合标签（可以不带结束斜杠 `<br>`），例如 `aaa<br>bbb` 这样的内容是能正确渲染的。但强烈建议把自闭合标签写严格，以避免后面用到 Vue 组件时发生问题。

元素大全参考：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements



## 常用元素

| 元素                    | 描述                                                         |
| ----------------------- | ------------------------------------------------------------ |
| `<div>`                 | 通用型的流式内容容器。不设置样式的话，其对内容或布局没有任何影响。 |
| `<span>`                | 通用行内容器，没有任何特殊语义。`<span>` 与 div 元素很相似，但 `<div>` 是一个**块级元素**而 `<span>` 则是**行级元素**。 |
| `<p>`                   | 表示文本的一个段落。该元素通常表现为通过空行和/或首行缩进与相邻块分隔的文本块。 |
| `<h1>`、`<h2>`...`<h6>` | 表示六个不同的级别的章节标题，`<h1>` 级别最高，而 `<h6>` 级别最低。 |
| `<ol>`                  | 表示有序列表，通常渲染为一个带编号的列表。                   |
| `<ul>`                  | 表示一系列无序的列表项目，通常渲染为项目符号列表。           |
| `<li>`                  | 表示列表里的条目。它必须包含在一个父元素里：有序列表（`<ol>`）、无序列表（`<ul>`）。 |
| `<a>`                   | 超链接。通过 `href` 属性设置链接。元素内容为链接文字。       |
| `<br>`                  | 在文本中生成一个换行（回车）。                               |
| `<hr>`                  | 一个横线。                                                   |
| `<img>`                 | 图像。通过 `src` 属性指定图像链接。无内容。                  |
| `<script>`              | 插入脚本代码。                                               |

示例
```html
<div>
    Michael Portillo: In 1840, one man transformed travel in Britain. His name was George Bradshaw, and his railway guides inspired the Victorians to take to the tracks. Stop by stop, he told them where to travel, what to see and where to stay. 
    Now, 170 years later, I'm making four long journeys across the length and breadth of the country to see what remains of Bradshaw's Britain. From the early days of Britain's railways, you couldn't contemplate a journey without first consulting Bradshaw's, a comprehensive guide to train timetables. 
    Over the coming weeks, using an ancient Bradshaw's guide, I will crisscross Britain on four fascinating routes. To view the places and achievements that delighted the Victorians. To see how the railways changed the British people. And to understand how much we've changed since. 
</div>
<div>    Along today's route, I'll be discovering how <br /> Manchester came to be known as Cottonopolis.</div>
<p>Finding out how <span style="font-style: italic; font-weight: bold;">
    Bradshaw
</span> helped unify time across <span style="color: red;">the UK</span>.</p>
<hr />
```

渲染结果：

<div>
    Michael Portillo: In 1840, one man transformed travel in Britain. His name was George Bradshaw, and his railway guides inspired the Victorians to take to the tracks. Stop by stop, he told them where to travel, what to see and where to stay. 
    Now, 170 years later, I'm making four long journeys across the length and breadth of the country to see what remains of Bradshaw's Britain. From the early days of Britain's railways, you couldn't contemplate a journey without first consulting Bradshaw's, a comprehensive guide to train timetables. 
    Over the coming weeks, using an ancient Bradshaw's guide, I will crisscross Britain on four fascinating routes. To view the places and achievements that delighted the Victorians. To see how the railways changed the British people. And to understand how much we've changed since. 
</div>
<div>    Along today's route, I'll be discovering how <br /> Manchester came to be known as Cottonopolis.</div>
<p>Finding out how <span style="font-style: italic; font-weight: bold;">
    Bradshaw
</span> helped unify time across <span style="color: red;">the UK</span>.</p>
<hr />

可以注意到，`<div>` 内的大段文本被按照原样渲染了，没有首行缩进，没有段前段后间距等。相对应的，`<p>` 内的文本是有缩进等格式的。

另外，`<div>` 和 `<p>` 里的内容在标签边界外与其他标签产生了分块。而 `<span>` 元素的内容却依旧保持在块内，即便代码里有换行。

### 表格元素

| 元素      | 描述                                                         |
| --------- | ------------------------------------------------------------ |
| `<table>` | 定义一个表格。                                               |
| `<thead>` | 表头部分。可以包含多个行。                                   |
| `<tbody>` | 表体，表格的数据部分。也可以包含多个行。                     |
| `<tr>`    | 定义表格中的行，应当是`<thead>`或`<tbody>`的直接子元素。同一行可同时出现 `<td>`（数据单元格）和 `<th>`（列头单元格）元素。 |
| `<td>`    | 数据单元格。应当是 `<tr>` 的子元素。                         |
| `<th>`    | 表头单元格。应当是 `<tr>` 的子元素。                         |

示例

```html
<table>
    <thead>
    	<tr>
        	<th>Studio</th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td>Lucasfilms</td>
            <td>Star Wars</td>
        </tr>
    	<tr>
        	<td>Disney</td>
            <td>Pirates of the Caribbean</td>
        </tr>
    </tbody>
</table>
```

渲染结果：

<table>
    <thead>
    	<tr>
        	<th>Studio</th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td>Lucasfilms</td>
            <td>Star Wars</td>
        </tr>
    	<tr>
        	<td>Disney</td>
            <td>Pirates of the Caribbean</td>
        </tr>
    </tbody>
</table>


块级元素：https://developer.mozilla.org/zh-CN/docs/Glossary/Block-level_content

行级元素：https://developer.mozilla.org/zh-CN/docs/Glossary/Inline-level_content



### 常用属性

HTML 元素的属性分为两大类：**全局属性**和**元素专有属性**。

全局属性是所有 HTML 元素共有的属性；它们可以用于所有元素，即使属性可能对某些元素不起作用。

常用的全局属性有这些：

- `class`  一个以空格分隔的CSS类名列表。设置 class 以套用对应的样式类。同时它允许 CSS 和 Javascript 通过**类选择器**或 DOM 方法 `Document.getElementsByClassName()` 来选择和访问特定的元素。
- `id` 定义唯一标识符（ID），该标识符在整个文档中必须是唯一的。其目的是在链接（使用片段标识符），脚本或样式（使用 CSS）时标识元素。

- `style` 含有要应用于元素的 CSS 样式声明。请注意，建议在单独的文件中定义样式。该属性主要用于快速添加样式，例如用于测试目的。

- `title` 包含表示与其所属元素相关信息的文本。这些信息通常可以作为鼠标悬停提示呈现给用户，但不是必须的。

