---
name: Button
category: Components
---

The buttons are to be used across the various internal systems. If there is only one button on the current screen, this should always be a primary button. When you use multiple buttons, the primary button appears on the right and any secondary buttons appear on the left. Secondary button should not be used alone on a screen.

Changing the color of a button to convey purpose is not ideal as people with vision impairments may struggle. Usage of other colors should be properly discussed and the context clear.

## Primary button
`hdd-button`

If only one button exists on a page, it should always be a primary button. 

```primary-button.html
<button class="hdd-button" style="margin-right: var(--hdd-spacing-1)">Primary</button>
<button class="hdd-button" disabled style="margin-right: var(--hdd-spacing-1)">Disabled</button>
<button class="hdd-button is-loading" style="margin-right: var(--hdd-spacing-1)">Loading</button>
```

## Secondary button
`hdd-button`

The secondary button should never be used alone on a page.

```secondary-button.html
<button class="hdd-button is-secondary" style="margin-right: var(--hdd-spacing-1)">Secondary</button>
<button class="hdd-button is-secondary" style="margin-right: var(--hdd-spacing-1)" disabled>Disabled</button>
<button class="hdd-button is-secondary is-loading" style="margin-right: var(--hdd-spacing-1)">Loading</button>
```
## Action button
`hdd-button`, `has-icon`

Action buttons are specially designed for the user to take an action that will affect something else.

```action-button.html
<button class="hdd-button has-icon" style="margin-right: var(--hdd-spacing-1)"><i class="fal fa-cog"></i>Action button</button>
<button class="hdd-button has-icon is-secondary" style="margin-right: var(--hdd-spacing-1)"><i class="fal fa-cog"></i>Action button</button>
```

## Icon buttons
`hdd-button-icon`

Action buttons are specially designed for the user to take an action that will affect something else.

```icon-button.html
<button class="hdd-button-icon button-margin"><i class="fal fa-plus-circle"></i></button>
<button class="hdd-button-icon button-margin" disabled><i class="fal fa-plus-circle"></i></button>
<button class="hdd-button-icon button-margin"><i class="fal fa-arrow-right"></i></button>
<button class="hdd-button-icon button-margin" disabled><i class="fal fa-arrow-right"></i></button>
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
| `is-active` | Sets the given button to it's active state |
| `is-hovering` | Sets the given button to it's hovering state |
| `is-loading` | Sets the given button to it's loading state |
| `no-active` | Disable the `:active` state |
| `no-focus` | Disable the `:focus` state |
| `no-hover` | Disable the `:hover` state |
| `has-icon` | Adds padding to the right of icon in a button with text |

**`hdd-button-icon`:**

| class | description|
| :--- | :--- |
| `is-active` | Sets the given button to it's active state |
| `is-hovering` | Sets the given button to it's hovering state |
| `is-loading` | Sets the given button to it's loading state |
| `no-active` | Disable the `:active` state |
| `no-focus` | Disable the `:focus` state |
| `no-hover` | Disable the `:hover` state |
