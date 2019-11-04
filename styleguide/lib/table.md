---
name: Table
category: Components
---

A table can consist out of data, buttons and icons. A table row can also have a small color bar at the beginning of the row, all color subclasses can be used.

## Table
`hdd-table`

```table.html
<table class="hdd-table is-striped has-shadow">
  <thead>
    <tr class="hdd-table_header">
      <th>ID<i class="far fa-arrow-up"></i></th>
      <th>Kundenr.<i class="far fa-arrow-up"></i></th>
      <th>Personnr.</th>
      <th>Fakturanr.<i class="far fa-arrow-up"></i></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
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
      <th>2</th>
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
      <th>3</th>
      <td>338472</td>
      <td>123419384</td>
      <td>14</td>
      <td class="hdd-table_action">
        <i class="far fa-angle-down"></i>
        <i class="far fa-ellipsis-v"></i>
        <button class="hdd-button is-small">Submit</button>
      </td>
    </tr>
  </tbody>
</table>
```

## Table with color bars
`hdd-table`

```coloredtable.html
<table class="hdd-table is-striped has-shadow">
  <thead>
    <tr class="hdd-table_header">
      <th>ID<i class="far fa-arrow-up"></i></th>
      <th>Kundenr.<i class="far fa-arrow-up"></i></th>
      <th>Personnr.</th>
      <th>Fakturanr.<i class="far fa-arrow-up"></i></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr class="is-primary">
      <th>1</th>
      <td>124221</td>
      <td>123419384</td>
      <td>31</td>
      <td class="hdd-table_action">
        <i class="far fa-angle-down"></i>
        <i class="far fa-ellipsis-v"></i>
        <button class="hdd-button is-small">Submit</button>
      </td>
    </tr>
    <tr class="is-danger">
      <th>2</th>
      <td>872736</td>
      <td>123419384</td>
      <td>23</td>
      <td class="hdd-table_action">
        <i class="far fa-angle-down"></i>
        <i class="far fa-ellipsis-v"></i>
        <button class="hdd-button is-small">Submit</button>
      </td>
    </tr>
    <tr class="is-warn">
      <th>3</th>
      <td>938472</td>
      <td>123419384</td>
      <td>17</td>
      <td class="hdd-table_action">
        <i class="far fa-angle-down"></i>
        <i class="far fa-ellipsis-v"></i>
        <button class="hdd-button is-small">Submit</button>
      </td>
    </tr>
    <tr class="is-safe">
      <th>4</th>
      <td>338472</td>
      <td>123419384</td>
      <td>14</td>
      <td class="hdd-table_action">
        <i class="far fa-angle-down"></i>
        <i class="far fa-ellipsis-v"></i>
        <button class="hdd-button is-small">Submit</button>
      </td>
    </tr>
  </tbody>
</table>
```


## Mutations
**`hdd-table`:**

| class | description|
| :--- | :--- |
| `has-shadow` | Add a light shadow to the table |
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

