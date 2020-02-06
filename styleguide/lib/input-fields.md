---
name: Input fields
category: Form-Components
---

An input should encourage action by the user. If the text / content cannot be changed, it should not appear in an input field of any kind (displayed as static text). For text-areas min-height is set to standard input-field height. The height is adjustable for the user, while the width is not.

Input fields should always be placed within a `hdd-form_field`, along with a descriptive `hdd-form_field_label`.

### ✅ When to use: 
An input should have a descriptive prompt and contain: container, label, placeholder/input text, error text/helper. An textarea should be used if a longer text is needed. 

### ⛔ When not to use:
An input should not stand alone without a label or information about what is requested.
An textarea should not be used if there no need for a longer text.

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
  <label class="hdd-form_field_label" for="title">Normal input field with icon</label>
  <div class="hdd-form_input">
    <i class="fal fa-info-circle hdd-form_input_icon"></i>
    <input id="title" placeholder="Placeholdertext">
  </div>
</div>

<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="title">Active input field </label>
  <div class="hdd-form_input is-focus">
    <input id="title" placeholder="Placeholdertext" value="Kari Nordmenn">
  </div>
</div>

<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="title">Disabled input field</label>
  <div class="hdd-form_input is-disabled">
    <input id="title" placeholder="Placeholdertext" disabled>
  </div>
</div>

<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="title">Invalid input field with field errormessage</label>
  <div class="hdd-form_input is-invalid">
    <input id="title" value="ola.hafslund.no">
  </div>
  <span class="hdd-form_field_error is-active"><i class="fal fa-info-circle"></i>The email must contain @</span>
</div>

<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="title">Textarea</label>
  <div class="hdd-form_input">
    <textarea placeholder="Placeholdertext"></textarea>
  </div>
</div>
```

## Mutations
**`hdd-form_input`:**

| class | description|
| :--- | :--- |
| `is-focus` | Set the input field to its active state |
| `is-disabled` | Set the input field to its disabled state |
| `is-invalid` | Set the input field to its invalid state |



