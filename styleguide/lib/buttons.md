---
name: Button
category: Components
---

The buttons are to be used across the various internal systems. If there is only one button on the current screen, this should always be a primary button. When you use multiple buttons, the primary button appears on the right and any secondary buttons appear on the left. Secondary button should not be used alone on a screen. Action buttons are specially designed for the user to take an action that will affect something else.

Changing the color of a button to convey purpose is not ideal as people with vision impairments may struggle. Usage of other colors should be properly discussed and the context clear.

## Primary button
`hdd-button`

If only one button exists on a page, it should always be a primary button. 

```primary-button.html
<button class="hdd-button">Primary</button>
<button class="hdd-button" disabled>Disabled</button>
<button class="hdd-button is-loading">Loading</button>
<button class="hdd-button">Primary</button>
<button class="hdd-button has-icon"><i class="fal fa-cog"></i>Icon button</button>

<button class="hdd-button">Primary</button>
<button class="hdd-button is-secondary">Secondary</button>
<button class="hdd-button is-secondary is-loading">Loading</button>
```

## Secondary button
`hdd-button`

The secondary button should never be used alone on a page.

```secondary-button.html
<button class="hdd-button is-secondary">Secondary</button>
<button class="hdd-button is-secondary" disabled>Disabled</button>
<button class="hdd-button is-secondary is-loading">Loading</button>
<button class="hdd-button has-icon is-secondary"><i class="fal fa-cog"></i>Icon button</button>
```

## Icon buttons
`hdd-button-icon`


```icon-button.html
<div>
  <button class="hdd-button-icon"><i class="fal fa-plus-circle"></i></button>
  <button class="hdd-button-icon" disabled><i class="fal fa-plus-circle"></i></button>
  <button class="hdd-button-icon"><i class="fal fa-arrow-right"></i></button>
  <button class="hdd-button-icon" disabled><i class="fal fa-arrow-right"></i></button>
</div>
<div style="margin-top:8px;">
  <button class="hdd-button-icon is-transparent"><i class="fal fa-cog"></i></button>
  <button class="hdd-button-icon is-transparent" disabled><i class="fal fa-cog"></i></button>
  <button class="hdd-button-icon is-transparent is-no-padding"><i class="fal fa-arrow-right"></i></button>
  <button class="hdd-button-icon is-transparent is-no-padding" disabled><i class="fal fa-arrow-right"></i></button>
</div>
```

```primary-button.css  hidden
.hdd-button {
  margin: 4px;
}
```
```secondary-button.css  hidden
.hdd-button {
  margin: 4px;
}
```
```icon-button.css  hidden
.hdd-button-icon {
  margin: 4px;
}
```

## Mutations
**`hdd-button`:**

| class | description|
| :--- | :--- |
| `is-primary` | Sets the color of the given button to the primary color |
| `is-secondary` | Sets the color of the given button to the secondary color |
| `is-loading` | Sets the given button to it's loading state |
| `has-icon` | Adds padding to the right of icon in a button with text |

**`hdd-button-icon`:**

| class | description|
| :--- | :--- |
| `is-transparent` | Sets background and border to transparent |
| `is-no-padding` | Removes all padding from icon-button, should only used together with is-transparent |

