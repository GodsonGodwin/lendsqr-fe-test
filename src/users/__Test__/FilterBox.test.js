import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import FilterBox from 'users/FilterBox'

import { render, screen, fireEvent, act } from "@testing-library/react";


describe("FilterBox component", () => {
  const mockChangeValue = jest.fn();
  const filterValue = {
    organization: '',
      userName: '',
      email: '',
      createdAt: '',
      status: '',
  };

  it("shows all required input fields with empty values", () => {
    const { getByTestId } = render(
      <FilterBox
        searchValue={filterValue}
        handleChangeValue={mockChangeValue}
      />
    );

    expect(getByTestId("filter-input-organization").value).toBe("");
    expect(getByTestId("filter-input-userName").value).toBe("");
    expect(getByTestId("filter-input-email").value).toBe("");
    expect(getByTestId("filter-input-createdAt").value).toBe("");
    expect(getByTestId("filter-input-status").value).toBe("");

  });

  it("triggers event handler on input change", () => {
    const changedSearchValue = { ...filterValue, userName: "Wilburn.Rice" };
    const { getByTestId, rerender } = render(
      <FilterBox
        searchValue={filterValue}
        data={["Organization 1"]}
        handleChangeValue={mockChangeValue}
      />
    );

    act(() => {
      fireEvent.change(getByTestId("filter-input-userName"), {
        target: { value: "Wilburn.Rice" },
      });
    });

    rerender(
      <FilterBox
        searchValue={changedSearchValue}
        data={["Organization 1"]}
        handleChangeValue={mockChangeValue}
      />
    );

    expect(getByTestId("filter-input-name").value).toBe("Wilburn.Rice");
    // expect(mockChangeValue).toBeCalledTimes(1);
  });
})



// const state = {
//   organization: 'labore-dolor-et',
//   userName: 'Wilburn.Rice',
//   email: 'Maverick.Hyatt83@gmail.com',
//   createdAt: 'Dec 27, 2072 04:44 AM',
//   status: 'active',
// }

// describe('FilterBox component', () => {
//   it('Should capture select input for organization correctly onChange', () => {
//     const component = mount(<Form />)
//     const input = component.find('select')
//     const option = component.find('option')
//     option.instance().selected = true
//     input.simulate('change')
//   })

//   it('Should capture userName correctly onChange', () => {
//     const component = mount(<Form />)
//     const input = component.find('input')
//     input.instance().value = 'Jaycee15'
//     input.simulate('change')
//     expect(component.state().userName).toEqual('Jaycee15')
//   })

//   it('Should capture email correctly onChange', () => {
//     const component = mount(<Form />)
//     const input = component.find('input')
//     input.instance().value = 'Maverick.Hyatt83@gmail.com'
//     input.simulate('change')
//     expect(component.find('input').email).toEqual('Maverick.Hyatt83@gmail.com')
//   })

//   it('Should capture date correctly onChange', () => {
//     const component = mount(<Form />)
//     const input = component.find('input')
//     input.instance().value = 'Dec 27, 2072 04:44 AM'
//     input.simulate('change')
//     expect(component.state().createdAt).toEqual('Dec 27, 2072 04:44 AM')
//   })

//   it('Should capture status input for status correctly onChange', () => {
//     const component = mount(<Form />)
//     const input = component.find('select')
//     const option = component.find('option')
//     option.instance().selected = true
//     input.simulate('change')
//   })

// //   it('Should filter the table when submit button is clicked', () => {
// //       const component = mount(<Form />)
// //       const buttton = component.find('buttton')
// //       button.simulate('click')
// //     })
// })
