import { shallow } from 'enzyme';
import InputTextAreaFeild from '../FormComponents/InputTextAreaFeild'

describe('input text Area feild component', ()=> {
    const changeHandlerSpy = jest.fn();
    const wrapper = shallow(<InputTextAreaFeild changeHandler={changeHandlerSpy}/>)
    const InputTextArea =  wrapper.find(`[data-test='input-text-area-feild']`)
    it('should render correctly', ()=> {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).not.toBeNull()
    })
    it('should have one input text area',()=> {
        expect(InputTextArea).not.toBeNull()
    }) 
    it('change handler', ()=> {
        InputTextArea.simulate('change', {target: {value: 'ho.no.1-2-3'}})
        expect(changeHandlerSpy).toHaveBeenCalled()
    })
    it('blur handler ', ()=> {
        InputTextArea.simulate('blur', {target: {value: ''}})
        
    })
})