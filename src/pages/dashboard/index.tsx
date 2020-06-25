import React from 'react'
import {Title, Form, Countries} from './styles'

const Dashboard: React.FC = () =>{
    return(
        <>
            <Title>Coronavírus (COVID-19)</Title>
            <Form>
                <select>
                    <option>Selecione o País</option>
                </select>
                <button type="submit">Pesquisar</button>
            </Form>
            <Countries>
                <a href="teste">
                    <h1>Brasil</h1>
                    <div>
                        <div>
                            <strong>Confirmados</strong>
                            <p>3,000,000</p>
                        </div>
                        <div>
                            <strong>Casos recuperados</strong>
                            <p>3,000,000</p>
                        </div>
                        <div>
                            <strong>Mortes</strong>
                            <p>3,000,000</p>
                        </div>
                    </div>
                </a>
            </Countries>
        </>
    )
}

export default Dashboard;
