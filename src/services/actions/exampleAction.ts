export const ExampleAction = (property: number) => {
  try {
    for (let i = 0; i < property; i++) {
      console.log(`Info number: ${i}`);
    }
  } catch (exception) {
    console.error(exception);
  }
};
