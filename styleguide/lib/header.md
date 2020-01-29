---
name: Header
category: Components
---

The header `hdd-header` should be used on each page, at the top before any content. It should cover the entire with of the screen. The header may contain the logo, page/site title and the active user if any. There are two header user alternatives, one with, and one without a user image. Remove the user part if the site has no login. Clicking on the user image should open the `hdd-user-menu` if possible.

### ✅ When to use: 
When not using a component library.

### ⛔ When not to use:
The sign out button should only be used if the user menu can't be used.

## Header with image

```header.html
<div class="example-background">
  <header class="hdd-header">
    <a class="hdd-header_logo" href="#">
      <img src="styleguide/lib/logo.svg" alt="Hafslund logo">
    </a>
    <h1 class="hdd-header_title">Overview</h1>
    <div class="hdd-header-user">
      <img class="hdd-header-user_icon-image" src="http://placekitten.com/150/150"/>
      <div class="hdd-header-user_name">
        Kevin Martin Haugen
      </div>
      <button class="hdd-button has-icon is-transparent"><i class="fal fa-sign-out"></i>Sign out</button>
    </div>
  </header>
</div>
```

## Header without image

```header-no-img.html
<div class="example-background">
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
      <button class="hdd-button has-icon is-transparent"><i class="fal fa-sign-out"></i>Sign out</button>
    </div>
  </header>
</div>
```



```header.css hidden
header {
  margin-bottom: 30px;
}
.example-background {
  margin: -20px;
  padding: 20px;
  background: var(--hdd-color-dynamic-background-primary);
}
```
```header-no-img.css hidden
header {
  margin-bottom: 30px;
}
.example-background {
  margin: -20px;
  padding: 20px;
  background: var(--hdd-color-dynamic-background-primary);
}
```
