---
name: Input fields
category: Components
---
An input field should be a call to action. If the text/content can't be changed, it should not be in an input field, but shown as static text.

En input skal oppfordre til handling fra brukeren. Dersom teksten/innholdet ikke kan endres skal det ikke opptre i et input-felt av noe slag (vises som statisk tekst).

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
