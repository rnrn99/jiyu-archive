class PostFeature {
  static getFormattedWrittenDate = (written: Date) => {
    const year = written.getFullYear();
    const month = written.getMonth() + 1;
    return `${year}.${month.toString().padStart(2, '0')}`;
  };
}

export default PostFeature;
