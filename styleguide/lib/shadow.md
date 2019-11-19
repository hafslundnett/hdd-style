---
name: Overview of shadows
category: Colors
---

Hafslund Nett has 3 different available shadows. In this section all the shadows are visualized.

## Shadows
Shadows should be used behind all cards. In most cases, "Normal" shadow should be used, with the exception of menus and tooltips that overlay other content.

- `--hdd-shadow-light`
- `--hdd-shadow-medium`
- `--hdd-shadow-strong`

```shadow-colors.html
<div style="padding: 15px; background: white;">
  <span class="hdd-shadow-light color-example"></span>
  <span class="hdd-shadow-medium color-example"></span>
  <span class="hdd-shadow-strong color-example"></span>
</div>
```

```shadow-colors.css  hidden
.color-example {
  display: inline-block; height: 50px; width: 50px; border-radius: 100%; margin: 10px;
}
```