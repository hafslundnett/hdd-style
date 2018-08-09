---
name: Header
category: Components
---

## Header TODO set menu logo styling and tooltip menu needs rework
```header.html
<div class="hdd-layout_navigation">
  <div class="hdd-navigation">
    <a class="hdd-navigation_logo" href="#">
      <img src="/styleguide/lib/logo.svg" alt="Hafslund logo">
    </a>
    <h1 class="hdd-navigation_title">Overview</h1>

    <div class="hdd-navigation_user">
      <div class="hdd-small-menu">
        <span class="hdd-small-menu_title">Kari Nordmann</span>
        <ul class="hdd-small-menu_list is-active has-arrow-right">
          <li class="hdd-small-menu_list_item"><i class="fal fa-user"></i>Profile</li>
          <li class="hdd-small-menu_list_item"><i class="fal fa-sign-out"></i>Logout</li>
        </ul>
      </div>
      <img class="hdd-navigation_avatar" src="http://placekitten.com/150/150"/>
    </div>
  </div>
</div>
```