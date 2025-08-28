import { BrowserRouter, Route, Routes } from "react-router-dom";
// ㄴ 클라이언트 사이드 라우터 지원
// ㄴ 프론트엔드에서 endpoint(url) 과 component 를 매핑
import Home from "./component/Home";
import Login from "./component/Login";
import BoardList from "./component/BoardList";
import MyPosts from "./component/MyPosts";
import Logout from "./component/Logout";
import Layout from "./component/Layout";
import ProtectedRoute from "./component/ProtectedRoute";
import PublicRoute from "./component/PublicRoute";

const App = () => {
  return (
    <BrowserRouter>
      <h1>....</h1>
      <Routes>
        {/* Layout 을 적용하기 위한 Route 둘을 감싸면, 자식 Route 가 렌더링 될때 Layout 이 같이 보입니다. */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* ProtectedRoute 컴포넌트를 이용하여 로그인이 필요한 자식 컴포넌트를 보호 */}
          <Route
            path="/boardlist"
            element={
              <ProtectedRoute>
                <BoardList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/myposts"
            element={
              <ProtectedRoute>
                <MyPosts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/logout"
            element={
              <ProtectedRoute>
                <Logout />
              </ProtectedRoute>
            }
          />
        </Route>
        {/* Layout 포함시키는 컴포넌트들 */}
        {/* Layout 포함 안시키는 컴포넌트 */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
