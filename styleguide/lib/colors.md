---
name: Colors preview
category: Colors
---

Hafslund Nett has two different palettes of colors, primary colors and support colors, and they should be used in all communication to create identity. In this section all the available colors with their corresponding contrast-color is visualized.

## Primary colors
The primary color is blue and work as an important element for building the identity of Hafslund Nett. Blue symbolize credibility and stability. The associated shades of blue provide contrast, flexibility and airiness. This limited color scheme provides visual continuity throughout the user interface. When using estimates, pay particular attention to creating contrasts that are approved in WCAG. 

- `--hdd-color-blue` `--hdd-color-contrast-blue`
- `--hdd-color-blue-dark` `--hdd-color-contrast-blue-dark`
- `--hdd-color-blue-light1` `--hdd-color-contrast-blue-light1`
- `--hdd-color-blue-light2` `--hdd-color-contrast-blue-light2`
- `--hdd-color-blue-light3` `--hdd-color-contrast-blue-light3`
- `--hdd-color-blue-light4` `--hdd-color-contrast-blue-light4`

```primary-colors.html
<div style="padding: 15px 15px 0 15px; background: white;">
  <h2 style="padding: 20px 10px;">Color</h2>
  <span style="background: var(--hdd-color-blue); height: 100px; width: 100px;" class="color-example"></span>
  <span style="background: var(--hdd-color-blue-dark)" class="color-example"></span>
  <span style="background: var(--hdd-color-blue-light1)" class="color-example"></span>
  <span style="background: var(--hdd-color-blue-light2)" class="color-example"></span>
  <span style="background: var(--hdd-color-blue-light3)" class="color-example"></span>
  <span style="background: var(--hdd-color-blue-light4)" class="color-example"></span>
</div>
<div style="padding: 0 15px 15px 15px; background: white;">
  <h2 style="padding: 20px 10px;">Contrast</h2>
  <span style="background: var(--hdd-color-contrast-blue); height: 100px; width: 100px;" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-blue-dark)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-blue-light1)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-blue-light2)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-blue-light3)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-blue-light4)" class="color-example"></span>
</div>
```

## Support colors
Support colors are all colors which are not considered primary colors. These colors include greys, signaling colors, data visualization colors, and shadows.

### Grayscale
The grayscale should be used in addition to the primary colors of non-printable items. The darkest gray is text color and should be used on all titles, paragraphs, and content. If text appears on a dark surface, contrast requirements must be maintained and white text must be used (#FFFFFF).

- `--hdd-color-black` `--hdd-color-contrast-black`
- `--hdd-color-font-color` `--hdd-color-contrast-font-color`
- `--hdd-color-grey-dark` `--hdd-color-contrast-grey-dark`
- `--hdd-color-grey-medium` `--hdd-color-contrast-grey-medium`
- `--hdd-color-grey` `--hdd-color-contrast-grey`
- `--hdd-color-grey-border` `--hdd-color-contrast-grey-border`
- `--hdd-color-grey-light` `--hdd-color-contrast-grey-light` 
- `--hdd-color-grey-background` `--hdd-color-contrast-grey-background` 
- `--hdd-color-white` `--hdd-color-contrast-white` 

```grey-colors.html
<div style="padding: 15px 15px 0 15px; background: white;">
  <h2 style="padding: 20px 10px;">Color</h2>
  <span style="background: var(--hdd-color-black)" class="color-example"></span>
  <span style="background: var(--hdd-color-font-color)" class="color-example"></span>
  <span style="background: var(--hdd-color-grey-dark)" class="color-example"></span>
  <span style="background: var(--hdd-color-grey-medium)" class="color-example"></span>
  <span style="background: var(--hdd-color-grey)" class="color-example"></span>
  <span style="background: var(--hdd-color-grey-border)" class="color-example"></span>
  <span style="background: var(--hdd-color-grey-light)" class="color-example"></span>
  <span style="background: var(--hdd-color-grey-background)" class="color-example"></span>
  <span style="background: var(--hdd-color-white)" class="color-example"></span>
</div>
<div style="padding: 0 15px 15px 15px; background: white;">
  <h2 style="padding: 20px 10px;">Contrast</h2>
  <span style="background: var(--hdd-color-contrast-black)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-font-color)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-grey-dark)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-grey-medium)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-grey)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-grey-border)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-grey-light)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-grey-background)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-white)" class="color-example"></span>
</div>
```

### Signal colors
Signal colors should only be used in meaningful (never being identity-bearing or the only color appearing on a screen) situations and should only mean one thing per platform.

- `--hdd-color-signal-green`    `--hdd-color-contrast-signal-green`
- `--hdd-color-signal-yellow`   `--hdd-color-contrast-signal-yellow`
- `--hdd-color-signal-red`      `--hdd-color-contrast-signal-red`

```signal-colors.html
<div style="padding: 15px 15px 0 15px; background: white;">
  <h2 style="padding: 20px 10px;">Color</h2>
  <span style="background: var(--hdd-color-signal-green)" class="color-example"></span>
  <span style="background: var(--hdd-color-signal-yellow)" class="color-example"></span>
  <span style="background: var(--hdd-color-signal-red)" class="color-example"></span>
</div>
<div style="padding: 0 15px 15px 15px; background: white;">
  <h2 style="padding: 20px 10px;">Contrast</h2>
  <span style="background: var(--hdd-color-contrast-signal-green)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-signal-yellow)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-signal-red)" class="color-example"></span>
</div>
```

### Data visualization
These colors are chosen to be used for infographics. If necessary, these colors can also be used in varying degrees of opacity (eg heat maps).

- `--hdd-color-data-navy`   `--hdd-color-contrast-data-navy`
- `--hdd-color-data-marine`   `--hdd-color-contrast-data-marine`
- `--hdd-color-data-blue`   `--hdd-color-contrast-data-blue`
- `--hdd-color-data-turquoise`   `--hdd-color-contrast-data-turquoise`
- `--hdd-color-data-seagreen`   `--hdd-color-contrast-data-seagreen`
- `--hdd-color-data-green`    `--hdd-color-contrast-data-green`
- `--hdd-color-data-orange`   `--hdd-color-contrast-data-orange`
- `--hdd-color-data-yellow`   `--hdd-color-contrast-data-yellow`

```data-colors.html
<div style="padding: 15px 15px 0 15px; background: white;">
  <h2 style="padding: 20px 10px;">Color</h2>
  <span style="background: var(--hdd-color-data-navy)" class="color-example"></span>
  <span style="background: var(--hdd-color-data-marine)" class="color-example"></span>
  <span style="background: var(--hdd-color-data-blue)" class="color-example"></span>
  <span style="background: var(--hdd-color-data-turquoise)" class="color-example"></span>
  <span style="background: var(--hdd-color-data-seagreen)" class="color-example"></span>
  <span style="background: var(--hdd-color-data-green)" class="color-example"></span>
  <span style="background: var(--hdd-color-data-orange)" class="color-example"></span>
  <span style="background: var(--hdd-color-data-yellow)" class="color-example"></span>
</div>
<div style="padding: 0 15px 15px 15px; background: white;">
  <h2 style="padding: 20px 10px;">Contrast</h2>
  <span style="background: var(--hdd-color-contrast-data-navy)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-data-marine)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-data-blue)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-data-turquoise)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-data-seagreen)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-data-green)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-data-orange)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-data-yellow)" class="color-example"></span>
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


