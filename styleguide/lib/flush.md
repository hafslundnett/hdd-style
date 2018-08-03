---
name: Flush
category: Utilities
---

## Flush

### Class
`flush-`

The flush class can be used to remove the margin or padding of the given element on the given side.

- `flush-margin` Remove the margin on all sides
- `flush-padding` Remove the padding on all sides
- `flush-margin-(top, right, bottom, left)` Remove the margin on the given side
- `flush-padding-(top, right, bottom, left)` Remove the padding on the given side

### Example

```html
<div class="flush-margin"></div>
<div class="flush-margin-left"></div>

<div class="flush-padding"></div>
<div class="flush-padding-left"></div>
```