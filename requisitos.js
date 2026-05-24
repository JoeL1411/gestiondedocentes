function mostrar(modulo){

let resultado = document.getElementById("resultado");

/* CONVOCATORIAS */
if(modulo === "conv"){
    resultado.innerHTML = "📌 Convocatorias: Publicación de plazas docentes.";
}

/* POSTULACIÓN */
if(modulo === "post"){
    resultado.innerHTML = "📌 Postulación: Registro de postulantes y carga de documentos.";
}

/* EVALUACIÓN */
if(modulo === "eval"){

    resultado.innerHTML = `
    <div class="form-evaluacion">

        <h3>📊 Evaluación de Postulante</h3>

        <label>Nombre del Postulante</label>
        <input type="text">

        <label>Puntaje Pedagógico</label>
        <input type="number">

        <label>Puntaje Experiencia</label>
        <input type="number">

        <label>Conocimientos Técnicos</label>
        <input type="number">

        <label>Observaciones</label>
        <textarea rows="4"></textarea>

        <button onclick="alert('Evaluación guardada correctamente')">
            Guardar Evaluación
        </button>

    </div>
    `;
}

/* CONTRATACIÓN */
if(modulo === "cont"){

    resultado.innerHTML = `
    <div class="form-contratacion">

        <h3>📄 Contrato Docente</h3>

        <label>Nombre</label>
        <input type="text">

        <label>DNI</label>
        <input type="text">

        <label>Cargo</label>
        <select>
            <option>Docente Nombrado</option>
            <option>Docente Contratado</option>
            <option>Auxiliar</option>
        </select>

        <label>Inicio</label>
        <input type="date">

        <label>Fin</label>
        <input type="date">

        <label>Sueldo</label>
        <input type="number">

        <button onclick="alert('Contrato generado correctamente')">
            Generar Contrato
        </button>

    </div>
    `;
}

/* ACADÉMICO */
if(modulo === "acad"){
    resultado.innerHTML = "📌 Académico: Asignación de cursos y horarios.";
}

/* REPORTES */
if(modulo === "rep"){

    resultado.innerHTML = `
    <h3>📊 Reporte de Asistencia Docente</h3>

    <table class="tabla-reporte">

        <tr>
            <th>Docente</th>
            <th>Curso</th>
            <th>Fecha</th>
            <th>Estado</th>
        </tr>

        <tr>
            <td>Juan Pérez</td>
            <td>Matemática</td>
            <td>24/05/2026</td>
            <td><span class="estado asistio">Asistió</span></td>
        </tr>

        <tr>
            <td>María López</td>
            <td>Comunicación</td>
            <td>24/05/2026</td>
            <td><span class="estado tardanza">Tardanza</span></td>
        </tr>

        <tr>
            <td>Carlos Díaz</td>
            <td>Ciencia</td>
            <td>24/05/2026</td>
            <td><span class="estado falta">Falta</span></td>
        </tr>

        <tr>
            <td>Ana Rojas</td>
            <td>Historia</td>
            <td>24/05/2026</td>
            <td><span class="estado asistio">Asistió</span></td>
        </tr>

    </table>
    `;
}

}