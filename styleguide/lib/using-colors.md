---
name: How to use colors
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

## Using color modifiers
A set of color modifiers could be applied/extended to a class in a couple of ways.
Multiple classes are made of all colors that could be extended/included inside of your classes.
The best way of including a set of color modifiers is by using the `color-modifiers` function.

The `color-modifiers` function returns modifiers for the given colors. When including the modifiers in a class the `is-somelabel` classes can be used on the html-elements with that class. The element will then get a background-color and a contrasting text-color. 

- `is-primary`
- `is-warn`
- `is-danger`
- `is-safe`

```scss
.hdd-badge {
  @include color-modifiers(('primary', 'warn', 'danger', 'safe'), 'background', 'color');
}
```

```color-modifiers.html
<div>
  <span class="hdd-badge is-primary">is-primary</span>
</div>
<div style="padding-top: 1rem;">
  <span class="hdd-badge is-warn">is-warn</span>
</div>
<div style="padding-top: 1rem;">
  <span class="hdd-badge is-danger">is-danger</span>
</div>
<div style="padding-top: 1rem;">
  <span class="hdd-badge is-safe">is-safe</span>
</div>
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