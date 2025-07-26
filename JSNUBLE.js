document.getElementById('generatePDF').addEventListener('click', function () {
    const element = document.getElementById('contenidoPDF');
    console.log('HTML A EXPORTAR:', element.innerHTML); // ⬅️ VERIFICA QUE NO ESTÁ VACÍO

    const boton = document.getElementById('generatePDF');
    boton.style.display = 'none';

    const opt = {
      margin: 10,
      filename: 'certificado_aves.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'vertical' }
    };

    html2pdf().from(element).set(opt).save().then(() => {
      boton.style.display = 'inline-block';
    });
});
