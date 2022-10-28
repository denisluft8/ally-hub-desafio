export const cpfFormat = (value) => {
  if (!value) return value;
  const cpfNumber = value.replace(/[^\d]/g, "");
  const cpfNumberLength = cpfNumber.length;

  if (cpfNumberLength < 4) return cpfNumber;

  if (cpfNumberLength < 7) {
    return `${cpfNumber.slice(0, 3)}.${cpfNumber.slice(3)}`;
  }
  if (cpfNumberLength < 9) {
    return `${cpfNumber.slice(0, 3)}.${cpfNumber.slice(3, 6)}.${cpfNumber.slice(
      6,
      9
    )}`;
  }
  if (cpfNumberLength < 12) {
    return `${cpfNumber.slice(0, 3)}.${cpfNumber.slice(3, 6)}.${cpfNumber.slice(
      6,
      9
    )}-${cpfNumber.slice(9, 11)}`;
  }
};
