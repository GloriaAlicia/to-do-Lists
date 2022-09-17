
export const randomGradient = (color1, color2) => {
    const generatedGradient = `
    radial-gradient(farthest-side at ${randomNumber(0, 100, "%")} ${randomNumber(0, 100, "%")}, ${color1} 0%, transparent 100%),

    radial-gradient(farthest-side at ${randomNumber(0, 100, "%")} ${randomNumber(0, 100, "%")}, ${color2} 0%, transparent 90%)
  `;
  return generatedGradient
}

const randomNumber = (min, max, unit) => {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    randomNumber += unit
    return randomNumber;
}