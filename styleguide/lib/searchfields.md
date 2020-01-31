---
name: Search fields
category: Form-Components
---

Search box allows the user to locate content quickly and efficiently and can be seen as a conversation between the user and the web page.

### ✅ When to use: 
It is important to set the user context for the search with the correct placeholder text.


## Search field
`hdd-form_input`

```search-fields.html
<div class="hdd-form_input">
  <i class="fal fa-search"></i>
  <input placeholder="Placeholder text" />
  <i class="fal fa-times" aria-label="Clear text"></i>
</div>
```

```search-fields.css hidden
body > div:first-of-type {
  padding: 20px;
  background: var(--hdd-color-dynamic-background-primary);
}
```