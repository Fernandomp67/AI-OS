// Hook: session-start.js
// Este script se ejecuta al inicio de cada sesión de Claude Code.

const fs = require('fs');
const path = require('path');

function loadContext() {
  const masterMemoryPath = path.join(__dirname, '../../data/master_memory.md');
  const goalsPath = path.join(__dirname, '../../data/goals.md');

  if (fs.existsSync(masterMemoryPath)) {
    console.log('Cargando Memoria Maestra...');
    // Lógica para cargar el contenido de master_memory.md en el contexto de Claude
  }

  if (fs.existsSync(goalsPath)) {
    console.log('Cargando Objetivos y Estado Actual...');
    // Lógica para cargar el contenido de goals.md en el contexto de Claude
  }

  console.log('AI-OS iniciado correctamente.');
}

loadContext();
