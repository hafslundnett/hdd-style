---
name: Links
category: Components
---

Links are for prompting a user action that will affect another part. 

## Links
`hdd-link`

```links.html
<a href="https://google.com" class="hdd-link">Normal</a> <br>
<a href="https://hafslundnett.no" class="hdd-link is-active">Active</a><br>
<a href="https://hafslundnett.no" class="hdd-link is-hovering">Hovered</a><br>
<a href="https://hafslundnett.no" class="hdd-link no-hover">Disabled hover state</a><br>
```


```links.css hidden
body > div:first-of-type {
  padding: 20px;
  background: var(--hdd-color-dynamic-background-primary);
}
```

## Mutations
**`hdd-link`:**

| class | description|
| :--- | :--- |
| `no-active` | Disable the `:active` state|
| `no-focus` | Disable the `:focus` state |
| `no-hover` | Disable the `:hover` state |
| `is-active` | Set the given link to it's active state |
| `is-focus` | Set the given link to it's focus state  |
| `is-hovering` | Set the given link to it's hovering state  |

