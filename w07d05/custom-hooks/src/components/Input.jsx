import useInput from '../hooks/useInput';

const Input = () => {
  const usernameInput = useInput('');
  const passwordInput = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`logged in with ${usernameInput.value} and ${passwordInput.value}`);
  };

  return (
    <div>
      <h2>Input Component</h2>

      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input 
          // value={usernameInput.value}
          // onChange={usernameInput.onChange}

          { ...usernameInput }
        />
        <br/>
        <label>Password:</label>
        <input 
          // value={passwordInput.value}
          // onChange={passwordInput.onChange}
          type="password"
          { ...passwordInput }
        />
        <br/>
        <button type="submit">Login!</button>
      </form>
    </div>
  );
};

export default Input;
