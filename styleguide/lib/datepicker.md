---
name: Datepicker
category: Components
---

```datepicker.html
<div class="hdd-datepicker_container is-inline">
  <div class="hdd-datepicker_container_header">
    <span class="hdd-button-icon"><i class="fal fa-arrow-left"></i></span>
    <span class="hdd-datepicker_container_header_title">mars 2018</span>
    <span class="hdd-button-icon"><i class="fal fa-arrow-right"></i></span>
  </div>
  <div class="hdd-datepicker_container_week">
    <span>ma</span>
    <span>ti</span>
    <span>on</span>
    <span>to</span>
    <span>fr</span>
    <span>lø</span>
    <span>sø</span>
  </div>
  <div class="hdd-datepicker_container_days">
    <span></span>
    <span><span>1</span></span>
    <span><span>2</span></span>
    <span><span>3</span></span>
    <span><span>4</span></span>
    <span><span>5</span></span>
    <span><span>6</span></span>
    <span><span>7</span></span>
    <span><span>8</span></span>
    <span><span>9</span></span>
    <span><span>10</span></span>
    <span><span>11</span></span>
    <span><span>12</span></span>
    <span><span>13</span></span>
    <span><span>14</span></span>
    <span><span>15</span></span>
    <span><span>16</span></span>
    <span><span>17</span></span>
    <span><span>18</span></span>
    <span class="is-selected"><span>19</span></span>
    <span class="is-in-range"><span>20</span></span>
    <span class="is-in-range"><span>21</span></span>
    <span class="is-in-range"><span>22</span></span>
    <span class="is-in-range"><span>23</span></span>
    <span class="is-selected"><span>24</span></span>
    <span><span>25</span></span>
    <span><span>26</span></span>
    <span><span>27</span></span>
    <span><span>28</span></span>
    <span><span>29</span></span>
    <span><span>30</span></span>
    <span><span>31</span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
```

### Mutations
**`hdd-datepicker_container`:**

| class | description|
| :--- | :--- |
| `is-inline` | Use the datepicker as a inline element |
| `is-active` | Show the datepicker |
| `has-arrow-left` | Places the arrow on the left side of the datepicker and aligns the datepicker tip as center point |
| `has-arrow-right` | Places the arrow on the right side of the datepicker and aligns the datepicker tip as center point |

**`hdd-datepicker_container_days > span`** | **`hdd-datepicker_container_days_day`:**

| class | description|
| :--- | :--- |
| `is-selected` | Set the given day to the selected style |
| `is-in-range` | Set the given day to the in range style |