---
name: Colors
category: Utilities
---

All colors that are being used in this project are defined in the [colors map](https://github.com/hafslundnett/hdd-theme/tree/develop/variables/colors.scss). Every color can be used directly by using the `color($name)` function or by extended the `background-colors` class.

If you want to override a color could you define a `$override-colors` map. The colors or labels defined in this map will override the default colors.

```scss
$override-colors: (
  'blue': (
    color: #2196F3,
    contrast: #FFF,
    alt-labels: (primary)
  )
);
```

## `color($name, $color-set: $colors)` function

This function returns the respected color value if found. A color set could optionally be given if no color set is given will the `$colors` map be used. When the given color is not found will a warning be thrown during building. A color can be selected by it's color name or label.

There are by default two data color sets available:
- `$colors` - This is the default data set containing the hdd theme colors
- `$data-colors` - This data set contains all colors that should be used when working on graphs

```sass
@import '../frameworks/colors';

.hdd-element {
  background: color('white');
  color: color('primary'); // primary is the color label of 'blue'
}

.hdd-data-color-set {
  background: color('data-navy', $data-colors)
}

.hdd-custom-color-set {
  background: color('AntiqueWhite', $custom-color-set)
}

$custom-color-set: (
  AntiqueWhite: (
    color: #FAEBD7,
    contrast: #444,
    alt-labels: (primary, superimportant) // Optional
  )
);
```

## Color set

A color set is a big map containing all available colors. Every color map has a couple of required and optional properties.

```sass
blue: ( // <- label
  color: #1164A4, // Required
  contrast: #FFFFFF, // Required
  alt-labels: (primary, superimportant) // Optional
)
```

| property | required | description |
| :--- | :--- | :--- |
| `color` | `true` | is the hex color value of the label |
| `contrast` | `true` | is the contrast of color |
| `alt-labels` | `false` | is a list of alternative labels<br>that could be used to get this color |

## `background-colors` class

The `background-colors` class contains all colors as chained classes.

**A chained color class consists out of the following:**

```sass
border-color: $color;
background: $color;
color: $color; // This color should have enough contrast on to make text readable on the given background color
```

## Color modifiers

A set of color modifiers could be applied/extended to a class in a couple of ways.
Multiple classes are made of all colors that could be extended/included inside of your classes.
The best way of including a set of color modifiers is by using the `color-modifiers` function.

**`color-modifiers($list: ('primary', 'warn', 'danger', 'safe'), $main-property: 'background', $contrast-property: '', $selector: '', $color-set: $colors)` function**

The `color-modifiers` function returns modifiers for the given colors (list).

```scss
&.is-primary {
  background: #...; // <- Main property (2th argument)
  color: #...; // <- Contrast property (3th argument)
}

&.is-warn {
  background: #...;
  color: #...;
}

...
```

A main property and optionally a contrast property could be given. By default is the `$colors` color set used but a custom color set could be passed as a argument.

## Color directly
Setting the color and background attribute directly on elements are possible with the classes hdd-color, hdd-contrast-color, hdd-background and hdd-contrast-background, togheter with a color of choice. All colors from the colors map can be used.

```scss
&-color-#{$label} {
  color: $color;
}

&-contrast-color-#{$label} {
  color: $contrast;
}

&-background-#{$label} {
  background: $color;
}

&-contrast-background-#{$label} {
  background: $contrast;
}
```

```color-directly.html
<div style="padding: 20px;" class="hdd-background-primary">
  <div style="padding: 15px; margin: 15px;" class="hdd-contrast-background-primary">
    <h1 class="hdd-color-primary">Just a h1</h1>
  </div>
  <div style="padding: 15px; margin: 15px;" class="hdd-background-grey-dark">
    <h2 class="hdd-contrast-color-grey-dark">Just a h2</h2>
  </div>
  <div style="padding: 15px; margin: 15px;" class="hdd-background-blue-light2">
    <h3 class="hdd-contrast-color-blue-light2">Just a h3</h3>
  </div>
  <div style="padding: 15px; margin: 15px;" class="hdd-background-primary-dark">
    <p class="hdd-contrast-color-primary-dark">Just a p</p>
  </div>
</div>
```
