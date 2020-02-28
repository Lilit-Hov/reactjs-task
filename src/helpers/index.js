export function exportHTML(pageName){
    const exportFile = new Blob([document.body.innerHTML], {type : 'text/html'});
    const url = URL.createObjectURL(exportFile, {type: 'text/html'});
    const exportLink = document.createElement('a');
    exportLink.download = 'select-template';
    exportLink.href = url;
    exportLink.click();
}



