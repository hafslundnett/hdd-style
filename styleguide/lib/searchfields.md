---
name: Search fields
category: Form-Components
---

A search field should be used to give a user the ability to search for options.

## Search field
`hdd-form_input`

```search-fields.html
<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="searchexample">Normal Search field </label>
  <div class="hdd-form_input">
    <i class="fal fa-search"></i>
    <input id="searchexample" placeholder="Placeholder text" />
  </div>
</div>

<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="searchexample">Active field with text input </label>
  <div class="hdd-form_input">
    <i class="fal fa-search"></i>
    <input id="searchexample" placeholder="Placeholder text" value="Ola Nordmann" />
  </div>
</div>
```