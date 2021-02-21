import { shallow } from 'enzyme';
import InputTextFeild from '../FormComponents/InputTextFeild'

describe('input text feild component', ()=> {
    const changeHandlerSpy = jest.fn();
    const wrapper = shallow(<InputTextFeild changeHandler={changeHandlerSpy}/>)
    const InputText =  wrapper.find(`[data-test='input-text-feild']`)
    
    it('should render correctly', ()=> {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).not.toBeNull()
    })
    it('should be one element', ()=> {
        expect(InputText).not.toBeNull()
    })
    it('change handler', ()=> {
        InputText.simulate('change', {target: {value: 'ho.no.1-2-3'}});
        expect(changeHandlerSpy).not.toHaveBeenCalled()
    })
    it('blur handler', ()=> {
        InputText.simulate('blur', {target: {value: ''}})
        expect(changeHandlerSpy).toHaveBeenCalled()
    })
})