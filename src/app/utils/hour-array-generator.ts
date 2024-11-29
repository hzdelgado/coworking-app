export const generateHoursArray = (start: string, end: string): string[] => {
    const hoursArray: string[] = [];
    let currentTime = new Date();
    
    // Convertir la hora inicial y final en números
    const [startHour, startMinutes] = start.split(':').map(Number);
    const [endHour, endMinutes] = end.split(':').map(Number);
  
    // Configurar la hora inicial
    currentTime.setHours(startHour, startMinutes, 0, 0);
  
    // Agregar las horas al array hasta la hora final
    while (currentTime.getHours() < endHour || 
           (currentTime.getHours() === endHour && currentTime.getMinutes() <= endMinutes)) {
      // Formatear la hora en formato HH:mm
      const formattedTime = currentTime.toTimeString().slice(0, 5);
      hoursArray.push(formattedTime);
  
      // Incrementar una hora
      currentTime.setHours(currentTime.getHours() + 1);
    }
  
    return hoursArray;
  };