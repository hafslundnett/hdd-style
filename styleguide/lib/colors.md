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
<div class="example-container">
  <span style="background: var(--hdd-color-blue)" class="color-example-big"></span>
  <span style="background: var(--hdd-color-blue-dark)" class="color-example"></span>
  <span style="background: var(--hdd-color-blue-light1)" class="color-example"></span>
  <span style="background: var(--hdd-color-blue-light2)" class="color-example"></span>
  <span style="background: var(--hdd-color-blue-light3)" class="color-example"></span>
  <span style="background: var(--hdd-color-blue-light4)" class="color-example"></span>
</div>
<div class="example-container-2">
  <span class="color-text-first">blue</span>
  <span class="color-text">blue-dark</span>
  <span class="color-text">blue-light1</span>
  <span class="color-text">blue-light2</span>
  <span class="color-text">blue-light3</span>
  <span class="color-text">blue-light4</span>
</div>
<div class="example-container-3">
  <span style="background: var(--hdd-color-contrast-blue)" class="color-example-big""></span>
  <span style="background: var(--hdd-color-contrast-blue-dark)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-blue-light1)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-blue-light2)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-blue-light3)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-blue-light4)" class="color-example"></span>
</div>
<div class="example-container-4">
  <span class="color-text-first">contrast-blue</span>
  <span class="color-text">contrast-blue-dark</span>
  <span class="color-text">contrast-blue-light1</span>
  <span class="color-text">contrast-blue-light2</span>
  <span class="color-text">contrast-blue-light3</span>
  <span class="color-text">contrast-blue-light4</span>
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
<div class="example-container">
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
<div class="example-container-2">
  <span class="color-text">black</span>
  <span class="color-text">font-color</span>
  <span class="color-text">grey-dark</span>
  <span class="color-text">grey-medium</span>
  <span class="color-text">grey</span>
  <span class="color-text">grey-border</span>
  <span class="color-text">grey-light</span>
  <span class="color-text">grey-background</span>
  <span class="color-text">white</span>
</div>
<div class="example-container-3">
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
<div class="example-container-4">
  <span class="color-text">contrast-black</span>
  <span class="color-text">contrast-font-color</span>
  <span class="color-text">contrast-grey-dark</span>
  <span class="color-text">contrast-grey-medium</span>
  <span class="color-text">contrast-grey</span>
  <span class="color-text">contrast-grey-border</span>
  <span class="color-text">contrast-grey-light</span>
  <span class="color-text">contrast-grey-background</span>
  <span class="color-text">contrast-white</span>
</div>
```

### Signal colors
Signal colors should only be used in meaningful (never being identity-bearing or the only color appearing on a screen) situations and should only mean one thing per platform.

- `--hdd-color-signal-green`    `--hdd-color-contrast-signal-green`
- `--hdd-color-signal-yellow`   `--hdd-color-contrast-signal-yellow`
- `--hdd-color-signal-red`      `--hdd-color-contrast-signal-red`

```signal-colors.html
<div class="example-container">
  <span style="background: var(--hdd-color-signal-green)" class="color-example"></span>
  <span style="background: var(--hdd-color-signal-yellow)" class="color-example"></span>
  <span style="background: var(--hdd-color-signal-red)" class="color-example"></span>
</div>
<div class="example-container-2">
  <span class="color-text">signal-green</span>
  <span class="color-text">signal-yellow</span>
  <span class="color-text">signal-red</span>
</div>
<div class="example-container-3">
  <span style="background: var(--hdd-color-contrast-signal-green)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-signal-yellow)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-signal-red)" class="color-example"></span>
</div>
<div class="example-container-4">
  <span class="color-text">contrast-signal-green</span>
  <span class="color-text">contrast-signal-yellow</span>
  <span class="color-text">contrast-signal-red</span>
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
<div class="example-container">
  <span style="background: var(--hdd-color-data-navy)" class="color-example"></span>
  <span style="background: var(--hdd-color-data-marine)" class="color-example"></span>
  <span style="background: var(--hdd-color-data-blue)" class="color-example"></span>
  <span style="background: var(--hdd-color-data-turquoise)" class="color-example"></span>
  <span style="background: var(--hdd-color-data-seagreen)" class="color-example"></span>
  <span style="background: var(--hdd-color-data-green)" class="color-example"></span>
  <span style="background: var(--hdd-color-data-orange)" class="color-example"></span>
  <span style="background: var(--hdd-color-data-yellow)" class="color-example"></span>
</div>
<div class="example-container-2">
  <span class="color-text">data-navy</span>
  <span class="color-text">data-marine</span>
  <span class="color-text">data-blue</span>
  <span class="color-text">data-turquoise</span>
  <span class="color-text">data-seagreen</span>
  <span class="color-text">data-green</span>
  <span class="color-text">data-orange</span>
  <span class="color-text">data-yellow</span>
