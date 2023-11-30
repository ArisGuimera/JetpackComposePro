# Composepedia

Proyecto por y para la comunidad donde intentamos ser la mayor base de datos _open source_ que te permita utilizar y entender cada uno de los componentes de _Jetpack Compose_.

## 🚀 Estructura del proyecto

El proyecto está hecho con Astro y nuestra estructura actual es:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── collaborations/
│   ├── content/
│   │   ├── docs/
│   │   │   ├── **componentes**
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Colabora

Actualmente estamos en una fase muy inicial y todo ayuda se agradece. Para colaborar es muy sencillo. Lo primero que debes hacer es verificar los siguientes documentos que encontrarás dentro del directorio `/collaborations`.

| Documentos          | Descripción                                      |
| :------------------------ | :----------------------------------------------- |
| [**info**](https://github.com/ArisGuimera/JetpackComposePro/blob/master/src/collaborations/info.md)             | Cualquier link o información que debas saber 
| [**TODO's**](https://github.com/ArisGuimera/JetpackComposePro/blob/master/src/collaborations/todos.md)             | Tareas apuntadas por hacer ||
| [**Propuestas**](https://github.com/ArisGuimera/JetpackComposePro/blob/master/src/collaborations/propuestas.md)             | Añade las tuyas |
| [**Preguntas Comunidad**](https://github.com/ArisGuimera/JetpackComposePro/blob/master/src/collaborations/preguntas-comunidad.md)             | Decisiones que hay que tomar para la web, se suelen preguntar en los directos |
| [**Template componentes**](https://github.com/ArisGuimera/JetpackComposePro/blob/master/src/collaborations/template.mdx)             | Si quieres colaborar con algún componente tendrás que usar la siguiente plantilla |


### Información necesaria

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicial el servidor en `localhost:4321`          |
| `npm run preview`         | Preview de tu build, hazlo antes de hacer PR     |

- Todos los componentes serán formato `.mdx`
- Las imágenes irán en `src/assets/nombreDelComponente`.

## 👀 ¿Quieres estar actualizado/a?

Únete al [discord de la comunidad](https://bit.ly/3bmeQvm) donde tenemos un canal para hablar del proyecto (`🧱-composepedia`). 
