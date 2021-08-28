/**
 * Returns the file name without its extension.
 * @example
 * ```
 * const fileName = getFileNameWithoutExtension('identity.pdf');
 * const fileNameWithDots = getFileNameWithoutExtension('identity.new.pdf');
 * const fileNameWIthoutExtension = getFileNameWithoutExtension('identity');
 *
 * console.log(fileName); // "identity"
 * console.log(fileNameWithDots); // "identity.new"
 * console.log(fileNameWIthoutExtension); // "identity"
 * ```
 */
const getFileNameWithoutExtension = (fileName: string) => {
  if (!fileName.includes(".")) return fileName;

  const [, ...name] = fileName.split(".").reverse();
  return name.reverse().join(".");
};

export default getFileNameWithoutExtension;
