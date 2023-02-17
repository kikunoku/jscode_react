import "./signUp.css";

export default SignUpPage;

const SignUpPage = () => {
  return (
    <form>
      <div className="titleWrap">회원가입</div>
      <Input
        title="이메일"
        type="email"
        id="email"
        placeholder="이메일을 입력하세요"
        required
      />
    </form>
  );
};
