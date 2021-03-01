import { shallow } from 'enzyme';
import InputTextAreaField from '../FormComponents/InputTextAreaField'

describe('input text Area field component', ()=> {
    const changeHandlerSpy = jest.fn();
    const wrapper = shallow(<InputTextAreaField changeHandler={changeHandlerSpy}/>)
    const InputTextArea =  wrapper.find(`[data-test='input-text-area-field']`)
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
})