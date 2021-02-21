import { shallow } from 'enzyme';
import AlertError from '../FormComponents/AlertError'

describe('AlertError component', ()=> {
    it('should render correctly', ()=> {
        const wrapper = shallow(<AlertError />)
        expect(wrapper).toMatchSnapshot();
    })
})