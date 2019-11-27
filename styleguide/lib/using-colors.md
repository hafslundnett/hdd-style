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
