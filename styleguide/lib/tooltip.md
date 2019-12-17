---
name: Tooltip
category: Components
---

A tooltip can give context to a given icon/piece of text. Tooltips are usually hidden and become visible after an action or when hovering.

## Tooltip
`hdd-tooltip`

```tooltip.html
<span class="hdd-tooltip" style="margin-right: 10px">
  Hover me
  <span class="hdd-tooltip_content is-leaning-right">Right Leaning Tooltip</span>
</span>
|
<span class="hdd-tooltip" style="margin-right: 10px, margin-left: 10px;">
  Hover me
  <span class="hdd-tooltip_content">Centered Leaning Tooltip</span>
</span>
|
<span class="hdd-tooltip" style="margin-left: 10px">
  Hover me too
  <span class="hdd-tooltip_content is-leaning-left">Left Leaning Tooltip</span>
</span>

<span class="hdd-tooltip" style="margin-left: 10px">
  Hover on top
  <span class="hdd-tooltip_content is-light is-left">Hover on top</span>
</span>

<!-- <table class="hdd-table is-striped has-shadow">
  <tr class="hdd-table_header">
    <th>ID<i class="far fa-arrow-up"></i></th>
    <th>Kundenr.<i class="far fa-arrow-up"></i></th>
    <th>Personnr.</th>
    <th>Fakturanr.<i class="far fa-arrow-up"></i></th>
    <th>Feil?</th>
    <th>Dobbel Feil?</th>
    <th></th>
  </tr>
  <tr>
    <td>1</td>
    <td>338472</td>
    <td>123419384</td>
    <td>14</td>
    <td><i class="fal fa-times-circle hdd-tooltip">
    <span class="hdd-tooltip_content">Error message: hahahhahshahhahhhahahahha</span>
    </i></td>
    <td><i class="fal fa-times-circle hdd-tooltip">
    <span class="hdd-tooltip_content">Error message: hahahhahshahhahhhahahahha</span>
    </i></td>
    <td class="hdd-table_action">
      <i class="far fa-angle-down"></i>
      <i class="far fa-ellipsis-v"></i>
      <button class="hdd-button is-small">Submit</button>
    </td>
  </tr>
  <tr>
    <td>1</td>
    <td>338472</td>
    <td>123419384</td>
    <td>14</td>
    <td><i class="fal fa-times-circle hdd-tooltip">
    <span class="hdd-tooltip_content">Error message: hahsd asdsa  asd</span>
    </i></td>
    <td><i class="fal fa-times-circle hdd-tooltip">
    <span class="hdd-tooltip_content">Error message: a</span>
    </i></td>
    <td class="hdd-table_action">
      <i class="far fa-angle-down"></i>
      <i class="far fa-ellipsis-v"></i>
      <button class="hdd-button is-small">Submit</button>
    </td>
  </tr>
  <tr>
    <td>1</td>
    <td>338472</td>
    <td>123419384</td>
    <td>14</td>
    <td><i class="fal fa-times-circle hdd-tooltip">
    <span class="hdd-tooltip_content">Kjempefeil!</span>
    </i></td>
    <td><i class="fal fa-times-circle hdd-tooltip">
    <span class="hdd-tooltip_content">Kjempefeil!</span>
    </i></td>
    <td class="hdd-table_action">
      <i class="far fa-angle-down"></i>
      <i class="far fa-ellipsis-v"></i>
      <button class="hdd-button is-small">Submit</button>
    </td>
  </tr>

</table> -->


```

## Mutations
**`hdd-tooltip`:**

| class | description|
| :--- | :--- |
| `no-hover` | Disable the tooltip `:hover` state |

**`hdd-tooltip_content`:**

| class | description|
| :--- | :--- |
| `is-active` | Set the given tooltip to it's active state |
| `is-leaning-left` | Let the tooltip lean to the left side of the element |
| `is-leaning-right` | Let the tooltip lean to the right side of the element |