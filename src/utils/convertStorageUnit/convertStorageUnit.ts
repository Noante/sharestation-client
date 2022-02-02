type Params = {
  to: "GB";
  value: number;
};

/**
 * Convert some storage unit to another.
 * @returns {string} Converted unit with its abbreviation.
 */
const convertStorageUnit = ({ to, value }: Params) => {
  switch (to) {
    case "GB":
      return `${Math.round(value / 1024)} GB`;
    default:
      throw new Error("Invalid 'to' argument.");
  }
};

export default convertStorageUnit;
