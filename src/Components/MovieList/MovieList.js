// js file for list of movies
import React, { useState } from 'react'
import { Container, Column, Column2, Form, SearchBar, StyledButton } from './style'
import './fonts.css'
// banner
import Banner from 'react-js-banner';



// stores nominated movies
const nominations = [
    {
        title: 'Example Movie',
        release: '2021'
    }
]

// stores search results
const movieDisplay = [


]



const MovieList = () => {



    const [movie, setMovie] = useState(movieDisplay)

    const [disabledButtons, setDisabledButtons] = useState([])


    // form stores the user's nominations
    const [form, setForm] = useState(nominations)

    // add a nomination
    const handleAdd = (movieItem) => {

        const newForm = form.concat(movieItem);

        // remember which button to disable
        const disableCurrent = disabledButtons.concat(movieItem.title)

        // update states
        setForm(newForm);
        setDisabledButtons(disableCurrent)
    }


    const handleRemove = (movieItem) => {
        // remove the item
        const newForm = form.filter((d) => d.title !== movieItem.title)
        const disableCurrent = disabledButtons.filter((d) => d !== movieItem.title)

        // update states
        setForm(newForm)
        setDisabledButtons(disableCurrent)
    }

    // renders nominations list
    const FormPanel = ({ form }) => (
        <div style={{ textAlign: "left" }}>
            {form.map((d) => <li key={d.title} style={{ marginBottom: 10, fontSize: 18 }}>{d.title} ({d.release})

                <StyledButton type="button" onClick={() => handleRemove(d)}>
                    REMOVE
              </StyledButton></li>)}


        </div>
    )

    // renders search results list
    const SearchPanel = ({ movie }) => (
        <div>

            <SearchBar type="text" className="input" placeholder="Search..." onChange={handleSearchChange} />
            <br></br>
            <Form>
                {movie.map((d) => <ul key={d.title} style={{ marginBottom: 10, fontSize: 9 }}>{d.title} ({d.release})
                    <br></br>
                    <StyledButton type="button" disabled={disabledButtons.includes(d.title)} onClick={() => handleAdd(d)}>
                        NOMINATE
                    </StyledButton>

                </ul>)}
            </Form>
        </div>
    )

    // adds functionality to search
    const handleSearchChange = (e) => {


        const url = `https://www.omdbapi.com/?s='${e.target.value}'&apikey=77da4a76`
        // console.log(url)
        const fetchData = async () => {
            // fetch information from API
            const res = await fetch(url);

            const json = await res.json();
            if (json.Response === "True") {
                const data = json.Search
                let newStorage = []

                for (var i in data) {
                    const newObj = {
                        title: data[i]["Title"],
                        release: data[i]["Year"]
                    }

                    newStorage = newStorage.concat(newObj)

                }
                // update movie state
                setMovie(newStorage)
            }
        }
        fetchData()

    }


    return (
        <Container>
            <Column>

                <h1>Search movies here: </h1>

                <SearchPanel movie={movie} />


            </Column>
            <Column2>
                <Banner css={{
                    backgroundColor: "#e6ecf5",
                    fontSize: 15,
                    color: "#2b3f5c",
                    borderRadius: "2vw"
                }}
                    title="Congrats! You have reached 5 nominations!"
                    showBanner={(form.length >= 5)}
                />
                <h1> The Shoppies Nominations </h1>
                <FormPanel form={form}></FormPanel>

            </Column2>
        </Container>


    )
}





export default MovieList
