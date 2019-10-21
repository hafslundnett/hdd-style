---
name: Tooltip
category: Components
---

A tooltip can give context to a given icon/piece of text. Tooltips are usually hidden and become visible after a action or when hovering.

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
| `no-hover` | Disable the tooltip's `:hover` state |

**`hdd-tooltip_content`:**

| class | description|
| :--- | :--- |
| `is-active` | Set the given tooltip to it's active state |
| `is-leaning-left` | Let the tooltip lean to the left side of the element |
| `is-leaning-right` | Let the tooltip lean to the right side of the element |