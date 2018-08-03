---
name: Navbar
category: Components
---

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
/* 100% height makes the iframe funky on hover*/
.hdd-sidenav {
  height: 450px!important;
}
```