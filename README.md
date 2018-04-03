# Fortum AngularDesign

This package provides the Fortum typography config, Fortum palette through SCSS-variables, and offers the same palette as prebuilt Material Design colors. The package can be used in any .scss-file by importing:
`@import '~@fortum/angular-design/theme';`

# Colors
The colors and their SASS-names are provided below.
## Colors
- ![#5AC37D](https://placehold.it/15/5AC37D/000000?text=+) #5AC37D: `$optimistic-green`
- ![#377A6C](https://placehold.it/15/377A6C/000000?text=+) #377A6C: `$green`
- ![#78A0D4](https://placehold.it/15/78A0D4/000000?text=+) #78A0D4: `$water-blue`
- ![#EB6437](https://placehold.it/15/EB6437/000000?text=+) #EB6437: `$energetic-orange`
- ![#F5E150](https://placehold.it/15/F5E150/000000?text=+) #F5E150: `$solar-yellow`
- ![#D25564](https://placehold.it/15/D25564/000000?text=+) #D25564: `$power-red`
- ![#B9B4AA](https://placehold.it/15/B9B4AA/000000?text=+) #B9B4AA: `$sustainable-grey`
- ![#78DEC8](https://placehold.it/15/78DEC8/000000?text=+) #78DEC8: `$electric-grey`

## Black, white and greys
- ![#ffffff](https://placehold.it/15/ffffff/000000?text=+) #ffffff: `$white`
- ![#000000](https://placehold.it/15/000000/000000?text=+) #000000: `$black`
- ![#4A4A4A](https://placehold.it/15/4A4A4A/000000?text=+) #4A4A4A: `$dark-grey`
- ![#9B9B9B](https://placehold.it/15/9B9B9B/000000?text=+) #9B9B9B: `$grey`
- ![#D5D5D5](https://placehold.it/15/D5D5D5/000000?text=+) #D5D5D5: `$light-grey`

 All of the provided colors are available in three shades. They can be used by postfixing the SASS-name with `-75` or `-50`. This will give the color an opacity of 75% or 50%, depending on your choice. An example is given below:
 ```
 background: $optimistic-green;
 color: $optimistic-green-75;
 border-color: $optimistic-green-50;
 ```
There exists a single exception to this rule, as the `$water-blue` also has a darker version. This is named `$water-blue-dark`.

# Material Design Colors
If using e.g. `@angular/material`, this package provides prebuilt primary, accent and warn colors. These variables are named
- `$fortum-primary`
- `$fortum-accent`
- `$fortum-warn`

They can be used when configuring the `@angular/material` palette:
```
@import '~@angular/material/theming';
@import '~@fortum/angular-design/theme';

@include mat-core();
$primary-color:  mat-palette($fortum-primary, 600, 400, 800);
$accent-color:   mat-palette($fortum-accent, 600, 400, 800);
$warn-color:     mat-palette($fortum-warn);
$theme:          mat-light-theme($primary-color, $accent-color, $warn-color);

@include angular-material-theme($theme);
```

# Fortum typography
The Fortum typography is implemented as a SASS mixin, and can be used by including it in your styles:
```
@import '~@fortum/angular-design/theme';

@include fortum-typography();
```
The `fortum-typography` mixin includes `color`, `font-size`, `font-weight`, `line-height`, `margin` and alignment for all common HTML text elements (h1, h2, h3, h4, h5, p, a, b, strong, i, em, mark, del, ins). It also sets the global font family to `GT Eesti Pro Display` with a fallback to Arial and sans-serif if `GT Eesti Pro Display` is not available.