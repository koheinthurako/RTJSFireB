import logo from './logo.svg';
import './App.css';
import Image from './assets/Onepiece.jpg';

function App() {

  let name = "Thet Zaw Hein";

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
    </div>
  );
}

export default App;
