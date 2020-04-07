import React, { useState } from 'react'
import Head from 'next/head'

const Home: React.FC = () => {
  const [salts, setSalts] = useState([])
  const randomGen = () => {
    const d = Math.random()
    if (d < 0.8) {
      /* 80% */
      const items = [
        '【あそぼーよ】飴村乱数',
        '【いい思い付き】夢野幻太郎',
        '【うっかりしてました】夢野幻太郎',
        '【ギャンブラー】有栖川帝統',
        '【ご飯の時間】伊弉冉一二三',
        '【サバイバルライフ】毒島メイソン理鶯',
        '【スクラッチ！】山田一郎',
        '【トラブル発生！？】観音坂独歩',
        '【バイトの時間】山田二郎',
        '【バトル開始？】飴村乱数',
        '【ふざけるなよ】入間銃兎',
        '【メシの時間だ！】山田一郎',
        '【事件発生】入間銃兎',
        '【仕事モード】伊弉冉一二三',
        '【依頼は人探し】山田二郎',
        '【借金のあて】有栖川帝統',
        '【出かけるぞ】碧棺左馬刻',
        '【勝負してやる】山田一郎',
        '【営業の仕事】観音坂独歩',
        '【困りましたね】入間銃兎',
        '【学校行事参加中】山田三郎',
        '【小官が理鶯だ】毒島メイソン理鶯',
        '【待ちなさい】神宮寺寂雷',
        '【待てるだろ？】碧棺左馬刻',
        '【日々鍛錬】毒島メイソン理鶯',
        '【昼休憩にしましょう】神宮寺寂雷',
        '【残業のお供】観音坂独歩',
        '【気になる一品】夢野幻太郎',
        '【気遣いのひと】神宮寺寂雷',
        '【生意気な奴】有栖川帝統',
        '【着信相手は……】山田二郎',
        '【見てたでしょ】飴村乱数',
        '【負けない気持ち】伊弉冉一二三',
        '【起きないつもりなら】山田三郎',
        '【風邪ひきますよ】山田三郎',
        '【食えンのか！？】碧棺左馬刻'
      ]
      const index = Math.floor(Math.random() * items.length)
      return { rank: 'R', gacha: items[index] }
    } else if (d < 0.97) {
      /* 17% */
      const items = [
        '【NO.1ホスト】伊弉冉一二三',
        '【Young Star】山田三郎',
        '【いつか叶える夢】有栖川帝統',
        '【お気に入りの一冊】山田一郎',
        '【シャンパンパーティ！】伊弉冉一二三',
        '【ショーダウン！】有栖川帝統',
        '【ネガティブ社畜】観音坂独歩',
        '【ハマの敏腕刑事】入間銃兎',
        '【ハマの日常】碧棺左馬刻',
        '【ハマの狂犬】碧棺左馬刻',
        '【ブクロの二番手】山田二郎',
        '【ブクロの代表】山田一郎',
        '【ほんの小手調べ】山田三郎',
        '【マジカル・ロリポップ】飴村乱数',
        '【みんなのアイドル】飴村乱数',
        '【ヨコハマの若頭】碧棺左馬刻',
        '【一流デザイナー☆】飴村乱数',
        '【今日の獲物】毒島メイソン理鶯',
        '【今日も街をパトロール】入間銃兎',
        '【仕事が終われば】観音坂独歩',
        '【休日なのに】観音坂独歩',
        '【俺についてこい】山田一郎',
        '【僕の気持ち】伊弉冉一二三',
        '【冷静沈着】神宮寺寂雷',
        '【向かうその先】山田三郎',
        '【嘘ですけどね】夢野幻太郎',
        '【変わらぬ日常】観音坂独歩',
        '【天才医師】神宮寺寂雷',
        '【小官の名を言ってみろ】毒島メイソン理鶯',
        '【放課後の憂鬱】山田二郎',
        '【昼下がりの散歩】夢野幻太郎',
        '【検挙の鬼】入間銃兎',
        '【楽しい時間】山田二郎',
        '【物思いの午後】夢野幻太郎',
        '【生まれ持った強運】有栖川帝統',
        '【診察を始めます】神宮寺寂雷',
        '【隙は見せない】毒島メイソン理鶯',
        '【休日なのに】観音坂独歩'
      ]
      const index = Math.floor(Math.random() * items.length)
      return { rank: 'SR', gacha: items[index] }
    } else {
      /* 3% */
      const items = [
        '【A.R.B】伊弉冉一二三',
        '【A.R.B】入間銃兎',
        '【A.R.B】夢野幻太郎',
        '【A.R.B】山田一郎',
        '【A.R.B】山田三郎',
        '【A.R.B】山田二郎',
        '【A.R.B】有栖川帝統',
        '【A.R.B】毒島メイソン理鶯',
        '【A.R.B】碧棺左馬刻',
        '【A.R.B】神宮寺寂雷',
        '【A.R.B】観音坂独歩',
        '【A.R.B】飴村乱数',
        '【絶対に捕まえなきゃ】山田三郎',
        '【絶対に捕まえなきゃ】山田三郎'
      ]
      const index = Math.floor(Math.random() * items.length)
      return { rank: 'SSR', gacha: items[index] }
    }
  }
  const handleRandom = () => {
    const result = randomGen()
    setSalts([result])
  }
  const handleRandom10Time = () => {
    const result = [...Array(10)].map(() => randomGen())
    setSalts(result)
  }
  return (
    <div className="container">
      <h1>SALTY EVE'S GACHAPON</h1>
      <button onClick={handleRandom}>Roll</button>
      <button onClick={handleRandom10Time}> Roll 10 Time</button>
      <h2>Result :</h2>
      {salts.map(({ rank = '', gacha = '' }) => (
        <p>{`${rank} : ${gacha}`}</p>
      ))}
    </div>
  )
}

export default Home
