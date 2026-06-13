import { useState, useEffect } from "react";
import { useAuth } from "../store/authProvider";

const LoginForm = () => {
    const [loading, setLoading] = useState(false);

    const { setError } = useAuth();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const error = params.get("error");

        if (error) {
            setError(error);
        }
    }, [setError]);

    const handleDiscordLogin = () => {
        setLoading(true);
        window.location.href = `${window.location.origin}/auth/discord`;
    };

    const handleGithubLogin = () => {
        setLoading(true);
        window.location.href = `${window.location.origin}/auth/github`;
    };

    return (
        <div className="w-full max-w-md mx-auto my-8 p-6 bg-slate-900 border-2 border-yellow-700 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">
                Acesso ao Grimório Arcano
            </h2>

            <p className="text-gray-400 mb-6">
                Autenticação segura via OAuth2. Seus dados jamais serão
                compartilhados com terceiros sem sua permissão expressa.
            </p>

            {loading && (
                <div className="text-yellow-400 mb-4">
                    Redirecionando para autenticação...
                </div>
            )}

            <button
                onClick={handleDiscordLogin}
                disabled={loading}
                className="w-full py-3 px-4 rounded bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold transition"
            >
                Entrar com Discord
            </button>

            <p className="text-center text-gray-400 mt-4 mb-2">
                Ou use GitHub
            </p>

            <button
                onClick={handleGithubLogin}
                disabled={loading}
                className="w-full py-3 px-4 rounded bg-gray-800 hover:bg-gray-700 text-white font-semibold transition"
            >
                Entrar com GitHub
            </button>
        </div>
    );
};

export default LoginForm;