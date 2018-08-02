---
name: Hafslunds digitale designsystem
category: Introduksjon
---

> Hafslund digitale designsystem (**HDD**) er et felles grunnlag for å holde den grafiske profilen konsistent på tvers av prosjekter. Klassene og navngivingen i prosjektet følger BECM standarden. Du finner mer informasjon om dette på 

## Komme i gang

Det er flere måter å ta i bruk HDD på:
* Klone HDD sitt git repository: `git clone git@github.com:hafslundnett/hdd-style.git`
* Laste inn som npm-pakke: `npm install @hafslundnett/hdd-style`
  * Importere main.sass via npm i ditt stylesheet: `@import '~@hafslundnett/hdd-style/main';`
  * Bruke ferdig bundlet css fra `dist/bundle.min.css`
* **TBD**: Hente det inn via CDN `<link rel="stylesheet" href="https://cdn.com/hdd/latest/bundle.min.css">`


## Bidra

Ønsker du å endre, fjerne eller legge til noe? Vennligst les igjennom vår [bidragsguide](./CONTRIBUTING.md) og [adferdskodeks](./CODE_OF_CONDUCT.md). Om det ikke finnes en sak på det allerede kan du legge det inn under [Github Issues](https://github.com/hafslundnett/hdd-style/issues/new).

## Sette opp lokalt miljø

For å kjøre prosjektet trenger du å ha `node` og `npm` installert. Kjør `npm install` fra kommandolinja for å laste ned alle avhengigheter. Bruk så `npm start` for å få opp dokumentasjonen i nettleseren og se endringer på de aktuelle komponentene.