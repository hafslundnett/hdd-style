---
name: Header and Navbar
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

## Sidebar
```nav.html
<div class="hdd-layout_sidenav">
      <div class="hdd-sidenav">
        <a class="hdd-sidenav_logo" href="#">
          <img src="/styleguide/lib/logo.svg" alt="Hafslund logo">
        </a>

        <ul class="hdd-sidenav_list">
          <li>
            <a href="#" class="hdd-sidenav_list_item">
              <span class="hdd-sidenav_list_item_icon">
                <i class="fal fa-chart-pie"><span class="hdd-badge-icon"></span></i>
              </span>
              <span class="hdd-sidenav_list_item_label">
                <span>Oversikt</span>
                <span class="hdd-badge">2</span>
              </span>
            </a>
          </li>

          <li>
            <a class="hdd-sidenav_list_item" href="#">
              <span class="hdd-sidenav_list_item_icon">
                <i class="fal fa-clipboard-list"></i>
              </span>
              <span class="hdd-sidenav_list_item_label">
                <span>Mine åpne saker</span>
              </span>
            </a>
          </li>

          <li>
            <a class="hdd-sidenav_list_item" href="#">
              <span class="hdd-sidenav_list_item_icon">
                <i class="fal fa-map-pin"></i>
              </span>
              <span class="hdd-sidenav_list_item_label">
                <span>Kart</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
```

```nav.css hidden
.hdd-sidenav {
  height: 450px!important;
}
```