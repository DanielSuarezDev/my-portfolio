---
layout: ../../components/layouts/MarkdownPostLayout.astro
title: 'No solo existe useState'
pubDate: 2025-06-24
description: "Cuando empiezas en el mundo dev useState es tu mejor amigo pero..."
author: "Daniel Suarez Dev"
image:
  url: "/images/no-solo-existe-usestate.png"
  alt: "react native img"
tags: ["react", "state", "hooks"]
---

## No solo existe `useState` en React: mira más allá del hook estrella 🔭🪝

Es normal cuando arrancamos en el mundo del desarrollo web y usamos `useState` como nuestro hook salvavidas para todo como si fuera nuestro único hook en el mundo.

![pescar](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXNxbXdlN2pxOTVwc2E3YW9wcXR5d2s3MXZicnJ4cXRtZ3l3dzhvMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uRLgOwBz81VL6GHACi/giphy.gif)

Pero tranqui aqui estoy para enseñarte que no todo es `useState` y no te sientas mal por usarlo, simplemente debes mirar mas alla del horizonte 🔭🪝.

Aquí te cuento por qué, cuándo y cómo saltar del clásico useState al organizado useReducer (y a un par de vecinos igual de útiles).

---

## 1. ¿De dónde vienen todos estos hooks?

| Hook          | Nació el      | React versión |
| ------------- | ------------- | ------------- |
| `useState`    | 6 feb 2019    | **16.8**      |
| `useReducer`  | 6 feb 2019    | **16.8**      |

Ambos llegaron en el mismo release que presentó oficialmente los Hooks. A partir de esa fecha React dejó de obligarnos a crear componentes de clase para manejar estado y ciclos de vida.

---

## 2. Cuando **`useState`** es suficiente (y sabroso) 🍔

- **Estado simple o aislado**: contadores, toggles, inputs individuales.  
- Cambios que **no dependen** de operaciones encadenadas.  
- Tu lógica cabe en un tuit (o casi).  

```tsx
import { useState } from 'react';

export const ToggleDarkMode = () => {
  const [dark, setDark] = useState(false);

  return (
    <button
      className={`px-4 py-2 rounded ${
        dark ? 'bg-neutral-900 text-white' : 'bg-yellow-400'
      }`}
      onClick={() => setDark(!dark)}
    >
    // Aqui se usa el estado es simple como una empanada y rica jejejej
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};
```

## 3. Cuando useReducer brilla (y ordena el caos) 📚

- **Muchos campos** que cambian juntos (formulario gigante, wizard, carrito).
- Necesitas acciones descriptivas: "ADD_TODO", "UNDO", "RESET".
- Quieres mover la lógica a un lugar testeable → el reducer.

```jsx
import { useReducer } from 'react';

type Todo = { id: number; text: string; done: boolean };
type State = { todos: Todo[] };

type Action =
  | { type: 'add'; payload: string }
  | { type: 'toggle'; payload: number }
  | { type: 'clear' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add':
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, done: false },
        ],
      };
    case 'toggle':
      return {
        todos: state.todos.map(t =>
          t.id === action.payload ? { ...t, done: !t.done } : t
        ),
      };
    case 'clear':
      return { todos: [] };
    default:
      return state;
  }
}

export const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, { todos: [] });

  return (
    <div className="space-y-4">
      <input
        className="border p-2 rounded w-full"
        placeholder="¿Nuevo todo?"
        onKeyDown={e =>
          e.key === 'Enter' &&
          dispatch({ type: 'add', payload: e.currentTarget.value })
        }
      />
      <ul className="space-y-1">
        {state.todos.map(todo => (
          <li key={todo.id}>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => dispatch({ type: 'toggle', payload: todo.id })}
              />
              <span className={todo.done ? 'line-through opacity-70' : ''}>
                {todo.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
      <button
        className="px-3 py-1 bg-red-600 text-white rounded"
        onClick={() => dispatch({ type: 'clear' })}
      >
        Limpiar todo
      </button>
    </div>
  );
};

```

y listo dejaras de usar n cantidades de useState y tendras todo mas organizado.

![boom](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjFqNDBoNHo5am1hZDhucG02NjU3NGxtZHE4MXF2ODAwenA5a3ZkMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8kzxXqJ0pq0529x6EV/giphy.gif)

## 4. ¿Y los otros compas? 👀

Aunque si me apoyas en mi contenido crearé post y quizás videos (si el tiempo me alcanza jajajaja) explicando estos temas.

| Hook / herramienta | Para qué sirve | Puntos clave |
|--------------------|---------------|--------------|
| `useContext` | Compartir estado (¡o `dispatch`!) a varios componentes sin *prop-drilling* | Combínalo con `useReducer` para tu mini-Redux casero. |
| `useRef` | Guardar **valores mutables** que _no_ disparan renders | Ideal para IDs, temporizadores o integración con librerías externas. |
| `useMemo` & `useCallback` | **Memorizar** valores o funciones costosas | Optimiza cuando tu render sufra de *estrés* por cálculo. |
| **Zustand / Jotai / Redux Toolkit** | Estado global fuera de React | Cuando necesitas persistencia, devtools o “time-travel debugging”. |

---

## 5. Guía express: **elige sabiamente** ⚖️

| Escenario                                            | Hook recomendado            |
|------------------------------------------------------|-----------------------------|
| Dos o tres piececitas de estado independientes       | `useState`                  |
| Form grande o máquina de estados sencilla            | `useReducer`                |
| Muchos componentes hermanos pidiendo lo mismo        | `useContext` + `useReducer` |

> 💡 **Regla de oro**: _empieza simple_. Si `useState` se vuelve una telenovela con 30 personajes, muda el drama a `useReducer`… y si el drama escala a streaming global, ¡saca una librería dedicada!


### TL;DR

- **`useState`**: perfecto para estados simples y rápidos.  
- **`useReducer`**: tu opción para lógicas complejas, testeables y organizadas.  
- Más allá, hay **otros hooks** y **state stores** que brillan en escenarios globales o persistentes.  

¡A experimentar se dijo! 🚀
