---
name: Dropdown
category: Form-Components
---

⚠️ This is a low level building block, and should be automated in a component library, but can be used directly if you want full control.

The dropdown lets the user search for and choose between a set of options. The dropdown aligns to the bottom by default.
Dropdown should be used if the user wants a recommended selection out of all the options (then this choice should be the default), or if the list of choices is longer than 5 (then placeholder text should be used). In a long dropdown list, it must be possible for the user to start typing to filter.

## Dropdown
`hdd-form_input`.`hdd-dropdown`

```dropdown.html
<div class="hdd-form_input hdd-dropdown">
  <input value="Jer">

  <div class="hdd-dropdown_content is-active">
    <div class="hdd-dropdown_content_item is-active"><b>Jer</b>oen</div>
    <div class="hdd-dropdown_content_item">Stian</div>
    <div class="hdd-dropdown_content_item no-hover">Erik</div>
  </div>
</div>
<div style="margin:20px">
  <p>Some content behind</p>
  <p>Some content behind</p>
  <p>Some content behind</p>
  <p>Some content behind</p>
  <p>Some content behind</p>
  <p>Some content behind</p>
  <p>Some content behind</p>
  <p>Some content behind</p>
</div>
```

## Dropdown aligned top
`hdd-form_input`.`hdd-dropdown`

Only use `is-aligned-top` when there are enough room from the top and not enough from the bottom.
 
```dropdown-top.html
<div style="margin:20px">
  <p>Some content behind</p>
  <p>Some content behind</p>
  <p>Some content behind</p>
  <p>Some content behind</p>
  <p>Some content behind</p>
  <p>Some content behind</p>
  <p>Some content behind</p>
  <p>Some content behind</p>
  <p>Some content behind</p>
  <p>Some content behind</p>
</div>
<div class="hdd-form_input hdd-dropdown">
  <input value="Jer">
 
  <div class="hdd-dropdown_content is-active is-aligned-top">
    <div class="hdd-dropdown_content_item is-active"><b>Jer</b>oen</div>
    <div class="hdd-dropdown_content_item">Stian</div>
    <div class="hdd-dropdown_content_item">Rune</div>
    <div class="hdd-dropdown_content_item no-hover">Erik</div>
  </div>
</div>
 
```



## Mutations
**`hdd-dropdown_content`:**

| class | description|
| :--- | :--- |
| `is-active` | Sets the given dropdown-content to it's active state |
| `is-aligned-bottom` | Sets the given dropdown-content to be aligned at the bottom of the input field |
| `is-aligned-top` | Sets the given dropdown-content to be aligned at the top of the input field |

**`hdd-dropdown_content_item`:**

| class | description|
| :--- | :--- |
| `no-hover` | Disable the `:hover` state |
| `is-active` | Sets the given dropdown-item to it's active state |
