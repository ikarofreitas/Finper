import { useState, useEffect, Fragment } from "react";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


export default function LoginPage(){
      
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onChangeHandle = (event) => {
        const {name,value} = event.target;
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'password') {
            setPassword(value);
        }

    }
    const onSubmitHandle = (event) =>  {
        event.preventDefault();
        if (!email || !password) {
            setError('preencha os campos');
        } else {
            console.log ('data sent ', {email, password});
            setError('');
            setEmail('');
            setPassword('');
            navigate('/dashboard');
        }
    }
    return(
        <>
        <div className="bg-green-200 p-5">
            <div className=" max-w-md bg-gray-100 p-10 mx-auto rounded-xl"
            >
                <section className="flex justify-center">
                    <h1 className="text-[2rem] font-bold text-[#113322]"
                    >Finanças</h1>
                </section>
                <form
                    onSubmit={onSubmitHandle}
                    className="max-w-sm mx-auto mb-5 mt-10 p-10 bg-white flex flex-col gap-3 rounded-xl">
                    <h1
                    className="text-center font-bold text-xl" 
                    >Login</h1>
                    <h5 className="text-center"
                    >Acesse sua conta</h5>
                    <input type="text"
                        name="email"
                        value={email}
                        placeholder="Endereço de email"
                        onChange={onChangeHandle}
                        className="border-1 border-gray-200 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 "
                    />

                    <input type="password"
                        name="password"
                        value={password}
                        placeholder="Senha"
                        onChange={onChangeHandle} 
                        className="border-1 border-gray-200 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 "
                    />

                    <button 
                        className="bg-green-700 hover:bg-green-800 transition-colors rounded-sm px-5 py-2 text-white text-center cursor-pointer"
                        type="submit"
                        >Entrar
                    </button>

                    <p className="text-center text-sm"
                >   Não tem uma conta?</p>
                    <button 
                        type="button"
                        className="font-bold text-green-700 cursor-pointer hover:text-green-800"
                        onClick={() => navigate('/register')}
                        >Cadastrar-se
                    </button>
                    {error && <p className="text-center text-red-600">Preencha todos os campos antes de continuar!</p>}
        
                </form>    
            </div>
        </div>
        </>
    )
}