</div>
<div class="example-container-3">
  <span style="background: var(--hdd-color-contrast-data-navy)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-data-marine)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-data-blue)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-data-turquoise)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-data-seagreen)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-data-green)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-data-orange)" class="color-example"></span>
  <span style="background: var(--hdd-color-contrast-data-yellow)" class="color-example"></span>
</div>
<div class="example-container-4">
  <span class="color-text">contrast-data-navy</span>
  <span class="color-text">contrast-data-marine</span>
  <span class="color-text">contrast-data-blue</span>
  <span class="color-text">contrast-data-turquoise</span>
  <span class="color-text">contrast-data-seagreen</span>
  <span class="color-text">contrast-data-green</span>
  <span class="color-text">contrast-data-orange</span>
  <span class="color-text">contrast-data-yellow</span>
</div>
```


```primary-colors.css  hidden
.example-container {
  padding: 15px 15px 0 15px; 
  background: white;
}
.example-container-2 {
  padding: 0 15px 0 15px; 
  background:white; 
  display:flex;
}
.example-container-3 {
  padding: 0 15px 0 15px; 
  background: white;
}
.example-container-4 {
  padding: 0 15px 15px 15px; 
  background:white; 
  display:flex;
}
.color-example-big {
  height: 100px; 
  width: 100px; 
  display: inline-block; 
  border-radius: 100%; 
  margin: 14px; 
  box-shadow: var(--hdd-shadow-strong);
}
.color-example {
  display: inline-block; 
  height: 50px; 
  width: 50px; 
  border-radius: 100%; 
  margin: 14px; 
  box-shadow: var(--hdd-shadow-strong); 
}
.color-text-first {
  display: inline-block; 
  height: 50px; 
  width: 100px; 
  margin: 15.7px; 
  text-align: center;
}
.color-text {
  display: inline-block; 
  height: 50px; 
  width: 50px; 
  margin: 15.7px; 
  text-align: center;
}
@media (prefers-color-scheme: dark) {
  .example-container, .example-container-2, .example-container-3, .example-container-4 {
    padding: 20px;
    background: var(--primary-background-color);
    color: var(--hdd-color-white);
  }
}
```
```grey-colors.css  hidden
.example-container {
  padding: 15px 15px 0 15px; 
  background: white;
}
.example-container-2 {
  padding: 0 15px 0 15px; 
  background:white; display:flex;
}
.example-container-3 {
  padding: 0 15px 0 15px; 
  background: white;
}
.example-container-4 {
  padding: 0 15px 15px 15px; 
  background:white; 
  display:flex;
}
.color-example {
  display: inline-block; 
  height: 50px; 
  width: 50px; 
  border-radius: 100%; 
  margin: 14px; 
  box-shadow: var(--hdd-shadow-strong);
}
.color-text {
  display: inline-block; 
  height: 50px; 
  width: 50px; 
  margin: 15.7px; 
  text-align: center;
}
@media (prefers-color-scheme: dark) {
  .example-container, .example-container-2, .example-container-3, .example-container-4 {
    padding: 20px;
    background: var(--primary-background-color);
    color: var(--hdd-color-white);
  }
}
```
```signal-colors.css  hidden
.example-container {
  padding: 15px 15px 0 15px; 
  background: white;
}
.example-container-2 {
  padding: 0 15px 0 15px; 
  background:white; 
  display:flex;
}
.example-container-3 {
  padding: 0 15px 0 15px;
  background: white;
}
.example-container-4 {
  padding: 0 15px 15px 15px; 
  background:white; 
  display:flex;
}
.color-example {
  display: inline-block; 
  height: 50px; 
  width: 50px; 
  border-radius: 100%; 
  margin: 14px; 
  box-shadow: var(--hdd-shadow-strong);
}
.color-text {
  display: inline-block; 
  height: 50px; 
  width: 50px; 
  margin: 15.7px; 
  text-align: center;
}
@media (prefers-color-scheme: dark) {
  .example-container, .example-container-2, .example-container-3, .example-container-4 {
    padding: 20px;
    background: var(--primary-background-color);
    color: var(--hdd-color-white);
  }
}
```
```data-colors.css  hidden
.example-container {
  padding: 15px 15px 0 15px; 
  background: white;
}
.example-container-2 {
  padding: 0 15px 0 15px; 
  background:white; 
  display:flex;
}
.example-container-3 {
  padding: 0 15px 0 15px; 
  background: white;
}
.example-container-4 {
  padding: 0 15px 15px 15px; 
  background:white; 
  display:flex;
}
.color-example {
  display: inline-block; 
  height: 50px; 
  width: 50px; 
  border-radius: 100%; 
  margin: 14px; 
  box-shadow: var(--hdd-shadow-strong);
}
.color-text {
  display: inline-block; 
  height: 50px; 
  width: 50px; 
  margin: 15.7px; 
  text-align: center;
}
@media (prefers-color-scheme: dark) {
  .example-container, .example-container-2, .example-container-3, .example-container-4 {
    margin: -20px;
    padding: 20px;
    background: var(--primary-background-color);
    color: var(--hdd-color-white);
  }
}
```