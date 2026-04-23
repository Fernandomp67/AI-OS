# Comando: /status

Este comando genera un dashboard visual del estado actual de tu AI-OS.

## Instrucciones para Claude:
Cuando el usuario ejecute `/status`, debes:
1.  Leer `data/goals.md` para obtener los objetivos y tareas actuales.
2.  Leer `data/master_memory.md` para recordar la identidad y el contexto de negocio.
3.  Escanear la carpeta `modules/` para listar los módulos activos.
4.  Generar un informe estructurado con el siguiente formato:

```markdown
╔══════════════════════════════════════════╗
║         ⚡ AI-OS — SYSTEM STATUS         ║
╠══════════════════════════════════════════╣
  👤 USUARIO    [Nombre del Usuario]
  🎯 OBJETIVO   [Objetivo Principal de la Sesión]
  📂 PROYECTOS  [Lista de proyectos activos y su %]
  🧩 MÓDULOS    [Lista de módulos instalados]
  ✅ TAREAS     [X] completadas · [Y] pendientes
╚══════════════════════════════════════════╝
```
