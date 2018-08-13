---
name: Layout
category: Getting started
---

## Class
`hdd-layout`

It is advised to add the `hdd-layout` block around your project page. The `hdd-layout` block can help you saving space around your content container for elements like sidebars or navigation. `hdd-layout` has one default child element which is called `content`. This element should contain the content that you want to show on the page. By default does the `content` child element fill the remaining free space on the page.

**Example**

```html
<div class="hdd-layout">
  <div class="hdd-layout_sidenav">
    My sidebar navigation...
  </div>
  <div class="hdd-layout_content">
    My content...
  </div>
</div>
```

## Extending hdd-layout

When wanting to add your block to the `hdd-layout` block please extend the `hdd-layout` class in your own block.
Below is a example of how to achieve this with sass.

**Example**

```sass
.hdd-block {
  $width: 100px;
  width: $width;

  @at-root {
    .hdd-layout_block {
      width: $width;
    }
  }

  &:hover {
    width: $width + 50px;
  }
}
```