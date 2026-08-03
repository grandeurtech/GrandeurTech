interface Props {
  open: boolean;
  email: string;
  password: string;
  setEmail: (v: string) => void;
  setPassword: (v: string) => void;
  onLogin: () => void;
  onClose: () => void;
}

const LoginModal = ({
  open,
  email,
  password,
  setEmail,
  setPassword,
  onLogin,
  onClose,
}: Props) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl p-8 w-[420px]">

        <h2 className="text-2xl font-bold">
          Admin Login
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="Email"
          className="w-full border rounded-xl h-14 px-4 mt-6"
        />

        <input
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          placeholder="Password"
          className="w-full border rounded-xl h-14 px-4 mt-4"
        />

        <div className="flex gap-3 mt-6">

          <button
            onClick={onLogin}
            className="flex-1 bg-primary text-white h-14 rounded-xl"
          >
            Login
          </button>

          <button
            onClick={onClose}
            className="flex-1 border rounded-xl h-14"
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
};

export default LoginModal;