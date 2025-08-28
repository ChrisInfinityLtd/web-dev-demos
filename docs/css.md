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

| 名称       | 选择的内容                                                   | 示例                                                         |
| :--------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 元素选择器 | 所有指定类型的 HTML 元素                                     | `p` 选择 `<p>`                                               |
| ID 选择器  | 具有特定 ID 的元素。单一 HTML 页面中，每个 ID 只对应一个元素，一个元素只对应一个 ID | `#my-id` 选择 `<p id="my-id">` **或** `<a id="my-id">`       |
| 类选择器   | 具有特定类的元素。单一页面中，一个类可以有多个实例           | `.my-class` 选择 `<p class="my-class">` **和** `<a class="my-class">` |

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

值：数字+单位

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
