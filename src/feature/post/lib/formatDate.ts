export const getFormattedWrittenDate = (written: Date) => {
  const year = written.getFullYear();
  const month = written.getMonth() + 1;
  const day = written.getDate();
  return `${year}.${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')}`;
};
