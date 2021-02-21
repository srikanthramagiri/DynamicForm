import { shallow } from 'enzyme';
import Label from '../FormComponents/Label'

describe('Label component', ()=> {
    it('should render correctly', ()=> {
        const wrapper = shallow(<Label />)
        expect(wrapper).toMatchSnapshot();
    })
})