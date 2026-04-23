# AI-OS: Tu Sistema Operativo de IA Personal (Modular y Comercializable)

Bienvenido a tu **AI-OS**, un sistema diseñado para transformar a Claude Code en un verdadero sistema operativo personal con memoria persistente, habilidades modulares y automatización avanzada.

## 1. Introducción
Este repositorio contiene la estructura y las reglas necesarias para que Claude Code opere como un asistente proactivo y contextualizado. Está basado en las mejores prácticas de la comunidad de IA y diseñado para ser extensible mediante módulos "Plug & Play".

## 2. Cómo Empezar
Para poner en marcha tu AI-OS, sigue estos pasos:

1.  **Configura tu Identidad**: Abre `data/master_memory.md` y completa la información donde dice **"Aquí debes poner..."**. Esto le dará a Claude tu contexto a largo plazo.
2.  **Define tus Objetivos**: Abre `data/goals.md` y completa tus prioridades actuales donde dice **"Aquí debes poner..."**.
3.  **Configura tus APIs**: Abre `config/api_keys.env` y añade tus claves de API donde dice **"Aquí debes poner..."**. (Asegúrate de que este archivo esté en tu `.gitignore` si usas Git).
4.  **Personaliza tus Comandos**: Explora `.claude/commands/` y añade tus propios comandos slash.
5.  **Instala Módulos**: Añade subcarpetas en `modules/` para expandir las capacidades de tu AI-OS.

## 3. Estructura del Repositorio
- **`.claude/`**: Configuración de Claude Code (comandos, skills, hooks).
- **`config/`**: Ajustes generales y claves de API.
- **`data/`**: Tu memoria y contexto (proyectos, flujos, conocimiento).
- **`modules/`**: Módulos Plug & Play instalados.
- **`scripts/`**: Scripts Python para automatización pesada.

## 4. Comercialización
Este sistema está preparado para que puedas empaquetar tus propios módulos y venderlos o compartirlos. Consulta la sección 8 de `CLAUDE.md` para aprender cómo estructurar tus módulos para que sean comercializables.

---
**Desarrollado por Manus AI** para potenciar tu productividad con IA.
