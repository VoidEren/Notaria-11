import { useForm } from '@inertiajs/react';
import React from 'react';
import { Head } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';

export default function CrearRol({ users }) {
    return (
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            >
                <Head title="Dashboard" />
    
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">You're logged in!</div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        );
        
    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: '',
        name: ','
    });

    const hadleSubmit = (e) => {
        e.preventDefault();
        post('/roles', {
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Crear nuevo rol</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="user_id">Usuario</label>
                    <select id="user_id" value={data.user_id} onChange={(e) => setData('user_id', e.target.value)}>
                        <option value="">Seleccione un usuario</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))}
                    </select>
                    {errors.user_id && <div>{errors.user_id}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="name">Nombre del rol</label>
                    <input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                    {errors.name && <div>{errors.name}</div>}
                </div>

                <button type="submit" disabled={processing}>Crear Rol</button>
            </form>
        </div>
    );
}