---
layout: ../../components/layouts/MarkdownPostLayout.astro
title: 'Introducción al control de versiones'
pubDate: 2024-02-01
description: "El control de versiones es como el 'historial' de tu código. Registra y almacena los cam..."
author: "Daniel Suarez Dev"
image:
  url: "/images/control-versiones-git.webp"
  alt: "conrtol de versiones"
tags: ["git", "principiantes", "github"]
---

# Introducción al Control de Versiones

Control de Versiones
## 🤨 ¿Qué es el Control de Versiones?
El control de versiones es como el 'historial' de tu código. Registra y almacena los cambios que has hecho en tu código a lo largo del tiempo. Además, te permite guardar algunos cambios y comenzar una nueva funcionalidad sin perder el progreso utilizando una rama diferente. Esto posibilita funcionalidades como comparar tu código y cambios con el código "original" con el que empezaste, revertir (algunos de) tus cambios o fusionar cambios. ¡Esto se vuelve cada vez más importante si desarrollas software en equipo! Diferentes desarrolladores pueden trabajar en distintas características sin estorbarse mutuamente.

![GIF](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ21sbTQ1dzV2OG0xeWRoMGpra2F6N211cWQzZmZ0NXdmaWpiMzhmdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbnUQpnihPSIgIXuZv/giphy.gif)

## 🤷🏽 ¿Por qué deberías usar Control de Versiones?
¡Tener un registro de cambios de tu código siempre es útil! Ayuda con la colaboración, previene errores cuando múltiples desarrolladores trabajan en el mismo proyecto, previene la pérdida de datos. También se utiliza para revisar cambios y que otras personas lean tus modificaciones antes de querer fusionarlas en el proyecto, a esto se le llama "Revisión de Código".

## 🛠️ ¿Qué herramientas puedes usar?
Existen muchas herramientas disponibles que te ayudan a versionar tu código de manera adecuada. Git tiene de lejos la mayor cuota de mercado con casi el 90%, así que vamos con eso. La interfaz de línea de comandos (CLI) de git puede ser un poco abrumadora al principio, pero vale la pena echarle un vistazo más de cerca. Aunque hay muchas interfaces gráficas de usuario (GUI) que muestran lo que está sucediendo de una manera más visual, recomendaría aprender los comandos básicos de la CLI de todos modos.

## 🧐 ¿Cómo usar git?
Para empezar querrás usar el comando **git init** para iniciar un nuevo proyecto o el comando 
```sh 
    git clone [URL]
```
 para descargar un proyecto existente y empezar a participar de inmediato.

 <br />

Después de eso, te encontrarás en la rama **main**. Para no interferir con otras personas que trabajan en este proyecto, debes comenzar creando tu propia rama desde aquí usando **`git branch [Nombre de Rama]`** seguido de **`git checkout [Nombre de Rama]`**. Mientras creaste una rama con el primer comando, te cambias a ella con el segundo comando. Para ahorrar tiempo también puedes usar el atajo **`git checkout -b [Nombre de Rama]`** donde la bandera **`-b`** crea y cambia a la rama especificada.

<br />

Ahora que estás en tu propia rama, puedes comenzar a desarrollar y hacer algunos cambios. Siempre que quieras especificar archivos que deseas seguir, usa **`git add [Nombre del Archivo]`** para rastrearlo. También puedes especificar muchos archivos o incluso carpetas usando **`*`** pero, siendo honestos, lo más probable es que uses **`git add .`** la mayoría de las veces, para rastrear TODOS los archivos en esa ruta, incluyendo archivos en carpetas.

Cuando termines con tus cambios querrás comprometerlos usando **`git commit -m "[Mensaje del Commit]"`**. Esto agrupará todos los cambios en un commit con un mensaje corto pero descriptivo que le dice a otros lo que has hecho. Si no quieres comprometer tus cambios, podrías querer usar

```sh
    #para ver qué ha cambiado
    git diff
``` 

```sh
    #para deshacer el seguimiento de tus cambios
    git reset [archivo]
``` 

```sh
    #para empujar esos cambios a un stash al que puedes volver más tarde usando
    git stash push
```  
```sh
    #que cargará todos los cambios del stash en tu estado actual.
    git stash pop
```

Todo esto ocurre en tu máquina local, si quieres compartir tu código con los demás debes hacer 
**`git push`** de esos cambios.
<br/>

Para ver qué han hecho otros puedes usar **`git fetch`**, esto cargará todas las ramas del estado remoto. Si quieres traer commits y sus cambios y fusionarlos en tu estado actual usa **`git pull`**.

Por último está **`git merge [Nombre de Rama]`** que intentará fusionar cambios de otra rama en tu estado actual. Esto podría resultar en conflictos de fusión si tanto tus cambios como los de la rama que fusionaste apuntan al mismo archivo / líneas de código.

¡Estos son los básicos! Dado que git es tan popular, puedes googlear fácilmente tu camino hacia la solución necesaria. Casi nunca puedes perder código, a menos que uses comandos de reset o banderas como **`--force`** o **`--hard`** las cuales no deberías usar sin cuidado adicional.

## 🧑🏻‍💻 Flujos de Trabajo Comunes

Muchos equipos usan git, y muchos equipos tienen muchas convenciones sobre cómo trabajar con él. Puede haber convenciones sobre nombres de ramas, mensajes de commit o solicitudes de extracción. Pero lo que la mayoría de ellos tienen en común son las Solicitudes de Fusión o Pull Requests, que es lo mismo - nombre diferente. Es el proceso de solicitar fusionar tu rama en la principal (u otra cualquiera). Alguien entonces probablemente echará un vistazo a los cambios que has realizado y decidirá si están bien o no - esto se llama una Revisión de Código. Después de la fusión, comienzas de nuevo :)
