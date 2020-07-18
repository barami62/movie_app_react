import React from 'react';

function Food ({name, picture}) {
  return (
    <div>
      <h1>I like {name}!</h1>
      <img src={picture} />
    </div>);
}

const foodILike = [
  {
    name: 'kimchi',
    image: 'https://search.naver.com/search.naver?where=image&sm=tab_jum&query=%EA%B9%80%EC%B9%98#'
  },
  {
    name: 'ramen',
    image: 'https://search.naver.com/search.naver?sm=tab_hty.top&where=image&query=%EB%9D%BC%EB%A9%B4&oquery=%EA%B9%80%EC%B9%98&tqi=Ux6Etwp0YidssZ1wVWNssssstJK-155485#'
  },
  {
    name: 'bulgogi',
    image: 'https://search.naver.com/search.naver?sm=tab_hty.top&where=image&query=%EB%B6%88%EA%B3%A0%EA%B8%B0&oquery=%EB%9D%BC%EB%A9%B4&tqi=Ux6EOsp0YidssZE9LVwssssstJN-211923#'
  }
];

function App() {
  return (<div>
    {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
    </div>
  );
}

export default App;
