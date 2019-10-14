---
name: Sidenav
category: Layout-Components
---

>🚧 It is adviced to place the `hdd-sidenav` in the `hdd-layout` block wrapped as an `hdd-layout_sidenav` element. 

## Sidenav
`hdd-layout_sidenav`

```nav.html
<nav class="hdd-layout_sidenav">
  <div class="hdd-sidenav">
    <a class="hdd-sidenav_logo" href="#">
      <img src="styleguide/lib/logo.svg" alt="Hafslund logo">
    </a>

    <ul class="hdd-sidenav_list">
      <li>
        <a href="#" class="hdd-sidenav_list_item ">
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
</nav>
```

```nav.css hidden
/* 100% height makes the iframe funky on hover*/
.hdd-sidenav {
  height: 450px!important;
}
```

### Mutations

**`hdd-sidenav`:**

| class | description|
| :--- | :--- |
| `no-hover` | Disable the `:hover` state |

**`hdd-sidenav_list_item`:**

| class | description|
| :--- | :--- |
| `is-active` | Set the given hdd-sidenav_list_item to it's active state |


