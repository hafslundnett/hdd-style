---
name: Colors
category: Utilities
---

Hafslund Nett has its own distinct groups of colors. These are defined as two different palettes, primary colors and support colors, and they should be used in all communication to create identity. Every color can be used directly by using the `color($name)` function or by extended the `background-colors` class.

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

## Primary colors
The primary color is blue and work as an important element for building the identity of Hafslund Nett. Blue symbolize credibility and stability. The associated shades of blue provide contrast, flexibility and airiness. This limited color scheme provides visual continuity throughout the user interface. When using estimates, pay particular attention to creating contrasts that are approved in WCAG. 

```primary-colors.html
<div class="hdd-contrast-background-primary" style="padding: 15px;">
  <span class="hdd-background-blue color-example" style="height: 100px; width: 100px;"></span>
  <span class="hdd-background-blue-dark color-example"></span>
  <span class="hdd-background-blue-light1 color-example"></span>
  <span class="hdd-background-blue-light2 color-example"></span>
  <span class="hdd-background-blue-light3 color-example"></span>
  <span class="hdd-background-blue-light4 color-example"></span>
</div>
```

## Support colors
Support colors are all colors which are not considered primary colors. These colors include greys, signaling colors, data visualization colors, and shaddows.

### Grayscale
The grayscale should be used in addition to the primary colors of non-printable items. The darkest gray is text color and should be used on all titles, paragraphs, and content. If text appears on a dark surface, contrast requirements must be maintained and white text must be used (#FFFFFF).

```grey-colors.html
<div class="hdd-contrast-background-primary" style="padding: 15px;">
  <span class="hdd-background-font-color color-example"></span>
  <span class="hdd-background-grey-dark color-example"></span>
  <span class="hdd-background-grey-medium color-example"></span>
  <span class="hdd-background-grey-new color-example"></span>
  <span class="hdd-background-grey-border color-example"></span>
  <span class="hdd-background-grey-light color-example"></span>
</div>
```

### Signal colors
Signal colors should only be used in meaningful (never being identity-bearing or the only color appearing on a screen) situations and should only mean one thing per platform.

```signal-colors.html
<div class="hdd-contrast-background-primary" style="padding: 15px;">
  <span class="hdd-background-signal-green color-example"></span>
  <span class="hdd-background-signal-yellow color-example"></span>
  <span class="hdd-background-signal-red color-example"></span>
</div>
```

### Data visualization
These colors are chosen to be used for infographics. If necessary, these colors can also be used in varying degrees of opacity (eg on heat maps).

```data-colors.html
<div class="hdd-contrast-background-primary" style="padding: 15px;">
  <span class="hdd-background-data-navy color-example"></span>
  <span class="hdd-background-data-marine color-example"></span>
  <span class="hdd-background-data-blue color-example"></span>
  <span class="hdd-background-data-turquoise color-example"></span>
  <span class="hdd-background-data-seagreen color-example"></span>
  <span class="hdd-background-data-green color-example"></span>
  <span class="hdd-background-data-orange color-example"></span>
  <span class="hdd-background-data-yellow color-example"></span>
</div>
```

### Shaddows
Shadows should be used behind all cards. In most cases, "Normal" shadow should be used, with the exception of menus and tooltips that overlay other content.

```shaddow-colors.html
<div class="hdd-contrast-background-primary" style="padding: 15px;">
  <span class="hdd-shadow-light hdd-contrast-background-primary color-example"></span>
  <span class="hdd-shadow-medium hdd-contrast-background-primary color-example"></span>
  <span class="hdd-shadow-strong hdd-contrast-background-primary color-example"></span>
</div>
```

```primary-colors.css  hidden
.color-example {
  display: inline-block; height: 50px; width: 50px; border-radius: 100%; margin: 10px;
}
```
```grey-colors.css  hidden
.color-example {
  display: inline-block; height: 50px; width: 50px; border-radius: 100%; margin: 10px;
}
```
```signal-colors.css  hidden
.color-example {
  display: inline-block; height: 50px; width: 50px; border-radius: 100%; margin: 10px;
}
```
```data-colors.css  hidden
.color-example {
  display: inline-block; height: 50px; width: 50px; border-radius: 100%; margin: 10px;
}
```
```shaddow-colors.css  hidden
.color-example {
  display: inline-block; height: 50px; width: 50px; border-radius: 100%; margin: 10px;
}
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
