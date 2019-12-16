---
name: Input fields
category: Form-Components
---

An input should encourage action by the user. If the text / content cannot be changed, it should not appear in an input field of any kind (displayed as static text). An input should not stand alone, it should have a descriptive prompt.

## Input fields
`hdd-form_input`

```input-fields.html
<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="title">Normal input field </label>
  <div class="hdd-form_input">
    <input id="title" placeholder="Placeholdertext">
  </div>
</div>

<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="title">Active input field </label>
  <div class="hdd-form_input">
    <input id="title" placeholder="Placeholdertext" value="Kari Nordmann">
  </div>
</div>

<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="title">Disabled input field </label>
  <div class="hdd-form_input is-disabled">
    <input id="title" placeholder="Placeholdertext" value="Kari Nordmann" disabled>
  </div>
</div>

<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="title">Invalid input field with field errormessage</label>
  <div class="hdd-form_input is-invalid">
    <input id="title" value="ola.hafslund.no">
  </div>
  <span class="hdd-form_field_error is-active">

  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="11.5" fill="#DC3500" stroke="#DC3500"/>
<path d="M12 7.45898V13.959" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16.209C12.0663 16.209 12.1299 16.2353 12.1768 16.2822C12.2237 16.3291 12.25 16.3927 12.25 16.459" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.75 16.459C11.75 16.3927 11.7763 16.3291 11.8232 16.2822C11.8701 16.2353 11.9337 16.209 12 16.209" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16.709C11.9337 16.709 11.8701 16.6826 11.8232 16.6358C11.7763 16.5889 11.75 16.5253 11.75 16.459" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.25 16.459C12.25 16.5253 12.2237 16.5889 12.1768 16.6358C12.1299 16.6826 12.0663 16.709 12 16.709" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p class="is-p-small">
  The email must contain @
</p>
</span>
</div>

<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="title">Search field with icon</label>
  <div class="hdd-form_input">
    <i class="hdd-form_input_icon">
    </i>
    <input id="title" placeholder="Placeholdertext">
  </div>
</div>


<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="title">Search field with icon</label>
  <div class="hdd-form_input">
    <i class="hdd-form_input_icon">
    </i>
    <input id="title" placeholder="Placeholdertext" value="Ola Nordmann">
  </div>
</div>
```


## Mutations
**`hdd-form_input`:**

| class | description|
| :--- | :--- |
| `is-disabled` | Set the input field to it's disabled state |
| `is-invalid` | Set the input field to it's invalid state |



