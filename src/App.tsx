import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Form from "./pages/Form";
import NotFound from "./pages/NotFound";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path={`*`} element={<NotFound />} />
        {/* 各画面 */}
        {Object.values(routeDefinition).map((def, i) => {
          return <Route path={def.path} element={def.element} key={i} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

/**
 * ルーターの定義
 * @todo:step、title、コンポート名は暫定
 */
export const routeDefinition = {
  SelectPayMethod: {
    path: "toriaezu",
    element: <Posts />,
    step: 1,
    title: "とりあえずページ",
  },
  tryReactFormCol: {
    path: "from",
    element: <Form />,
    step: 1,
    title: "フォームページ",
  },
};
