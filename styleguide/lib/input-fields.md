---
name: Input fields
category: Form-Components
---
An input field should be a call to action. If the text/content can't be changed, it should not be in an input field, but shown as static text.

```input-fields.html
<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="title">Tittel</label>
  <div class="hdd-form_input">
    <input id="title" placeholder="Placeholdertext">
  </div>
</div>

<div class="hdd-form_field">
  <label class="hdd-form_field_label" for="title">Tittel</label>
  <div class="hdd-form_input is-invalid">
    <input id="title" value="ola.hafslund.no">
  </div>
  <span class="hdd-form_field_error is-active"><i class="fal fa-info-circle"></i>E-mailen må inneholde @</span>
</div>
```


### Mutations
**`hdd-form_field`:**
**`hdd-form_input`:**

| JUST FROM DATEPICKER MUTATIONS REWRITE | This is dummydata |
| class | description|
| :--- | :--- |
| `is-inline` | Use the datepicker as a inline element |
| `is-active` | Show the datepicker |
| `has-arrow-left` | Places the arrow on the left side of the datepicker and aligns the datepicker tip as center point |
| `has-arrow-right` | Places the arrow on the right side of the datepicker and aligns the datepicker tip as center point |

**`hdd-datepicker_container_days > span`** | **`hdd-datepicker_container_days_day`:**

| class | description|
| :--- | :--- |
| `is-selected` | Set the given day to the selected style |
| `is-in-range` | Set the given day to the in range style |
