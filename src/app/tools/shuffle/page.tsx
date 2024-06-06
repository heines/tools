export default function Page() {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
  return (
    <main>
      <h1>シャッフル</h1>
      <div>
        <ul>
          {shuffle(data).map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </div>
      <p>Fisher–Yatesアルゴリズム</p>
    </main>
  );
}