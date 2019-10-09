---
name: Small menu
category: Components
---

A small menu can hold a list of choices. It can be hidden and shown on hover/active state. Clicking the cog toggles the is-active in the example:

```small-menu.html
<div class="hdd-small-menu">
  <span class="hdd-small-menu_title"><i class="fal fa-cog"></i></span>
  <ul class="hdd-small-menu_list is-active">
    <li class="hdd-small-menu_list_item">Profile</li>
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

### Mutations
**`hdd-small-menu`:**

| class | description|
| :--- | :--- |
| `no-hovering` | Disable the `:hover` state |

**`hdd-small-menu_list`:**

| class | description|
| :--- | :--- |
| `is-active` | Set the given small menu to it's active state |