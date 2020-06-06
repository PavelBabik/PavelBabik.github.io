import React from "react"
import LoginForm from "../LoginForm";
// import ReactDOM from "react-dom"
import { MemoryRouter } from "react-router-dom";
import { toHaveAttribute, toHaveTextContent } from "@testing-library/jest-dom/matchers"
// import { getQueriesForElement } from "@testing-library/dom"
import {render} from "@testing-library/react"

expect.extend({toHaveAttribute, toHaveTextContent})

test("LoginForm should render correct", () => {
  const { getByLabelText } = render(
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>
  );
  const emailEl = getByLabelText(/email/i)
  expect(emailEl).toHaveAttribute("type", "email");
})

test("First",() => {
    const { debug } = render(
        <MemoryRouter>
            <LoginForm />
        </MemoryRouter>
    );
    debug()
})

test("LoginForm should render correct", () => {
    const { container } = render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot()
  })








// function render(ui) {
//     const container = document.createElement("div");
//     ReactDOM.render(ui, container);
//     const queries = getQueriesForElement(container);
//     return { ...queries, container }
//   }


// test("LoginForm should render correct",()=>{
    //     const div = document.createElement("div");
    //     ReactDOM.render(
        //         <MemoryRouter>
        //             <LoginForm />    
        //         </MemoryRouter>, 
        //         div
        //     );
        
        //     // expect(div.querySelector("#email").type).toBe("email")
        
        //     // expect(div.querySelector("#email")).toHaveAttribute("type", "email");
        //     // expect(div.querySelector("label")).toHaveTextContent("Email");
        
        //     const {getByLabelText} = render(
            //         <MemoryRouter>
            //             <LoginForm />
            //         </MemoryRouter>
            //     );
            //     const { getByLabelText } = getQueriesForElement(div)
            
            //     const emailEl = queries.getByLabelText(/email/i);
            
            //     expect(emailEl).toHaveAttribute("type", "email");
            // })