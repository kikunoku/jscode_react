import "./App.css";

function Forms() {
  return (
    <form>
      <div className="titleWrap">회원가입</div>
      <div className="inputBox">
        <div className="inputName">
          <label for="email">
            이메일<span className="required">*</span>
          </label>
        </div>
        <div className="inputField">
          <input
            className="input"
            type="email"
            id="email"
            placeholder="이메일을 입력하세요"
            required
          />
        </div>
      </div>

      <div className="inputBox">
        <div className="inputName">
          <label for="pwd">
            비밀번호<span className="required">*</span>
          </label>
        </div>
        <div className="inputField">
          <input
            className="input"
            type="password"
            id="pwd"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>
      </div>

      <div className="inputBox">
        <div className="inputName">
          <label for="pwdc">
            비밀번호 확인<span className="required">*</span>
          </label>
        </div>
        <div className="inputField">
          <input
            className="input"
            type="password"
            id="pwdc"
            placeholder="비밀번호를 다시 입력하세요"
            required
          />
        </div>
      </div>

      <div className="inputBox">
        <div className="inputName">
          <label for="name">
            이름<span className="required">*</span>
          </label>
        </div>
        <div className="inputField">
          <input
            className="input"
            type="text"
            id="name"
            placeholder="이름을 입력하세요"
            required
          />
        </div>
      </div>

      <div className="inputBox">
        <div className="inputName">
          <label for="age">나이</label>
        </div>
        <div className="inputField">
          <input
            className="input"
            type="number"
            id="age"
            placeholder="나이를 입력하세요"
          />
        </div>
      </div>

      <div className="inputBox">
        <button className="submit">가입하기</button>
      </div>
    </form>
  );
}

function App() {
  return (
    <div>
      <Forms></Forms>
    </div>
  );
}
export default App;
