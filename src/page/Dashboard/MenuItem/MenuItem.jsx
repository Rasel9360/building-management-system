import { NavLink } from 'react-router-dom'

const MenuItem = ({ label, address, icon: Icon }) => {
    return (
        <NavLink
            to={address}
            end
            className={({ isActive }) =>
                `flex items-center py-2 my-1  pl-5  transition-colors duration-300 transform  font-jura font-bold text-lg ${isActive ? 'bg-orange-600' : ''
                }`
            }
        >
            <Icon className='w-5 h-5' />

            <span className='mx-4 font-medium'>{label}</span>
        </NavLink>
    )
}


export default MenuItem