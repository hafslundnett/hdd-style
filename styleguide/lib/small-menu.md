---
name: Small menu
category: Components
---

A small menu can hold a list of choices. It can be hidden and shown on hover/active state. 

## Small menu
`hdd-small-menu`

Clicking the cog toggles the is-active state of the small meny.

```small-menu.html
<div class="hdd-small-menu">
  <span class="hdd-small-menu_title"><i class="fal fa-cog"></i></span>
  <ul class="hdd-small-menu_list is-active">
    <li class="hdd-small-menu_list_item">Profile</li>
    <li class="hdd-small-menu_list_item no-hover">No hover</li>
    <li class="hdd-small-menu_list_item is-active">Active tab</li>
    <li class="hdd-small-menu_list_item"><i class="fal fa-sign-out"></i>Logout</li>
  </ul>
</div>
```

```small-menu.css hidden
div {
  width: 20px;
  margin: 0 auto;
}
```

```small-menu.js
const menu = document.querySelector(".hdd-small-menu")
menu.addEventListener('click', function(e) {
	const menuList = document.querySelector('.hdd-small-menu_list')
  menuList.classList.toggle('is-active')
})
```

## Mutations

**`hdd-small-menu_list_item`:**

| class | description|
| :--- | :--- |
| `is-active` | Set the given small menu item to it's active state |
| `no-hover` | Disable the `:hover` state |
