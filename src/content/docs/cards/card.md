---
title: Card
description: Aprende a usar el composable Card en Jetpack Compose.
---

import { Tabs, TabItem } from '@astrojs/starlight/components';

[comment]: <> (La ruta siempre será assets/nombeComponente/componente-header.webp)

![Imagen del componente [Nombre del componente]](../../../assets/badgedbox/badgedbox-header.webp)

[Breve descripción del componente]

## Implementación

### Definición del componente

[comment]: <> (Añade un ``TabItem`` por cada tipo de implementación que tenga)

<Tabs>
<TabItem label="Material">

```kotlin
@Composable
fun Text(
    text: String,
    modifier: Modifier = Modifier,
    color: Color = Color.Unspecified,
    fontSize: TextUnit = TextUnit.Unspecified,
)
```

- text: Texto a mostrar en el componente.
- modifier: Modificador que implementará el composable.
- color: Color del texto.
- fontSize: Tamaño del texto (representado en `.sp`)

</TabItem>
<TabItem label="Material 3">

```kotlin
@Composable
fun Text(
    text: String,
    modifier: Modifier = Modifier,
    color: Color = Color.Unspecified,
    fontSize: TextUnit = TextUnit.Unspecified,
)
```

- text: Texto a mostrar en el componente.
- modifier: Modificador que implementará el composable.
- color: Color del texto.
- fontSize: Tamaño del texto (representado en `.sp`)

</TabItem>
</Tabs>

[comment]: <> (No modifiques el tip)

:::tip[Fuente]
Puedes acceder a la documentación oficial de Google
[desde aquí](https://developer.android.com/reference/kotlin/androidx/compose/runtime/package-summary).
:::

### Ejemplos

<Tabs>
<TabItem label="Material">

```kotlin
@Composable
fun Text(
    text: String,
    modifier: Modifier = Modifier,
    color: Color = Color.Unspecified,
    fontSize: TextUnit = TextUnit.Unspecified,
)
```

</TabItem>
<TabItem label="Material 3">

```kotlin
@Composable
fun Text(
    text: String,
    modifier: Modifier = Modifier,
    color: Color = Color.Unspecified,
    fontSize: TextUnit = TextUnit.Unspecified,
)
```

</TabItem>
</Tabs>