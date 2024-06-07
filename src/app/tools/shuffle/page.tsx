'use client';
import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import Button from '../../../components/elements/Button';

export default function Page() {
  let base: Array<String> = [];
  const [data, setData] = useState(base.slice());

  const { register, control, handleSubmit, getValues } = useForm({
    defaultValues: {
      items: [{ value: '' }]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items'
  });

  const shuffle = (arr: Array<number>) => {
    let ans = arr.slice();
    for(let i = ans.length - 1; i > 0; i--){
      let r = Math.floor(Math.random() * (i + 1));
      let tmp = ans[i];
      ans[i] = ans[r];
      ans[r] = tmp;
    }
    return ans;
  }

  const onSubmit = (data) => {
    const items = getValues('items');
    const values = items.map(item => item.value);
    base = values.slice();

    const lastItem = items[items.length - 1];
    if (lastItem.value !== '') {
      append({ value: '' });
    }
  };

  const onShuffle = () => {
    const items = getValues('items');
    const values = items.map(item => item.value);
    base = values.slice();
  
    // シャッフル関数を呼び出す
    const shuffledValues = shuffle(base);
  
    // シャッフルされたデータをセットする
    setData(shuffledValues);
  };

  return (
    <main>
      <h1>シャッフル</h1>
      <h2>取り込みデータ</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, index) => (
          <div key={item.id}>
            <input {...register(`items.${index}.value`)} />
            <button type="button" onClick={() => remove(index)}>x</button>
          </div>
        ))}
        <input type="submit" style={{ display: 'none' }} />
      </form>
      <Button onClick={onShuffle}>シャッフル</Button>
      <h2>シャッフル結果</h2>
      <div>
        <ul>
          {data.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </div>
      <p>Fisher–Yatesアルゴリズム</p>
    </main>
  );
}