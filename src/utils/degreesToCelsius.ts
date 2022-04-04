export const degreesToCelsius = (degrees: number | null) => {
  if (!degrees) {
    return;
  }
  return (degrees - 273.15).toFixed(0);
};
