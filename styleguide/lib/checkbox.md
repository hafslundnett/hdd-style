---
name: Checkbox
category: Form-Components
---

A checkbox component could be used to let a user select one or more options of a limited numberof choices. 
Checkbox classes are asigned to the corresponding checkbox label.


```checkbox.html
<div class="hdd-form_field">
  <span class="hdd-form_field_title">Checkboxes</span>
  <label class="hdd-form_checkbox">
    <input type="checkbox" checked="">
    <span class="hdd-form_checkbox_mark"></span>
    <span class="hdd-form_checkbox_label">Picked chechbox</span>
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

### Mutations
**`hdd-form_checkbox`:**

| class | description|
| :--- | :--- |
| `is-invalid` | Mark the checkbox as invalid|
| `is-checked` | Mark the checkbox as always checked |

