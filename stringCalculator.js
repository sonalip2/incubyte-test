const defaultDelimiter = ",";

const getNegativeNumberErrormessage = (negativeNumber) => {
  return `negative numbers not allowed ${negativeNumber}`;
};

const getParsedString = (numberString) => {
  return String(numberString).trim().replace(/\n/g, " ");
};

const getNumberFromString = (numberString) => {
  return Number(numberString);
};

const getDelimiterAndParsedString = (numbersString) => {
  const chars = numbersString.split("\n");

  if (chars.length === 1) {
    return {
      delimiter: defaultDelimiter,
      numbersString: numbersString,
    };
  }

  if (!chars[0].includes("//")) {
    return {
      delimiter: defaultDelimiter,
      numbersString: numbersString,
    };
  }

  const delimiter = chars[0].replace("//", "").trim();

  return {
    delimiter,
    numbersString: chars[1],
  };
};

const stringCalculator = (numbers) => {
  const { delimiter, numbersString } = getDelimiterAndParsedString(numbers);
  const numbersList = numbersString.split(delimiter);
  const errors = [];
  const sum = numbersList.reduce((acc, numberString) => {
    const parsedString = getParsedString(numberString);
    const num = getNumberFromString(parsedString);

    if (num < 0) {
      errors.push(getNegativeNumberErrormessage(num));
    }

    if (errors.length > 0) {
      return acc;
    }

    if (!num || isNaN(num)) {
      return acc;
    }

    return acc + num;
  }, 0);

  if (errors.length > 0) {
    throw Error(errors.join(","));
  }

  return sum;
};

if (typeof window === "undefined") {
  module.exports = stringCalculator;
} else {
  window.stringCalculator = stringCalculator;
}
