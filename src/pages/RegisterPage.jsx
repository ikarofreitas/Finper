import { useState, useEffect, Fragment } from "react";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


export default function RegisterPage(){
      
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    console.log('RegisterPage carregada, navigate function:', navigate);

    const onChangeHandle = (event) => {
        const {name,value} = event.target;
        if (name === 'fullname') {
            setFullname(value);
        }
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'password') {
            setPassword(value);
        }

    }
    const onSubmitHandle = async (event) =>  {
        event.preventDefault();
        console.log('Formulário submetido!');
        console.log('Valores:', { fullname, email, password });
        
        if (!fullname || !email || !password) {
            setError('preencha os campos');
            console.log('Erro: campos vazios');
            return;
        } 

        try {
      setError('');

      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullname, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao registrar');
      }
      alert('conta criada com sucesso!');
      navigate('/login');

    } catch (err) {
      setError(err.message || 'Erro interno');
    }
  };
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
                    >Cadastro</h1>
                    <h5 className="text-center"
                    >Crie sua conta</h5>
                    <input 
                        type="text" 
                        name="fullname"
                        value={fullname}
                        placeholder="Nome completo"
                        onChange={onChangeHandle}
                        className="border-1 border-gray-200 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 "
                    />

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
                        >Cadastrar-se
                        </button>

                    <p className="text-center text-sm cursor-default"
                    >Já tem uma conta?</p>
                    <button 
                        type="button"
                        className="font-bold text-green-700 cursor-pointer hover:text-green-800"
                        onClick={() => navigate('/login')}
                        >   Faça login
                    </button>
                    {error && <p className="text-center text-red-600">{error}</p>}
        
                </form>    
            </div>
        </div>
        </>
    )
}