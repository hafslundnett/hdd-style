---
name: Tooltip
category: Components
---

A tooltip can give context to a given icon/piece of text. Tooltips are usually hidden and become visible after an action or when hovering.

## Tooltip
`hdd-tooltip`

```tooltip.html

<div style="height:30px">
<!-- Margin for examples on top. -->
</div>

<h2 class="hdd-tooltip" style="display:flex; justify-content:center;margin:25px">Standard tooltips
  <span class="hdd-tooltip_content">Examples of tooltips</span>
</h2>
<div style="display:flex; justify-content:space-between;margin:30px">

  <span class="hdd-tooltip">
    Hover Right
    <span class="hdd-tooltip_content is-right">Right tooltip</span>
  </span>
   
  <span class="hdd-tooltip">
    Hover Left
    <span class="hdd-tooltip_content is-left">Left Hover</span>
  </span>
   
  <span class="hdd-tooltip">
    Hover bottom
    <span class="hdd-tooltip_content is-bottom">Bottom</span>
  </span>

  <span class="hdd-tooltip">
    Hover on top
    <span class="hdd-tooltip_content is-top">Hover on top</span>
  </span>
</div>

<h2 class="hdd-tooltip" style="display:flex; justify-content:center;margin:25px">Light tooltips
  <span class="hdd-tooltip_content is-light">Tooltips with is-light class</span>
</h2>
<div style="display:flex; justify-content:space-between;margin:30px">

  <span class="hdd-tooltip is-light">
    Hover Right
    <span class="hdd-tooltip_content is-right">Right tooltip</span>
  </span>
   
  <span class="hdd-tooltip is-light">
    Hover Left
    <span class="hdd-tooltip_content is-left">Left Hover</span>
  </span>
   
  <span class="hdd-tooltip is-light">
    Hover bottom
    <span class="hdd-tooltip_content is-bottom">Bottom</span>
  </span>

  <span class="hdd-tooltip is-light">
    Hover on top
    <span class="hdd-tooltip_content is-top">Hover on top</span>
  </span>
</div>

```

## Mutations
**`hdd-tooltip`:**

| class | description|
| :--- | :--- |
| `is-light` | Tooltip with hdd-color-white background and standard font color|

**`hdd-tooltip_content`:**

| class | description|
| :--- | :--- |
| `is-right` | Set to tooltip to appear on the right side of the element|
| `is-left` | Set to tooltip to appear on the left side of the element |
| `is-top` | Set to tooltip to appear on the right side of the element |
| `is-bottom` | Set to tooltip to appear on the right side of the element. This is the default position for a tooltip with no direction class set to it |