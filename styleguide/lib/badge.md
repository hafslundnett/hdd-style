---
name: Badge
category: Components
---

All colors can be used on `hdd-badge` and `hdd-badge-icon`. `signal-red` is used as the default color.

## Badge
`hdd-badge`


```badge.html
<div>
  <span>Example 1 <span class="hdd-badge">5</span></span>
</div>
<div style="padding-top: 1rem;">
  <span>Example 2 <span class="hdd-badge is-primary">8</span></span>
</div>
<div style="padding-top: 1rem;">
  <span>Example 2 <span class="hdd-badge is-safe">10</span></span>
</div>
```


## Icon badge
`hdd-badge-icon`

Add a small red dot with a white border to the top right side of a icon.

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
```