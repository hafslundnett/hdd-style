---
name: User Menu
category: Components
---

⚠️ This is a low level building block, and should be automated in a component library, but can be used directly if you want full control.

This is the user menu to be shown when clicking on your image in the header. This component should be linked to the header in a component library.


## User Menu with image

```user-menu.html
<div class="hdd-user-menu">
  <img class="hdd-user-menu_image" src="http://placekitten.com/150/150"/>

  <div class="hdd-user-menu_name">
    Jan Greger Hemb
  </div>

  <div class="hdd-user-menu_email">
    jan.greger@elvia.no
  </div>

  <div class="hdd-user-menu_menu-element">
    <i class="fal fa-cog"></i> Instillinger
  </div>

  <div class="hdd-user-menu_menu-element">
    <i class="fal fa-sign-out"></i> Logout
  </div>

</div>
```

## User Menu without image

```user-menu-no-img.html
<div class="hdd-user-menu">
  <div class="hdd-user-menu_initials">
    TT
  </div>

  <div class="hdd-user-menu_name">
    Tim Tom
  </div>

  <div class="hdd-user-menu_email">
    tt@elvia.no
  </div>

  <div class="hdd-user-menu_menu-element">
    <i class="fal fa-cog"></i> Instillinger
  </div>

  <div class="hdd-user-menu_menu-element">
    <i class="fal fa-sign-out"></i> Logout
  </div>

</div>
```


```user-menu.css hidden

```
```user-menu-no-img.css hidden

```

