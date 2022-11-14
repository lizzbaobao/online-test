import React, { useState, useEffect } from "react";
import "./App.css";

const data = [
  {
    title: "第一題",
    a: "選項a1",
    b: "選項b1",
    c: "選項c1",
    d: "選項d1",
    ans: "a",
  },
  {
    title: "第二題",
    a: "選項a2",
    b: "選項b2",
    c: "選項c2",
    d: "選項d2",
    ans: "b",
  },
  {
    title: "第三題",
    a: "選項a3",
    b: "選項b3",
    c: "選項c3",
    d: "選項d3",
    ans: "c",
  },
];

// function AnswerFunction(
//   count: any,
//   ans: any,
//   nextButton: any,
//   previousButton: any,
//   onChangebutton: any
// ) {
//   return (

//   );
// }

function App() {
  const [ans, setAns] = useState<string[]>(["", "", ""]);
  const [count, setCount] = useState<number>(1);
  const [send, setSend] = useState<boolean>(false);
  const [warning, setWarning] = useState<boolean>(false);
  const [totalAns, setTotalAns] = useState<number>(0);
  const [textStyle, setTextStyle] = useState<string>("right-Ans");

  const onClickSend = () => {
    setSend(true);
    setCount(1);
    ans[0] == data[0].ans
      ? setTextStyle("right-Ans")
      : setTextStyle("wrong-Ans");
    let j = 0;
    for (let i = 0; i < 3; i++) {
      if (ans[i] == data[i].ans) {
        j = j + 1;
      }
      setTotalAns(j);
    }
  };
  const nextButton = () => {
    if (ans[count - 1] == "") {
      console.log("null");
      setWarning(true);
    } else {
      setCount(count + 1);
      setAns([...ans]);
      setWarning(false);
    }
  };
  const previousButton = () => {
    setCount(count - 1);
  };
  const onChangeButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    ans[count - 1] = e.target.value;
    setAns([...ans]);
    console.log(e.target.value);
    console.log(ans);
  };
  const checkCount = () => {
    console.log("頁數", count);
    console.log(totalAns);
  };
  const previousAns = () => {
    setCount(count - 1);
  };
  const nextAns = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    ans[count - 1] == data[count - 1].ans
      ? setTextStyle("right-Ans")
      : setTextStyle("wrong-Ans");
  }, [count]);
  return (
    <div className="total">
      <div className="banner">線上測驗</div>
      <div className="test">
        {send == false ? (
          <div className="answer">
            <div className="question-Text">{data[count - 1].title}</div>
            <div className="answer-Checkbox">
              <input
                type="radio"
                value="a"
                name="ans"
                onChange={onChangeButton}
                checked={ans[count - 1] == "a"}
              />
              <div className="text-Base-Style">a:{data[count - 1].a}</div>
            </div>
            <div className="answer-Checkbox">
              <input
                type="radio"
                value="b"
                name="ans"
                onChange={onChangeButton}
                checked={ans[count - 1] == "b"}
              />
              <div className="text-Base-Style">b:{data[count - 1].b}</div>
            </div>
            <div className="answer-Checkbox">
              <input
                type="radio"
                value="c"
                name="ans"
                onChange={onChangeButton}
                checked={ans[count - 1] == "c"}
              />
              <div className="text-Base-Style">c:{data[count - 1].c}</div>
            </div>
            <div className="answer-Checkbox">
              <input
                type="radio"
                value="d"
                name="ans"
                onChange={onChangeButton}
                checked={ans[count - 1] == "d"}
              />
              <div className="text-Base-Style">d:{data[count - 1].d}</div>
            </div>
            {warning == true ? <div>尚未輸入答案</div> : <></>}
            <div className="button">
              {count == 1 ? (
                <></>
              ) : (
                <input
                  type="button"
                  value="上一題"
                  name=""
                  id=""
                  onClick={previousButton}
                  className="button-Style"
                />
              )}
              {count == 3 ? (
                <input
                  type="button"
                  value="交卷"
                  name=""
                  id=""
                  onClick={onClickSend}
                  className="button-Style"
                />
              ) : (
                <input
                  type="button"
                  value="下一題"
                  name=""
                  id=""
                  onClick={nextButton}
                  className="button-Style"
                />
              )}
            </div>
          </div>
        ) : (
          <div className="answer">
            {/* {ans[count-1] == data[count-1].ans?} */}
            <div className="question-Text">{data[count - 1].title}</div>
            <div className="answer-Checkbox">
              <input
                type="radio"
                value="a"
                name="ans"
                checked={ans[count - 1] == "a"}
              />
              <div className={textStyle}>a:{data[count - 1].a}</div>
            </div>
            <div className="answer-Checkbox">
              <input
                type="radio"
                value="b"
                name="ans"
                checked={ans[count - 1] == "b"}
              />
              <div className={textStyle}>b:{data[count - 1].b}</div>
            </div>
            <div className="answer-Checkbox">
              <input
                type="radio"
                value="c"
                name="ans"
                checked={ans[count - 1] == "c"}
              />
              <div className={textStyle}>c:{data[count - 1].c}</div>
            </div>
            <div className="answer-Checkbox">
              <input
                type="radio"
                value="d"
                name="ans"
                checked={ans[count - 1] == "d"}
              />
              <div className={textStyle}>d:{data[count - 1].d}</div>
            </div>
            <div className="button">
              {count == 1 ? (
                <></>
              ) : (
                <input
                  type="button"
                  value="上一題"
                  name=""
                  id=""
                  onClick={previousAns}
                  className="button-Style"
                />
              )}
              {count == 3 ? (
                <></>
              ) : (
                <input
                  type="button"
                  value="下一題"
                  name=""
                  id=""
                  onClick={nextAns}
                  className="button-Style"
                />
              )}
            </div>
            <div className="totalAns">
              <div>答對題數：{totalAns}</div>
              <div>總題數:3</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
