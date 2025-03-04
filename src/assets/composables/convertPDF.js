import jsPDF from 'jspdf'
import { applyPlugin } from 'jspdf-autotable'
applyPlugin(jsPDF)

export function convertPDF(title, asunto, fileName, arrayTable) {
  const doc = new jsPDF()

  const imgData =
    'data:image/jpeg;base64,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'
  const imgWidth = 15 // Ajusta el ancho de la imagen
  const imgHeight = 20 // Ajusta la altura de la imagen
  const pageWidth = doc.internal.pageSize.getWidth()
  doc.addImage(
    imgData,
    'JPEG',
    pageWidth - imgWidth - 14,
    10,
    imgWidth,
    imgHeight
  )
  // Título del PDF
  doc.setFontSize(12)

  if (title == 'COCINEROS') {
    //partir el texto en dos lineas
    doc.text('ASISTENCIA DIARIA DE MADRES Y PADRES', 14, 22)
    doc.text('ELABORADORES DE ALIMENTOS', 14, 26)
  } else {
    doc.text(`NOMINA PERSONAL ${title}`, 14, 22)
  }

  // Fecha y Asunto
  const date = new Date().toLocaleDateString()
  doc.setFontSize(11)
  doc.text(`Fecha: ${date}`, 14, 37)
  doc.text(`Asunto: ${asunto}`, 14, 45)

  // Encabezados de la tabla
  let headers = [
    [
      { content: 'N°', rowSpan: 2 },
      { content: 'C.I', rowSpan: 2 },
      { content: 'Nombres y Apellidos', rowSpan: 2 },
      { content: 'Turno Mañana', colSpan: 2 },
      { content: 'Turno Tarde', colSpan: 2 },
    ],
    [
      { content: 'Hora' },
      { content: 'Firma' },
      { content: 'Hora' },
      { content: 'Firma' },
    ],
  ]

  if (title !== 'DOCENTES') {
    headers = [
      [
        'N°',
        'C.I',
        'Nombres y Apellidos',
        'Hora Ent.',
        'Firma',
        'Hora Sal.',
        'Firma',
      ],
    ]
  }

  // Datos de la tabla
  const data = arrayTable.map((item, index) => [
    index + 1,
    item.cedula,
    item.apellidos + ', ' + item.nombres,
    item.morningShift || '',
    '', // Firma de la mañana
    item.afternoonShift || '',
    '', // Firma de la tarde
  ])

  // Agregar la tabla al PDF
  doc.autoTable({
    startY: 50,
    head: headers,
    body: data,
    styles: {
      halign: 'center', // horizontal alignment
      valign: 'middle', // vertical alignment
      lineColor: [44, 62, 80], // RGB color for cell borders
      lineWidth: 0.2,
      textColor: [0, 0, 0], // RGB color for text
    },
    headStyles: {
      fillColor: [1, 41, 112], // RGB color for header background
      textColor: [255, 255, 255], // RGB color for header text
      fontStyle: 'bold',
    },
    alternateRowStyles: {
      fillColor: [245, 245, 245], // RGB color for alternate row background
    },
  })

  doc.save(`Reporte_${fileName}`)
}

export function convertListSecPDF(fileName, arrayTable, grado, seccion) {
  const doc = new jsPDF()
  // Título del PDF
  doc.setFontSize(12)
  doc.text(`LISTA DE ESTUDIANTES`, 14, 22)
  // Grado y Seccion
  doc.setFontSize(11)
  doc.text(`Grado/Año: ${grado}`, 14, 37)
  doc.text(`Sección: ${seccion}`, 14, 45)

  // Encabezados de la tabla
  let headers = [['N°', 'C.I', 'Apellidos', 'Nombres']]

  // Datos de la tabla
  const data = arrayTable.map((item, index) => [
    index + 1,
    item.cedula,
    item.apellidos,
    item.nombres,
  ])

  // Agregar la tabla al PDF
  doc.autoTable({
    startY: 50,
    head: headers,
    body: data,
    styles: {
      halign: 'center', // horizontal alignment
      valign: 'middle', // vertical alignment
      lineColor: [44, 62, 80], // RGB color for cell borders
      lineWidth: 0.2,
      textColor: [0, 0, 0], // RGB color for text
    },
    headStyles: {
      fillColor: [1, 41, 112], // RGB color for header background
      textColor: [255, 255, 255], // RGB color for header text
      fontStyle: 'bold',
    },
    alternateRowStyles: {
      fillColor: [245, 245, 245], // RGB color for alternate row background
    },
  })

  doc.save(`Reporte_${fileName}_${grado}_${seccion}`)
}
