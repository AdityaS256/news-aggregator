import Groq from "groq-sdk";
const Client = new Groq({
  apiKey: process.env.API_KEY,
});

/**
 *
 * @param {String} link Link of the article
 * @returns {String} Summary of the provided article
 */
const GetArticle = async (link) => {
  const article = await Client.chat.completions.create({
    model: "llama3-70b-8192",
    messages: [
      {
        role: "system",
        content:
          "I'm providing you with a link to an article, your task is to read the article and summarise whatever was in the article. Reply with only the summary content in around 2500 characters and nothing else, do not ask any further question. Your summary should be like that of a news reporter. The article link is: " +
          link,
      },
    ],
  });

  return article.choices[0].message.content;
};

export { GetArticle };
