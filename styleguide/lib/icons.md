---
name: Icons
category: Utilities
---
Icons, symbols indicating action, information or intention to the user. 

HDD-style implments Font Awesomes icon library, and is implemented with the `<i> </i>` tags, along with the corresponding class for an icon, see the examples for some of the icons that are available. A full list of all of Font Awesome icons can be found here: https://fontawesome.com/icons?d=gallery


```icons.html

<link rel="stylesheet" type="text/css" href="/icons.css" />

<div class="iconContainer"> 
    <i class="fal fa-info-circle iconPlacement"></i>  
    <p class="iconText">Info icon<p>
</div>

<div class="iconContainer"> 
    <i class="fal fa-user iconPlacement"></i>  
    <p class="iconText">User icon<p>
</div>

<div class="iconContainer"> 
    <i class="fal fa-bars iconPlacement"></i>  
    <p class="iconText">Menubar icon<p>
</div>

<div class="iconContainer"> 
    <i class="fal fa-search iconPlacement"></i>  
    <p class="iconText">Search icon<p>
</div>

```

```icons.css

.iconContainer {
    heigth: 50px;
    width: 20%;
    margin: 10px;
    border: 1px solid black;
    text-align:center;
    display: inline-block;
    border-radius: 5%;
}

.iconPlacement {
    margin-top: 10px;
    margin-bottom: 5px;
}

.iconText {
    margin-top: 5px;
    margin-bottom: 10px;
}

```