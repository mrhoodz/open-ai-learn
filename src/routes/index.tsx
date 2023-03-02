import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { server$ } from "@builder.io/qwik-city";
import { Configuration, OpenAIApi } from "openai";

// import { server$ } from "@builder.io/qwik-city";
// import axios from "axios";
// import header from "~/components/header/header";
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const tectalicOpenai = require("@tectalic/openai").default;
// import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const x: any = useSignal("32");

  return (
    <section>
      <h1
        onClick$={async () => {
          x.value = await chat();
          // chat();
          // console.log("kish");
          // const number = chat();
          // x.value = number;
          // console.log("df " + number);
        }}
      >
        hey there {x.value}
      </h1>
    </section>
  );
});

export const chat = server$(async () => {
  console.log("l am chat");

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  // const response = await openai.listModels();

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Give me a random color",
    max_tokens: 7,
    temperature: 1,
  });

  console.log("response says", response.data.choices[0].text);

  return response.data.choices[0].text;
});

// export const chat = server$(() => {
//   const data = {
//     model: "text-davinci-003",
//     prompt: "Give me a random color",
//     temperature: 1,
//     max_tokens: 9,
//   };

//   // Define the URL to make a POST request to
//   const url = "https://api.openai.com/v1/completions";

//   // Define the dummy authorization header for the POST request
//   const authorizationHeader = {
//     Authorization: "Bearer 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",
//     "Content-Type": "application/json",
//   };

//   // Send the POST request with the dummy body and authorization header
//   // const x = await axios
//   //   .post(url, data, { headers: authorizationHeader })
//   //   .then((response) => {
//   //     console.log("Response:", response.data);
//   //   })
//   //   .catch((error) => {
//   //     console.error("Error:", error.response.data);
//   //   });

//   // return x;

//   // axios
//   //   .post(url, data, { headers: authorizationHeader })
//   //   .then(function (response) {
//   //     useBearStore.setState({ bears: "jjjjj" });
//   //     console.log(useBearStore.getState().bears);
//   //     console.log("response", response.data.choices[0].text);
//   //   })
//   //   .catch(function (error) {
//   //     console.log(error);
//   //   });

//   console.log("lm on the server");

//   // return x;
// });

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
