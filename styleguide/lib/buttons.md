---
name: Button
category: Components
---

The buttons are to be used across the various internal systems. If there is only one button on the current screen, this should always be a primary button. When you use multiple buttons, the primary button appears on the right and any secondary buttons appear on the left. Secondary button should not be used alone on a screen. Action buttons are specially designed for the user to take an action that will affect something else.

Changing the color of a button to convey purpose is not ideal as people with vision impairments may struggle. Usage of other colors should be properly discussed and the context clear.

### When to use: 
The buttons should have a min left and right padding between text and border of 16 px (2 standard spacing). The minimum width of a button must be 90 px. The icon should be placed to the left of the text and the distance between text and icon should be 1 (default distance).

### When not to use:
When an action does not require a button. For example, during navigation a link should be used instead.


## Primary button
`hdd-button`

If only one button exists on a page, it should always be a primary button. 

```primary-button.html
<button class="hdd-button button-margin">Primary</button>
<button class="hdd-button button-margin" disabled>Disabled</button>
<button class="hdd-button is-loading button-margin">Loading</button>
<button class="hdd-button has-icon"><i class="fal fa-cog"></i>Icon button</button>
```

## Secondary button
`hdd-button`

The secondary button should never be used alone on a page.

```secondary-button.html
<button class="hdd-button is-secondary button-margin">Secondary</button>
<button class="hdd-button is-secondary button-margin" disabled>Disabled</button>
<button class="hdd-button is-secondary is-loading button-margin">Loading</button>
<button class="hdd-button has-icon is-secondary"><i class="fal fa-cog"></i>Icon button</button>
```

## Icon buttons
`hdd-button-icon`


```icon-button.html
<button class="hdd-button-icon button-margin"><i class="fal fa-plus-circle"></i></button>
<button class="hdd-button-icon button-margin" disabled><i class="fal fa-plus-circle"></i></button>
<button class="hdd-button-icon button-margin"><i class="fal fa-arrow-right"></i></button>
<button class="hdd-button-icon button-margin" disabled><i class="fal fa-arrow-right"></i></button>
<button class="hdd-button-icon is-transparent button-margin"><i class="fal fa-cog"></i></button>
<button class="hdd-button-icon is-transparent is-no-padding"><i class="fal fa-cog"></i></button>
```

```primary-button.css  hidden
.button-margin {
  margin-right: var(--hdd-spacing-1)
}
```
```secondary-button.css  hidden
.button-margin {
  margin-right: var(--hdd-spacing-1)
}
```
```icon-button.css  hidden
.button-margin {
  margin-right: var(--hdd-spacing-1)
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

