---
name: Badge
category: Components
---

Badges contain numeric values and indicate a number. 

All the colors in the design system can be used on `hdd-badge`. `signal-red` is the default color. The colors are used with the class `is-$color`. For example for primary: `<span class="hdd-badge is-primary"></span>`.
Badges contain numeric values and indicate a number. Multiple colors can be used on `hdd-badge` and `hdd-badge-icon`. `signal-red` is used as the default color.

### ✅ When to use: 
Use badges to mark new, updated or removed content. Use badges with the item they represent, so it's clear which item is indicated.

### ⛔ When not to use:
Badges should not be used alone. Do not display information status in a badge and to visually mark UI objects.

## Badge
`hdd-badge`


```badge.html
<div class="dark-mode">
    <span class="hdd-badge">592</span>
    <span class="hdd-badge is-primary">82</span>
    <span class="hdd-badge is-safe">313</span>
    <span class="hdd-badge is-warn">18 196</span>
    <span class="hdd-badge is-blue-light1">37</span>
    <span class="hdd-badge is-data-navy">12 156</span>
    <span class="hdd-badge is-black">9 214</span>
</div>
```

```badge.css  hidden
.dark-mode {
    margin: -20px;
    padding: 20px;
    background: var(--hdd-color-dynamic-background-primary);
}
```
