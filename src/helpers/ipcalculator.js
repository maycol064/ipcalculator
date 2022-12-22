const ipcalculator = (ip) => {
    let data = {}

    let separateIP = ip.split('/'),
        cdir = separateIP[1],
        bytes = separateIP[0].split('.'),
        classIP = '';

    // Determinar clase
    if(bytes[0] >=1 || bytes[0] <= 126) {
        data.class = 'A';
        classIP = 'A';
    } else if(bytes[0] >= 127 || bytes[0] <= 191) {
        data.class = 'B';
        classIP = 'B';
    } else if(bytes[0] >= 192 || bytes[0] <= 223) {
        data.class = 'C';
        classIP = 'C';
    } else if(bytes[0] >= 224 || bytes[0] <= 239) {
        data.class = 'D';
        classIP = 'D';
    } else if(bytes[0] >= 240 || bytes[0] <= 255) {
        data.class = 'E';
        classIP = 'E';
    } else {
        data.error = 'Rango de IP no válida';
    }

    // Determinar máscara de subred
}

export default ipcalculator
