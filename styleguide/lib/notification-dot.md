---
name: Notification dot
category: Components
---

The `hdd-notification-dot` class adds a small red dot with a white border to the top right side of an icon to signalize notifications.

## Notification
`hdd-notification-dot`

```notification.html
<div class="example-margin">
  <i class="fal fa-cog"><span class="hdd-notification-dot"></span></i>
</div>
<div class="example-margin">
  <i class="fal fa-user"><span class="hdd-notification-dot"></span></i>
</div>
<div class="example-margin">
  <i class="fal fa-bars"><span class="hdd-notification-dot"></span></i>
</div>
```

```notification.css hidden
.example-margin {
  margin: 10px 0;
}
body > div:first-of-type {
  padding: 20px;
  background: var(--hdd-color-dynamic-background-primary);
}
```
