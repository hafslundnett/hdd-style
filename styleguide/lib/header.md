---
name: Header
category: Components
---

The header `hdd-header` should be used on each page, at the top before any content. It should cover the entire with of the screen. The header may contain the logo, page/site title and the active user if any. There are two header user alternatives, one with, and one without a user image.

## Header

```header.html
<header class="hdd-header">
  <a class="hdd-header_logo" href="#">
    <img src="styleguide/lib/logo.svg" alt="Hafslund logo">
  </a>
  <h1 class="hdd-header_title">Overview</h1>
  <div class="hdd-header-user">
    <img class="hdd-header-user_icon-image" src="http://placekitten.com/150/150"/>

    <div class="hdd-header-user_name">
      Jan Greger Hemb
    </div>

    <!-- <div class="hdd-header-user_login">
    
    </div> -->
    
  </div>
</header>
```

```header-no-img.html

<header class="hdd-header">
  <a class="hdd-header_logo" href="#">
    <img src="styleguide/lib/logo.svg" alt="Hafslund logo">
  </a>
  <h1 class="hdd-header_title">Overview</h1>
  <div class="hdd-header-user">
    <div class="hdd-header-user_icon-no-image">
      TT
    </div>

    <div class="hdd-header-user_name">
      Tim Tom
    </div>

    <!-- <div class="hdd-header-user_login">
    
    </div> -->
    
  </div>
</header>
```



```header.css hidden
header {
  margin-bottom: 30px;
}
```
```header-no-img.css hidden
header {
  margin-bottom: 30px;
}
```
