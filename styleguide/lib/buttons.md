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
`hdd-button`.`has-icon`

Action buttons are specially designed for the user to take an action that will affect something else.

```action-button.html
<button class="hdd-button has-icon-left" style="margin-right: var(--hdd-spacing-1)"><i class="fal fa-cog"></i>Action button</button>
<button class="hdd-button has-icon-left is-secondary" style="margin-right: var(--hdd-spacing-1)"><i class="fal fa-cog"></i>Action button</button>
<button class="hdd-button has-icon-left" disabled style="margin-right: var(--hdd-spacing-1)"><i class="fal fa-cog"></i>Action button</button>
```

## Icon-button
`hdd-button-icon`

A button that only contains an icon and should be used when an icon is used as an button.

```next-button.html
<button class="hdd-button-icon button-margin"><i class="fal fa-arrow-right"></i></button>
<button class="hdd-button-icon is-transparent button-margin"><i class="fal fa-arrow-right"></i></button>
<button class="hdd-button-icon is-transparent is-no-padding button-margin"><i class="fal fa-arrow-right"></i></button>
```

```next-button.css  hidden
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
| `has-icon-right` | Adds padding to the right of icon |
| `has-icon-left` | Adds padding to the left of icon |

**`hdd-button-icon`:**

| class | description|
| :--- | :--- |
| `no-active` | Disable the `:active` state |
| `no-focus` | Disable the `:focus` state |
| `no-hover` | Disable the `:hover` state |
| `is-transparent` | Sets the given button to it's transparent state |
| `is-active` | Sets the given button to it's active state |
| `is-hovering` | Sets the given button to it's hovering state |
| `is-loading` | Sets the given button to it's loading state |
| `is-no-padding` | Removes button padding |