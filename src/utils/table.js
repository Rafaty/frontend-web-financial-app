 function loadScriptToTable() {
  const script = document.createElement("script");
  script.src = `dist/assets/js/vendors.js`;
  script.async = true;

  document.body.appendChild(script);
}
export default loadScriptToTable;