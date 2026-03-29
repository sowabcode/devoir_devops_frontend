import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1 className="text-5xl">Bienvenue à la bibliothèque de DIT</h1>
      <p className="text-slate-400">
        Pour tous découvrire cliquer sur le bouton ci-dessous
      </p>

      <button
        onClick={() => navigate("/livres")}
        className="px-10 py-3 rounded-full bg-[#014455] hover:bg-[#235766] text-white cursor-pointer"
      >
        Accéder à la bibliothèque
      </button>
    </div>
  );
};

export default Login;
