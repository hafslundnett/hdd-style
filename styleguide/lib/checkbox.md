---
name: Checkbox
category: Form-Components
---

A checkbox component lets a user select one or more options of a limited number of choices. 
Checkbox classes are assigned to the corresponding checkbox label.

## Checkbox
`hdd-form_checkbox`

```checkbox.html
<div class="hdd-form_field">
  <span class="hdd-form_field_title">Checkboxes</span>
  <label class="hdd-form_checkbox">
    <input type="checkbox" checked="">
    <span class="hdd-form_checkbox_mark"></span>
    <span class="hdd-form_checkbox_label">Picked checkbox</span>
  </label>
  <label class="hdd-form_checkbox">
    <input type="checkbox">
    <span class="hdd-form_checkbox_mark"></span>
    <span class="hdd-form_checkbox_label">Unpicked checkbox</span>
  </label>
  <label class="hdd-form_checkbox is-invalid">
    <input type="checkbox">
    <span class="hdd-form_checkbox_mark"></span>
    <span class="hdd-form_checkbox_label">Invalid checkbox</span>
  </label>
</div>
```

## Mutations
**`hdd-form_checkbox`:**

| class | description|
| :--- | :--- |
| `is-invalid` | Set the checkbox to it's invalid state |
| `is-checked` | Set the checkbox style to it's checked class |

