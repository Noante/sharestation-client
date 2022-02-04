type Params = {
  /** unit to be formatted. */
  to: "GB";

  /** value to be formatted in **megabytes**. */
  value: number;
};

/**
 * Convert some storage unit to another.
 * @returns {string} Converted number to its nearest rounded integer.
 */
export const convertStorageUnit = ({ to, value }: Params) => {
  switch (to) {
    case "GB":
      return `${Math.round(value / 1024)} GB`;
    default:
      throw new Error("Invalid 'to' argument.");
  }
};
