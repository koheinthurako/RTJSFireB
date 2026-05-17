import logo from './logo.svg';
import './App.css';
import Image from './assets/Onepiece.jpg';
import { useState } from 'react';
import Counter from './Counter';

function App() {

  // let name = "Thet Zaw Hein";
  useState("Thet Zaw Hein"); 
  // useState ဆိုတာ Function တစ်ခုပဲ Function ဆိုရင် return တစ်ခုခုပြန်ပေးတယ်
  // useState return ဟာ Array တစ်ခုကို Return ပြန်ပေးပြီး ပထမတစ်ခုကို Data ကိုဆွဲထုတ်လို့ရမယ့် Getter နဲ့ ဒုတိယတစ်ခုက Data ကို Update လုပ်လို့ရမယ့် Setter ဖြစ်တယ်။ 
  // အဲ့ Data တွေကို ဘယ်လိုလက်ခံမလဲဆိုတော့ Array Destructuring နည်းလမ်းနဲ့ လက်ခံရမှာဖြစ်ပါတယ်။
  let [name, setName] = useState("Thet Zaw Hein");
  // getter -> name, setter -> setName, initial value -> "Thet Zaw Hein"

  let changeName = () => {
    // name = 'Aung Aung'
    setName("Aung Aung");
    console.log(name); 
    // ဒီမှာတော့ name ကို console.log ထုတ်လိုက်တာနဲ့ Thet Zaw Hein လို့ထုတ်လာမှာဖြစ်ပါတယ်။
    // ဘာလို့လဲဆိုတော့ useState က asynchronous ဖြစ်တယ်ဆိုတဲ့အကြောင်းနဲ့ပတ်သက်ပါတယ်။ 
    // asynchronous ဆိုတာက တစ်ခါတည်းလုပ်မယ့်အရာတွေကို အချိန်အနည်းငယ်ကြာပြီးမှလုပ်တယ်ဆိုတဲ့အဓိပ္ပာယ်ဖြစ်ပါတယ်။ 
    // ဒါကြောင့် setName("Aung Aung") လုပ်လိုက်တာနဲ့ name ကို console.log ထုတ်လိုက်တာနဲ့ Thet Zaw Hein လို့ထုတ်လာမှာဖြစ်ပါတယ်။ 
    // ဒါကိုပြင်ဖို့အတွက်တော့ useEffect ဆိုတဲ့ Hook ကိုသုံးရမှာဖြစ်ပါတယ်။
    // useEffect က Function Component တွေမှာ Side Effect တွေကိုလုပ်နိုင်အောင်လုပ်ပေးတဲ့ Hook တစ်ခုဖြစ်ပါတယ်။
  }

  let [posts, setPosts] = useState([

  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post."
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post."
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the content of the third post."
  },
  ]);

  console.log(posts);

  return (
    <div>
      <h1>Hello {name}</h1>
      {/* Browser ထဲတွင် Photo များထည့်နည်း */}

      {/* 1st way - public folder ထဲကို photo တိုက်ရိုက်ထည့်ပြီးသုံးနည်း */}
      {/* Absolute Path */}
      <img src="http://localhost:3000/image.png" alt="" />
      {/* Relative Path */}
      <img src="/image.png" alt="" />

      {/* 2nd import way - Javascript မှ တစ်ခါတည်း Import လုပ်သုံနည်း */}
      {/* ဟိုးအပေါ်ဆုံးမှာ JS နည်းလမ်းနဲ့ import လုပ်ထားတာကို သုံးနည်း အဲ့လိုသုံးရင်တော့ Image ဆိုတဲ့အထဲမှာ Dynamically Data က အစားထိုးထည့်နိုင်ပါတယ် */}
      <img src={Image} alt="" />

      {/* State အကြောင်းအစ 
          အောက်မှာ Button တစ်ခုကို နှိပ်လိုက်တာနဲ့ နာမည်ပြောင်းသွားတဲ့ ပုံစံလုပ်ချင်တယ်ဆိုရင် Event Handler နဲ့ State ကိုသုံးရမှာဖြစ်ပါတယ်။ 
          အဲ့လိုလုပ်ဖို့အတွက် React မှာ useState ဆိုတဲ့ Hook ကိုသုံးရမှာဖြစ်ပါတယ်။ 
          Hook ဆိုတာက Function Component တွေမှာ State နဲ့ Lifecycle Methods တွေကို အသုံးပြုနိုင်အောင် လုပ်ပေးတဲ့ Function တွေပါ။
      */}
      <button onClick={changeName}>Change Your Name</button>

      <h1>Posts</h1>
      {/* Posts Data တွေကို Loop ပတ်ပြီး ထွက်လာစေချင်တယ်ဆိုရင် Map Loop ကို အသုံးများတယ် */}
      <ul>
        {posts.map(post => (
          // react က loop ပတ်ရင် Key ကိုလိုအပ်တယ်ဆိုတဲ့ error တစ်ခုကို ပြသနာဖြစ်စေတယ်။
          // အဲ့ဒီ Key ပေါ်မူတည်ပြီးတော့ ပြောင်းဖို့လိုအပ်တဲ့ အောက်က li ကိုပဲ ပြောင်းပေးသွားတယ်။
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>

      <Counter />
      
    </div>
  );
}

export default App;
