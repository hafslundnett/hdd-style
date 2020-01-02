---
name: Badge
category: Components
---

Badges contain numeric values and indicate a number. Multiple colors can be used on `hdd-badge` and `hdd-badge-icon`. `signal-red` is used as the default color.

### When to use: 
Use badges to mark new, updated or removed content. Use badges with the item they represent, so it's clear which item is indicated.

### When not to use:
Badges should not be used alone. Do not display information status in a badge and to visually mark UI objects.

## Badge
`hdd-badge`


```badge.html
<span class="hdd-badge">5</span>
<span class="hdd-badge is-primary">8</span>
<span class="hdd-badge is-safe">31</span>
<span class="hdd-badge is-warn">12 156</span>
```


## Icon badge
`hdd-badge-icon`

Add a small red dot with a white border to the top right side of an icon.

```badge-icon.html
<div>
  <i class="fal fa-cog"><span class="hdd-badge-icon"></span></i>
</div>
<div style="padding-top: 1rem;">
  <i class="fal fa-cog"><span class="hdd-badge-icon is-primary"></span></i>
</div>
<div style="padding-top: 1rem;">
  <i class="fal fa-cog"><span class="hdd-badge-icon is-safe"></span></i>
</div>
<div style="padding-top: 1rem;">
  <i class="fal fa-cog"><span class="hdd-badge-icon is-warn"></span></i>
</div>
```