document.addEventListener("DOMContentLoaded", function () {
  // Récupérer les éléments du DOM
  var upload1 = document.getElementById("upload1");
  var upload2 = document.getElementById("upload2");
  var upload3 = document.getElementById("upload3");
  var viewer = document.getElementById("pdf-viewer");
  var eye1 = document.getElementById("eye1");
  var eye2 = document.getElementById("eye2");
  var eye3 = document.getElementById("eye3");
  var pdfDoc = null;
  var pageNum = 1;

  // Fonction pour afficher le PDF sur le canvas
  function displayPDF(pdf) {
    // Vérifier si le navigateur supporte l'API FileReader
    if (typeof FileReader !== "undefined") {
      // Créer un nouvel objet FileReader
      var reader = new FileReader();
      // Lorsque le PDF est chargé
      reader.onload = function (event) {
        // Afficher le PDF sur le canvas
        pdfjsLib
          .getDocument({ data: event.target.result })
          .promise.then(function (pdfDoc_) {
            pdfDoc = pdfDoc_;
            renderPage(1);
          });
      };
      // Lire le fichier PDF en tant que données URL
      reader.readAsArrayBuffer(pdf);
    } else {
      // Le navigateur ne supporte pas l'API FileReader
      alert("Ce navigateur ne supporte pas l'API FileReader.");
    }
  }

  // Fonction pour afficher la page spécifiée du PDF sur le canvas
  function renderPage(pageNumber) {
    pdfDoc.getPage(pageNumber).then(function (page) {
      var viewport = page.getViewport({ scale: 1.0 });
      var canvas = viewer;
      var context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      var renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      page.render(renderContext);
    });
  }

  // Écouter le changement de chaque upload
  upload1.addEventListener("change", function () {
    displayPDF(upload1.files[0]);
  });

  upload2.addEventListener("change", function () {
    displayPDF(upload2.files[0]);
  });

  upload3.addEventListener("change", function () {
    displayPDF(upload3.files[0]);
  });

  // Écouter le clic de chaque eye
  eye1.addEventListener("click", function () {
    if (pdfDoc != null) {
      pageNum = 1;
      renderPage(pageNum);
    }
  });

  eye2.addEventListener("click", function () {
    if (pdfDoc != null) {
      pageNum = 1;
      renderPage(pageNum);
    }
  });

  eye3.addEventListener("click", function () {
    if (pdfDoc != null) {
      pageNum = 1;
      renderPage(pageNum);
    }
  });
});
