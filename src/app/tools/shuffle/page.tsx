'use client';
import React, { useState } from 'react';
import Button from '../../../components/elements/Button';

export default function Page() {
  let base = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [data, setData] = useState(base.slice());
  const shuffle = (arr: Array<number>) => {
    let data = arr.slice();
    for(let i = data.length - 1; i > 0; i--){
      let r = Math.floor(Math.random() * (i + 1));
      let tmp = data[i];
      data[i] = data[r];
      data[r] = tmp;
    }
    return data;
  }

  return (
    <main>
      <h1>シャッフル</h1>
      <div>
        <ul>
          {data.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </div>
      <Button onClick={() => setData(shuffle(base))} text="シャッフル" />
      <p>Fisher–Yatesアルゴリズム</p>
    </main>
  );
}