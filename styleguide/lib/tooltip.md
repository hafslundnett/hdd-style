---
name: Tooltip
category: Components
---

A tooltip can give context to a given icon/piece of text. Tooltips are usually hidden and become visible after a action or when hovering.

```tooltip.html
<span class="parent hdd-tooltip">
  Hover me
  <span class="hdd-tooltip_content is-leaning-right">Hello world</span>
</span>
```

### Mutations
**`hdd-tooltip`:**

| class | description|
| :--- | :--- |
| `no-hovering` | Disable the `:hover` state |

**`hdd-tooltip_content`:**

| class | description|
| :--- | :--- |
| `is-active` | Set the given tooltip to it's active state |
| `is-leaning-left` | Let the tooltip lean to the left side of the element |
| `is-leaning-right` | Let the tooltip lean to the right side of the element |