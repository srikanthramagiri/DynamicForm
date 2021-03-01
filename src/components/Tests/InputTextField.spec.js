import { shallow } from 'enzyme';
import InputTextField from '../FormComponents/InputTextField'

describe('input text field component', ()=> {
    const changeHandlerSpy = jest.fn();
    const wrapper = shallow(<InputTextField changeHandler={changeHandlerSpy}/>)
    const InputText =  wrapper.find(`[data-test='input-text-field']`)
    
    it('should render correctly', ()=> {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).not.toBeNull()
    })
    it('should be one element', ()=> {
        expect(InputText).not.toBeNull()
    })
    it('change handler', ()=> {
        InputText.simulate('change', {target: {value: ''}});
        const alertItem = wrapper.find('.alert-danger')
        expect(alertItem).not.toBeNull()
    })
    it('blur handler', ()=> {
        InputText.simulate('blur', {target: {value: ''}})
        expect(changeHandlerSpy).toHaveBeenCalled()
        const alertItem = wrapper.find('.alert-danger')
        expect(alertItem).not.toBeNull()
       
    })
   
})