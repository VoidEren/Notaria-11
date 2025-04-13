// resources/js/Pages/Bienvenida.jsx

import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Bienvenida({ auth }) {
    const role = auth.user.role?.name;

    const renderMensajeBienvenida = () => {
        switch (role) {
            case 'admin':
                return <p className="text-lg text-gray-700">Bienvenido/a, administrador. Aquí puedes gestionar todo el sistema de la notaría.</p>;
            case 'cliente':
                return <p className="text-lg text-gray-700">Hola cliente, consulta tus documentos y realiza tus trámites fácilmente.</p>;
            case 'empleado':
                return <p className="text-lg text-gray-700">Bienvenido/a, empleado. Gestiona y verifica los trámites en curso.</p>;
            case 'invitado':
                return <p className="text-lg text-gray-700">Bienvenido/a, invitado. Explora nuestros servicios disponibles.</p>;
            default:
                return <p className="text-lg text-gray-700">Bienvenido/a al sistema de la notaría.</p>;
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Bienvenida" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <h1 className="text-2xl font-bold mb-4 text-gray-800">Sistema de la Notaría</h1>
                        {renderMensajeBienvenida()}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
