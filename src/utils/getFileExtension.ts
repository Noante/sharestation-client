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
const getFileExtension = (fileName: string) =>
  fileName.split(".").pop() ?? null;

export default getFileExtension;
