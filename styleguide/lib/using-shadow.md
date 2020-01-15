---
name: Shadows
category: Colors
---

HDD contain 3 different types of shadows, that goes from light to strong. Every shadow can be used directly by using the css-variable for that shadow: `var(--hdd-shadow-$name)`. For example for the light shadow: `box-shadow: var(--hdd-shadow-light)`.

## Using shadows as CSS-variables
The css-variables can be accessed anywhere when importing hdd into your application. All shadows are available for use. A shadow can be selected by it's name.

- `var(--hdd-shadow-light)`
- `var(--hdd-shadow-medium)`
- `var(--hdd-shadow-strong)`

```scss
.hdd-element {
  box-shadow: var(--hdd-shadow-light); // using the light shadow
  box-shadow: var(--hdd-shadow-medium); // using the medium shadow
  box-shadow: var(--hdd-shadow-strong); // using the strong shadow
}
```

## Using hdd-shadow-classes
Setting the shadow attribute directly on elements are also possible with the following classes. All shadows can be used.

- `hdd-shadow-light`
- `hdd-shadow-medium`
- `hdd-shadow-strong`

```shadow-colors.html
<div class="example-container">
  <span class="hdd-shadow-light color-example"></span>
  <span class="hdd-shadow-medium color-example"></span>
  <span class="hdd-shadow-strong color-example"></span>
</div>
```

```shadow-colors.css  hidden
.color-example {
  display: inline-block; height: 50px; width: 50px; border-radius: 100%; margin: 10px;
}
.example-container {
  padding: 15px; background: white;
}
```
