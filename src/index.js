import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import SimpleHabit from "./components/simpleHabit";

ReactDOM.render(
  <React.StrictMode>
    <SimpleHabit />
  </React.StrictMode>,
  /*
    React.StrictMode 란?
    자바스크립트의 use strict와 동일한 개념으로 코딩이 잘못된 부분이 있으면 에러 메시지를 출력해주는 역할을 한다.
    생략해도 무방하지만 개발단계에서는 꼭 사용하는 것이 좋으며 어차피 해당 부분을 생략하지 않고 배포를 하여도
    배포된 상태에서는 StrictMode가 활성화되지 않아서 사용자가 콘솔에서 에러 메세지를 확인할 수 없다.
  */
  document.getElementById("root")
);
