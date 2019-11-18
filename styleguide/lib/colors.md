---
name: Colors
category: Utilities
---

Hafslund Nett has its own distinct groups of colors. These are defined as two different palettes, primary colors and support colors, and they should be used in all communication to create identity. All colors that are being used in this project are defined in the [colors map](https://github.com/hafslundnett/hdd-style/blob/master/variables/colors.scss). Every color can be used directly by using the css-variable for a color: `var(--hdd-$name)` or through the color function: `color($name)`.

## Primary colors
The primary color is blue and work as an important element for building the identity of Hafslund Nett. Blue symbolize credibility and stability. The associated shades of blue provide contrast, flexibility and airiness. This limited color scheme provides visual continuity throughout the user interface. When using estimates, pay particular attention to creating contrasts that are approved in WCAG. 

- `--hdd-blue`
- `--hdd-blue-dark`
- `--hdd-blue-light1`
- `--hdd-blue-light2`
- `--hdd-blue-light3`
- `--hdd-blue-light4`

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

- `--hdd-font-color`
- `--hdd-grey-dark`
- `--hdd-grey-medium`
- `--hdd-grey-new`
- `--hdd-grey-border`
- `--hdd-grey-light`

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

- `--hdd-signal-green`
- `--hdd-signal-yellow`
- `--hdd-signal-red`

```signal-colors.html
<div class="hdd-contrast-background-primary" style="padding: 15px;">
  <span class="hdd-background-signal-green color-example"></span>
  <span class="hdd-background-signal-yellow color-example"></span>
  <span class="hdd-background-signal-red color-example"></span>
</div>
```

### Data visualization
These colors are chosen to be used for infographics. If necessary, these colors can also be used in varying degrees of opacity (eg heat maps).

- `--hdd-data-navy`
- `--hdd-data-marine`
- `--hdd-data-blue`
- `--hdd-data-turquoise`
- `--hdd-data-seagreen`
- `--hdd-data-green`
- `--hdd-data-orange`
- `--hdd-data-yellow`

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

- `--hdd-shadow-light`
- `--hdd-shadow-medium`
- `--hdd-shadow-strong`

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


## Using colors in your code
### Using CSS-variables 
The css-variables can be accessed anywhere when importing hdd into your application. All colors, as well as their contrast color is awailable for use. A color can be selected by it's color name or label.

- `var(--hdd-$name)`
- `var(--hdd-contrast-$name)`

```scss
.hdd-element {
  color: var(--hdd-primary); // using the primary color, blue
  background: var(--hdd-contrast-primary); // using the contrast color of primary 
}
```

### Using color-function (old version)

The color function returns the color value if found. When the given color is not found will a warning be thrown during building. A color can be selected by it's color name or label.

- `color($name)`

```scss
@import '../frameworks/colors';

.hdd-element {
  color: color('primary'); // using the primary color, blue
  background: color('white'); // using the color white 
}
```

### Using color modifiers
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

### Using hdd-color-classes directly
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
