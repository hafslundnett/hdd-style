---
name: Buttons
category: Buttons
---

Knappene skal brukes på tvers av de ulike interne systemer. Dersom det kun er en knapp på det aktuelle skjermbildet skal alltid dette være en primary-button. Secondary-button skal ikke brukes alene på et skjermbilde. Action-buttons er spesielt tilegnet at brukeren skal foreta en handling som vil påvirke noe annet. Fargeendringer av knapper for å forsøke og forklare en handling (f.eks. rød for avbryt) skal i utgangspunktet ikke gjøres siden det ikke tar høyde for personer med synshemninger. Bruk av andre farger skal avklares og konteksten rundt skal være kraftig nok.

## Primary button

```primary-button.html
<button class="hdd-button">Primary</button>
<button class="hdd-button" disabled>Disabled</button>
<button class="hdd-button hdd-button-small">Primary small</button>
<button class="hdd-button hdd-button-small" disabled>Disabled</button>
```

## Secondary button

```secondary-button.html
<button class="hdd-button no-background">Primary</button>
<button class="hdd-button no-background" disabled>Primary</button>
<button class="hdd-button hdd-button-small no-background">Primary small</button>
<button class="hdd-button hdd-button-small no-background" disabled>Primary small</button>
```

## Action button

```action-button.html
<button class="hdd-button has-icon is-right">Foward <i class="fal fa-arrow-right"></i></button>
<button class="hdd-button has-icon is-right" disabled>Foward <i class="fal fa-arrow-right"></i></button>
```

## Tags 

```tags.html
<span class="hdd-tags_item">7070575000516247284<button class="fal fa-times hdd-tags_icon"></button></span>
<span class="hdd-tags_item">2014<button class="fal fa-times hdd-tags_icon"></button></span>
```

## Next-button TODO

```next-button.html
<button class="hdd-button-icon"><i class="fal fa-arrow-right"></i></button>
```

## Confirm edit TODO

```confirm-edit.html

```

## Switch TODO

```switch.html
<a href="https://google.com">Home</a>
<a href="https://hafslundnett.no">Hafslund Nett</a>
```

## Links TODO

```links.html
<a href="https://google.com">Home</a>
<a href="https://hafslundnett.no">Hafslund Nett</a>
```