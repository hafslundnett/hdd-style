---
name: User menu
category: Components
---

⚠️ This is a low level building block, and should be automated in a component library, but can be used directly if you want full control.

This is the user menu to be shown when clicking on your image in the header. This component should be linked to the header in a component library.


## User Menu with image

```user-menu.html
<div class="dark-mode">
  <div class="hdd-user-menu">
    <img class="hdd-user-menu_image" src="http://placekitten.com/150/150"/>
    <div class="hdd-user-menu_name">
      Kevin Martin Haugen
    </div>
    <div class="hdd-user-menu_email">
      kevin.martin@elvia.no
    </div>
    <div class="hdd-user-menu_menu-element">
      <button class="hdd-button has-icon is-transparent"><i class="fal fa-cog"></i>Settings</button>
    </div>
    <div class="hdd-user-menu_menu-element">
      <button class="hdd-button has-icon is-transparent"><i class="fal fa-sign-out"></i>Sign out</button>
    </div>
  </div>
</div>
```

## User Menu without image

```user-menu-no-img.html
<div class="dark-mode">
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
      <button class="hdd-button has-icon is-transparent"><i class="fal fa-cog"></i>Settings</button>
    </div>
    <div class="hdd-user-menu_menu-element">
      <button class="hdd-button has-icon is-transparent"><i class="fal fa-sign-out"></i>Sign out</button>
    </div>
  </div>
</div>
```

```user-menu.css hidden {
@media (prefers-color-scheme: dark) {
  .dark-mode {
    margin: -20px;
    padding: 20px;
    background: var(--primary-background-color);
  }
}
```
```user-menu-no-img.css hidden
@media (prefers-color-scheme: dark) {
  .dark-mode {
    margin: -20px;
    padding: 20px;
    background: var(--primary-background-color);
  }
}
```
