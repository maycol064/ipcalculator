import React, { useEffect, useState } from 'react';

const ListData = ({ ip }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1500);
    });
    

    return (
        <div className='container mt-5 text-center'>
            <h3>Cálculos de la IP</h3>
            {
                loading && <div className='mt-3'>Cargando...</div>
            }
        </div>
    );
}

export default ListData;
