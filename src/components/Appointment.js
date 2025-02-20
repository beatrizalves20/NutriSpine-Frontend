import React, { useState } from 'react';


function Appointment() {
    const [appointmentData, setAppointmentData] = useState({
        date: '',
        time: '',
        profissional: '',
    });

    const handleChange = (e) => {
        setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para agendar consulta
        console.log("Agendamento:", appointmentData);
    };

    return (
        <div>
            <h2>Agendar Consulta</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="data">Data:</label>
                <input type="date" name="date" onChange={handleChange} required />

                <label htmlFor="horario">Horário:</label>
                <input type="time" name="time" onChange={handleChange} required />

                <label htmlFor="professional">Profissional:</label>
                <input type="profissional" name="profissional" onChange={handleChange} required />

                <button type="submit" className="btn-schedule">Agendar Consulta</button>
            </form>
        </div>
    );
}

export default Appointment;