import React from 'react';

function Dashboard() {
    const upcomingAppointments = [
        { date: '2024-11-01', time: '10:00', patient: 'João da Silva' },
        { date: '2024-11-01', time: '11:00', patient: 'Maria Oliveira' },
        { date: '2024-11-01', time: '14:00', patient: 'Carlos Santos' },
    ];

    return (
        <div>
            <h2>Painel do Profissional</h2>
            <h3>Próximas Consultas</h3>
            <ul>
                {upcomingAppointments.map((appointment, index) => (
                    <li key={index}>
                        {appointment.date} às {appointment.time} - Paciente: {appointment.patient}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;