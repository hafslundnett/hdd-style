---
name: Search fields
category: Form-Components
---

Search boxes allows the user to locate content quickly and efficiently and can be seen as a conversation between the user and the web page.

### ✅ When to use: 
It is important to set the user context for the search with the correct placeholder text.


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