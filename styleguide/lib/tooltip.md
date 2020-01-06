---
name: Tooltip
category: Components
---

A tooltip can give context to a given icon/piece of text. Tooltips are usually hidden and become visible on hovering, focus or on touch.

### ✅ When to use: 
Tooltips can be used to provide the user with brief and useful information related to a feature.

### ⛔ When not to use:
Tooltips should not contain necessary and critical information needed by the user to complete a task.

## Tooltip
`hdd-tooltip`

```tooltip.html
<span class="hdd-tooltip" style="margin-right: 10px">
  Hover me
  <span class="hdd-tooltip_content is-leaning-right">Right Leaning Tooltip</span>
</span>
|
<span class="hdd-tooltip" style="margin-right: 10px, margin-left: 10px;">
  Hover me
  <span class="hdd-tooltip_content">Centered Leaning Tooltip</span>
</span>
|
<span class="hdd-tooltip" style="margin-left: 10px">
  Hover me too
  <span class="hdd-tooltip_content is-leaning-left">Left Leaning Tooltip</span>
</span>

```

## Mutations
**`hdd-tooltip`:**

| class | description|
| :--- | :--- |
| `no-hover` | Disable the tooltip `:hover` state |

**`hdd-tooltip_content`:**

| class | description|
| :--- | :--- |
| `is-active` | Set the given tooltip to it's active state |
| `is-leaning-left` | Let the tooltip lean to the left side of the element |
| `is-leaning-right` | Let the tooltip lean to the right side of the element |