let fileInput_liasses_fiscales = document.getElementById(
  "file-input-liasses_fiscales"
);
let fileList_liasses_fiscales = document.getElementById(
  "files-list-liasses_fiscales"
);
let numOfFiles_liasses_fiscales = document.getElementById(
  "num-of-files-liasses_fiscales"
);

fileInput_liasses_fiscales.addEventListener("change", () => {
  fileList_liasses_fiscales.innerHTML = "";
  numOfFiles_liasses_fiscales.textContent = `${fileInput_liasses_fiscales.files.length} Files Selected`;

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
});

// - - - KBIS CONTAINER FILE - - -

let fileInput_KBIS = document.getElementById("file-input-KBIS");
let fileList_KBIS = document.getElementById("files-list-KBIS");
let numOfFiles_KBIS = document.getElementById("num-of-files-KBIS");

fileInput_KBIS.addEventListener("change", () => {
  fileList_KBIS.innerHTML = "";
  numOfFiles_KBIS.textContent = `${fileInput_KBIS.files.length} Files Selected`;

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
    fileList_KBIS.appendChild(listItem);
  }
});

// - - - KBIS CONTAINER FILE - - -

let fileInput_Statut = document.getElementById("file-input-Statut");
let fileList_Statut = document.getElementById("files-list-Statut");
let numOfFiles_Statut = document.getElementById("num-of-files-Statut");

fileInput_Statut.addEventListener("change", () => {
  fileList_Statut.innerHTML = "";
  numOfFiles_Statut.textContent = `${fileInput_Statut.files.length} Files Selected`;

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
    fileList_Statut.appendChild(listItem);
  }
});
