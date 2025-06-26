---
layout: ../../components/layouts/MarkdownPostLayout.astro
title: 'Patrones de diseño'
pubDate: 2025-06-26
description: "los patrones de diseño te ayudan cuando..."
author: "Daniel Suarez Dev"
image:
  url: "/images/patrones-de-diseno.png"
  alt: "patrones de diseño"
tags: ["patrones", "arquitectura"]
---

# 🧠 ¿Qué es un Patrón de Diseño?

> "Los patrones de diseño no son recetas mágicas, pero te salvan de cocinar espagueti con código." — un sabio programador con café en mano ☕

---

## 🎬 Imagina esto...

Estás desarrollando tu sexta aplicación con React. Ya hiciste un login, un dashboard, notificaciones… **todo muy bien**, pero empiezas a notar que repites soluciones a los mismos problemas 😤.  
Entonces, te preguntas:

> _¿No hay una forma más elegante de hacer esto?_  
> Spoiler: **sí, se llaman patrones de diseño** 🧩

---

## 🧱 ¿Qué son los Patrones de Diseño?

Un **patrón de diseño** es una solución **probada y optimizada** para resolver un problema común en el desarrollo de software.  
No es un bloque de código para copiar y pegar, sino **una idea estructurada** que puedes adaptar a tu proyecto.

---

## 🧑‍🍳 Una analogía sabrosa:

> Si el desarrollo fuera cocina 🍳, los patrones serían recetas para preparar platillos deliciosos sin reinventar el fuego cada vez que haces una arepa.

---

## 💡 ¿Por qué usarlos?

- Evitas **reinventar la rueda** cada dos líneas de código.
- Tu código se vuelve **más mantenible y escalable**.
- Colaborar con otros devs es más fácil (porque todos entienden los patrones comunes).

---

## 🧠 Clasificación rápida de patrones

Los patrones se agrupan en tres grandes grupos (sí, como los tipos de Pokemones 😅):

| Tipo de patrón      | ¿Qué hace? |
|---------------------|------------|
| **Creacionales**    | Te ayudan a crear objetos de forma flexible. |
| **Estructurales**   | Organizan clases y objetos para formar estructuras más grandes. |
| **Comportamiento**  | Controlan la forma en que los objetos interactúan entre sí. |

---

## 🛠 Ejemplo real: Patrón Singleton

Supón que necesitas **una sola instancia** de algo (como una conexión a base de datos).  
No quieres que cada componente cree la suya y termines con mil conexiones abiertas.

```ts
// Singleton clásico en TypeScript
class Database {
  private static instance: Database;
  private constructor() {}

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  query(sql: string) {
    console.log(`Ejecutando: ${sql}`);
  }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log(db1 === db2); // true ✅
```

## 🎯 Claves del patrón Singleton:

Constructor privado.

Método estático para acceder a la instancia.

Siempre devuelve la misma instancia.


## 👀 ¿Y esto se usa en el frontend?
¡Obvio! Muchos frameworks usan patrones de diseño:

- React usa el patrón Composite para componentes.

- Redux aplica Observer y Command.

- Next.js con App Router sigue principios de Factory, Strategy, entre otros.

- Incluso Tailwind aplica el patrón Flyweight (evitar duplicación de estilos reutilizables).

## Conclusión

Los patrones de diseño son como herramientas en tu caja de dev:
no las usas todas al tiempo, pero saber cuándo sacar el martillo 🛠 marca la diferencia entre código limpio y Frankenstein.js 🧟‍♂️


---

## 🎬 Video Explicativo

Si prefieres el formato audiovisual, aquí tienes un video que lo explica de forma muy clara:

<iframe
  width="50%"
  style="aspect-ratio: 16 / 9; border-radius: 12px;"
  src="https://www.youtube.com/embed/XO0ANIFVu8s"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

