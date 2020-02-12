---
name: Dark Theme
category: Colors
---
##### ⚠️ Experimental, not available outside hdd yet! 
The dark-theme colors are right now in experimental mode, meaning there will be changes to these colors. 

Every color can be used directly by using the css-variable for a color: `var(--hdd-color-dynamic-$name)`. For example for primary: `color: var(--hdd-color-dynamic-primary)`.

## Using the dark-mode CSS-variables 
By using the 'dynamic'-colors the color will switch between a dark-mode color and a light-mode color depending on the theme chosen on your computer. If you don´t want to use dark-mode use the regular colors, without the 'dynamic'-name. The css-variables can be accessed anywhere when importing hdd into your application. The dark-pallet does noe support contrast-colors yet. A color can be selected by it's color name or label.

- `var(--hdd-color-dynamic-$name)`

```scss
.hdd-element {
  background: var(--hdd-color-primary); // using the primary color, blue
  color: var(--hdd-color-contrast-primary); // using the contrast color of primary 
}
```

## Light vs Dark Colors
Almost every dark-mode-color has changes to some extent. The light colors have become dark and vice versa, while most of the distinct colors, like the signal-colors, have become clearer to contrast the other colors.

- `--hdd-color-black` -> `--hdd-color-dynamic-black`
- `--hdd-color-white` -> `--hdd-color-dynamic-white`
- `--hdd-color-blue` -> `--hdd-color-dynamic-blue`
- `--hdd-color-signal-green` -> `--hdd-color-dynamic-signal-green`
- `--hdd-color-signal-yellow` -> `--hdd-color-dynamic-signal-yellow`
- `--hdd-color-signal-red` -> `--hdd-color-dynamic-signal-red`


```dark-theme-colors.html
<div>
  <span style="background: var(--hdd-color-black)" class="color-example"></span>
  <span style="background: var(--hdd-color-dynamic-black)" class="color-example"></span>
</div>
<div>
  <span style="background: var(--hdd-color-white)" class="color-example"></span>
  <span style="background: var(--hdd-color-dynamic-white)" class="color-example"></span>
</div>
<div>
  <span style="background: var(--hdd-color-blue)" class="color-example"></span>
  <span style="background: var(--hdd-color-dynamic-blue)" class="color-example"></span>
</div>
<div>
  <span style="background: var(--hdd-color-signal-green)" class="color-example"></span>
  <span style="background: var(--hdd-color-dynamic-signal-green)" class="color-example"></span>
</div>
<div>
  <span style="background: var(--hdd-color-signal-yellow)" class="color-example"></span>
  <span style="background: var(--hdd-color-dynamic-signal-yellow)" class="color-example"></span>
</div>
<div>
  <span style="background: var(--hdd-color-signal-red)" class="color-example"></span>
  <span style="background: var(--hdd-color-dynamic-signal-red)" class="color-example"></span>
</div>
```

```dark-theme-colors.css  hidden
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
body > div:first-of-type {
  padding: 20px;
  background: var(--hdd-color-dynamic-background-primary);
}
```