import { screen,render, fireEvent } from "@testing-library/react"
import Header from "../src/components/Header"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import { BrowserRouter } from "react-router-dom"


it("Should load the login button in the header",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore} >
        <Header />
        </Provider>
        </BrowserRouter>
    );

    const login = screen.getByRole("button",{name : "Login"});

    expect(login).toBeInTheDocument();

});

it("Should load the logout text when clicked on login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore} >
        <Header />
        </Provider>
        </BrowserRouter>
    )

    const login = screen.getByRole("button",{name : "Login"});

    fireEvent.click(login)

    const logout = screen.getByRole("button",{name: "Logout"});

    expect(logout).toBeInTheDocument();

});
