---
name: Select
category: Form-Components
---

A select component could be used to give a user a set of options.

```select.html
<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="select-alt1">Select Option</label>
  <div class="hdd-form_select">
    <select id="select-alt1" placeholder="Placeholder text">
      <option>Alternative 1</option>
      <option>Alternative 2</option>
    </select>
    <i class="fal fa-angle-down"></i>
  </div>
</div>

<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="select-alt2">Select Option(Disabled)</label>
  <div class="hdd-form_select is-disabled">
    <select id="select-alt2" placeholder="Placeholder text" disabled>
      <option>Alternative 1</option>
      <option>Alternative 2</option>
    </select>
    <i class="fal fa-angle-down"></i>
  </div>
</div>

<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="select-alt2">Select Option(Invalid)</label>
  <div class="hdd-form_select is-invalid">
    <select id="select-alt2" placeholder="Placeholder text">
      <option>Alternative 1</option>
      <option>Alternative 2</option>
    </select>
    <i class="fal fa-angle-down"></i>
  </div>
</div>
```

### Mutations
**`hdd-form-select`:**

| class | description|
| :--- | :--- |
| `is-disabled` | Set the select to it's invalid state |
| `is-invalid` | Set the select to it's invalid state |




