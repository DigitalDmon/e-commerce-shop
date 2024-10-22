'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userAuthenticated = await authenticateUser(email, password);

        if (userAuthenticated) {
            // Si la autenticación es exitosa, redirige al usuario
            router.push('/'); // Redirigir a la página de inicio
        } else {
            alert('Credenciales incorrectas. Inténtalo de nuevo.'); // Mensaje de error
        }
    };

    // Simulación de autenticación (puedes reemplazarla con tu lógica real)
    const authenticateUser = async (email: string, password: string): Promise<boolean> => {
        // Simulación: si el email y la contraseña coinciden, el inicio de sesión es exitoso
        if (email === 'usuario@ejemplo.com' && password === 'c123') {
            return true; // Autenticación exitosa
        }
        return false; // Autenticación fallida
    };

    return (
        <div className="font-[sans-serif]">
            <div className="min-h-screen flex flex-col items-center justify-center bg-[url('https://static.tvn-2.com/clip/cd0114d9-83c1-4554-987e-5e5010f25929_16-9-aspect-ratio_1600w_0.webp')] bg-cover bg-center">
                <div className="bg-white grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg">
                    <div className="md:max-w-md w-full px-4 py-4">
                        <form onSubmit={handleLogin}>
                            <div className="mb-12">
                                <h3 className="text-gray-800 text-3xl font-extrabold">Inicie Sesión</h3>
                            </div>

                            <div>
                                <label className="text-gray-800 text-xs block mb-2">Correo Electrónico</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                        placeholder="Introduce tu correo electrónico"
                                    />
                                </div>
                            </div>

                            <div className="mt-8">
                                <label className="text-gray-800 text-xs block mb-2">Contraseña</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="password"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                        placeholder="Introduce tu contraseña"
                                    />
                                </div>
                            </div>

                            <div className="mt-12">
                                <button
                                    type="submit"
                                    className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                                >
                                    Iniciar Sesión
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="md:h-full bg-white rounded-xl lg:p-12 p-8">
                        <Image
                            src="https://unicaroverse.com/wp-content/uploads/2024/08/Mockup_panamapamiverde-e1722888955722-600x600.png"
                            width={500}
                            height={480}
                            alt="login-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
