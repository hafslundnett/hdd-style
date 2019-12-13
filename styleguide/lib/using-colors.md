---
name: Colors
category: Colors
---

Hafslund Nett has its own distinct groups of colors. All colors that are being used in this project are defined in the [colors map](https://github.com/hafslundnett/hdd-style/blob/master/variables/colors.scss). Every color can be used directly by using the css-variable for a color: `var(--hdd-color-$name)`. For example for primary: `color: var(--hdd-color-primary)`.

## Using CSS-variables 
The css-variables can be accessed anywhere when importing hdd into your application. All colors, as well as their contrast color is available for use. A color can be selected by it's color name or label.

- `var(--hdd-color-$name)`
- `var(--hdd-color-contrast-$name)`

```scss
.hdd-element {
  background: var(--hdd-color-primary); // using the primary color, blue
  color: var(--hdd-color-contrast-primary); // using the contrast color of primary 
}
```
