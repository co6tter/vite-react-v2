import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    // 初期状態をURLから決定
    const path = window.location.pathname;
    return path === "/top" ? "top" : "login";
  });

  const handleLogin = (email: string, password: string) => {
    // 簡単なログイン検証（実際のアプリでは適切な認証を実装）
    if (email && password) {
      setIsLoggedIn(true);
      setCurrentPage("top");
      // URLを更新
      window.history.pushState(null, "", "/top");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage("login");
    // URLを更新
    window.history.pushState(null, "", "/");
  };

  // ブラウザの戻る/進むボタンに対応
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/top") {
        setCurrentPage("top");
        setIsLoggedIn(true);
      } else {
        setCurrentPage("login");
        setIsLoggedIn(false);
      }
    };

    window.addEventListener("popstate", handlePopState);

    // 初期URL設定 - ページロード時の処理
    const initialPath = window.location.pathname;
    if (initialPath === "/top") {
      setCurrentPage("top");
      setIsLoggedIn(true);
    } else {
      setCurrentPage("login");
      setIsLoggedIn(false);
      // ログインページの場合はURLを正しく設定
      if (initialPath !== "/") {
        window.history.replaceState(null, "", "/");
      }
    }

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  if (currentPage === "login" || !isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return <TopPage onLogout={handleLogout} />;
}

function LoginPage({
  onLogin,
}: {
  onLogin: (email: string, password: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">LOGIN</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-xl font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

function TopPage({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">My Page</h1>
          <button
            onClick={onLogout}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🎉 Welcome!</h2>
          <p className="text-gray-600 text-lg">
            おめでとうございます！正常にログインできました。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Dashboard
            </h3>
            <p className="text-gray-600">最新の統計情報を確認できます</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">👤</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Profile
            </h3>
            <p className="text-gray-600">アカウント情報を管理できます</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Settings
            </h3>
            <p className="text-gray-600">
              アプリケーションの設定を変更できます
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
