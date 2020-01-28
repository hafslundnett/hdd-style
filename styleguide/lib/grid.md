---
name: Layout Grid
category: Getting started
---

We provide two grids you can use. The first (`.hdd-grid`) is meant for sites that support mobile + desktop, and the second (`.hdd-grid-desktop`) is for websites that only support desktop. The grid uses a 12 or less point/column system that changes based on windows size. Rows have no inherit min or max height, as can be seen in the example.

### Columns for `.hdd-grid` (mobile and desktop)
- 4 for small-size (< Earth)
- 8 for mid-size (> Earth < Jupiter)
- 12 for big-size (> Jupiter)

### Columns for `.hdd-grid-desktop` (desktop)
- 8 for mid-size (< Jupiter)
- 12 for big-size (> Jupiter)

```grid.html
<div class="dark-mode">
  <h1>For mobile and desktop (.hdd-grid)</h1>
  <div class="hdd-grid">
    <div class="grid-item-1"></div>
    <div class="grid-item-2"></div>
    <div class="grid-item-3"></div>
  </div>

  <h1>For desktop (.hdd-grid-desktop)</h1>
  <div class="hdd-grid-desktop">
    <div class="grid-item-1"></div>
    <div class="grid-item-2"></div>
    <div class="grid-item-3"></div>
  </div>
</div>
```

You should use grid-column and grid-row to position your elements on the grid. Remember to add new positions for the breakpoints. Elements will have a width based on the grid, but no height as rows have no default height.

```grid.css 
.grid-item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  background: var(--hdd-color-data-navy);
  height: 100px;
}
.grid-item-2 {
  grid-column: 3 / 5;
  grid-row: 1 / 2;
  background: var(--hdd-color-data-blue);
  height: 100px;
}
.grid-item-3 {
  grid-column: 1 / 5;
  grid-row: 2 / 6;
  background: var(--hdd-color-data-orange);
  height: 100px;
}
.hdd-grid {
  margin-bottom: var(--hdd-spacing-3);
}
.dark-mode {
  margin: -20px;
  padding: 20px;
  background: var(--hdd-background-primary);
}
```