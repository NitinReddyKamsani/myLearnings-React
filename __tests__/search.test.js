const { render, screen, fireEvent } = require("@testing-library/react")
import Body from "../src/components/Body"
import MockResList from "../Mock/MockResList.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MockResList)
        }
    })
})

it("should render the body component with search",async ()=>{
    await act(async()=>
        render(
            <BrowserRouter>
            <Body />
            </BrowserRouter>
        )

    )

    const searchBtn = screen.getByRole("button", {name : "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target : {value : "pizza"} });

    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(3);
})

it("should render the Top rated restaurants",async ()=>{
    await act(async()=>
        render(
            <BrowserRouter>
            <Body />
            </BrowserRouter>
        )

    )

   const Initalres = screen.getAllByTestId("resCard");

   const Filter = screen.getByRole("button" , {name : "Filter Top Restaurants"});

   fireEvent.click(Filter);

   const filtered = screen.getAllByTestId("resCard");

   expect(filtered.length).toBe(11);
})