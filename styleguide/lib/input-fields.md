---
name: Input fields
category: Form-Components
---

An input should encourage action by the user. If the text / content cannot be changed, it should not appear in an input field of any kind (displayed as static text). 

### ✅ When to use: 
An input should have a descriptive prompt and contain: container, label, placeholder/input text, error text/helper.

### ⛔ When not to use:
An input should not stand alone without a label or information about what is requested.

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
  <label class="hdd-form_field_label" for="title">Disabled input field</label>
  <div class="hdd-form_input is-disabled">
    <input id="title" placeholder="Placeholdertext">
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

```input-fields.css hidden
body > div:first-of-type {
  padding: 20px;
  background: var(--hdd-color-dynamic-background-primary);
}
```


## Mutations
**`hdd-form_input`:**

| class | description|
| :--- | :--- |
| `is-disabled` | Set the input field to it's disabled state |
| `is-invalid` | Set the input field to it's invalid state |



