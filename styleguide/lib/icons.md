---
name: Icons
category: Utilities
---
HDD-style uses Font Awesome icon library, and is implemented with the `<i> </i>` tags, along with the corresponding class for an icon, see the examples for some of the icons that are available. A full list of all of Font Awesome icons can be found here: https://fontawesome.com/icons?d=gallery

<!--
Erstatt når SVG blir tatt i bruk

In the internal design system SVG files from Streamline light must be used.
-->

Icons are visual symbols used to represent ideas, objects or actions. They convey messages at a glance, provide interactivity and draw attention to important information. The icons are recommended to be designed for between 20 and 24 dp to make the pixel perfect. See Google's Material Icon for details. Icons are usually placed to the left of the text, but can also be placed above and to the right if the special use case fits it.

### When to use: 
Icons can be used in several contexts. In input fields they are used both to visually show what the user fills in and to show status (pass / fail). They should follow set spacing values.

### When not to use:
Icons should not be larger than 48px. It should also be avoided to have icons less than 8px. Also, icons should not be used alone in menus without text, as it may be difficult for the user to know what the icon should represent.

```icons.html
<!--Here some icons are illustrated with the "Action button", if there is no need for text, use the "Icon button".-->
<button class="hdd-button has-icon-left"><i class="fal fa-info-circle"></i> Info Icon</button>
<button class="hdd-button has-icon-left"><i class="fal fa-user"></i> User Icon</button>
<button class="hdd-button has-icon-left"><i class="fal fa-bars"></i> Menubar Icon</button>
<button class="hdd-button has-icon-left"><i class="fal fa-search"></i> Search Icon</button>

```