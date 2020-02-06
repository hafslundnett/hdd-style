---
name: Search fields
category: Form-Components
---

Search box allows the user to locate content quickly and efficiently and can be seen as a conversation between the user and the web page.

### ✅ When to use: 
It is important to set the user context for the search with the correct placeholder text.


## Search field
`hdd-form_input`

```search-fields.html

<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="title">Normal search field</label>
  <div class="hdd-form_input">
    <i class="fal fa-search hdd-form_input_icon"></i>
    <input placeholder="Placeholder text" />
    <i class="fal fa-times" aria-label="Clear text"></i>
  </div>
</div>

<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="title">Active search field</label>
  <div class="hdd-form_input is-focus">
    <i class="fal fa-search hdd-form_input_icon"></i>
    <input placeholder="Placeholder text" value="Kari Nordmann" />
    <i class="fal fa-times" aria-label="Clear text"></i>
  </div>
</div>

```