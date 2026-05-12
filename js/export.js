// js/export.js

function downloadPDF(){

  const element =
  document.getElementById("portfolio");

  html2pdf()
  .from(element)
  .save("portfolio.pdf");
}