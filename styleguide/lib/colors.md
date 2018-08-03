---
name: Colors
Category: Utilities
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

#### `color($name)` function

This function returns the respected color value if found. When the given color is not found will a warning be thrown during building. A color can be selected by it's color name or label.

```sass
@import '../frameworks/colors';

.hdd-element {
  background: color(white);
  color: color(primary); // primary is the color label of 'blue'
}
```

#### `background-colors` class

The `background-colors` class contains all colors as chained classes.

**A chained color class consists out of the following:**

```sass
border-color: $color;
background: $color;
color: $color; // This color should have enough contrast on to make text readable on the given background color
```

**Best practice of using the `.background-colors` class**

```sass
.hdd-element {
  @extend .background-colors;
}
```

```html
<button class="hdd-element is-primary">Submit</button>
<button class="hdd-element is-data-seagreen">Submit</button>
```

The `color` property is set to a color that makes text readable on the given background. If you want to set the text color to the given background color add the `remove-text-contrast` class.

This is usefull when trying to for example to remove the background color and set the text color to the given background color.

**A usecase of the `.background-colors.remove-text-contrast` class**

```sass
.hdd-element {
  @extend .background-colors;

  &.no-background {
    @extend .background-colors.remove-text-contrast;
    background: none;
    border-style: solid;
    border-width: 1px;
  }
}
```

```html
<button class="hdd-element is-primary no-background">Submit</button>
```

#### `$colors` variable

The `$colors` variable is a big map containing all colors. Every color map has a couple of required properties.

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