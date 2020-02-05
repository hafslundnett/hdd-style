# Update [8.0.0]
In this update the default forms-compoentent have some breaking changes that fixes some styling-bugs.

## Breaking changes

### Removed margin-bottom for last element in form_fields, checkboxs and radiobuttons
##### What can break! 
Can affect spacing between `.hdd-form_field` elements and other elements.
##### How to fix!
Add your own spacing between elements with the hdd-spacing standards!

* `.hdd-form_field` - standard spacing between elements is the same, but spacing will not be added to the last element. 
* `.hdd-form_checkbox` - standard spacing between elements is the same, but spacing will not be added to the last element.
* `.hdd-form_radiobutton` - standard spacing between elements is the same, but spacing will not be added to the last element.
* With `border-box` as the new universal `box-sizing` all elements will inherit this style. 
* If style is breaking, either the `box-sizing` attribute can be set to `content-box` or the element itself needs to change.

### Min + max width and height on the checkbox-mark
##### What can break! 
Will affect the checkboxes if custom styling has been added to make the checkboxes smaller og bigger.
##### How to fix!
Overwrite the min + max width and height in your own component! Check with designer if the change is needed. 

* `.hdd-form_checkbox_mark` has now min + max width and height set to same height so that the size will never change.

### Bold title for checkboxs, radiobuttons in form_fields
* `.hdd-form_field_title` has now the attribute `font-weight: bold`.


# Update [7.0.0]
In this update the default `box-sizing` has been set to `border-box` everywhere.

## Breaking changes

### Box-Sizing:
* With `border-box` as the new universal `box-sizing` all elements will inherit this style. 
* If style is breaking, either the `box-sizing` attribute can be set to `content-box` or the element itself needs to change.


# Update [6.0.0]
In this update the buttons and tooltip have changed visually. 

Also added a new header and removed the sidenav, navigation and layout. Either use the HAL shell or the new header.


## Breaking changes

### Buttons:

* **New hover-states on all buttons**
    * Active(click-effect) has changed
    * Hover has changed
    * Focus has changed
* **Icon-buttons color**
    * Changed from blue to black

### Tooltip:
The tooltip has gotten a new design. It has also lost the modifiers `is-leaning-right` and `is-leaning-left`.

### Removed due to new shell:
* hdd-sidenav
* hdd-navigation
* hdd-layout


# Update [5.0.0]
In this update the css-variables for colors are renamed to --hdd-color-$nameofcolor.

## Breaking changes

### Color variables:

* **New variables / Removed variables**
    * --hdd-nameofcolor => --hdd-color-nameofcolor
    * eks: `--hdd-primary` => `--hdd-color-primary`


# Update [4.0.0]
In this update buttons have been redesigned completely and there are some breaking changes related to these.

## Breaking changes

### Buttons:
The small and normal buttons have been combined into one mid-sized button.
* **Removed classes**
    * On `hdd-button`
        * **is-small** is removed
        * **has-icon-left**, **has-icon-right** is removed
        * **no-hover**, **no-active**, **no-focus** is removed
        * **is-hovering**, **is-active**, **is-focus** is removed
    * On `hdd-button-icon`
        * **no-hover**, **no-active**, **no-focus** is removed
        * **is-hovering**, **is-active**, **is-focus** is removed
* **Sizing**:
    * New button that is between old small button and old normal button in size. The button is still targeted with the class hdd-button.
