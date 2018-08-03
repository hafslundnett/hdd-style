---
name: Header
category: Components
---

## Header TODO set menu logo styling and tooltip menu needs rework
```header.html
<div class="hdd-layout_navigation">
  <div class="hdd-navigation">
    <a class="hdd-menu_logo" href="#">
      <img src="/styleguide/lib/logo.svg" alt="Hafslund logo">
    </a>
    <h1 class="hdd-navigation_title">Overview</h1>

    <div class="hdd-navigation_user">
      <span class="hdd-tooltip">
        Kari Nordmann
        <span class="hdd-tooltip_menu is-active has-arrow-right">
          <span class="hdd-tooltip_menu_item"><i class="fal fa-sign-out"></i>Logout</span>
        </span>
      </span>
      <img class="hdd-navigation_avatar" src="http://placekitten.com/150/150">
    </div>
  </div>
</div>
```