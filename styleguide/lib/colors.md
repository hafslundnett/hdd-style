---
name: Overview of colors
category: Colors
---

Hafslund Nett has two different palettes of colors, primary colors and support colors, and they should be used in all communication to create identity. In this section all the available colors with their corresponding contrast-color is visualized.

## Primary colors
The primary color is blue and work as an important element for building the identity of Hafslund Nett. Blue symbolize credibility and stability. The associated shades of blue provide contrast, flexibility and airiness. This limited color scheme provides visual continuity throughout the user interface. When using estimates, pay particular attention to creating contrasts that are approved in WCAG. 

- `--hdd-blue` `--hdd-contrast-blue`
- `--hdd-blue-dark` `--hdd-contrast-blue-dark`
- `--hdd-blue-light1` `--hdd-contrast-blue-light1`
- `--hdd-blue-light2` `--hdd-contrast-blue-light2`
- `--hdd-blue-light3` `--hdd-contrast-blue-light3`
- `--hdd-blue-light4` `--hdd-contrast-blue-light4`

```primary-colors.html
<div style="padding: 15px 15px 0 15px; background: white;">
  <span class="hdd-background-blue color-example" style="height: 100px; width: 100px;"></span>
  <span class="hdd-background-blue-dark color-example"></span>
  <span class="hdd-background-blue-light1 color-example"></span>
  <span class="hdd-background-blue-light2 color-example"></span>
  <span class="hdd-background-blue-light3 color-example"></span>
  <span class="hdd-background-blue-light4 color-example"></span>
</div>
<div style="padding: 0 15px 15px 15px; background: white;">
  <span class="hdd-contrast-background-blue color-example" style="height: 100px; width: 100px;"></span>
  <span class="hdd-contrast-background-blue-dark color-example"></span>
  <span class="hdd-contrast-background-blue-light1 color-example"></span>
  <span class="hdd-contrast-background-blue-light2 color-example"></span>
  <span class="hdd-contrast-background-blue-light3 color-example"></span>
  <span class="hdd-contrast-background-blue-light4 color-example"></span>
</div>
```

## Support colors
Support colors are all colors which are not considered primary colors. These colors include greys, signaling colors, data visualization colors, and shadows.

### Grayscale
The grayscale should be used in addition to the primary colors of non-printable items. The darkest gray is text color and should be used on all titles, paragraphs, and content. If text appears on a dark surface, contrast requirements must be maintained and white text must be used (#FFFFFF).

- `--hdd-font-color` `--hdd-contrast-font-color`
- `--hdd-grey-dark` `--hdd-contrast-grey-dark`
- `--hdd-grey-medium` `--hdd-contrast-grey-medium`
- `--hdd-grey-new` `--hdd-contrast-grey-new`
- `--hdd-grey-border` `--hdd-contrast-grey-border`
- `--hdd-grey-light` `--hdd-contrast-grey-light` 

```grey-colors.html
<div style="padding: 15px 15px 0 15px; background: white;">
  <span class="hdd-background-font-color color-example"></span>
  <span class="hdd-background-grey-dark color-example"></span>
  <span class="hdd-background-grey-medium color-example"></span>
  <span class="hdd-background-grey-new color-example"></span>
  <span class="hdd-background-grey-border color-example"></span>
  <span class="hdd-background-grey-light color-example"></span>
</div>
<div style="padding: 0 15px 15px 15px; background: white;">
  <span class="hdd-contrast-background-font-color color-example"></span>
  <span class="hdd-contrast-background-grey-dark color-example"></span>
  <span class="hdd-contrast-background-grey-medium color-example"></span>
  <span class="hdd-contrast-background-grey-new color-example"></span>
  <span class="hdd-contrast-background-grey-border color-example"></span>
  <span class="hdd-contrast-background-grey-light color-example"></span>
</div>
```

### Signal colors
Signal colors should only be used in meaningful (never being identity-bearing or the only color appearing on a screen) situations and should only mean one thing per platform.

- `--hdd-signal-green`    `--hdd-contrast-signal-green`
- `--hdd-signal-yellow`   `--hdd-contrast-signal-yellow`
- `--hdd-signal-red`      `--hdd-contrast-signal-red`

```signal-colors.html
<div style="padding: 15px 15px 0 15px; background: white;">
  <span class="hdd-background-signal-green color-example"></span>
  <span class="hdd-background-signal-yellow color-example"></span>
  <span class="hdd-background-signal-red color-example"></span>
</div>
<div style="padding: 0 15px 15px 15px; background: white;">
  <span class="hdd-contrast-background-signal-green color-example"></span>
  <span class="hdd-contrast-background-signal-yellow color-example"></span>
  <span class="hdd-contrast-background-signal-red color-example"></span>
</div>
```

### Data visualization
These colors are chosen to be used for infographics. If necessary, these colors can also be used in varying degrees of opacity (eg heat maps).

- `--hdd-data-navy`   `--hdd-contrast-data-navy`
- `--hdd-data-marine`   `--hdd-contrast-data-marine`
- `--hdd-data-blue`   `--hdd-contrast-data-blue`
- `--hdd-data-turquoise`   `--hdd-contrast-data-turquoise`
- `--hdd-data-seagreen`   `--hdd-contrast-data-seagreen`
- `--hdd-data-green`    `--hdd-contrast-data-green`
- `--hdd-data-orange`   `--hdd-contrast-data-orange`
- `--hdd-data-yellow`   `--hdd-contrast-data-yellow`

```data-colors.html
<div style="padding: 15px 15px 0 15px; background: white;">
  <span class="hdd-background-data-navy color-example"></span>
  <span class="hdd-background-data-marine color-example"></span>
  <span class="hdd-background-data-blue color-example"></span>
  <span class="hdd-background-data-turquoise color-example"></span>
  <span class="hdd-background-data-seagreen color-example"></span>
  <span class="hdd-background-data-green color-example"></span>
  <span class="hdd-background-data-orange color-example"></span>
  <span class="hdd-background-data-yellow color-example"></span>
</div>
<div style="padding: 0 15px 15px 15px; background: white;">
  <span class="hdd-contrast-background-data-navy color-example"></span>
  <span class="hdd-contrast-background-data-marine color-example"></span>
  <span class="hdd-contrast-background-data-blue color-example"></span>
  <span class="hdd-contrast-background-data-turquoise color-example"></span>
  <span class="hdd-contrast-background-data-seagreen color-example"></span>
  <span class="hdd-contrast-background-data-green color-example"></span>
  <span class="hdd-contrast-background-data-orange color-example"></span>
  <span class="hdd-contrast-background-data-yellow color-example"></span>
</div>
```


```primary-colors.css  hidden
.color-example {
  display: inline-block; height: 50px; width: 50px; border-radius: 100%; margin: 10px; box-shadow: var(--hdd-shadow-strong);
}
```
```grey-colors.css  hidden
.color-example {
  display: inline-block; height: 50px; width: 50px; border-radius: 100%; margin: 10px; box-shadow: var(--hdd-shadow-strong);
}
```
```signal-colors.css  hidden
.color-example {
  display: inline-block; height: 50px; width: 50px; border-radius: 100%; margin: 10px; box-shadow: var(--hdd-shadow-strong);
}
```
```data-colors.css  hidden
.color-example {
  display: inline-block; height: 50px; width: 50px; border-radius: 100%; margin: 10px; box-shadow: var(--hdd-shadow-strong);
}
```


