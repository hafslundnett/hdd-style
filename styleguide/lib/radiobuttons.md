---
name: Radio button
category: Form-Components
---

A radiobutton component lets a user select only one of a limited number of choices. 


## Radiobutton
`hdd-form_radiobutton`

```radiobutton.html
<form class="hdd-form_field">
    <span class="hdd-form_field_title">Radio buttons</span>
    <label class="hdd-form_radiobutton">
        <input type="radio" name="formname" checked />
        <span class="hdd-form_radiobutton_mark"></span>
        <span class="hdd-form_radiobutton_label">Picked</span>
    </label>
    <label class="hdd-form_radiobutton">
        <input type="radio" name="formname" />
        <span class="hdd-form_radiobutton_mark"></span>
        <span class="hdd-form_radiobutton_label">Unpicked</span>
    </label>
</form>
```

## Mutations
**`hdd-form_radiobutton`:**

| class | description|
| :--- | :--- |
| `is-checked` | Set the radiobutton style to it's checked class |