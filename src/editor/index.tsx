import { useEffect, useState } from "react";

const Editor = () => {
  const [text, setText] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${
          import.meta.env.VITE_news_api
        }`
      );
      const data = await res.json();
      setText(data.articles);
    })();
  });
  return (
    <div className="text-xl mx-24 my-10" onKeyDown={e => alert(e.key)}>
      {text.map((el) => (
        <p>{el.content}</p>
      ))}
    </div>
  );
};

export default Editor;
