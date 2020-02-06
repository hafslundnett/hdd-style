---
name: Form fields
category: Form-Components
---

Form fields is a component used to wrap several HDD components, such as input fields, checkboxes, radio and select. Form elements should be wrapped within a `hdd-form_field`, along with a descriptive `hdd-form_field_label`, or `hdd-form_field_title` for checkboxes and radio buttons. 

## Form fields
`hdd-form_field`

```form-fields.html
<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="title">Normal input field </label>
  <div class="hdd-form_input">
    <input id="title" placeholder="Placeholdertext">
  </div>
   <span class="hdd-form_field_info is-active"> Informational text</span>
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

<div class="hdd-form_field">
  <span class="hdd-form_field_title">Checkboxes</span>
  <label class="hdd-form_checkbox">
    <input type="checkbox" checked="">
    <span class="hdd-form_checkbox_mark"></span>
    <span class="hdd-form_checkbox_label">Picked checkbox</span>
  </label>
</div>

<div class="hdd-form_field"> 
    <span class="hdd-form_field_title">Radio buttons</span>
    <label class="hdd-form_radiobutton">
        <input type="radio" name="formname"/>
        <span class="hdd-form_radiobutton_mark"></span>
        <span class="hdd-form_radiobutton_label">Picked</span>
    </label>
</div>

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

```

## Mutations
**`hdd-form_field`:**

| class | description|
| :--- | :--- |
| `hdd-form_field_label` | Set style for a form field label |
| `hdd-form_field_title` | Set style for title above the form field|
| `hdd-form_field_error` | Set style for an error message below the input field|
| `hdd-form_field_info` | Set style for an info message below the input field| |
| `is-line` | Sets the form field to `display: block`, default display for all form-fields |
| `is-inline` | Sets the form field to `display: inline-block` |
| `is-active` | Activates the form fields error and info blocks |



