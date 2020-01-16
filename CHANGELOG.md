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
    * eks: --hdd-primary => --hdd-color-primary


# Update [4.0.0]
In this update buttons have been redesigned completely and there are some breaking changes related to these.

## Breaking changes

### Buttons:
The small and normal buttons have been combined into one mid-sized button.
* **Removed classes**
    * On hdd-button
        * **is-small** is removed
        * **has-icon-left**, **has-icon-right** is removed
        * **no-hover**, **no-active**, **no-focus** is removed
        * **is-hovering**, **is-active**, **is-focus** is removed
    * On hdd-button-icon
        * **no-hover**, **no-active**, **no-focus** is removed
        * **is-hovering**, **is-active**, **is-focus** is removed
* **Sizing**:
    * New button that is between old small button and old normal button in size. The button is still targeted with the class hdd-button.
