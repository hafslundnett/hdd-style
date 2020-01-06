---
name: Badge
category: Components
---

Badges contain numeric values and indicate a number. All the colors in the design system can be used on `hdd-badge`. `signal-red` is the default color. The colors are used with the class `is-$color`.

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