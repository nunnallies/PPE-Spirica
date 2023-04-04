// - - - KBIS UPLOAD CONTAINER FILE - - -

// Sélection des éléments HTML correspondant à l'input de fichier, la liste des fichiers et le nombre de fichiers sélectionnés pour le conteneur liasses_fiscales
let fileInput_liasses_fiscales = document.getElementById(
  "file-input-liasses_fiscales"
);
let fileList_liasses_fiscales = document.getElementById(
  "files-list-liasses_fiscales"
);
let numOfFiles_liasses_fiscales = document.getElementById(
  "num-of-files-liasses_fiscales"
);

// Ecouteur d'événement qui se déclenche lorsqu'un fichier est sélectionné pour le conteneur liasses_fiscales
fileInput_liasses_fiscales.addEventListener("change", () => {
  // Efface la liste précédemment affichée
  fileList_liasses_fiscales.innerHTML = "";
  // Met à jour l'affichage du nombre de fichiers sélectionnés
  numOfFiles_liasses_fiscales.textContent = `${fileInput_liasses_fiscales.files.length} Files Selected`;

  // Pour chaque fichier sélectionné, crée un objet FileReader et affiche le nom et la taille du fichier dans la liste correspondante
  for (i of fileInput_liasses_fiscales.files) {
    let reader = new FileReader();
    let listItem = document.createElement("li");
    let fileName = i.name;
    let fileSize = (i.size / 1024).toFixed(1);
    listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}KB</p>`;
    if (fileSize >= 1024) {
      fileSize = (fileSize / 1024).toFixed(1);
      listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}MB</p>`;
    }
    fileList_liasses_fiscales.appendChild(listItem);
  }

  // Lit le contenu du fichier en vue de son traitement ultérieur
  fileReader.readAsArrayBuffer(file);
});

// ________________ KBIS UPLOAD CONTAINER FILE ____________________

// Sélection des éléments HTML correspondant à l'input de fichier, la liste des fichiers et le nombre de fichiers sélectionnés pour le conteneur KBIS
let fileInput_KBIS = document.getElementById("file-input-KBIS");
let fileList_KBIS = document.getElementById("files-list-KBIS");
let numOfFiles_KBIS = document.getElementById("num-of-files-KBIS");

// Ecouteur d'événement qui se déclenche lorsqu'un fichier est sélectionné pour le conteneur KBIS
fileInput_KBIS.addEventListener("change", () => {
  // Efface la liste précédemment affichée
  fileList_KBIS.innerHTML = "";
  // Met à jour l'affichage du nombre de fichiers sélectionnés
  numOfFiles_KBIS.textContent = `${fileInput_KBIS.files.length} Files Selected`;

  // Pour chaque fichier sélectionné, crée un objet FileReader et affiche le nom et la taille du fichier dans la liste correspondante
  for (i of fileInput_KBIS.files) {
    let reader = new FileReader();
    let listItem = document.createElement("li");
    let fileName = i.name;
    let fileSize = (i.size / 1024).toFixed(1);
    listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}KB</p>`;
    if (fileSize >= 1024) {
      fileSize = (fileSize / 1024).toFixed(1);
      listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}MB</p>`;
    }

    // Lit le contenu du fichier en vue de son traitement ultérieur
    fileList_KBIS.appendChild(listItem);
  }
});

// __________________ STATUT UPLOAD CONTAINER FILE ____________________

// Sélection des éléments HTML correspondant à l'input de fichier, la liste des fichiers et le nombre de fichiers sélectionnés pour le conteneur KBIS
let fileInput_Statut = document.getElementById("file-input-Statut");
let fileList_Statut = document.getElementById("files-list-Statut");
let numOfFiles_Statut = document.getElementById("num-of-files-Statut");

// Ecouteur d'événement qui se déclenche lorsqu'un fichier est sélectionné pour le conteneur KBIS
fileInput_Statut.addEventListener("change", () => {
  // Efface la liste précédemment affichée
  fileList_Statut.innerHTML = "";
  // Met à jour l'affichage du nombre de fichiers sélectionnés
  numOfFiles_Statut.textContent = `${fileInput_Statut.files.length} Files Selected`;

  // Pour chaque fichier sélectionné, crée un objet FileReader et affiche le nom et la taille du fichier dans la liste correspondante
  for (i of fileInput_Statut.files) {
    let reader = new FileReader();
    let listItem = document.createElement("li");
    let fileName = i.name;
    let fileSize = (i.size / 1024).toFixed(1);
    listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}KB</p>`;
    if (fileSize >= 1024) {
      fileSize = (fileSize / 1024).toFixed(1);
      listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}MB</p>`;
    }

    // Lit le contenu du fichier en vue de son traitement ultérieur
    fileList_Statut.appendChild(listItem);
  }
});
