---
name: Tooltip
category: Components
---

A tooltip can give context to a given icon/piece of text. Tooltips are usually hidden and become visible on hovering, focus or on touch.

Attach the `hdd-tooltip` class to the element which the tooltip content should be relative to. Then within the attached element, add a `<span>` tag with the `hdd-tooltip_content` class. Fill inn the content of the tooltip within the `<span>` tag. Examples and mutation classes are described below:


### ✅ When to use: 
Tooltips can be used to provide the user with brief and useful information related to a feature as a hover over/mini popup

### ⛔ When not to use:
Tooltips should not contain necessary and critical information needed by the user to complete a task. Tooltips does not work on mobile devices as they use the hover class, which only works with a mouse.

## Tooltip
`hdd-tooltip`

```tooltip.html

<div style="display:flex; justify-content:space-between;margin:30px">

  <span class="hdd-tooltip">
    Hover Right
    <span class="hdd-tooltip_content is-right">Right tooltip </span>
  </span>
   
  <span class="hdd-tooltip">
    Hover Left
    <span class="hdd-tooltip_content is-left">Left tooltip</span>
  </span>
   
  <span class="hdd-tooltip">
    Hover bottom
    <span class="hdd-tooltip_content is-bottom">Bottom tooltip</span>
  </span>

  <span class="hdd-tooltip">
    Hover on top
    <span class="hdd-tooltip_content is-top">Top tooltip</span>
  </span>

</div>

<div style="display:flex; justify-content:space-between;margin:30px">

  <span class="hdd-tooltip is-light">
    Hover Right
    <span class="hdd-tooltip_content is-right">Right tooltip</span>
  </span>
   
  <span class="hdd-tooltip is-light">
    Hover Left
    <span class="hdd-tooltip_content is-left">Left tooltip</span>
  </span>
   
  <span class="hdd-tooltip is-light">
    Hover bottom
    <span class="hdd-tooltip_content is-bottom">Bottom tooltip</span>
  </span>

  <span class="hdd-tooltip is-light">
    Hover on top
    <span class="hdd-tooltip_content is-top">Top tooltip</span>
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
| `is-top` | Set to tooltip to appear on top of the element |
| `is-bottom` | Set to tooltip to appear on the bottom of the element. This is the default position for a tooltip with no direction class set to it |