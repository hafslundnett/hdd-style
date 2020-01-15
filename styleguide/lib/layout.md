---
name: Layout
category: Getting started
---

It is advised to add the `hdd-layout` block around your project page. The `hdd-layout` block can help you save space around your content container for elements like sidebars or navigation. `hdd-layout` has one default child element which is called `content`. This element should contain the content that you want to show on the page. The `content` child element fill the remaining free space on the page by default.

## Layout
`hdd-layout`, `hdd-layout_sidenav`, `hdd-layout_content`, `hdd-layout_navigation`

```layout.html
<div class="hdd-layout">

  <nav class="hdd-layout_sidenav">
    <div class="hdd-sidenav">
      <a class="hdd-sidenav_logo" href="#">
        <img src="styleguide/lib/logo.svg" alt="Hafslund logo">
      </a>
      <ul class="hdd-sidenav_list">
        <li>
          <a href="#" class="hdd-sidenav_list_item ">
            <span class="hdd-sidenav_list_item_icon">
              <i class="fal fa-chart-pie"></i>
            </span>
            <span class="hdd-sidenav_list_item_label">
              <span>Oversikt</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="hdd-layout_content">
    <header class="hdd-layout_navigation">
      <div class="hdd-navigation">
        <h1 class="hdd-navigation_title">Overview</h1>
      </div>
    </header>

    <div class="example-content">
      My content...
    </div>
  </div>
  
</div>
```

```layout.css hidden
/* 100% height makes the iframe funky on hover*/
.hdd-sidenav {
  height: 250px!important;
}
.example-content {
  padding: 20px
}
```

## Extending hdd-layout

When wanting to add your block to the `hdd-layout` block please extend the `hdd-layout` class in your own block.
Below is a example of how to achieve this with sass.


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