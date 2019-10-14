---
name: Table
category: Components
---

A table can consist out of data, buttons and icons. A table row can also have a small color bar at the beginning of the row, all color subclasses can be used.

## Table with color bars
`hdd-table`

```stripedtable.html
<table class="hdd-table is-striped has-shadow">
  <tr class="hdd-table_header">
    <th>ID<i class="far fa-arrow-up"></i></th>
    <th>Kundenr.<i class="far fa-arrow-up"></i></th>
    <th>Personnr.</th>
    <th>Fakturanr.<i class="far fa-arrow-up"></i></th>
    <th></th>
  </tr>
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
</table>
```

## Detailed row table
`hdd-table_details`

It is possible to have expandable rows to show more information for each row.

<!-- Er denne delen nødvendig? Man kan sette is-striped på hdd-table elementet istedet for hdd-table_details elementet! 

> ⚠️ The `is-striped` mutation on the `hdd-table` does not include the detail rows. When wanting to create a striped table is it advised to use the `is-stripe` row mutation on each row instead. -->

```expandabletable.html
<tr class="hdd-table_details">
  <td colspan="4">
    <table class="hdd-table is-aligned-top is-striped no-row-padding">
      <tr class="hdd-table_header">
        <th>Målepunkt</th>
        <th>Anleggsraning</th>
        <th>Klassifiseringer</th>
        <th>Adresse</th>
        <th>Siste aksjon utført</th>
        <th>Innsamling siste 7 dagen</th>
        <th>Snitt RSSI siste 7 dagen</th>
      </tr>
      <tr>
        <td>M: 101231</td>
        <td>100</td>
        <td>CL-01 Død måler<br>CL-04 Dårlig Rssi<br>CL-12 Dårlig innsamling</td>
        <td>Drammensveien 115</td>
        <td>17.06.19</td>
        <td>84%</td>
        <td>-91dB</td>
      </tr>
      <tr class="">
        <td>M: 101231</td>
        <td>101</td>
        <td>CL-01 Død måler<br>CL-04 Dårlig Rssi<br>CL-12 Dårlig innsamling</td>
        <td>Drammensveien 114</td>
        <td>18.05.19</td>
        <td>89%</td>
        <td>-94dB</td>
      </tr>
      <tr>
        <td>M: 101231</td>
        <td>102</td>
        <td>CL-01 Død måler<br>CL-04 Dårlig Rssi<br>CL-12 Dårlig innsamling</td>
        <td>Drammensveien 116</td>
        <td>19.07.19</td>
        <td>91%</td>
        <td>-91dB</td>
      </tr>
    </table>
  </td>
</tr>
```

## Mutations
**`hdd-table`:**

| class | description|
| :--- | :--- |
| `has-shadow` | Add a light shadow to the table |
| `is-striped` | Adds zebra-stripes to the table |
| `is-aligned-top` | Sets the `vertical-align` of all cells to `top` |
| `is-aligned-bottom` | Sets the `vertical-align` of all cells to `bottom` |
| `no-wrap` | Sets the `white-space` property of all th/td elements to `nowrap` |
| `no-row-padding` | Removes the extra left-padding on the first column in a table |

**`hdd-table tr` | `hdd-table_row`:**

| class | description|
| :--- | :--- |
| `is-stripe` | Mark the given row as a stripe |
| `is-selected` | Mark the given row as selected |

**`hdd-table_details`:**

| class | description|
| :--- | :--- |
| `is-active` | Expand the details row |
