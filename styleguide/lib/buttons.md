---
name: Button
category: Components
---

Buttons should be used across the different internal services. Changing the color of a button to convey purpose is not ideal as people with vision impairments will not be able to pick this up. Usage of other colors should be well discussed and the context around it clear enough.

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

The secondary button should never be used alone in a page.

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
<button class="hdd-button has-icon">Forward <i class="fal fa-arrow-right"></i></button>
<button class="hdd-button has-icon" disabled>Forward <i class="fal fa-arrow-right"></i></button>
```

## Icon-button
`hdd-button-icon`

A button that only contains an icon and should be used when an icon is used as an button.

```next-button.html
<button class="hdd-button-icon"><i class="fal fa-arrow-right"></i></button>
<button class="hdd-button-icon is-hovering"><i class="fal fa-arrow-right"></i></button>
<button class="hdd-button-icon is-active"><i class="fal fa-arrow-right"></i></button>
<button class="hdd-button-icon is-transparent"><i class="fal fa-arrow-right"></i></button>
```

### Mutations
**`hdd-button`:**

| class | description|
| :--- | :--- |
| `no-active` | Disable the `:active` state |
| `no-focus` | Disable the `:focus` state |
| `no-hover` | Disable the `:hover` state |
| `is-active` | Sets the given button to it's active state |
| `is-hovering` | Sets the given button to it's hovering state |
| `is-loading` | Sets the given button to it's loading state |
| `is-small` | Sets the given button to it's small state |

**`hdd-button-icon`:**

| class | description|
| :--- | :--- |
| `is-transparent` | Sets the given button to it's transparent state |