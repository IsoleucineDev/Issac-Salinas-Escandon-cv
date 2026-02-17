# 📋 Guía de Personalización del Portafolio

## 🎯 Introducción

Este portafolio ha sido creado para **Issac Salinas Escandon** con toda su información profesional. Si necesitas actualizar cualquier contenido, sigue esta guía.

## 📁 Archivo Principal de Datos

Todo el contenido editable se encuentra en un solo archivo:

```
/src/app/data/portfolioData.ts
```

## ✏️ Cómo Editar el Contenido

### 1. Información Personal

Edita la sección `personalInfo` para cambiar:
- Nombre
- Título profesional
- Email y teléfono
- Ubicación
- Biografía
- Foto de perfil (URL de imagen)
- Redes sociales

```typescript
export const personalInfo = {
  name: "Issac Salinas Escandon",
  title: "Ingeniero en Mecatrónica",
  email: "diazsalinasisssac@gmail.com",
  // ... etc
};
```

### 2. Educación

Edita la sección `education`:
```typescript
export const education = {
  institution: "Tecnológico de Monterrey Campus Toluca",
  degree: "Ingeniería en Mecatrónica",
  period: "2022 - 2026",
  // ...
};
```

### 3. Proyectos del Portfolio

Edita el array `projects` para agregar, eliminar o modificar proyectos:

```typescript
export const projects = [
  {
    id: 1, // Número único
    title: "Nombre del Proyecto",
    description: "Descripción detallada...",
    image: "URL de la imagen",
    technologies: ["Tech1", "Tech2", "Tech3"],
    company: "Nombre de la empresa",
    link: "#",
    github: "#"
  },
  // Agrega más proyectos aquí...
];
```

### 4. Certificaciones

Edita el array `certifications`:

```typescript
export const certifications = [
  {
    id: 1,
    title: "Nombre de la Certificación",
    issuer: "Quien la emitió",
    date: "2024",
    image: "URL de imagen",
    credentialId: "ID-123456"
  },
  // Agrega más certificaciones...
];
```

### 5. Experiencia Laboral

Edita el array `experiences`:

```typescript
export const experiences = [
  {
    id: 1,
    company: "Nombre de la Empresa",
    position: "Cargo",
    period: "2023 - Presente",
    description: "Descripción del rol...",
    achievements: [
      "Logro 1",
      "Logro 2",
      "Logro 3"
    ]
  },
  // Agrega más experiencias...
];
```

### 6. Habilidades Técnicas

Edita el array `skills` (el nivel es de 0 a 100):

```typescript
export const skills = [
  { name: "SolidWorks", level: 90 },
  { name: "Robótica", level: 92 },
  // Agrega más habilidades...
];
```

### 7. Logros Destacados

Edita el array `achievements`:

```typescript
export const achievements = [
  {
    title: "Título del Logro",
    description: "Descripción breve",
    icon: "trophy" // Opciones: trophy, award, medal, star, users, handshake
  },
  // Agrega más logros...
];
```

## 🖼️ Cómo Agregar Imágenes

### Opción 1: Usar URLs de Internet
Simplemente pega la URL de la imagen:
```typescript
image: "https://ejemplo.com/imagen.jpg"
```

### Opción 2: Usar Unsplash (Recomendado)
1. Ve a [Unsplash.com](https://unsplash.com)
2. Busca una imagen que te guste
3. Copia el enlace de la imagen
4. Pégalo en el campo `image`

## 🎨 Personalizar Colores

Si quieres cambiar los colores principales del portafolio, edita el archivo:
```
/src/styles/theme.css
```

Los colores principales están en las variables CSS. Busca líneas como:
- `--color-primary` - Color azul principal
- `--color-secondary` - Color secundario

## 📱 Redes Sociales

Para cambiar los enlaces de redes sociales, edita en `personalInfo`:

```typescript
social: {
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-usuario",
  twitter: "https://twitter.com/tu-usuario",
}
```

## 🚀 Tips Importantes

1. **Guarda siempre después de editar**: Después de hacer cambios, guarda el archivo con Ctrl+S (Windows) o Cmd+S (Mac)

2. **Recarga la página**: Después de guardar, recarga el navegador para ver los cambios

3. **Mantén la estructura**: No elimines las comas, llaves {} o corchetes [] - solo edita el contenido entre comillas

4. **IDs únicos**: Cuando agregues nuevos items, asegúrate de que cada uno tenga un ID único

5. **Formato de fechas**: Mantén un formato consistente (ej: "2023 - 2024" o "Enero 2023")

## ❓ Preguntas Frecuentes

**P: ¿Cómo agrego una nueva sección?**
R: Puedes copiar una sección existente y modificar sus datos. Asegúrate de incrementar el ID.

**P: ¿Puedo cambiar el orden de las experiencias?**
R: Sí, solo cambia el orden de los objetos en el array. El primero aparecerá primero.

**P: ¿Cómo elimino un proyecto?**
R: Simplemente elimina todo el objeto (desde `{` hasta `},` incluyendo la coma).

## 📞 Soporte

Si tienes problemas al editar el portafolio, verifica:
1. Que no hayas eliminado comas, llaves o corchetes por error
2. Que todas las URLs estén entre comillas
3. Que cada entrada tenga un ID único

---

**¡Listo!** Ahora puedes personalizar fácilmente tu portafolio editando un solo archivo. 🎉
