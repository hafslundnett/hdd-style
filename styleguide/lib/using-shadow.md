---
name: How to use shadows
category: Colors
---

HDD contain 3 different types of shadows, that goes from light to strong. Every shadow can be used directly by using the css-variable for that shadow: `var(--hdd-$name)`. For example for the light shadow: `box-shadow: var(--hdd-shadow-light)`.

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

```shadow-directly.html
<div style="padding: 20px; background: white;" class="hdd-shadow-strong">
    <h2 style="padding: 15px; margin: 15px;" class="hdd-shadow-light">
        hdd-shadow-light
    </h2>
    <h2 style="padding: 15px; margin: 15px;" class="hdd-shadow-medium">
        hdd-shadow-medium
    </h2>
    <h2 style="padding: 15px; margin: 15px;" class="hdd-shadow-strong">
        hdd-shadow-strong
    </h2>
</div>
```