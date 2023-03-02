// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

(async () => {
  //   const response = await openai.listModels();
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Give me a random color",
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data.choices[0]);
})();
