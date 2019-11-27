---
name: Colors preview
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
  <h2 style="padding: 20px 10px;">Color</h2>
  <span style="background: var(--hdd-blue); height: 100px; width: 100px;" class="color-example"></span>
  <span style="background: var(--hdd-blue-dark)" class="color-example"></span>
  <span style="background: var(--hdd-blue-light1)" class="color-example"></span>
  <span style="background: var(--hdd-blue-light2)" class="color-example"></span>
  <span style="background: var(--hdd-blue-light3)" class="color-example"></span>
  <span style="background: var(--hdd-blue-light4)" class="color-example"></span>
</div>
<div style="padding: 0 15px 15px 15px; background: white;">
  <h2 style="padding: 20px 10px;">Contrast</h2>
  <span style="background: var(--hdd-contrast-blue); height: 100px; width: 100px;" class="color-example"></span>
  <span style="background: var(--hdd-contrast-blue-dark)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-blue-light1)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-blue-light2)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-blue-light3)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-blue-light4)" class="color-example"></span>
</div>
```

## Support colors
Support colors are all colors which are not considered primary colors. These colors include greys, signaling colors, data visualization colors, and shadows.

### Grayscale
The grayscale should be used in addition to the primary colors of non-printable items. The darkest gray is text color and should be used on all titles, paragraphs, and content. If text appears on a dark surface, contrast requirements must be maintained and white text must be used (#FFFFFF).

- `--hdd-black` `--hdd-contrast-black`
- `--hdd-font-color` `--hdd-contrast-font-color`
- `--hdd-grey-dark` `--hdd-contrast-grey-dark`
- `--hdd-grey-medium` `--hdd-contrast-grey-medium`
- `--hdd-grey` `--hdd-contrast-grey`
- `--hdd-grey-border` `--hdd-contrast-grey-border`
- `--hdd-grey-light` `--hdd-contrast-grey-light` 
- `--hdd-grey-background` `--hdd-contrast-grey-background` 
- `--hdd-white` `--hdd-contrast-white` 

```grey-colors.html
<div style="padding: 15px 15px 0 15px; background: white;">
  <h2 style="padding: 20px 10px;">Color</h2>
  <span style="background: var(--hdd-black)" class="color-example"></span>
  <span style="background: var(--hdd-font-color)" class="color-example"></span>
  <span style="background: var(--hdd-grey-dark)" class="color-example"></span>
  <span style="background: var(--hdd-grey-medium)" class="color-example"></span>
  <span style="background: var(--hdd-grey)" class="color-example"></span>
  <span style="background: var(--hdd-grey-border)" class="color-example"></span>
  <span style="background: var(--hdd-grey-light)" class="color-example"></span>
  <span style="background: var(--hdd-grey-background)" class="color-example"></span>
  <span style="background: var(--hdd-white)" class="color-example"></span>
</div>
<div style="padding: 0 15px 15px 15px; background: white;">
  <h2 style="padding: 20px 10px;">Contrast</h2>
  <span style="background: var(--hdd-contrast-black)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-font-color)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-grey-dark)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-grey-medium)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-grey)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-grey-border)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-grey-light)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-grey-background)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-white)" class="color-example"></span>
</div>
```

### Signal colors
Signal colors should only be used in meaningful (never being identity-bearing or the only color appearing on a screen) situations and should only mean one thing per platform.

- `--hdd-signal-green`    `--hdd-contrast-signal-green`
- `--hdd-signal-yellow`   `--hdd-contrast-signal-yellow`
- `--hdd-signal-red`      `--hdd-contrast-signal-red`

```signal-colors.html
<div style="padding: 15px 15px 0 15px; background: white;">
  <h2 style="padding: 20px 10px;">Color</h2>
  <span style="background: var(--hdd-signal-green)" class="color-example"></span>
  <span style="background: var(--hdd-signal-yellow)" class="color-example"></span>
  <span style="background: var(--hdd-signal-red)" class="color-example"></span>
</div>
<div style="padding: 0 15px 15px 15px; background: white;">
  <h2 style="padding: 20px 10px;">Contrast</h2>
  <span style="background: var(--hdd-contrast-signal-green)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-signal-yellow)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-signal-red)" class="color-example"></span>
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
  <h2 style="padding: 20px 10px;">Color</h2>
  <span style="background: var(--hdd-data-navy)" class="color-example"></span>
  <span style="background: var(--hdd-data-marine)" class="color-example"></span>
  <span style="background: var(--hdd-data-blue)" class="color-example"></span>
  <span style="background: var(--hdd-data-turquoise)" class="color-example"></span>
  <span style="background: var(--hdd-data-seagreen)" class="color-example"></span>
  <span style="background: var(--hdd-data-green)" class="color-example"></span>
  <span style="background: var(--hdd-data-orange)" class="color-example"></span>
  <span style="background: var(--hdd-data-yellow)" class="color-example"></span>
</div>
<div style="padding: 0 15px 15px 15px; background: white;">
  <h2 style="padding: 20px 10px;">Contrast</h2>
  <span style="background: var(--hdd-contrast-data-navy)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-data-marine)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-data-blue)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-data-turquoise)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-data-seagreen)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-data-green)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-data-orange)" class="color-example"></span>
  <span style="background: var(--hdd-contrast-data-yellow)" class="color-example"></span>
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


