import React, {useEffect, useState} from 'react'
import {useRouteMatch, Link} from 'react-router-dom'
import { FiChevronLeft} from 'react-icons/fi'
import api from '../../services/api'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {Title, Header, CountryInfo, History} from './styles'
import moment from 'moment'

interface CountryParams{
    country: string
}
interface Country{
    Country: string,
    Date: string,
    Confirmed: number,
    Deaths: number,
    Recovered: number,
    Active: number
}
const Country: React.FC = () =>{
    const [countries, setCountry] = useState<Country[] | null>(null)
    const { params} = useRouteMatch<CountryParams>();
    useEffect(() =>{
        async function loadData(): Promise<void>{
            const [countries] = await Promise.all([
                await api.get(`https://api.covid19api.com/live/country/${params.country}/status/confirmed`)
            ])
            setCountry(countries.data)
        }
        loadData()
    }, [params.country])
    let LastCoutries
    countries &&(
        LastCoutries = countries.pop()
    )
    return (
        <>
            <Header>
                <Title>Coronavírus (COVID-19)</Title>
                <Link to="/">
                    <FiChevronLeft size={16}/>Voltar
                </Link>
            </Header>
            {countries &&(
                <CountryInfo>
                    <header>
                        <div>
                            <strong>{LastCoutries.Country}</strong>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{LastCoutries.Confirmed.toLocaleString('pt-br')}</strong>
                            <span>Confirmados</span>
                        </li>
                        <li>
                            <strong>{LastCoutries.Active.toLocaleString('pt-br')}</strong>
                            <span>Casos Ativos</span>
                        </li>
                        <li>
                            <strong>{LastCoutries.Recovered.toLocaleString('pt-br')}</strong>
                            <span>Casos recuperados</span>
                        </li>
                        <li>
                            <strong>{LastCoutries.Deaths.toLocaleString('pt-br')}</strong>
                            <span>Mortes</span>
                        </li>
                    </ul>
                </CountryInfo>
            )}
            {countries &&(
            <History>
                {countries.map((countrymap)=>(
                    <a key={countrymap.Date} href={`https://en.wikipedia.org/wiki/COVID-19_pandemic_in_${LastCoutries.Country.replace(' ','_')}`}>
                        <h1>{moment(countrymap.Date).format("DD/MM/YYYY")}</h1>
                        <div>
                            <strong>Confirmados</strong>
                            <p>{countrymap.Confirmed}</p>
                        </div>
                        <div>
                            <strong>Casos Ativos</strong>
                            <p>{countrymap.Active}</p>
                        </div>
                        <div>
                            <strong>Casos recuperados</strong>
                            <p>{countrymap.Recovered}</p>
                        </div>
                        <div>
                            <strong>Mortes</strong>
                            <p>{countrymap.Deaths}</p>
                        </div>
                        <AiOutlinePlusCircle size={20} />
                    </a>
                ))}

            </History>
        )}
        </>
    )
}

export default Country;
