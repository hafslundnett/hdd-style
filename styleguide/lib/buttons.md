---
name: Button
category: Components
---

Buttons should be used across the different internal services. Changing the color of a button to convey purpose is not ideal as people with vision impairments may struggle. Usage of other colors should be properly discussed and the context clear.

## Primary button
`hdd-button`

If only one button exists on a page, it should always be a primary button. 

```primary-button.html
<button class="hdd-button">Primary</button>
<button class="hdd-button" disabled>Disabled</button>
<button class="hdd-button is-loading">Loading</button>
<button class="hdd-button is-small">Primary small</button>
<button class="hdd-button is-small" disabled>Disabled</button>
<button class="hdd-button is-small is-loading">Loading</button>
```

## Secondary button
`hdd-button`

The secondary button should never be used alone on a page.

```secondary-button.html
<button class="hdd-button is-secondary">Secondary</button>
<button class="hdd-button is-secondary" disabled>Disabled</button>
<button class="hdd-button is-secondary is-loading">Loading</button>
<button class="hdd-button is-small is-secondary">Secondary small</button>
<button class="hdd-button is-small is-secondary" disabled>Disabled</button>
<button class="hdd-button is-small is-secondary is-loading">Loading</button>
```

## Action button
`hdd-button`.`has-icon`

Action buttons are for prompting a user action that will affect another part.

```action-button.html
<button class="hdd-button has-icon-left"><i class="fal fa-arrow-left"></i> Back</button>
<button class="hdd-button has-icon-right">Forward <i class="fal fa-arrow-right"></i></button>
<button class="hdd-button has-icon-left" disabled><i class="fal fa-arrow-left"></i> Back</button>
<button class="hdd-button has-icon-right" disabled>Forward <i class="fal fa-arrow-right"></i></button>
```

## Icon-button
`hdd-button-icon`

A button that only contains an icon and should be used when an icon is used as an button.

```next-button.html
<button class="hdd-button-icon"><i class="fal fa-arrow-right"></i></button>
<button class="hdd-button-icon is-transparent"><i class="fal fa-arrow-right"></i></button>
<button class="hdd-button-icon is-transparent is-no-padding"><i class="fal fa-arrow-right"></i></button>
```

## Mutations
**`hdd-button`:**

| class | description|
| :--- | :--- |
| `is-primary` | Sets the color of the given button to the primary color |
| `is-secondary` | Sets the color of the given button to the secondary color |
| `is-small` | Sets the given button to it's small state |
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