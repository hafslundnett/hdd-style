---
name: Badge
category: Components
---

Badges contain numeric values and indicate a number. 

All the colors in the design system can be used on `hdd-badge`. `signal-red` is the default color. The colors are used with the class `is-$color`. For example for primary: `<span class="hdd-badge is-primary"></span>`.

## Badge
`hdd-badge`


```badge.html
<span class="hdd-badge">592</span>
<span class="hdd-badge is-primary">82</span>
<span class="hdd-badge is-safe">313</span>
<span class="hdd-badge is-warn">18 196</span>
<span class="hdd-badge is-blue-light1">37</span>
<span class="hdd-badge is-data-navy">12 156</span>
<span class="hdd-badge is-black">9 214</span>
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