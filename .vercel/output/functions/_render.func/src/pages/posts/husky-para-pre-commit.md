---
layout: ../../components/layouts/MarkdownPostLayout.astro
title: 'Usando husky para hacer pre commit'
pubDate: 2024-03-25
description: "Husky es una herramienta que nos ayuda accedes a git hooks facilmen..."
author: "Daniel Suarez Dev"
image:
  url: "/images/portada-husky.webp"
  alt: "react native img"
tags: ["git", "husky"]
---

# Automatiza tu Proceso de Build con Husky antes de cada Commit

Automatizar tareas repetitivas en el ciclo de desarrollo de software no solo ahorra tiempo sino que también aumenta la consistencia y reduce la posibilidad de errores. Una de estas tareas cruciales es asegurarse de que tu código esté correctamente compilado o "construido" antes de ser añadido al repositorio. En este blog, te mostrare cómo utilizar Husky, una herramienta popular para manejar Git hooks en proyectos Node.js, para automatizar tu proceso de build cada vez que realices un commit.


![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmFrMDhxdHZkY21iNWVmNnZ2am5zNzM2eHZzOHU2eXo3ZXc5dTI5biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OOWiRFxw17ToWpnxz4/giphy-downsized-large.gif)
## ¿Qué es Husky?

Husky es una herramienta que te permite acceder fácilmente a Git hooks desde tu proyecto Node.js. Los hooks de Git son scripts que se ejecutan automáticamente antes o después de eventos como `commit`, `push`, y `fetch`, permitiéndote automatizar tareas como tests, linting, y builds.

## Paso 1: Instalación de Husky

Para comenzar, necesitas instalar Husky en tu proyecto. Asegúrate de estar en el directorio raíz de tu proyecto y ejecuta el siguiente comando:

```sh
 npm install husky --save-dev
 # o si prefieres usar yarn
 yarn add husky --dev
```

## Paso 2: Configuración de Husky

Una vez instalado Husky, el siguiente paso es configurarlo para que se ejecute antes de cada commit. Esto se puede hacer directamente desde tu archivo package.json. Asegúrate de que Husky se inicialice correctamente añadiendo un script de preparación:

*_Añade esto a tu package.json 😉_*

```javascript
 "scripts": {
    "prepare": "husky install"
 }
```

Luego, ejecuta el script prepare para instalar Husky:


```sh
 npm run prepare
 # o con yarn
 yarn prepare
```

## Paso 3: Crea un hook para el pre-commit

Crea una carpeta en tu carpeta creada anteriormente gracias al comando llamado *_.husky_* en la raiz del proyecto 
crea un archivo llamada *_pre-commit_* y alli puedes dar todas las instrucciones que desees, como el ejemplo que te dejé en la imagen 🙃.


![](/images/husky.webp)


Con esta configuración, Husky ejecutará automáticamente tu proceso de build cada vez que intentes hacer un commit. Si el proceso de build falla, el commit será abortado, asegurándote de que solo el código que cumple con los criterios de compilación sea añadido al repositorio.


## Conclusión

Automatizar tu proceso de build con Husky antes de cada commit es una práctica excelente que puede ahorrarte tiempo y ayudar a mantener la calidad de tu código. Con unos pocos pasos sencillos, puedes configurar tu proyecto para que realice automáticamente esta tarea, permitiéndote concentrarte en lo que realmente importa: escribir un código excelente.

Recuerda que la automatización es tu aliada en el desarrollo de software, y herramientas como Husky hacen que sea más fácil que nunca integrarla en tu flujo de trabajo.