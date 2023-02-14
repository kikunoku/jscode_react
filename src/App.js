import "./App.css";

function Forms() {
  return (
    <form>
      <div class="titleWrap">회원가입</div>
      <div class="inputBox">
        <div class="inputName">
          <label for="email">
            이메일<span class="required">*</span>
          </label>
        </div>
        <div class="inputField">
          <input
            class="input"
            type="email"
            id="email"
            placeholder="이메일을 입력하세요"
            required
          />
        </div>
      </div>

      <div class="inputBox">
        <div class="inputName">
          <label for="pwd">
            비밀번호<span class="required">*</span>
          </label>
        </div>
        <div class="inputField">
          <input
            class="input"
            type="password"
            id="pwd"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>
      </div>

      <div class="inputBox">
        <div class="inputName">
          <label for="pwdc">
            비밀번호 확인<span class="required">*</span>
          </label>
        </div>
        <div class="inputField">
          <input
            class="input"
            type="password"
            id="pwdc"
            placeholder="비밀번호를 다시 입력하세요"
            required
          />
        </div>
      </div>

      <div class="inputBox">
        <div class="inputName">
          <label for="name">
            이름<span class="required">*</span>
          </label>
        </div>
        <div class="inputField">
          <input
            class="input"
            type="text"
            id="name"
            placeholder="이름을 입력하세요"
            required
          />
        </div>
      </div>

      <div class="inputBox">
        <div class="inputName">
          <label for="age">나이</label>
        </div>
        <div class="inputField">
          <input
            class="input"
            type="number"
            id="age"
            placeholder="나이를 입력하세요"
          />
        </div>
      </div>

      <div class="inputBox">
        <button class="submit">가입하기</button>
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
