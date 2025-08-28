# CSS

>
> 注意：因 Markdown 和编辑器的局限性，CSS 样式不一定能在编辑器中正确渲染，因此建议直接在[这里](https://web-front-docs.vercel.app/css.html)查看，或者在本地运行开发模式。
>


这是一段很典型的 CSS 代码：

```css
p {
    color: red;
}
```

它的作用是让所有的 `<p>` 元素的内容显示为红色。

整段代码称为**规则集**。它包含以下几个部分：

- 选择器（Selector）
    选择器位于规则集的开头。它定义了需要添加样式的元素（本例中就是 `<p>` 元素）。要给不同的元素添加样式，只需要更改选择器。

- 声明（Declaration）
    它是一条单独的规则（如 color: red;）。用来指定为元素的哪个属性添加样式。

- 属性（Properties）
    它是为 HTML 元素添加样式的方式（本例中 color 就是 `<p>` 元素的属性）。在 CSS 中，你可以选择要在规则中影响的属性。

- 属性值（Property value）
    位于属性的右边，冒号后面即属性值。它从指定属性的可选值中选择一个值（例如，我们除了 red 之外还有很多属性值可以用于 color）。

上面这个规则集，等于把每一个 `<p>` 元素设置成这样：

```html
<p style="color: red;">
    ....
</p>
```

## 选择器

| 名称       | 选择的内容                                                                          | 示例                                                                  |
| :--------- | :---------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| 元素选择器 | 所有指定类型的 HTML 元素                                                            | `p` 选择 `<p>`                                                        |
| ID 选择器  | 具有特定 ID 的元素。单一 HTML 页面中，每个 ID 只对应一个元素，一个元素只对应一个 ID | `#my-id` 选择 `<p id="my-id">` **或** `<a id="my-id">`                |
| 类选择器   | 具有特定类的元素。单一页面中，一个类可以有多个实例                                  | `.my-class` 选择 `<p class="my-class">` **和** `<a class="my-class">` |

可以用逗号(,)分隔多个选择器，给它们设置相同的规则集。例如：

```css
p, ul, h3 {
    color: red;
}
```

完整的选择器列表：[选择器指南](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)



## 字体和文本

- 字体 `font-family`

值：一个有先后顺序的，由字体名或者字体族名组成的列表。

- 字号 `font-size`

常用值：数字+单位

常用单位是 px，以像素值指定字体大小。例如：16px。

- 样式 `font-style`

样式用来选择字体下的斜体样式，它不能用于粗体。常用值: italic

- 字重 `font-weight`

字重用来设置字体的粗细程度。一般用于显示粗体。常用值：bold

字体相关示例：

```html
<style>
    .font-demo {
        font-family: "Algerian", "Blackadder ITC", "Comic Sans MS", "Consolas";
        font-size: 20px;
    }

    .font-bold-italic-demo {
        font-family: "Comic Sans MS", "Algerian", "Blackadder ITC", "Consolas";
        font-size: 20px;
        font-style: italic;
        font-weight: bold;
    }

    .font-demo2 {
        font-family: "Comic Sans MS", "Algerian", "Blackadder ITC", "Consolas";
        font-size: 20px;
    }
</style>
<span class="font-demo">A quick brown fox </span>
<span class="font-bold-italic-demo">jumps over </span>
<span class="font-demo2">the lazy dog.</span>
```

<style>
    .font-demo {
        font-family: "Algerian", "Blackadder ITC", "Comic Sans MS", "Consolas";
        font-size: 20px;
    }

    .font-bold-italic-demo {
        font-family: "Comic Sans MS", "Algerian", "Blackadder ITC", "Consolas";
        font-size: 20px;
        font-style: italic;
        font-weight: bold;
    }

    .font-demo2 {
        font-family: "Comic Sans MS", "Algerian", "Blackadder ITC", "Consolas";
        font-size: 20px;
    }
</style>
<span class="font-demo">A quick brown fox </span>
<span class="font-bold-italic-demo">jumps over </span>
<span class="font-demo2">the lazy dog.</span>

在开发模式下，尝试修改上面的属性并保存，可以看到不同的效果。

## 颜色和边框

- 颜色 `color`

设置元素的文本以及文本装饰的**前景色**。常用值：颜色名称，RGB/RGBA 值，rgb()/rgba() 函数。

例如：blue, #3B71CA, #14A44D80, rgba(255, 0, 0, 0.5)

- 背景色 `background-color`

设置元素的背景色。其值同 `color` 属性。

- 边框 `border`

设置元素的边框，包括宽度、样式和颜色。

`border` 属性可以拆解为三个属性：`border-width`、`border-style`、`border-color`。

当使用 `border` 时，一般这么用：`宽度 样式 颜色`。

例如：`border: 1px solid blue;` 这个规则定义了 1 像素宽、实线、蓝色边框。

分解开就是
```css
border-width：1px;
border-style: solid;
border-color: blue;
```

示例

```html
<style>
    .color-demo {
        color: #3B71CA;
    }

    .border-demo {
        border: 2px dashed #14A44D80;
    }
</style>
<span class="color-demo font-demo">Colorful </span>
<span class="border-demo font-demo">text</span>
```

<style>
    .color-demo {
        color: #3B71CA;
    }

    .border-demo {
        border: 2px dashed #14A44D80;
    }
</style>
<span class="color-demo font-demo">Colorful </span>
<span class="border-demo font-demo">text with border.</span>

## 边距

边距分为内、外两种。每种边距都可以在四个方向上指定。

- 内边距 `padding` 是其内容与其边框之间的空间，它是一个简写属性。

  分解属性是 `padding-top`、`padding-right`、`padding-bottom` 和 `padding-left`。

  内边距会影响元素的宽、高。

- 外边距 `margin` 是元素边框外部空出的空间，它是一个简写属性。

  分解属性是 `margin-top`、`margin-right`、`margin-bottom` 和 `margin-left`。

它们的值都是CSS长度，常用单位是 px(像素) 。

当使用简写属性时可以这样用：
```css
    padding: 1px;       /* 四个方向的内边距都是 1px */
    /* 等同于 */
    padding-top: 1px;
    padding-right: 1px;
    padding-bottom: 1px;
    padding-left: 1px;

    padding: 1px 2px;   /* 上下 1px，左右 2px */

    /* margin 也是一样 */
```

示例

```html
<style>
.demo-box {
    width: 200px;
    border: 1px solid #14A44D80;
}

.padding-demo {
    padding: 16px 0px;
    margin: 4px;
}
</style>

<div class="demo-box">
基础盒子
</div>

<div class="demo-box padding-demo">
带边距盒子
</div>
```

<style>
.demo-box {
    width: 200px;
    border: 1px solid #14A44D80;
}

.padding-demo {
    padding: 16px 0px;
    margin: 4px;
}
</style>

<div class="demo-box">
基础盒子
</div>

<div class="demo-box padding-demo">
带边距盒子
</div>

通过开发者工具，可以看出带边距盒子的高度变了，因为有内边距。
