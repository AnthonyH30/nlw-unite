
import NlwUniteIcon from '../Assets/nlw-unite-icon.svg';
import { NavLink } from './navLink';

export function Header(){
    return(
        <div className='flex items-center gap-5 py-2'>
            <img src={NlwUniteIcon} alt="icone nlw unite" />
            <nav className='flex items-center gap-5'>
                <NavLink className='text-zinc-300' href='/eventos'>Eventos</NavLink>
                <NavLink href='/participantes'>Participantes</NavLink>
            </nav>
        </div>
    )
}