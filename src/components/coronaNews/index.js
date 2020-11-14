import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../services/firebase';
import 'firebase/database';

const Activity = (props) => {
  const { data } = props;
  return (
    <div>
      {/* <a href={data.url}> */}
      <h4>{data.title}</h4>
      {/* </a> */}
      <p>{data.desc}</p>
    </div>
  );
};

const NewsPerDate = (props) => {
  const { data } = props;

  return (
    <div>
      <Link to={`/infoCorona/${data.date}`}>
        <h3>{data.date}</h3>
      </Link>
      {data.activity.map((news) => {
        return <Activity key={news.url} data={news} />;
      })}
    </div>
  );
};

const CoronaNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="center_view">
      {isLoading ? (
        <p>loading</p>
      ) : (
        news.map((newsPerDate) => {
          return <NewsPerDate key={newsPerDate.date} data={newsPerDate} />;
        })
      )}
    </div>
  );
};

export default CoronaNews;
