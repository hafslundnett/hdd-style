---
name: Table
category: Components
---

A table can consist out of data, buttons and icons. A table row can also have a small color bar at the beginning of the row, all color subclasses can be used.

## Table
`hdd-table`

```table.html
<table class="hdd-table is-striped has-shadow">
  <tr class="hdd-table_header">
    <th>ID<i class="far fa-arrow-up"></i></th>
    <th>Kundenr.<i class="far fa-arrow-up"></i></th>
    <th>Personnr.</th>
    <th>Fakturanr.<i class="far fa-arrow-up"></i></th>
    <th></th>
  </tr>
  <tr>
    <td>1</td>
    <td>338472</td>
    <td>123419384</td>
    <td>14</td>
    <td class="hdd-table_action">
      <i class="far fa-angle-down"></i>
      <i class="far fa-ellipsis-v"></i>
      <button class="hdd-button is-small">Submit</button>
    </td>
  </tr>
  <tr>
    <td>2</td>
    <td>338472</td>
    <td>123419384</td>
    <td>14</td>
    <td class="hdd-table_action">
      <i class="far fa-angle-down"></i>
      <i class="far fa-ellipsis-v"></i>
      <button class="hdd-button is-small">Submit</button>
    </td>
  </tr>
  <tr>
    <td>3</td>
    <td>338472</td>
    <td>123419384</td>
    <td>14</td>
    <td class="hdd-table_action">
      <i class="far fa-angle-down"></i>
      <i class="far fa-ellipsis-v"></i>
      <button class="hdd-button is-small">Submit</button>
    </td>
  </tr>
</table>
```

## Table width sticky header
`hdd-table`

```table-sticky-header.html
<div class="example-container-to-force-scroll">
  <table class="hdd-table is-striped has-shadow is-sticky-header">
    <tr class="hdd-table_header">
      <th>ID<i class="far fa-arrow-up"></i></th>
      <th>Kundenr.<i class="far fa-arrow-up"></i></th>
      <th>Personnr.</th>
      <th>Fakturanr.<i class="far fa-arrow-up"></i></th>
      <th></th>
    </tr>
    <tr>
      <td>1</td>
      <td>338472</td>
      <td>123419384</td>
      <td>14</td>
      <td class="hdd-table_action">
        <i class="far fa-angle-down"></i>
        <i class="far fa-ellipsis-v"></i>
        <button class="hdd-button is-small">Submit</button>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>338472</td>
      <td>123419384</td>
      <td>14</td>
      <td class="hdd-table_action">
        <i class="far fa-angle-down"></i>
        <i class="far fa-ellipsis-v"></i>
        <button class="hdd-button is-small">Submit</button>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>338472</td>
      <td>123419384</td>
      <td>14</td>
      <td class="hdd-table_action">
        <i class="far fa-angle-down"></i>
        <i class="far fa-ellipsis-v"></i>
        <button class="hdd-button is-small">Submit</button>
      </td>
    </tr>
    <tr>
      <td>4</td>
      <td>338472</td>
      <td>123419384</td>
      <td>14</td>
      <td class="hdd-table_action">
        <i class="far fa-angle-down"></i>
        <i class="far fa-ellipsis-v"></i>
        <button class="hdd-button is-small">Submit</button>
      </td>
    </tr>
    <tr>
      <td>5</td>
      <td>338472</td>
      <td>123419384</td>
      <td>14</td>
      <td class="hdd-table_action">
        <i class="far fa-angle-down"></i>
        <i class="far fa-ellipsis-v"></i>
        <button class="hdd-button is-small">Submit</button>
      </td>
    </tr>
  </table>
</div>
```

```table-sticky-header.css 
.example-container-to-force-scroll {
  height: 200px; 
  overflow: auto;
  background: var(--hdd-color-dynamic-background-primary);
}
body > div:first-of-type {
  padding: 20px;
  background: var(--hdd-color-dynamic-background-primary);
}
```
```table.css hidden
body > div:first-of-type {
  padding: 20px;
  background: var(--hdd-color-dynamic-background-primary);
}
```


## Mutations
**`hdd-table`:**

| class | description|
| :--- | :--- |
| `has-shadow` | Add a light shadow to the table |
| `is-sticky-header` | Table header sticks when scrolling table |
| `is-striped` | Adds zebra-stripes to the table, needs to have `<thead>` and `<tbody>` defined in table |
| `is-aligned-top` | Sets the `vertical-align` of all cells to `top` |
| `is-aligned-bottom` | Sets the `vertical-align` of all cells to `bottom` |
| `no-wrap` | Sets the `white-space` property of all th/td elements to `nowrap` |
| `no-row-padding` | Removes the extra left-padding on the first column in a table |

**`hdd-table tr` | `hdd-table_row`:**

| class | description|
| :--- | :--- |
| `is-stripe` | Mark the given row as a stripe |
| `is-selected` | Mark the given row as selected |

