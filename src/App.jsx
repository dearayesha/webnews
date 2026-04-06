import { useState } from "react";
import Header from "./components/header/Header";
import NewsList from "./components/NewsList";
import { newsData } from "./utils/Info";
export default function App() {
  const [news, setNews] = useState(newsData)
  const getKeywords = (event) => {
    let keywords = (event.target.value);
  let filtered = newsData.filter(item => {
  return item.title.toLowerCase().indexOf(keywords.toLowerCase()) > -1;
});
  setNews(filtered); 
  }
  return (
    <>
    
    <Header getKeywords={getKeywords}/>
    <NewsList news={news}/>
    
    </>
  );
}