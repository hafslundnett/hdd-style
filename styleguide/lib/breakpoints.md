---
name: Breakpoints
category: Utilities
---

The breakpoints uses the names of the planets in the solar system. This is done on purpose as opposed to names like phone and desktop. This is due to the changing nature of screen sizes and we don't want to have a strong link between our sizes and real devices.

## Using the sizes
We are using a mobile first philosophy which means you first create the styling for the smallest supported screen size. Then you add breakpoints for larger screens (a given size and up) where further changes are specified.

```scss
.element {
	// less than 576px (Venus)
	background: blue; 
	
	// 576px and up
	@include breakpoint-up(Venus) {
		background: red; // will overwrite default color 
	}

	// 768px and up
	@include breakpoint-up(Earth) {
		background: green; // will overwrite Venus color
	}
}

```
## Available breakponts
- Venus 576px 
- Earth 768px
- Mars 1024px
- Jupiter 1200px
- Saturn 1440px
- Uranus 1920px

The first and last planet is not used and reserved for future use.
