---
name: Dropdown
category: Form-Components
---

The dropdown lets the user search for and choose between a set of options. The dropdown aligns to the bottom by default.

## Dropdown
`hdd-form_input`.`hdd-dropdown`

```dropdown.html
<div class="hdd-form_input hdd-dropdown">
  <input value="Jer">

  <div class="hdd-dropdown_content is-active">
    <div class="hdd-dropdown_content_item is-active"><b>Jer</b>oen</div>
    <div class="hdd-dropdown_content_item">Stian</div>
    <div class="hdd-dropdown_content_item no-hover">Erik</div>
  </div>
</div>

```


## Mutations
**`hdd-dropdown_content`:**

| class | description|
| :--- | :--- |
| `is-active` | Sets the given dropdown-content to it's active state |
| `is-aligned-bottom` | Sets the given dropdown-content to it's active state |

**`hdd-dropdown_content_item`:**

| class | description|
| :--- | :--- |
| `no-hover` | Disable the `:hover` state |
| `is-active` | Sets the given dropdown-item to it's active state |
