import { useState } from 'react';
import './App.css';
import regexip from './helpers/regexip';
import ListData from './components/ListData';

const App = () => {
    const [ip, setIp] = useState('');
    const [showCalculations, setShowCalculations] = useState(false);

    const onChangeIP = (e) => setIp(e.target.value);
    const onCalculateIp = () => {
        const validateip = regexip(ip);
        if(validateip) {
            setShowCalculations(true);
        } else {
            alert('IP no válida');
        }
    };

    return (
        <div className='App'>
            <h2 className='text-center'>Calculadora subneteo IP</h2>
            <div className='container mb-3 mt-3'>
                <label htmlFor='input-subnet' className='form-label fs-4'>Ingresa dirección IP</label>
                <input
                    type='text'
                    id='input-subnet'
                    className='form-control'
                    placeholder='192.168.13.45 - 192.168.13.45/23'
                    onChange={onChangeIP}
                />
            </div>
            <div className='d-grid gap-2 col-6 mx-auto'>
                <button 
                    className='btn btn-outline-light' 
                    type='button' 
                    onClick={onCalculateIp}
                >
                    Calcular
                </button>
            </div>
            {
                showCalculations && <ListData ip={ip} />
            }
        </div>
    )
}

export default App;
