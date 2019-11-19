---
name: Colors
category: Colors
---

Hafslund Nett has its own distinct groups of colors. All colors that are being used in this project are defined in the [colors map](https://github.com/hafslundnett/hdd-style/blob/master/variables/colors.scss). Every color can be used directly by using the css-variable for a color: `var(--hdd-$name)`. For example for primary: `color: var(--hdd-primary)`.

## Using CSS-variables 
The css-variables can be accessed anywhere when importing hdd into your application. All colors, as well as their contrast color is available for use. A color can be selected by it's color name or label.

- `var(--hdd-$name)`
- `var(--hdd-contrast-$name)`

```scss
.hdd-element {
  background: var(--hdd-primary); // using the primary color, blue
  color: var(--hdd-contrast-primary); // using the contrast color of primary 
}
```

## Using hdd-color-classes
Setting the color and background attribute directly on elements are also possible with the following classes. All colors from the color map can be used.
- `hdd-color-primary`
- `hdd-contrast-color-primary`
- `hdd-background-primary`
- `hdd-contrast-background-primary`

```color-directly.html
<div style="padding: 20px;" class="hdd-background-primary">
  <div style="padding: 15px; margin: 15px;" class="hdd-contrast-background-primary">
    <h2 class="hdd-color-primary">hdd-color-primary</h2>
  </div>
  <div style="padding: 15px; margin: 15px;" class="hdd-background-grey-dark">
    <h2 class="hdd-contrast-color-grey-dark">hdd-contrast-color-grey-dark</h2>
  </div>
  <div style="padding: 15px; margin: 15px;" class="hdd-background-blue-light2">
    <h2 class="hdd-contrast-color-blue-light2">hdd-contrast-color-blue-light2</h2>
  </div>
  <div style="padding: 15px; margin: 15px;" class="hdd-background-primary-dark">
    <h2 class="hdd-contrast-color-primary-dark">hdd-contrast-color-primary-dark</h2>
  </div>
</div>
```