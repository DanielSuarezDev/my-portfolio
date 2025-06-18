---
layout: ../../components/layouts/MarkdownPostLayout.astro
title: 'useMemo vs useCallback: ¿Quién es quién en React?'
pubDate: 2025-06-18
description: "useCallback, useMemo aqui te enseño las diferencias y como usarlo..."
author: "Daniel Suarez Dev"
image:
  url: "/images/useMemo-vs-useCallback.png"
  alt: "useMemo vs useCallback"
tags: ["react"]
---

Siempre me han echo esta pregunta en entrevistas tech y debo admitirlo en más de una ocasión me corcharon 😳 es por eso que hoy quiero ver este tema y de seguro cuando presentes una entrevista te acordarás de mi 😂.

<br/>

> ¿Cuál es la diferencia entre `useMemo` y `useCallback`?  
> ¿Y cuándo deberías usar uno u otro?

<br/>

Spoiler: **los dos sirven para memorizar cosas**… pero cada uno memoriza cosas diferentes.

<br/>

---

## 🧠 `useMemo`: memoriza **valores**

Cuando tienes una función que retorna un **valor calculado**, y no quieres que se vuelva a recalcular a cada render, usas `useMemo`.

### ✨ Ejemplo:

```tsx
const App = () => {
  const [count, setCount] = useState(0);

  const expensiveComputation = useMemo(() => {
    console.log('Calculando...');
    return count * 1000;
  }, [count]);

  return (
    <div className="p-4">
      <p>Resultado: {expensiveComputation}</p>
      <button onClick={() => setCount(count + 1)}>Sumar</button>
    </div>
  );
};
```
<br/>

### 👀 ¿Qué pasa aquí?

- Cada vez que `count` cambia, se recalcula el valor.
- Si `count` **no cambia**, React **reutiliza** el valor anterior y se ahorra la operación costosa.
- Se usa para **evitar cálculos innecesarios** (ej: filtros, ordenamientos, etc).

---

<br/>

## 🔁 `useCallback`: memoriza **funciones**

Cuando necesitas pasar una función como **prop** o quieres evitar que cambie en cada render, usas `useCallback`.

### ✨ Ejemplo:

```tsx
const Button = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log('Botón renderizado');
  return <button onClick={onClick}>Haz clic</button>;
});

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Clic!');
  }, []); // No depende de nada, así que no cambia

  return (
    <div className="p-4">
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Sumar</button>
      <Button onClick={handleClick} />
    </div>
  );
};
```
<br/>

### 👀 ¿Qué pasa aquí?

- La función `handleClick` no cambia en cada render.
- El componente `Button` (que está memorizado con `React.memo`) **no se vuelve a renderizar** innecesariamente.
- Usas `useCallback` cuando **te importa la referencia de la función**, no su valor retornado.

---
<br/>

## 🧪 Diferencias clave en resumen

| 🔍 | `useMemo` | `useCallback` |
|----|-----------|---------------|
| ¿Qué memoriza? | El **resultado** de una función | La **función** en sí |
| ¿Para qué sirve? | Evitar cálculos innecesarios | Evitar recreación de funciones innecesarias |
| ¿Se usa con funciones? | Sí, pero **para obtener un valor** | Sí, pero **para mantener la misma referencia** |
| Ejemplo típico | Ordenar una lista | Pasar un `onClick` a un componente hijo |

---
<br/>

## 🚀 ¿Y cuándo usar cada uno?

![useMemo vs useCallback](https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif)

> 🧠 Usa `useMemo` cuando:
- Tienes **cálculos costosos**
- Quieres **evitar que se vuelvan a ejecutar**
- Ej: filtros, sorting, datos derivados

> 🔁 Usa `useCallback` cuando:
- Pasas funciones a componentes hijos
- Usas **`React.memo`** y no quieres que se renderice de más
- Usas hooks como `useEffect` que dependen de funciones

---
<br/>


## 📌 Conclusión

- **No uses `useMemo` o `useCallback` por defecto.**
- Úsalos cuando realmente estés enfrentando **problemas de rendimiento** o cuando quieras **optimizar renders**.
- Si los usas mal... ¡puede que incluso tengas peor rendimiento!

> 💡 Tip: Si no estás seguro si deberías usarlos, probablemente no necesitas usarlos... aún.

<br/>

---

¿Te gustó esta explicación?  
Guárdala, compártela o pásasela al que usa `useMemo` como si fuera `useState`. 😅

¿Quieres más tips de React y frontend?  
¡Sígueme para más hacks dev! 😎💻
