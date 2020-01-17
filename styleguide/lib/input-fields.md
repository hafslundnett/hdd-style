---
name: Form & Input fields
category: Form-Components
---

An input should encourage action by the user. If the text / content cannot be changed, it should not appear in an input field of any kind (displayed as static text). 

Input fields should alway be placed within a `hdd-form_field`, along with a descriptive `hdd-form_field_label`.

### ✅ When to use: 
An input should have a descriptive prompt and contain: container, label, placeholder/input text, error text/helper.

### ⛔ When not to use:
An input should not stand alone without a label or information about what is requested.

## Input fields
`hdd-form_input`

```input-fields.html
<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="normal">Normal input field </label>
  <div class="hdd-form_input">
    <input id="normal" placeholder="F.eks Kari Nordmann"> 
  </div>
</div>

<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="active">Active input field </label>
  <div class="hdd-form_input is-focus">
    <input id="active" placeholder="Placeholdertext" value="Kari Nordmann">
  </div>
</div>

<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="invalid">Invalid input, with error message</label>
  <div class="hdd-form_input is-invalid">
    <input id="invalid" value="Kari.hafslund.no">
  </div>
    <span class="hdd-form_field_error is-active"><i class="fal fa-info-circle"></i>Not valid email</span>
</div>

<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="disabled">Disabled input field </label>
  <div class="hdd-form_input is-disabled">
    <input id="disabled" placeholder="Disabled Field" disabled>
  </div>
</div>

```

## Mutations
**`hdd-form_field`**

| class | description|
| :--- | :--- |
| `hdd-form_field_label` | Set style for a form field label |
| `hdd-form_field_title` | Set style for title above the form field|
| `hdd-form_field_error` | Set style for an error message below the input field|
| `hdd-form_field_info` | Set style for an info message below the input field| |
| `is-line` | Sets the form field to `display: block`, default display for all form-fields |
| `is-inline` | Sets the form field to `display: inline-block` |
| `is-active` | Activates the form fields error and info blocks |

**`hdd-form_input`:**

| class | description|
| :--- | :--- |
| `is-disabled` | Style the input field to it's disabled state |
| `is-invalid` | Style the input field to it's invalid state |
| `is-focus` | Style the input field to it's focused state |



