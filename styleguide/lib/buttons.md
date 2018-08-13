---
name: Button
category: Components
---

Buttons should be used across the different internal services. If only one button exists on a page, it should always be a primary button. The secondary button should never be used alone in a page. Action buttons are for prompting a user action that will affect another part. Changing the color of a button to convey purpose is not ideal as people with vision impairments will not be able to pick this up. Usage of other colors should be well discussed and the context around it clear enough.

## Primary button

```primary-button.html
<button class="hdd-button">Primary</button>
<button class="hdd-button" disabled>Disabled</button>
<button class="hdd-button is-small">Primary small</button>
<button class="hdd-button is-small" disabled>Disabled</button>
```

## Secondary button

```secondary-button.html
<button class="hdd-button is-secondary">Secondary</button>
<button class="hdd-button is-secondary" disabled>Secondary</button>
<button class="hdd-button is-small is-secondary">Secondary small</button>
<button class="hdd-button is-small is-secondary" disabled>Secondary small</button>
```

## Action button

```action-button.html
<button class="hdd-button has-icon is-right">Forward <i class="fal fa-arrow-right"></i></button>
<button class="hdd-button has-icon is-right" disabled>Forward <i class="fal fa-arrow-right"></i></button>
```

## Next-button

```next-button.html
<button class="hdd-button-icon"><i class="fal fa-arrow-right"></i></button>
<button class="hdd-button-icon is-hovering"><i class="fal fa-arrow-right"></i></button>
<button class="hdd-button-icon is-active"><i class="fal fa-arrow-right"></i></button>
<button class="hdd-button-icon is-transparent"><i class="fal fa-arrow-right"></i></button>
```

## Links

```links.html
<a href="https://google.com" class="hdd-link">Normal</a>
<a href="https://hafslundnett.no" class="hdd-link is-hovering">Hovered</a>
<a href="https://hafslundnett.no" class="hdd-link is-active">Active</a>
<a href="https://hafslundnett.no" class="hdd-link no-hover">Disabled hover state</a>
```
