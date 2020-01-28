---
name: Tags
category: Components
---

Tags are interactive elements presented with a keyword or phrase that allows the user to move quickly to the selected point. Tags can be grouped together and are useful for filtering.

### ✅ When to use: 
Use tags to help the user categorize content.

### ⛔ When not to use:
Tags should not be used alone.


## Tags
`hdd-tags`, `hdd-tags_item`

```tags.html
<div class="dark-mode">
  <div class="hdd-tags">
    <span class="hdd-tags_item">707057500051628391<i class="fal fa-times-circle"></i></span>
    <span class="hdd-tags_item">707057500051628391<i class="fal fa-times-circle"></i></span>
  </div>
</div>
```

```tags.css hidden
@media (prefers-color-scheme: dark) {
  .dark-mode {
    margin: -20px;
    padding: 20px;
    background: var(--hdd-background-primary);
  }
}
```