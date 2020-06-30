import React, { FormEvent} from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import api from '../../services/api'
import {Title, Form, Countries} from './styles'
import Select from 'react-select';
import {Link} from 'react-router-dom'

const customStyles ={
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px solid #f5f5f5',
        color: state.isSelected ? 'black' : '#3A3A3A',
        padding: 20,
      }),
      control: (base, state) => ({
        ...base,
        border: '0 !important',
        // This line disable the blue border
        boxShadow: '0 !important',
        '&:hover': {
            border: '0 !important'
         },
        width: 560,
        padding: 17,
        borderRadius: "5px 0 0 5px"
      }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
      }
}
class Dashboard extends React.Component {
    state = {
      selectedOption: null,
      countries: [],
      allCountries: [],
      lengCountries: null
    };
    handleChange = selectedOption =>{
      this.setState(
        { selectedOption: selectedOption })
    };
    async handleAddCountry(e: FormEvent<HTMLFormElement>): Promise<void>{
        e.preventDefault();
        if(this.state.selectedOption !== undefined){
            const response = await api.get(`live/country/${this.state.selectedOption.value}/status/confirmed`)
            this.setState({
                countries: [response.data.pop()],
                lengCountries: Array.isArray(response.data) ? (response.data).length : 0
            })
        }
    }
    async listAllCountries(): Promise<void>{
        const response = await api.get(`countries`)
        let listCountries = []
        response.data.map((country) =>{
            return listCountries.push({value: country.Slug, label: country.Country})
        })
        this.setState({
            allCountries: listCountries
        })
    }
    componentDidMount(){
        this.listAllCountries()
    }
    render() {
    const { selectedOption, countries, lengCountries} = this.state;
        let select
        if(lengCountries === null){
            select = <Countries></Countries>
        }
        else if(lengCountries > 0){
            select =
                <><Countries>
                    {countries.map((country) =>(
                        <Link key={country.Active} to={`/country/${selectedOption.value}`}>
                            <h1>{country.Country}</h1>
                            <AiOutlinePlusCircle size={20} />
                            <div>
                                <div>
                                    <strong>Confirmados</strong>
                                    <p>{country.Confirmed.toLocaleString('pt-br')}</p>
                                </div>
                                <div>
                                    <strong>Casos Ativos</strong>
                                    <p>{country.Active.toLocaleString('pt-br')}</p>
                                </div>
                                <div>
                                    <strong>Casos recuperados</strong>
                                    <p>{country.Recovered.toLocaleString('pt-br')}</p>
                                </div>
                                <div>
                                    <strong>Mortes</strong>
                                    <p>{country.Deaths.toLocaleString('pt-br')}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Countries>
            </>
        }
        else{
            select = <Countries>Não há dados!</Countries>
        }
    return (
        <>
            <Title onLoad={() => this.listAllCountries()}>Coronavírus (COVID-19)</Title>

            <Form onSubmit={(e) => this.handleAddCountry (e)}>

                <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={this.state.allCountries}
                styles={customStyles}
                placeholder="Selecione o País"
                />
                <button type="submit">Pesquisar</button>

            </Form>
            {select}
        </>
      )
    }
}

export default Dashboard;
