# Comando: /daily-sync

Este comando realiza una sincronización diaria de tus objetivos y tareas.

## Instrucciones para Claude:
Cuando el usuario ejecute `/daily-sync`, debes:
1.  Leer `data/goals.md` para obtener los objetivos y tareas actuales.
2.  Preguntar al usuario por sus prioridades para el día de hoy.
3.  Actualizar `data/goals.md` con la nueva información.
4.  Generar un resumen de las tareas más importantes y los hitos próximos.
5.  Sugerir una planificación horaria para el día.

```markdown
╔══════════════════════════════════════════╗
║         📅 AI-OS — DAILY SYNC            ║
╠══════════════════════════════════════════╣
  🌅 MAÑANA     [Tarea 1] · [Tarea 2]
  🌞 TARDE      [Tarea 3] · [Tarea 4]
  🌙 NOCHE      [Tarea 5] · [Tarea 6]
  ⚠️ PRIORIDAD  [Prioridad del Día]
  💡 IDEA       [Sugerencia de Claude]
╚══════════════════════════════════════════╝
```
