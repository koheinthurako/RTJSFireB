import React from 'react'
import './Counter.css'
import { useState } from 'react'

export default function Counter() {

    let [count, setCount] = useState(0);

    let increment = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // အပေါ်မှာ count ကို ၄ ခါ ပေါင်းထားပေမယ့် ၄ မဟုတ်ဘူး အဓိကက asynchronous ဖြစ်တာကြောင့် အချိန်အနည်းငယ်ကြာပါတယ်။
        // အဲ့ဒီ ကြာချိန်အတွက် Javascript က မစောင့်ပါဘူး အဲ့တာကြောင့် count ကို ၄ ခါ ပေါင်းထားပေမယ့် ၄ မဟုတ်ဘူး။
        // သူ့ရဲ့ မူရင်းတန်ဖိုးဖြစ်တဲ့ 0 တန်ဖိုးကိုပဲ သွားပြီး အသုံးပြုနေတာပဲဖြစ်ပါတယ်။


        // အဲ့တာကြောင့် တစ်ခါတည်း Update ဖြစ်ပြီးသား count ကို အသုံးပြုမယ်ဆိုရင်တော့ setCount ကို Function အနေနဲ့ သုံးရမှာပဲဖြစ်ပါတယ်။
        setCount((prevCount) => prevCount + 1); // 0 + 1 = 1
        setCount((prevCount) => prevCount + 1); // 1 + 1 = 2
        setCount((prevCount) => prevCount + 1); // 2 + 1 = 3
        setCount((prevCount) => prevCount + 1); // 3 + 1 = 4
        // အဲ့ဒီမှာတော့ prevCount က တစ်ခါတည်း Update ဖြစ်ပြီးသား count ကို အသုံးပြုသွားတာဖြစ်ပါတယ်။
        // prevCount ဆိုတဲ့ keyword က ဘာလဲဆိုရင် setCount ကို Function အနေနဲ့ သုံးတဲ့အခါမှာ React က အလိုအလျောက်ပေးတဲ့ parameter တစ်ခုဖြစ်ပြီး
        // တစ်ခါတည်း Update ဖြစ်ပြီးသား count တန်ဖိုးကို preCount ဆိုတဲ့ parameter ထဲကို ထည့်ကာ အဲ့ Update တန်ဖိုး ကို နောက်ကွယ်မှာ အသုံးပြုသွားတာဖြစ်ပါတယ်။
    }

  return (
    <div className="counter">
      <h1>Counter</h1>
      <h3>Count - {count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
