import {shallow} from 'enzyme'
import SelectFeild from '../FormComponents/SelectFeild'

describe('select feild component', ()=> {
    const optionsValues=  ["India", "srilanka", "Algeria", "Andorra"]
    const changeHandlerSpy = jest.fn();
    const wrapper = shallow(<SelectFeild values={optionsValues} changeHandler={changeHandlerSpy}/>)
    const Select =  wrapper.find(`[data-test='select-feild']`)
    it('should render correctly', ()=> {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).not.toBeNull()
    })
    it('should have one input text area',()=> {
        expect(Select).not.toBeNull()
    }) 
    it('change handler', ()=> {
        Select.simulate('change', {target: {value: 'india'}})
        expect(changeHandlerSpy).toHaveBeenCalled()
    })
    it('change handler when emty value', ()=> {
        Select.simulate('change', {target: {value: ''}})
        expect(changeHandlerSpy).toHaveBeenCalled()
    })
})