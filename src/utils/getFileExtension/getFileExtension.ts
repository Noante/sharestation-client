/**
 * Returns the file extension form a file name.
 * @example
 * ```
 * const extension = getFileExtension('identity.pdf');
 * const noExtension = getFileExtension('identity');
 * console.log(extension) // "pdf"
 * console.log(noExtension) // null
 * ```
 */
const getFileExtension = (fileName: string) => {
  const extension = fileName.split(".").pop();
  return extension === fileName ? null : extension;
};

export default getFileExtension;
