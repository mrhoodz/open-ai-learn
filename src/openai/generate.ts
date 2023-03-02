import { server$ } from "@builder.io/qwik-city";
// import { Configuration, OpenAIApi } from "openai";

// export const Kiko = server$(function (req) {
//   console.log(req);

//   //   const configuration = new Configuration({
//   //     apiKey: process.env.OPENAI_API_KEY,
//   //   });
//   //   const openai = new OpenAIApi(configuration);

//   //   if (!configuration.apiKey) {
//   //     res.status(500).json({
//   //       error: {
//   //         message:
//   //           "OpenAI API key not configured, please follow instructions in README.md",
//   //       },
//   //     });
//   //     return;
//   //   }

//   //   const animal = req.body.animal || "";
//   //   if (animal.trim().length === 0) {
//   //     res.status(400).json({
//   //       error: {
//   //         message: "Please enter a valid animal",
//   //       },
//   //     });
//   //     return;
//   //   }

//   //   try {
//   //     const completion = await openai.createCompletion({
//   //       model: "text-davinci-003",
//   //       prompt: "Give me a random color",
//   //       temperature: 0.6,
//   //     });
//   //     res.status(200).json({ result: completion.data.choices[0].text });
//   //   } catch (error: any) {
//   //     // Consider adjusting the error handling logic for your use case
//   //     if (error.response) {
//   //       console.error(error.response.status, error.response.data);
//   //       res.status(error.response.status).json(error.response.data);
//   //     } else {
//   //       console.error(`Error with OpenAI API request: ${error.message}`);
//   //       res.status(500).json({
//   //         error: {
//   //           message: "An error occurred during your request.",
//   //         },
//   //       });
//   //     }
//   //   }
// });

export const chatter = server$(() => {
  console.log("juju");
});

export const chat = server$(() => {
  console.log("l am chat");
});
