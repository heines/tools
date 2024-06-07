'use client';
import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import Button from '../../../components/elements/Button';
type DataType = { items: { value: string; }[]; };

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

  const shuffle = (arr: Array<String>) => {
    let ans = arr.slice();
    for(let i = ans.length - 1; i > 0; i--){
      let r = Math.floor(Math.random() * (i + 1));
      let tmp = ans[i];
      ans[i] = ans[r];
      ans[r] = tmp;
    }
    return ans;
  }

  const onSubmit: SubmitHandler<DataType> = (data: Array<String>) => {
    const items = getValues('items');

    // enterでinputフォームを追加する
    const lastItem = items[items.length - 1];
    if (lastItem.value !== '') {
      append({ value: '' });
    }
  };

  const onShuffle = () => {
    const items = getValues('items');
    const values = items.map(item => item.value);
    base = values.filter(x => x !== '');
  
    // シャッフル関数を呼び出す
    const shuffledValues = shuffle(base);
  
    // シャッフルされたデータをセットする
    setData(shuffledValues);
  };

  return (
    <main>
      <h1>シャッフル</h1>
      <h2>取り込みデータ</h2>
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, index) => (
          <div className="is-flex" key={item.id}>
            <input className="input" type="text" {...register(`items.${index}.value`)} />
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