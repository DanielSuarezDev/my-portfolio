---
layout: ../../components/layouts/MarkdownPostLayout.astro
title: 'Como usar --amend en git'
pubDate: 2024-01-01
description: "Cuando empecé en el mundo del desarrollo me tope con esto..."
author: "Daniel Suarez Dev"
image:
  url: "/src/assets/images/amend-hero.webp"
  alt: "The Astro logo with the word One."
tags: ["git"]
---

Cuando empecé en el mundo de la programación era normal ir a mi github, filtrar por los Pr's y ver cosas como:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ntrq1x9alenqmw4zu9e9.png)

Y ufffff 47 commits 🙈 pues no es que se vea muy bonito ¿verdad? gracias a que he tenido buenos compañeros mas seniors que uno me enseñaron a usar **_--amend_** y hoy quiero enseñarte a usarlo y decirte porqué es bueno usarlo y como me ha ayudado 🔥.

## ¿Porque usarlo?

Bueno la respuesta es simple, porque nos ayuda a tener un mejor control ✌🏽, dicen que buenas practicas es tener commits funcionales y que no supere cierto numero de commits, ¿Porqué? porque si queremos hacer por ejemplo un botón:


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/swsfn8ng2c9ae8uosoef.png)


¿Te imaginas tener _n_ commits con: text, rounded, icon, background, color o quizás enviaste un commit con algo dañado nos tocaría hacer otro commit que diga algo como **_update o adjustment_** ? 🤔

Noooo!!! no es optimo la idea es que tengamos commits funcionales y por bloques y es ahi done **_--amend_** nos ayuda un montón.

## ¿Como usarlo?

Es muy fácil si por ejemplo enviamos nuestro primer commit normalmente como lo hacemos hoy en día.

**_git commit -m"Component button disable"_**

Pero luego te diste cuenta que aun no sirve el disable, tu harías algo como:

**_git commit -m"Component button disable true"_**

Pero con ammend podemos hacer lo siguiente:

**_git commit --amend -m"Component button disable"`_**

y eso reemplaza el antiguo commit y solo tendríamos un commit y nadie se daría cuenta que la embarramos, ¿no te parece genial?


## Tener en cuenta al hacer push

Cuando hacemos push con ammend hay que hacerlo de la siguiente manera:

```git
 git push -force
```

## Conclusión

Pero ojo 👀 solo ammend funciona si no has realizado merge de alguna rama, si hiciste merge tienes que hacer commit de la forma tradicional pero si no dale candela al ammend 🔥.

A mí me ha ayudado mucho y siento que es más organizado mi trabajo y más limpio.

Bueno hasta aquí un pequeño relato de lo que he aprendido sobre Git estaré dando más consejos que me han ayudado 🚀 cuéntame si lo usas y si no, cuéntame que te parece ¿vas a usarlo?

